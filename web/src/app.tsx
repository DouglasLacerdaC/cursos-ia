import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'

import { Router } from '@/shared/router'
import { queryClient } from '@/shared/config/query-client'
import { CartProvider } from './shared/contexts/cart-context'
import { AuthContextProvider } from './shared/contexts/auth-context'

export function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <BrowserRouter>
            <CartProvider>
              <Router />
            </CartProvider>

            <Toaster />
          </BrowserRouter>
        </AuthContextProvider>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  )
}
