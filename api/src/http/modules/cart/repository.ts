/* eslint-disable prettier/prettier */

import { Prisma as PrismaLib } from '@prisma/client';

import { Prisma } from '../../../shared/services/prisma';
import { CourseModel } from './model';

async function getAll(ids: number[], userId: number) {
  const data = await Prisma.$queryRaw<CourseModel[]>`
    SELECT
      c.id,
      c.name,
      c.description,
      c.price,
      c.bannerUrl,
      c.createdAt,
      c.updatedAt
    FROM Courses c
    LEFT JOIN EnrolledUsers eu ON c.id = eu.courseId AND eu.userId = ${userId}
    WHERE c.id IN (${PrismaLib.join(ids)}) AND eu.id IS NULL
  `;

  return data;
}

export const CartRepository = {
  getAll,
};
