import { api } from '..'
import { CourseType } from './types'

export async function getAllMe(search?: string) {
  const response = await api.get<CourseType[]>('/courses/me', {
    params: {
      search,
    },
  })

  return response.data
}
