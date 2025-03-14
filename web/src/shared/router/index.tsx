import { MainLayout } from '@/view/layouts/main-layout'
import { ConfirmPurchase } from '@/view/pages/confirm-purchase'
import { CoursesPage } from '@/view/pages/courses'
import { HomePage } from '@/view/pages/home'
import SignInPage from '@/view/pages/signin'
import { ViewCoursePage } from '@/view/pages/view-course'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/confirm-purchase" element={<ConfirmPurchase />} />
        <Route path="/view-course/:id" element={<ViewCoursePage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Route>
    </Routes>
  )
}
