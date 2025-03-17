import { Outlet } from 'react-router-dom'
import { Header } from './components/header'

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-100 font-inter">
      <Header />

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}
