import { CourseType } from '@/shared/services/courses/types'
import { Button } from '@/view/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/view/components/ui/card'
import { Link } from 'react-router-dom'

export function CourseCard({ course }: { course: CourseType }) {
  return (
    <Card className="w-full" data-aos="fade-up">
      <CardHeader>
        <img
          src={course.bannerUrl}
          className="w-full h-full object-cover rounded-lg"
          alt=""
        />
      </CardHeader>

      <CardContent className="space-y-4">
        <h4 className="text-lg font-semibold">{course.name}</h4>
      </CardContent>

      <CardFooter>
        <Button className="w-full" asChild>
          <Link to={`/view-course/${course.id}`}>Acessar conteúdo</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
