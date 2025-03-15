/* eslint-disable prettier/prettier */

import { Router } from 'express';

import { Validate } from '../../../shared/middlewares/validate';
import { CoursesController } from './controller';
import { CoursesValidation } from './validation';

export const CoursesRoute = Router();

CoursesRoute.get('/', CoursesController.index);
CoursesRoute.get('/:id', Validate(CoursesValidation.byId), CoursesController.getById);
