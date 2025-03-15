import { object, string } from 'yup';

export const CoursesValidation = {
  byId: object({
    params: object({
      id: string().required('Campo obrigatório'),
    }),
  }),
};
