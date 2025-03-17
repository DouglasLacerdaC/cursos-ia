import { Request, Response } from 'express';

import { MapErrors } from '../../../config/errors/map-errors';
import { UsersRepository } from './repository';

const index = MapErrors(async (_: Request, response: Response) => {
  /*
    #swagger.tags = ['Usuários']
    #swagger.summary = 'Lista de usuários'
  */

  const data = await UsersRepository.getAll();

  return response.json(data);
});

const add = MapErrors(async (request: Request, response: Response) => {
  /*
    #swagger.tags = ['Usuários']
    #swagger.summary = 'Adicionar usuário'
  */

  const body = request.body;

  const data = await UsersRepository.create(body);

  return response.json({ data, message: 'Usuário adicionado com sucesso' });
});

const edit = MapErrors(async (request: Request, response: Response) => {
  /*
    #swagger.tags = ['Usuários']
    #swagger.summary = 'Editar usuário'
  */

  const { id } = request.params;
  const body = request.body;

  const data = await UsersRepository.update(+id, body);

  return response.json({ data, message: 'Usuário editado com sucesso' });
});

const del = MapErrors(async (request: Request, response: Response) => {
  /*
    #swagger.tags = ['Usuários']
    #swagger.summary = 'Deletar usuário'
  */

  const { id } = request.params;

  await UsersRepository.destroy(+id);

  return response.json({ message: 'Usuário deletado com sucesso' });
});

export const UsersController = { index, add, edit, del };
