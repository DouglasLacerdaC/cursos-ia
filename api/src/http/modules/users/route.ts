/* eslint-disable prettier/prettier */

import { Router } from 'express';

import { UserAuth } from '../../../shared/middlewares/user-auth';
import { Validate } from '../../../shared/middlewares/validate';
import { UsersController } from './controller';
import { UsersValidation } from './validation';

export const UsersRoute = Router();

UsersRoute.get('/me', UserAuth, UsersController.me);
UsersRoute.get('/', UsersController.index);
UsersRoute.post('/', Validate(UsersValidation.add), UsersController.add);
UsersRoute.put('/:id', Validate(UsersValidation.edit), UsersController.edit);
UsersRoute.delete('/:id', Validate(UsersValidation.del), UsersController.del);
