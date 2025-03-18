import { api } from '..'

interface ParamsType {
  courseId: number
  review: string
  stars: number
}

export async function create(params: ParamsType) {
  const { data } = await api.post('/reviews', params)

  return data
}
