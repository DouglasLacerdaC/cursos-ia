import { object, string } from 'yup';

export const AuthValidation = {
  google: object({
    body: object({
      access_token: string().required(),
    }),
  }),
};
