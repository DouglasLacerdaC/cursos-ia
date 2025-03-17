import { ChevronsUpDown, Loader2, LogOut } from 'lucide-react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/view/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/view/components/ui/dropdown-menu'
import { Button } from '@/view/components/ui/button'
import { getInitialsName } from '@/shared/utils/get-initials-name'
import { useAuthContext } from '@/shared/contexts/auth-context'
import { useState } from 'react'

interface NavUserProps {
  user: {
    name: string
    email: string
    avatar?: string
  }
}

export function NavUser({ user }: NavUserProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { logout } = useAuthContext()

  function handleLogout() {
    setIsLoading(true)

    setTimeout(() => {
      logout()
    }, 1000)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="lg"
          variant="ghost"
          className="px-2 gap-2 data-[state=open]:bg-secondary data-[state=open]:text-secondary-foreground"
        >
          {!isLoading && (
            <Avatar className="h-8 w-8 rounded-lg">
              {!isLoading && user.avatar ? (
                <AvatarImage src={user.avatar} alt={user.name} />
              ) : (
                <AvatarFallback className="rounded-lg">
                  {getInitialsName(user.name)}
                </AvatarFallback>
              )}
            </Avatar>
          )}

          {isLoading && (
            <div className="h-8 w-8 rounded-lg bg-primary/10 grid place-items-center">
              <Loader2 size={16} className="stroke-primary animate-spin" />
            </div>
          )}

          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{user.name}</span>
          </div>

          <ChevronsUpDown className="ml-auto size-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
