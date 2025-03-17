import { Decimal } from '@prisma/client/runtime/library';
import { Request } from 'express';

import { UserAuthRequest, UserModel } from '../users/model';

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
  user: UserModel | null;
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

export interface GetAllMeRequest extends UserAuthRequest {
  query: {
    search?: string;
  };
}

export interface UserAuthValidateRequest extends Request {
  user: UserModel | null;
}
