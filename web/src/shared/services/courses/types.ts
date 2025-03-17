export interface CourseType {
  id: number
  name: string
  quantityHours: string
  certificate: string
  description: string
  price: string
  bannerUrl?: string
  createdAt: string
  updatedAt: string
}

export interface CourseCartType {
  id: number
  name: string
  price: string
  bannerUrl?: string
}

interface ReviewType {
  id: number
  review: string
  stars: number
  userId: number
  courseId: number
  createdAt: string
  updatedAt: string
}

export interface CourseDetailsType {
  id: number
  name: string
  quantityHours: string
  certificate: string
  description: string
  price: string
  bannerUrl?: string
  createdAt: string
  updatedAt: string
  averageStars?: number
  reviews: ReviewType[]
  userIsEnrolled?: boolean
}
