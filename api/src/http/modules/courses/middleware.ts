/* eslint-disable prettier/prettier */

import { NextFunction, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import { JWT_SECRET } from '../../../config';
import { MapErrors } from '../../../config/errors/map-errors';
import { UsersRepository } from '../users/repository';
import { UserAuthValidateRequest } from './model';

export const UserAuthValidate = MapErrors(
  async (request: UserAuthValidateRequest, _: Response, next: NextFunction) => {
    // #swagger.auto = false

    const { authorization } = request.headers;

    if (!authorization) {
      request.user = null;

      next();
    }

    const token = authorization ? authorization.replace('Bearer ', '') : '';

    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload & {
      userId: number;
    };

    if (!decoded || !decoded.userId) {
      request.user = null;

      next();
    }

    const user = await UsersRepository.getById(decoded.userId);

    request.user = user;

    console.log(user);
    

    next();
  },
);
