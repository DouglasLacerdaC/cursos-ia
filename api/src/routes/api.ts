import { Router } from 'express';

import { AuthRoute } from '../http/modules/auth/route';
import { CoursesRoute } from '../http/modules/courses/route';
import { PurchaseRoute } from '../http/modules/purchases/route';
import { ReviewsRoute } from '../http/modules/reviews/route';
import { UsersRoute } from '../http/modules/users/route';

export const api = Router();

// api.use('/auth', AuthRoute);
api.use('/auth', AuthRoute);
api.use('/users', UsersRoute);
api.use('/courses', CoursesRoute);
api.use('/reviews', ReviewsRoute);
api.use('/purchases', PurchaseRoute);
