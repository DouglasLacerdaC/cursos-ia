import { Separator } from '@/view/components/ui/separator'
import { useController } from './use-controller'
import { InputSearch } from '@/view/components/developer/input-search'

import { CourseCard } from './components/course-card'
import { CourseEmptyCard } from '@/view/components/developer/course-empty-card'
import { Loader2 } from 'lucide-react'

export function MyCoursesPage() {
  const { courses, setSearch, isLoading } = useController()

  return (
    <div className="py-16">
      <main className="max-w-7xl mx-auto px-4 space-y-10">
        <section className="space-y-1">
          <h1 className="text-3xl font-semibold font-onest">Meus cursos</h1>
          <p className="text-sm text-zinc-500">
            Encontre todos os cursos que você já comprou!
          </p>
        </section>

        <section className="flex flex-col-reverse sm:flex-row sm:items-center gap-6 text-nowrap font-medium font-onest">
          {courses && courses?.length != 1 ? (
            <p>{courses?.length} Resultados encontrados</p>
          ) : (
            <p>{courses?.length} Resultado encontrado</p>
          )}

          <Separator className="hidden md:inline-block" />

          <InputSearch
            placeholder="Pesquisar"
            onChange={(e) => setSearch(e.target.value)}
          />
        </section>

        <section className="grid grid-cols-3 gap-4">
          {!isLoading &&
            courses &&
            courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
        </section>

        {isLoading && (
          <div className="w-full flex justify-center">
            <Loader2 size={16} className="animate-spin" />
          </div>
        )}

        {(!isLoading && !courses) ||
          (courses?.length == 0 && (
            <CourseEmptyCard
              title="Nenhum curso encontrado!"
              description="Verifique nossa loja e adquira um curso para realizar!"
            />
          ))}
      </main>
    </div>
  )
}
