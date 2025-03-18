import { CoursesService } from '@/shared/services/courses'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export function useController() {
  const [search, setSearch] = useState('')

  const { data, isLoading } = useQuery({
    queryKey: ['my-courses', { search }],
    queryFn: () => CoursesService.getAllMe(search),
  })

  return {
    courses: data,
    isLoading,
    setSearch,
  }
}
