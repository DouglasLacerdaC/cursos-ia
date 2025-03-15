import { Response } from 'express';

import { MapErrors } from '../../../config/errors/map-errors';
import { ReviewRequest } from './model';
import { ReviewsRepository } from './repository';

const index = MapErrors(async (_: ReviewRequest, response: Response) => {
  /*
    #swagger.tags = ['Avaliações']
    #swagger.summary = 'Lista de avaliações'
  */

  const data = await ReviewsRepository.getAll();

  return response.json(data);
});

const getByCourse = MapErrors(
  async (request: ReviewRequest, response: Response) => {
    /*
      #swagger.tags = ['Avaliações']
      #swagger.summary = 'Lista de avaliações por curso'
    */

    const courseId = request.params.id;

    const data = await ReviewsRepository.getAllByCourse(Number(courseId));

    return response.json(data);
  },
);

const create = MapErrors(async (request: ReviewRequest, response: Response) => {
  /*
    #swagger.tags = ['Avaliações']
    #swagger.summary = 'Criar avaliação'
  */

  const reviewData = request.body;

  const data = await ReviewsRepository.create(reviewData);

  return response.json(data);
});

export const ReviewsController = { index, getByCourse, create };
