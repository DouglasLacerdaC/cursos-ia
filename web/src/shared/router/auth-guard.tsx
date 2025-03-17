import { useAuthContext } from '@/shared/contexts/auth-context'
import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  isPrivate: boolean
}
export function AuthGuard({ isPrivate }: Props) {
  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated && isPrivate) return <Navigate to="/signin" replace />

  if (isAuthenticated && !isPrivate) return <Navigate to="/" replace />

  return <Outlet />
}
