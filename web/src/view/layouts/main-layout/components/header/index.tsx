import { Button } from '../../../../components/ui/button'
import { LogIn } from 'lucide-react'
import { Cart } from '../../../../components/developer/cart'
import { NavigationMenuDemo } from './navigation-menu'
import { Link } from 'react-router-dom'
import { useAuthContext } from '@/shared/contexts/auth-context'
import { NavUser } from './nav-user'

export function Header() {
  const { userAuthenticated, isAuthenticated } = useAuthContext()

  return (
    <header className="py-4 border-b">
      <div className="px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-lg">Logo</h1>

          <NavigationMenuDemo />

          <div className="flex items-center gap-2">
            <Cart />

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
        </div>
      </div>
    </header>
  )
}
