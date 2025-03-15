import { Request } from 'express';

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
