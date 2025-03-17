import { api } from '..'

export async function generateReviewResume(id: number) {
  const response = await api.get(`/reviews/resume/${id}`)

  return response.data
}
