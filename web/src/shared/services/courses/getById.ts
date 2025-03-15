import { api } from '..'
import { CourseDetailsType } from './types'

export async function getById(id: number) {
  const response = await api.get<CourseDetailsType>(`/courses/${id}`)

  return response.data
}
