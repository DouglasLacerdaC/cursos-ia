import { ApiError } from '../../../config/errors/api-error';
import { Prisma } from '../../../shared/services/prisma';
import { UserModel } from './model';

async function getAll() {
  const data = await Prisma.users.findMany();

  return data;
}

async function getById(id: number) {
  const data: Omit<UserModel, 'password'> | null =
    await Prisma.users.findUnique({
      where: { id },
    });

  if (!data) throw new ApiError(400, 'Não foi possível encontrar usuário');

  return data;
}

async function getByEmail(email: string) {
  const data = await Prisma.users.findUnique({ where: { email } });

  return data;
}

async function destroy(id: number) {
  const data = await Prisma.users.delete({ where: { id } });

  return data;
}

async function update(id: number, user: UserModel) {
  const data = await Prisma.users.update({ where: { id }, data: user });

  return data;
}

async function create(user: UserModel) {
  const data = await Prisma.users.create({ data: user });

  return data;
}

export const UsersRepository = {
  getAll,
  getById,
  getByEmail,
  destroy,
  update,
  create,
};
