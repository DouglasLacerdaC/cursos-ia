import { Decimal } from '@prisma/client/runtime/library';
import { Request } from 'express';

export interface PurchaseModel {
  id: number;
  name: string;
  quantityHours: string;
  certificate: string;
  description: string;
  price: Decimal;
  bannerUrl: string | null;
}

export interface PurchaseRequest extends Request {
  query: {
    courses: string;
  };
  params: {
    id?: string;
  };
  headers: {
    'stripe-signature': string;
  };
}
