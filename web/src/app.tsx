import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'

import { Router } from '@/shared/router'
import { queryClient } from '@/shared/config/query-client'

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  )
}
