import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { CoursesService } from '@/shared/services/courses'
import { IAService } from '@/shared/services/ia'
import { formatMoney } from '@/shared/utils/format-money'
import { useCart } from '@/shared/contexts/cart-context'

export function useController() {
  const { id } = useParams()
  const { addItem, existInCart } = useCart()
  const navigate = useNavigate()

  const [isLoadingCart, setIsLoadingCart] = useState(false)

  const { data: course } = useQuery({
    queryKey: [`courses/${id}`],
    queryFn: () => CoursesService.getById(Number(id)),
  })

  const { data: resumeReviews, isLoading: isLoadingResume } = useQuery({
    queryKey: [`resume-ia/${id}`],
    queryFn: () => IAService.generateReviewResume(Number(id)),
    enabled: (course && course.reviews.length > 0) === true,
  })

  function handleAddNewItemInCart() {
    setIsLoadingCart(true)

    setTimeout(() => {
      setIsLoadingCart(false)
      if (course) addItem(course)
    }, 1000)
  }

  function handleBuyNow() {
    setIsLoadingCart(true)
    if (course) addItem(course)
    navigate('/confirm-purchase')
  }

  const existCourseInCart = course && existInCart(course?.id)

  const price = course?.price ? Number(course.price) : 0
  const averageStars = Math.ceil(Number(course?.averageStars ?? 0))

  const breadcrumbLinks = [
    {
      link: '/courses',
      name: 'Cursos',
    },
    {
      link: '',
      name: course?.name ?? '',
    },
  ]

  return {
    course,
    breadcrumbLinks,
    priceFormat: formatMoney(price),
    averageStars,
    resumeReviews,
    isLoadingResume,
    isLoadingCart,
    existCourseInCart,
    handleAddNewItemInCart,
    handleBuyNow,
  }
}
