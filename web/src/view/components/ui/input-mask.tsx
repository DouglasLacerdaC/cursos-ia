import * as React from 'react'
import InputMaskLib from '@mona-health/react-input-mask'

import { cn } from '@/shared/utils/cn'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  mask?: string
}

const InputMask = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, mask, ...props }, ref) => {
    return (
      <InputMaskLib
        mask={mask}
        maskPlaceholder={null}
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
InputMask.displayName = 'InputMask'

export { InputMask }
