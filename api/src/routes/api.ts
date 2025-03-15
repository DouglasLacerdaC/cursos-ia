import { Router } from 'express';

import { CoursesRoute } from '../http/modules/courses/route';
import { ReviewsRoute } from '../http/modules/reviews/route';
// import { AuthRoute } from '../http/modules/auth/route';
import { UsersRoute } from '../http/modules/users/route';

export const api = Router();

// api.use('/auth', AuthRoute);
api.use('/users', UsersRoute);
api.use('/courses', CoursesRoute);
api.use('/reviews', ReviewsRoute);
