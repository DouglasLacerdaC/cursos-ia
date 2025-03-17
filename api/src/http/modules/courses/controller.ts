import { Response } from 'express';

import { MapErrors } from '../../../config/errors/map-errors';
import { CourseRequest, GetAllMeRequest } from './model';
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

const getMyCourses = MapErrors(
  async (request: GetAllMeRequest, response: Response) => {
    /*
      #swagger.tags = ['Cursos']
      #swagger.summary = 'Lista de cursos do usuário logado'
    */

    const userId = request.user.id;
    const search = request.query.search;

    const data = await CoursesRepository.getAllByUser(search, userId);

    return response.json(data);
  },
);

const getById = MapErrors(
  async (request: CourseRequest, response: Response) => {
    /*
      #swagger.tags = ['Cursos']
      #swagger.summary = 'Obter um curso'
    */

    const courseId = request.params.id;
    const userId = request.user?.id;

    const data = await CoursesRepository.getById(Number(courseId));

    if (userId) {
      const isEnrolled = await CoursesRepository.checkUserEnrollment(
        data.id,
        userId,
      );

      if (isEnrolled && isEnrolled.length > 0) {
        return response.json({
          ...data,
          userIsEnrolled: true,
        });
      }
    }

    return response.json(data);
  },
);

export const CoursesController = { index, getById, getMyCourses };
