/* eslint-disable prettier/prettier */

import { Router } from 'express';

import { UserAuth } from '../../../shared/middlewares/user-auth';
import { Validate } from '../../../shared/middlewares/validate';
import { CoursesController } from './controller';
import { CoursesValidation } from './validation';

export const CoursesRoute = Router();

CoursesRoute.get('/me', UserAuth, CoursesController.getMyCourses);
CoursesRoute.get('/', CoursesController.index);
CoursesRoute.get('/:id', Validate(CoursesValidation.byId), CoursesController.getById);
