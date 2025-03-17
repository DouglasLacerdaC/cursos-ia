import { CourseType } from '@/shared/services/courses/types'
import { Button } from '@/view/components/ui/button'
import { CardContent, CardFooter, CardHeader } from '@/view/components/ui/card'
import { ArrowUpRight, Clock, Medal } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CourseCard({ course }: { course: CourseType }) {
  return (
    <div className="bg-white rounded-lg w-full" data-aos="fade-up">
      <CardHeader>
        <img
          src={course.bannerUrl}
          className="w-full h-full object-cover rounded-lg"
          alt=""
        />
      </CardHeader>

      <CardContent className="space-y-4">
        <h4 className="text-lg font-semibold font-onest">{course.name}</h4>

        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <Clock size={20} className="stroke-primary" />{' '}
            <span className="text-sm text-zinc-600">
              {course.quantityHours} horas de conteúdo
            </span>
          </li>
          {course.certificate && (
            <li className="flex items-center gap-2">
              <Medal size={20} className="stroke-primary" />{' '}
              <span className="text-sm text-zinc-600">Certificado</span>
            </li>
          )}
        </ul>
      </CardContent>

      <CardFooter className="border-t pt-4">
        <Button className="w-full font-onest justify-between" asChild>
          <Link to={`/view-course/${course.id}`}>
            Visualizar curso <ArrowUpRight size={16} />
          </Link>
        </Button>
      </CardFooter>
    </div>
  )
}
