import { api } from '..'

export async function generatePaymentUrl(coursesIds: number[]) {
  console.log(`${coursesIds}`)

  const response = await api.get<{ url: string }>(
    '/purchases/generate-payment-url',
    {
      params: {
        courses: JSON.stringify(coursesIds),
      },
    },
  )

  return response.data
}
