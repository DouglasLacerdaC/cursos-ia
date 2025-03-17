import { Response } from 'express';

import { MapErrors } from '../../../config/errors/map-errors';
import { CartRequest } from './model';
import { CartRepository } from './repository';

const getAvailableItems = MapErrors(
  async (request: CartRequest, response: Response) => {
    /*
      #swagger.tags = ['Carrinho']
      #swagger.summary = 'Lista de items que podem ser comprados'
    */

    const courses = request.query.courses as unknown as number[];
    const user = request.user.id;

    const data = await CartRepository.getAll(courses, user);

    return response.json(data);
  },
);

export const CartController = { getAvailableItems };
