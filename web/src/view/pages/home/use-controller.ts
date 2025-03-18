import { CoursesService } from '@/shared/services/courses'
import { useQuery } from '@tanstack/react-query'

export function useController() {
  const { data } = useQuery({
    queryKey: ['courses'],
    queryFn: () => CoursesService.getAll(),
  })

  return {
    data,
  }
}
