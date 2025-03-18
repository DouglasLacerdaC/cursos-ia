import { reviewsService } from '@/shared/services/reviews'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'

export function useController() {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState('')
  const [quantityStars, setQuantityStars] = useState(0)
  const { id } = useParams()

  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: reviewsService.create,
    onSuccess: () => {
      setText('')
      setIsOpen(false)
      setQuantityStars(0)
      toast.success('Avaliação criada com successo')

      queryClient.invalidateQueries({ queryKey: [`courses/${id}`] })
      queryClient.invalidateQueries({ queryKey: [`resume-ia/${id}`] })
    },
  })

  async function handleCreateNewReview() {
    if (quantityStars === 0) {
      return toast.error('Selecione a quantidade de estrelas para o produto')
    }

    if (text.length <= 10) {
      return toast.error('Faça uma avaliação com no minimo 10 caracteres.')
    }

    await mutateAsync({
      courseId: Number(id),
      stars: quantityStars,
      review: text,
    })
  }

  return {
    handleCreateNewReview,
    quantityStars,
    setQuantityStars,
    isPending,
    setText,
    text,
    setIsOpen,
    isOpen,
  }
}
