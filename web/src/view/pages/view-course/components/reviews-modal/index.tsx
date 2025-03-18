import { Star } from 'lucide-react'
import { ReviewType } from '@/shared/services/courses/types'
import { formatDate } from '@/shared/utils/format-date'
import { Button } from '@/view/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/view/components/ui/dialog'

export function ReviewsModal({ reviews }: { reviews: ReviewType[] }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Ver todos as avaliações</Button>
      </DialogTrigger>

      <DialogContent className="gap-8 p-0 pb-6">
        <DialogHeader className="border-b p-6">
          <DialogTitle>Todas as avaliações ({reviews.length})</DialogTitle>
        </DialogHeader>

        <ul className="max-h-[400px] overflow-y-auto space-y-8 px-6">
          {reviews.map((review) => (
            <li key={review.id} className="space-y-2">
              <p className="text-sm">{review.review}</p>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={
                        index < review.stars
                          ? `fill-primary stroke-primary`
                          : `fill-zinc-400 stroke-zinc-400`
                      }
                    />
                  ))}
                </div>

                <span className="text-sm text-zinc-500">
                  {formatDate(review.createdAt)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  )
}
