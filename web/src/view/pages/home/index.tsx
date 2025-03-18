import { Button } from '@/view/components/ui/button'
import { Separator } from '@/view/components/ui/separator'
import { ArrowRight, ArrowUpRight, Sparkle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CourseCard } from '../courses/components/course-card'
import { useController } from './use-controller'
import { Questions } from './components/questions'

export function HomePage() {
  const { data } = useController()

  return (
    <div className="w-full">
      <div className="w-full max-w-7xl mx-auto px-4 space-y-40">
        <section className="pt-32 grid grid-cols-1 md:grid-cols-4">
          <div className="md:col-span-2 space-y-10">
            <h1
              data-aos="fade-up"
              className="text-5xl font-bold leading-[65px] font-onest"
            >
              Fortaleça suas habilidades com{' '}
              <span className="text-primary">CursosIA</span>
            </h1>

            <Button asChild>
              <Link to="/courses">
                Conhecer cursos <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>

            <div className="pt-12 relative">
              <Sparkle
                size={64}
                strokeWidth={1}
                className="rotate-2 -top-6 right-4 md:right-8 absolute stroke-primary"
              />
              <Sparkle
                size={64}
                strokeWidth={1}
                className="rotate-2 -top-24 right-8 md:-right-10 absolute stroke-primary"
              />

              <ul
                data-aos="fade-up"
                data-aos-delay="100"
                className="font-onest text-zinc-500 text-xl"
              >
                <li className="py-5 px border-b">Front-end</li>
                <li className="py-5 px border-b">Back-end</li>
                <li className="py-5 px border-b">Desenvolvimento Full-stack</li>
                <li className="py-5 px border-b">Design</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col md:flex-row justify-end items-end gap-6 relative">
            <div className="md:translate-y-4">
              <img
                data-aos="fade-up"
                data-aos-offset="0"
                className="md:max-w-96 rounded-lg"
                src="https://cdn.pixabay.com/photo/2019/04/25/14/43/workplace-4155023_1280.jpg"
                alt=""
              />
            </div>
            <div className="md:-translate-y-10">
              <img
                data-aos="fade-up"
                data-aos-offset="0"
                className="md:max-w-96 rounded-lg"
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <h3 className="text-4xl font-semibold text-nowrap">
              Alguns cursos
            </h3>

            <Separator className="hidden md:inline-block" />

            <Button className="w-fit">
              Visualizar todos os cursos <ArrowUpRight size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data &&
              data.slice(0, 3).map((course) => <CourseCard course={course} />)}
          </div>
        </section>

        <section className="space-y-8 pb-20">
          <div className="flex items-center justify-between gap-8">
            <h3 className="text-4xl font-semibold text-nowrap">
              Perguntas frequentes
            </h3>

            <Separator />
          </div>

          <Questions />
        </section>
      </div>
    </div>
  )
}
