import { compareSync } from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../../../config';
import { ApiError } from '../../../config/errors/api-error';
import { MapErrors } from '../../../config/errors/map-errors';
import { UsersRepository } from '../users/repository';

const login = MapErrors(async (request: Request, response: Response) => {
  /*
    #swagger.tags = ['Autenticação']
    #swagger.summary = 'Fazer login'
  */

  const { email, password } = request.body;

  const user = await UsersRepository.getByEmail(email);
  if (!user) throw new ApiError(400, 'E-mail ou senha incorretos');

  if (!user.password) throw new ApiError(400, 'E-mail ou senha incorretos');

  const match = compareSync(password, user.password);
  if (!match) throw new ApiError(400, 'E-mail ou senha incorretos');

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '8h' });

  return response.json({
    token,
    data: user,
    message: 'Usuário autenticado com sucesso!',
  });
});

export const AuthController = {
  login,
};
