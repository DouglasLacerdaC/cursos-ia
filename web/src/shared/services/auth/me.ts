import { api } from '..'

export async function me() {
  const response = await api.get('auth/me')

  return response.data
}
