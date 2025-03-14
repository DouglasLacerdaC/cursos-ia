import { Router } from 'express';

import { AuthRoute } from '../http/modules/auth/route';
import { UsersRoute } from '../http/modules/users/route';

export const api = Router();

api.use('/auth', AuthRoute);
api.use('/users', UsersRoute);
