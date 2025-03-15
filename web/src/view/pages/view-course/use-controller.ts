import { CoursesService } from '@/shared/services/courses'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

export function useController() {
  const { id } = useParams()

  const { data } = useQuery({
    queryKey: [`courses/${id}`],
    queryFn: () => CoursesService.getById(Number(id)),
  })

  const price = data?.price ? Number(data.price) : 1.1

  const priceFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

  const averageStars = Math.ceil(Number(data?.averageStars ?? 0))

  const breadcrumbLinks = [
    {
      link: '/courses',
      name: 'Cursos',
    },
    {
      link: '',
      name: data?.name ?? '',
    },
  ]

  return {
    course: data,
    breadcrumbLinks,
    priceFormat,
    averageStars,
  }
}
