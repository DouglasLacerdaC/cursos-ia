import { MainLayout } from '@/view/layouts/main-layout'
import { ConfirmPurchase } from '@/view/pages/confirm-purchase'
import { CoursesPage } from '@/view/pages/courses'
import { HomePage } from '@/view/pages/home'
import SignInPage from '@/view/pages/signin'
import { ViewCoursePage } from '@/view/pages/view-course'
import { Route, Routes } from 'react-router-dom'
import { AuthGuard } from './auth-guard'
import { MyCoursesPage } from '@/view/pages/my-courses'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/view-course/:id" element={<ViewCoursePage />} />

        <Route path="/my-courses" element={<AuthGuard isPrivate />}>
          <Route index element={<MyCoursesPage />} />
        </Route>
        <Route path="/confirm-purchase" element={<AuthGuard isPrivate />}>
          <Route index element={<ConfirmPurchase />} />
        </Route>

        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/signin" element={<SignInPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
