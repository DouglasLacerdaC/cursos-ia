import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { serve, setup } from 'swagger-ui-express';

import { ErrorHandler } from './config/errors/error-handler';
import swaggerFile from './config/swagger/swagger_output.json';
import { api } from './routes/api';

export const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/purchases/webhook') {
    next(); // Evita que express.json() parseie o corpo do webhook
  } else {
    express.json()(req, res, next);
  }
});

app.use(cors({ origin: '*' }));

app.get('/', (_, response: Response) => response.redirect('/swagger'));

app.use('/swagger', serve, setup(swaggerFile));

app.use(api);

app.use('*', ErrorHandler.generics());

app.use(ErrorHandler.handle());
