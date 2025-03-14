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

export function CoursesPage() {
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
          <p className="text-nowrap font-medium">1 resultado encontrado</p>

          <Separator />

          <Input className="max-w-xs" placeholder="Pesquisar" />
        </section>

        <section>
          <Card className="w-fit">
            <CardHeader>
              <img
                src="https://img.freepik.com/psd-gratuitas/icone-3d-com-balde-de-tinta_23-2150813748.jpg?t=st=1741905614~exp=1741909214~hmac=cc123fdcd8fd4ecfff6004aaab25331d3c2da451deb214f6cab58055664eda68&w=740"
                className="w-72 h-full max-h-52 object-cover rounded-lg"
                alt=""
              />
            </CardHeader>

            <CardContent className="space-y-4">
              <h4 className="text-lg font-semibold">Curso de tinta</h4>

              <ul className="space-y-1">
                <li className="flex items-center gap-1">
                  <Clock size={16} className="stroke-primary" />{' '}
                  <span className="text-sm text-zinc-600">
                    8 horas de conteúdo
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Medal size={16} className="stroke-primary" />{' '}
                  <span className="text-sm text-zinc-600">Certificado</span>
                </li>
              </ul>
            </CardContent>

            <CardFooter>
              <Button className="w-full" asChild>
                <Link to="/view-course/1">Visualizar curso</Link>
              </Button>
            </CardFooter>
          </Card>
        </section>
      </main>
    </div>
  )
}
