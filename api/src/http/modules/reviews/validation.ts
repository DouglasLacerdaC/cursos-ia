import { object, string } from 'yup';

export const ReviewsValidation = {
  byId: object({
    params: object({
      id: string().required('Campo obrigatório'),
    }),
  }),
  add: object({
    body: object({
      review: string().required('Campo obrigatório'),
      stars: string().required('Campo obrigatório'),
      courseId: string().required('Campo obrigatório'),
    }),
  }),
  del: object({
    params: object({
      id: string().required('Campo obrigatório'),
    }),
  }),
};
