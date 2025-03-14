/* eslint-disable prettier/prettier */

import { Router } from 'express';

import { Validate } from '../../../shared/middlewares/validate';
import { AuthController } from './controller';
import { AuthValidation } from './validation';

export const AuthRoute = Router();

AuthRoute.post('/login', Validate(AuthValidation.login), AuthController.login);
