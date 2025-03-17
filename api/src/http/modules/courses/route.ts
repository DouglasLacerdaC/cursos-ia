/* eslint-disable prettier/prettier */

import { Router } from 'express';

import { UserAuth } from '../../../shared/middlewares/user-auth';
import { Validate } from '../../../shared/middlewares/validate';
import { CoursesController } from './controller';
import { UserAuthValidate } from './middleware';
import { CoursesValidation } from './validation';

export const CoursesRoute = Router();

CoursesRoute.get('/me', UserAuth, CoursesController.getMyCourses);
CoursesRoute.get('/', CoursesController.index);
CoursesRoute.get('/:id', UserAuthValidate, Validate(CoursesValidation.byId), CoursesController.getById);
