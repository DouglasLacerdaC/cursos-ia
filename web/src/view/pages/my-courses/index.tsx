import { Button } from '@/view/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/view/components/ui/card'
import { Input } from '@/view/components/ui/input'
import { Separator } from '@/view/components/ui/separator'
import { Link } from 'react-router-dom'
import { useController } from './use-controller'

export function MyCoursesPage() {
  const { courses, setSearch } = useController()

  return (
    <div className="py-16">
      <main className="max-w-7xl mx-auto px-4 space-y-10">
        <section className="space-y-1">
          <h1 className="text-3xl font-semibold">Meus cursos</h1>
          <p className="text-sm text-zinc-500">
            Encontre todos os cursos que você já comprou!
          </p>
        </section>

        <section className="flex items-center gap-6">
          {courses && courses?.length > 1 ? (
            <p className="text-nowrap font-medium">
              {courses?.length} Resultados encontrados
            </p>
          ) : (
            <p className="text-nowrap font-medium">
              {courses?.length} Resultado encontrado
            </p>
          )}

          <Separator />

          <Input
            className="max-w-xs"
            placeholder="Pesquisar"
            onChange={(e) => setSearch(e.target.value)}
          />
        </section>

        <section className="grid grid-cols-3 gap-4">
          {courses &&
            courses.map((course) => (
              <Card className="w-full" key={course.id}>
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
                    <Link to={`/view-course/${course.id}`}>
                      Acessar conteúdo
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
