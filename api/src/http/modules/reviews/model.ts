import { Request } from 'express';

import { UserAuthRequest } from '../users/model';

export interface ReviewModel {
  id: number;
  stars: number;
  review: string;
  userId: number;
  courseId: number;
}

export interface ReviewRequest extends Request {
  query: {
    search?: string;
  };
  params: {
    id?: string;
  };
}

export interface ReviewCreateRequest extends UserAuthRequest {
  query: {
    search?: string;
  };
  params: {
    id?: string;
  };
}
