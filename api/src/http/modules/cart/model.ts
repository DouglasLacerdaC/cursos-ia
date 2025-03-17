import { Decimal } from '@prisma/client/runtime/library';

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

export interface CartRequest extends UserAuthRequest {
  query: {
    courses: string;
  };
}
