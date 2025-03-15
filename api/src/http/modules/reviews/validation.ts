import { object, string } from 'yup';

export const ReviewsValidation = {
  byId: object({
    params: object({
      id: string().required('Campo a obrigatório'),
    }),
  }),
  add: object({
    body: object({
      review: string().required('Campo b obrigatório'),
      stars: string().required('Campo c obrigatório'),
      userId: string().required('Campo d obrigatório'),
      courseId: string().required('Campo e obrigatório'),
    }),
  }),
  del: object({
    params: object({
      id: string().required('Campo obrigatório'),
    }),
  }),
};
