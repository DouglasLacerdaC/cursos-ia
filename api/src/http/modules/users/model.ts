import { Request } from 'express';

export interface UserModel {
  id: number;
  name: string;
  email: string;
  avatar: string | null;
}

export interface UserAuthRequest extends Request {
  user: UserModel;
}
