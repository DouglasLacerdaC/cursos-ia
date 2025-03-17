/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import { Schema, ValidationError } from 'yup';

import { InternalServerError } from '../../config/errors/api-error';

export const Validate =
  (schema: Schema) =>
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: request.body,
        query: request.query,
        params: request.params,
      });
      return next();
    } catch (error) {
      if (error instanceof ValidationError) {
        return response
          .status(400)
          .json({ error: { field: error.path, message: error.message } });
      }
      throw new InternalServerError();
    }
  };
