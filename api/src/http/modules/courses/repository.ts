/* eslint-disable prettier/prettier */

import { ApiError } from '../../../config/errors/api-error';
import { Prisma } from '../../../shared/services/prisma';
import { CourseModel, ReviewModel } from './model';

async function getAll(search?: string) {
  const data =
    await Prisma.$queryRaw`SELECT * FROM Courses WHERE name LIKE ${`%${search ?? ''}%`}`;

  return data;
}

async function checkUserEnrollment(courseId: number, userId: number) {
  const data = await Prisma.$queryRaw<[]>`SELECT * FROM EnrolledUsers WHERE userId = ${userId} AND courseId = ${courseId}`;

  return data;
}

async function getAllByUser(search?: string, userId?: number) {
  const data = await Prisma.$queryRaw`
      SELECT * 
      FROM EnrolledUsers eu
      LEFT JOIN Courses c ON eu.courseId = c.id
      WHERE c.name LIKE ${'%' + (search ?? '') + '%'}
      AND eu.userId = ${userId}
    `;

  if (!data) throw new ApiError(404, 'Não foi possível encontrar o curso');

  return data;
}

async function getById(id: number) {
  const courses = await Prisma.$queryRaw<
    CourseModel[]
  >`SELECT * FROM Courses WHERE id = ${id}`;

  const rating = await Prisma.$queryRaw<
    { averageStars: string }[]
  >`SELECT AVG(stars) AS 'averageStars' FROM Reviews WHERE courseId = ${id}`;

  const reviews = await Prisma.$queryRaw<
    ReviewModel[]
  >`SELECT * FROM Reviews WHERE courseId = ${id}`;

  if (!courses.length)
    throw new ApiError(404, 'Não foi possível encontrar o curso');
  if (!reviews) throw new ApiError(404, 'Não foi possível encontrar o curso');

  return {
    ...courses[0],
    ...rating[0],
    reviews: [...reviews],
  };
}

export const CoursesRepository = {
  getAll,
  getById,
  getAllByUser,
  checkUserEnrollment,
};
