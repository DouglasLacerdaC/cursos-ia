import { Button } from '@/view/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/view/components/ui/dialog'
import { Label } from '@/view/components/ui/label'
import { Separator } from '@/view/components/ui/separator'
import { Textarea } from '@/view/components/ui/textarea'
import { Loader2, Plus, Star } from 'lucide-react'
import { useController } from './use-controller'

export function CreateReviewModal() {
  const {
    handleCreateNewReview,
    quantityStars,
    setQuantityStars,
    isPending,
    setText,
    text,
    setIsOpen,
    isOpen,
  } = useController()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          Adicionar avaliação <Plus className="ml-2" size={16} />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-onest">
            Nova avaliação
          </DialogTitle>
          <DialogDescription>
            Preencha as informações abaixo para criar uma nova avaliação
          </DialogDescription>
        </DialogHeader>

        <Separator />

        <div className="flex gap-4 pt-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              size={32}
              data-active={index + 1 <= quantityStars}
              className="cursor-pointer fill-zinc-300 stroke-zinc-300 data-[active=true]:stroke-primary data-[active=true]:fill-primary"
              onClick={() => setQuantityStars(index + 1)}
              strokeWidth={1.5}
            />
          ))}
        </div>

        <div className="space-y-1 pb-2">
          <Label>Descrição</Label>
          <Textarea value={text} onChange={(e) => setText(e.target.value)} />
        </div>

        <Separator />

        <Button onClick={handleCreateNewReview} disabled={isPending}>
          Salvar avaliação{' '}
          {isPending && <Loader2 className="animate-spin ml-2" size={16} />}
        </Button>
      </DialogContent>
    </Dialog>
  )
}
