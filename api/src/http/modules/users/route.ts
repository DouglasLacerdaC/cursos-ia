/* eslint-disable prettier/prettier */

import { Router } from 'express';

import { Validate } from '../../../shared/middlewares/validate';
import { UsersController } from './controller';
import { UsersValidation } from './validation';

export const UsersRoute = Router();

UsersRoute.get('/', UsersController.index);
UsersRoute.post('/', Validate(UsersValidation.add), UsersController.add);
UsersRoute.put('/:id', Validate(UsersValidation.edit), UsersController.edit);
UsersRoute.delete('/:id', Validate(UsersValidation.del), UsersController.del);
