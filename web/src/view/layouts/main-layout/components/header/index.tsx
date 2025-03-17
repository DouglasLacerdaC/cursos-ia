import { Button } from '../../../../components/ui/button'
import { LogIn } from 'lucide-react'
import { Cart } from '../../../../components/developer/cart'
import { NavigationMenuDemo } from './navigation-menu'
import { Link } from 'react-router-dom'
import { useAuthContext } from '@/shared/contexts/auth-context'
import { NavUser } from './nav-user'
import { SheetMobile } from '../sheet-modile'

export function Header() {
  const { userAuthenticated, isAuthenticated } = useAuthContext()

  return (
    <header className="py-4 border-b bg-white">
      <div className="px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-medium text-lg text-primary">
            Cursos <span className="text-xl">IA</span>
          </Link>

          <div className="hidden md:inline-block">
            <NavigationMenuDemo />
          </div>

          <div className="flex items-center gap-2">
            <Cart />

            <div className="hidden md:inline-block">
              {isAuthenticated ? (
                <NavUser user={userAuthenticated} />
              ) : (
                <Button asChild>
                  <Link to="/signin">
                    Login
                    <LogIn className="ml-2" size={16} />
                  </Link>
                </Button>
              )}
            </div>

            <div className="inline-block md:hidden">
              <SheetMobile />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
