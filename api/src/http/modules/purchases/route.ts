/* eslint-disable prettier/prettier */

import express, { Router } from 'express';

import { UserAuth } from '../../../shared/middlewares/user-auth';
import { PurchaseController } from './controller';
import { PurchaseMiddleware } from './middleware';

export const PurchaseRoute = Router();

PurchaseRoute.get('/', PurchaseController.index);
PurchaseRoute.get('/generate-payment-url', UserAuth, PurchaseMiddleware, PurchaseController.generatePaymentUrl,);
PurchaseRoute.use('/webhook', express.raw({ type: 'application/json' }));
PurchaseRoute.post('/webhook', PurchaseController.webhook);
