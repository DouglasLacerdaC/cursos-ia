import { Request } from 'express';

export interface UserModel {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface UserAuthRequest extends Request {
  user: Omit<UserModel, 'password'>;
}
