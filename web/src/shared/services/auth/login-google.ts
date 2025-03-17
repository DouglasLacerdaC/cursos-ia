import { api } from '..'

export async function loginGoogle(access_token: string) {
  const response = await api.post<{ token: string }>('/auth/login-google', {
    access_token,
  })

  return response.data
}
