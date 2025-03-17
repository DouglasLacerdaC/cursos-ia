import * as React from 'react'

import { cn } from '@/shared/utils/cn'
// import { Icons } from '@/components/icons'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/view/components/ui/navigation-menu'
import { Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '@/shared/contexts/auth-context'

export function NavigationMenuDemo() {
  const { isAuthenticated } = useAuthContext()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tela inicial</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary to-primary/90 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Cursos IA
                    </div>
                    <p className="text-sm leading-tight text-white/80">
                      Conteúdo de alta qualidade para expandir seus
                      conhecimentos e impulsionar seu crescimento!
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Início">
                Explore tudo o que podemos oferecer para você. 🚀
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
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
              <Github size={16} className="mr-2" /> Github
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={`${props.href}`}
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
