import { api } from '..'
import { CourseType } from './types'

export async function getAll(search?: string) {
  const response = await api.get<CourseType[]>('/courses', {
    params: {
      search,
    },
  })

  return response.data
}
