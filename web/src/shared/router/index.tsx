import { HomePage } from '@/view/pages/home'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  )
}
