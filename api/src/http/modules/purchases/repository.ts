/* eslint-disable prettier/prettier */

import { Prisma as PrismaLib } from '@prisma/client';

import { Prisma } from '../../../shared/services/prisma';
import { CourseModel } from '../courses/model';

async function getAll() {
  const data: never[] = [];

  return data;
}

async function getAllByIds(ids: string[]) {
  const data = await Prisma.$queryRaw<
    CourseModel[]
  >`SELECT * FROM Courses WHERE id IN (${PrismaLib.join(ids)})`;

  return data;
}

async function createAll(ids: number[], userId: number) {
  const purchases = ids.map(id => ({
    courseId: id,
    userId: userId
  }))

  const data = await Prisma.enrolledUsers.createMany({
    data: purchases
  })
  
  return data
}

export const PurchaseRepository = {
  getAll,
  getAllByIds,
  createAll
};
