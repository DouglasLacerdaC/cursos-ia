/* eslint-disable prettier/prettier */

import { Router } from 'express';

import { UserAuth } from '../../../shared/middlewares/user-auth';
import { Validate } from '../../../shared/middlewares/validate';
import { AuthController } from './controller';
import { AuthValidation } from './validation';

export const AuthRoute = Router();

AuthRoute.post(
  '/login-google',
  Validate(AuthValidation.google),
  AuthController.loginGoogle,
);
AuthRoute.get('/me', UserAuth, AuthController.me);
