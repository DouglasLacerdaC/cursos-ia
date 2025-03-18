import { Separator } from '@/view/components/ui/separator'
import { useController } from './use-controller'
import { CourseCard } from './components/course-card'
import { InputSearch } from '@/view/components/developer/input-search'
import { CourseEmptyCard } from '@/view/components/developer/course-empty-card'

export function CoursesPage() {
  const { courses, setSearch } = useController()

  return (
    <div className="py-16">
      <main className="max-w-7xl mx-auto px-4 space-y-10">
        <section className="space-y-1">
          <h1 className="text-3xl font-semibold font-onest">Lista de cursos</h1>
          <p className="text-sm text-zinc-500">
            Encontre todos os cursos disponibilizados pelo nosso portal
            educacional!
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

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses &&
            courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
        </section>

        {(!courses || courses?.length == 0) && (
          <CourseEmptyCard
            title="Nenhum curso encontrado!"
            description="Melhore seu filtro de busca para retornar melhores resultados!"
          />
        )}
      </main>
    </div>
  )
}
