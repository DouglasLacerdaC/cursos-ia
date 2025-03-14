import { number, object, string } from 'yup';

export const UsersValidation = {
  add: object({
    body: object({
      name: string().required('Campo obrigatório'),
      email: number().required('Campo obrigatório'),
    }),
  }),
  edit: object({
    params: object({
      id: string().required('Campo obrigatório'),
    }),
    body: object({
      name: string().required('Campo obrigatório'),
      email: number().required('Campo obrigatório'),
    }),
  }),
  del: object({
    params: object({
      id: string().required('Campo obrigatório'),
    }),
  }),
};
