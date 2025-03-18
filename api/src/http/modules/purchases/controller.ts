import { Response } from 'express';

// import { PurchaseRepository } from './repository';
// import fs from 'fs';
import { ApiError } from '../../../config/errors/api-error';
import { MapErrors } from '../../../config/errors/map-errors';
import {
  enrolledSuccessMailHTML,
  paymentSuccessMailHTML,
} from '../../../shared/libs/html-template';
import { Resend } from '../../../shared/services/resender';
import { stripe } from '../../../shared/services/stripe';
import { UserAuthRequest } from '../users/model';
import { UsersRepository } from '../users/repository';
import { PurchaseRequest } from './model';
import { PurchaseRepository } from './repository';

const index = MapErrors(async (_: PurchaseRequest, response: Response) => {
  /*
    #swagger.tags = ['Purchase']
    #swagger.summary = 'Lista de compras de pagamento'
  */
  const data = await PurchaseRepository.getAll();
  return response.json(data);
});

const webhook = MapErrors(
  async (request: PurchaseRequest, response: Response) => {
    /*
      #swagger.tags = ['Purchase']
      #swagger.summary = 'Webhook Stripe'
    */

    const sig = request.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

    try {
      const event = stripe.webhooks.constructEvent(
        request.body,
        sig,
        endpointSecret,
      );

      if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const userId = session?.metadata?.userId;

        const userData = await UsersRepository.getById(Number(userId));

        const { error: errorPaymentMail } = await Resend.emails.send({
          from: 'onboarding@resend.dev',
          to: userData.email,
          subject: 'Pagamento confirmado! ✨',
          html: paymentSuccessMailHTML(userData.name),
        });

        if (errorPaymentMail) console.error(errorPaymentMail);

        const coursesIds =
          session.metadata && JSON.parse(session.metadata.coursesIds);

        const enrolledSuccess = await PurchaseRepository.createAll(
          coursesIds,
          Number(userId),
        );

        const courses = await PurchaseRepository.getAllByIds(
          enrolledSuccess.map((course) => String(course.courseId)),
        );

        const { error: errorEnrolledMail } = await Resend.emails.send({
          from: 'onboarding@resend.dev',
          to: userData.email,
          subject: '🎉 Parabéns! Você foi matriculado!',
          html: enrolledSuccessMailHTML(userData.name, courses),
        });

        if (errorEnrolledMail) console.error(errorEnrolledMail);
      }

      response.json({ received: true });
    } catch (err) {
      response.status(400).send(`Webhook Error`);
    }
  },
);

const generatePaymentUrl = MapErrors(
  async (request: UserAuthRequest, response: Response) => {
    /*
      #swagger.tags = ['Purchase']
      #swagger.summary = 'Generate payment URL Stripe'
    */
    const { id } = request.user;

    const ids = request.query.courses;

    const data = await PurchaseRepository.getAllByIds(
      ids as unknown as string[],
    );

    if (data.length <= 0) throw new ApiError(404, 'Nenhum curso encontrado!');

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: data.map((item) => ({
          price_data: {
            currency: 'brl',
            product_data: { name: item.name },
            unit_amount: Math.round(Number(item.price) * 100), // Em centavos
          },
          quantity: 1,
        })),
        mode: 'payment',
        metadata: {
          userId: id,
          coursesIds: JSON.stringify(data.map((item) => item.id)),
        },
        success_url: 'http://localhost:3001/my-courses?payment=success',
        cancel_url: 'http://localhost:3001/my-courses?payment=cancel',
      });
      response.json({ url: session.url });
    } catch (error) {
      response.status(500).json({ error: error });
    }
  },
);

export const PurchaseController = { index, generatePaymentUrl, webhook };
