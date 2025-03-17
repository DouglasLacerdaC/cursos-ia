/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { SplashScreen } from '@/view/components/developer/splash-screen'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { authService } from '../services/auth'
import { UserType } from '../services/auth/types'

interface AuthContextProps {
  isAuthenticated: boolean
  userAuthenticated: UserType
  login: (token: string) => void
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem('token')),
  )

  const queryClient = useQueryClient()
  const userStorage = localStorage.getItem('user')

  async function login(token: string) {
    setIsAuthenticated(true)
    localStorage.setItem('token', token)
  }

  function logout() {
    setIsAuthenticated(false)

    localStorage.removeItem('token')
    queryClient.clear()
  }

  const { data, isFetching, isError } = useQuery({
    queryKey: ['/me'],
    queryFn: authService.me,
    enabled: isAuthenticated,
  })

  useEffect(() => {
    if (isError) {
      logout()
    }
  }, [isError])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userAuthenticated: {
          token: userStorage,
          ...data,
        },
        login,
        logout,
      }}
    >
      <SplashScreen isLoading={isFetching} />

      {!isFetching && children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}
