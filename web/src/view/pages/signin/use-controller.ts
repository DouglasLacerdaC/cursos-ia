import { useAuthContext } from '@/shared/contexts/auth-context'
import { authService } from '@/shared/services/auth'
import { useGoogleLogin } from '@react-oauth/google'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useController() {
  const { login } = useAuthContext()

  const { mutateAsync } = useMutation({
    mutationFn: authService.loginGoogle,
    onSuccess: (response) => {
      login(response.token)
    },
    onError: () => toast.error('Não foi possíver fazer login com o Google'),
  })

  const handleSignWithGoogle = useGoogleLogin({
    onSuccess: (response) => {
      mutateAsync(response.access_token)
    },
    onError: (error) => console.log(error),
  })

  return {
    handleSignWithGoogle,
  }
}
