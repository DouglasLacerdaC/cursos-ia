import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../../../config';
import { MapErrors } from '../../../config/errors/map-errors';
import { googleService } from '../../../shared/services/google';
import { Prisma } from '../../../shared/services/prisma';
import { UserAuthRequest } from '../users/model';

const loginGoogle = MapErrors(async (request: Request, response: Response) => {
  /*
    #swagger.tags = ['Autenticação']
    #swagger.summary = 'Fazer login com o Google'
  */

  try {
    const access_token = request.body.access_token;

    const data = await googleService(access_token);

    let user = await Prisma.users.findUnique({ where: { email: data.email } });

    if (!user) {
      user = await Prisma.users.create({
        data: {
          name: data.name,
          email: data.email,
          avatar: data.picture,
        },
      });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: '7d',
    });

    response.json({ token });
  } catch (error) {
    response.status(500).json({ error: 'Falha ao autenticar com Google' });
  }
});

const me = MapErrors(async (request: UserAuthRequest, response: Response) => {
  /*
    #swagger.tags = ['Usuários']
    #swagger.summary = 'Obter usuário autenticado'

    #swagger.security = [{"apiKeyAuth": []}]
  */

  const user = request.user;

  return response.json(user);
});

export const AuthController = {
  loginGoogle,
  me,
};
