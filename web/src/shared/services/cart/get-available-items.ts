import { api } from '..'

export async function getAvailableItems(coursesIds: number[]) {
  const response = await api.get('/cart/me', {
    params: {
      courses: JSON.stringify(coursesIds),
    },
  })

  return response.data
}
