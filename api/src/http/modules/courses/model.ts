import { Decimal } from '@prisma/client/runtime/library';
import { Request } from 'express';

import { UserAuthRequest } from '../users/model';

export interface CourseModel {
  id: number;
  name: string;
  quantityHours: string;
  certificate: string;
  description: string;
  price: Decimal;
  bannerUrl: string | null;
}

export interface ReviewModel {
  start: number;
  review: string;
}

export interface CourseRequest extends Request {
  query: {
    search?: string;
  };
  params: {
    id?: string;
  };
}

export interface GetAllMeRequest extends UserAuthRequest {
  query: {
    search?: string;
  };
}
