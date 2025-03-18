import { CourseType } from '@/shared/services/courses/types'
import { Button } from '@/view/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/view/components/ui/card'
import { BookOpen } from 'lucide-react'

export function CourseCard({ course }: { course: CourseType }) {
  return (
    <Card className="w-full flex flex-col" data-aos="fade-up">
      <CardHeader>
        <img
          src={course.bannerUrl}
          className="w-full h-52 object-cover rounded-lg"
          alt=""
        />
      </CardHeader>

      <CardContent className="space-y-4 flex-1">
        <h4 className="text-lg font-semibold">{course.name}</h4>
      </CardContent>

      <CardFooter>
        <Button className="w-full justify-between">
          Acessar conteúdo <BookOpen size={16} />
        </Button>
      </CardFooter>
    </Card>
  )
}
