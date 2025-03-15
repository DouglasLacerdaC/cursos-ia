import { Button } from '@/view/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/view/components/ui/card'
import { Input } from '@/view/components/ui/input'
import { Separator } from '@/view/components/ui/separator'
import { Clock, Medal } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useController } from './use-controller'

export function CoursesPage() {
  const { courses, setSearch } = useController()

  return (
    <div className="py-16">
      <main className="max-w-7xl mx-auto px-4 space-y-10">
        <section className="space-y-1">
          <h1 className="text-3xl font-semibold">Lista de cursos</h1>
          <p className="text-sm text-zinc-500">
            Encontre todos os cursos disponibilizados pelo nosso portal
            educacional!
          </p>
        </section>

        <section className="flex items-center gap-6">
          {courses && courses?.length > 1 ? (
            <p className="text-nowrap font-medium">
              {courses?.length} resultados encontrados
            </p>
          ) : (
            <p className="text-nowrap font-medium">
              {courses?.length} resultado encontrado
            </p>
          )}

          <Separator />

          <Input
            className="max-w-xs"
            placeholder="Pesquisar"
            onChange={(e) => setSearch(e.target.value)}
          />
        </section>

        <section className="flex gap-4 flex-wrap">
          {courses &&
            courses.map((course) => (
              <Card className="w-fit">
                <CardHeader>
                  <img
                    src={course.bannerUrl}
                    className="w-72 h-full max-h-52 object-cover rounded-lg"
                    alt=""
                  />
                </CardHeader>

                <CardContent className="space-y-4">
                  <h4 className="text-lg font-semibold">{course.name}</h4>

                  <ul className="space-y-1">
                    <li className="flex items-center gap-1">
                      <Clock size={16} className="stroke-primary" />{' '}
                      <span className="text-sm text-zinc-600">
                        {course.quantityHours} horas de conteúdo
                      </span>
                    </li>
                    {course.certificate && (
                      <li className="flex items-center gap-1">
                        <Medal size={16} className="stroke-primary" />{' '}
                        <span className="text-sm text-zinc-600">
                          Certificado
                        </span>
                      </li>
                    )}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link to={`/view-course/${course.id}`}>
                      Visualizar curso
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </section>
      </main>
    </div>
  )
}
