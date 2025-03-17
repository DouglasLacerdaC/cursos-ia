import { useAuthContext } from '@/shared/contexts/auth-context'
import { Button } from '@/view/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/view/components/ui/sheet'
import { Github, LogIn, Menu } from 'lucide-react'
import { NavUser } from '../header/nav-user'
import { Link } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/view/components/ui/navigation-menu'
import { Separator } from '@/view/components/ui/separator'

export function SheetMobile() {
  const { userAuthenticated, isAuthenticated } = useAuthContext()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">
          <Menu size={16} />
        </Button>
      </SheetTrigger>

      <SheetContent className="space-y-6">
        <NavigationMenu className="-ml-1">
          <NavigationMenuList className="flex-col items-start gap-2">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Início
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/courses">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Cursos disponíveis
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {isAuthenticated && (
              <NavigationMenuItem>
                <Link to="/my-courses">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Meus cursos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )}

            <NavigationMenuItem>
              <a href="https://github.com/DouglasLacerdaC">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Github <Github size={16} className="ml-2" />
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Separator />

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
      </SheetContent>
    </Sheet>
  )
}
