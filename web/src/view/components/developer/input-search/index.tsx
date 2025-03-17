import { Search } from 'lucide-react'
import { Input, InputProps } from '../../ui/input'

export function InputSearch({ ...props }: InputProps) {
  return (
    <div className="w-full max-w-72 flex items-center gap-2 px-6 rounded-lg bg-white focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
      <Search size={20} className="stroke-primary" />
      <Input
        className="max-w-xs border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        {...props}
      />
    </div>
  )
}
