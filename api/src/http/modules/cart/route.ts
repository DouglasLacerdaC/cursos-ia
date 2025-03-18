/* eslint-disable prettier/prettier */

import { Router } from 'express';

import { UserAuth } from '../../../shared/middlewares/user-auth';
import { CartController } from './controller';
import { CartMiddleware } from './middleware';

export const CartRoute = Router();

CartRoute.get(
  '/me',
  UserAuth,
  CartMiddleware,
  CartController.getAvailableItems,
);
