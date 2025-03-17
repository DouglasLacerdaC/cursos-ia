/* eslint-disable prettier/prettier */

import { Router } from 'express';

import { Validate } from '../../../shared/middlewares/validate';
import { ReviewsController } from './controller';
import { ReviewsValidation } from './validation';

export const ReviewsRoute = Router();

ReviewsRoute.get('/resume/:id', ReviewsController.generateResume);
ReviewsRoute.get('/', ReviewsController.index);
ReviewsRoute.get(
  '/:id',
  Validate(ReviewsValidation.byId),
  ReviewsController.getByCourse,
);
ReviewsRoute.post(
  '/',
  Validate(ReviewsValidation.add),
  ReviewsController.create,
);
