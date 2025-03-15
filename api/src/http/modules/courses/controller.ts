import { Response } from 'express';

import { MapErrors } from '../../../config/errors/map-errors';
import { CourseRequest } from './model';
import { CoursesRepository } from './repository';

const index = MapErrors(async (request: CourseRequest, response: Response) => {
  /*
    #swagger.tags = ['Cursos']
    #swagger.summary = 'Lista de cursos'
  */

  const search = request.query.search;

  const data = await CoursesRepository.getAll(search);

  return response.json(data);
});

const getById = MapErrors(
  async (request: CourseRequest, response: Response) => {
    /*
      #swagger.tags = ['Cursos']
      #swagger.summary = 'Obter um curso'
    */

    const courseId = request.params.id;

    const data = await CoursesRepository.getById(Number(courseId));

    return response.json(data);
  },
);

export const CoursesController = { index, getById };
