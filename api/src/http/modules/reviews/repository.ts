import { ApiError } from '../../../config/errors/api-error';
import { Prisma } from '../../../shared/services/prisma';
import { ReviewModel } from './model';

async function getAll() {
  const data = await Prisma.$queryRaw`SELECT * FROM Reviews`;

  return data;
}

async function getAllByCourse(id: number) {
  const data = await Prisma.$queryRaw<
    ReviewModel[]
  >`SELECT * FROM Reviews WHERE courseId = ${id}`;

  return data;
}

async function destroy(id: number) {
  const data = await Prisma.reviews.delete({ where: { id } });

  return data;
}

async function create(review: ReviewModel, userId: number) {
  // const data = await Prisma.reviews.create({ data: review });

  const dateNow = new Date().toISOString();

  const data = await Prisma.$queryRaw<{ id: number }[]>`
      INSERT INTO Reviews (review, stars, userId, courseId, updatedAt)
      VALUES (${review.review}, ${review.stars}, ${userId}, ${review.courseId}, ${dateNow})
      RETURNING id`;

  if (!data) throw new ApiError(404, 'Não foi possível criar a avaliação.');

  const reviewCreated = await Prisma.$queryRaw<
    ReviewModel[]
  >`SELECT * FROM Reviews WHERE id = ${data[0].id}`;

  if (!reviewCreated.length)
    throw new ApiError(404, 'Avaliação não encontrada.');

  return reviewCreated[0];
}

export const ReviewsRepository = {
  getAll,
  getAllByCourse,
  destroy,
  create,
};
