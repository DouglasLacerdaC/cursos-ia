/* eslint-disable prettier/prettier */

import { NextFunction, Response } from 'express';

import { ApiError } from '../../../config/errors/api-error';
import { MapErrors } from '../../../config/errors/map-errors';
import { PurchaseRequest } from './model';

export const PurchaseMiddleware = MapErrors(
  async (request: PurchaseRequest, _: Response, next: NextFunction) => {
    try {
      const { courses } = request.query;

      const array = JSON.parse(courses);

      request.query = {
        ...request.query,
        courses: array,
      };

      next();
    } catch (error) {
      throw new ApiError(404, 'Formatação de courses inválida!');
    }
  },
);
