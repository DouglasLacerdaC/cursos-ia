import {
  Clock,
  Medal,
  MessageCircleOff,
  ShoppingCart,
  Sparkles,
  Star,
} from 'lucide-react'
import { format, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'

import { NavigateBreadcrumb } from '@/view/components/developer/navigate-breadcrumb'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/view/components/ui/card'
import { Separator } from '@/view/components/ui/separator'
import { Button } from '@/view/components/ui/button'
import { useController } from './use-controller'

export function ViewCoursePage() {
  const { breadcrumbLinks, course, priceFormat, averageStars } = useController()

  return (
    <div className="py-16">
      <main className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="space-y-8">
          <NavigateBreadcrumb links={breadcrumbLinks} />

          <section className="grid grid-cols-6 items-start gap-6">
            <Card className="border-l col-span-2">
              <CardHeader className="gap-6">
                <img
                  src={course?.bannerUrl}
                  className="w-full h-full max-h-52 object-cover rounded-lg"
                  alt=""
                />

                <div className="flex flex-row gap-4">
                  <h5 className="text-4xl font-semibold text-primary">
                    {averageStars}
                  </h5>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          size={16}
                          className={
                            index < averageStars
                              ? `fill-primary stroke-primary`
                              : `fill-zinc-400 stroke-zinc-400`
                          }
                        />
                      ))}
                    </div>

                    <p className="text-sm text-zinc-500">
                      {course?.reviews.length} Avaliações
                    </p>
                  </div>
                </div>
              </CardHeader>

              <Separator />

              <CardContent className="pt-6 space-y-4">
                <h4 className="text-4xl font-medium">{priceFormat}</h4>

                <ul className="space-y-1">
                  <li className="flex items-center gap-1">
                    <Clock size={16} className="stroke-primary" />{' '}
                    <span className="text-zinc-600">
                      {course?.quantityHours} horas de conteúdo
                    </span>
                  </li>
                  {course?.certificate && (
                    <li className="flex items-center gap-1">
                      <Medal size={16} className="stroke-primary" />{' '}
                      <span className="text-zinc-600">Certificado</span>
                    </li>
                  )}
                </ul>
              </CardContent>

              <CardFooter className="flex-col gap-2 text-start">
                <Button className="w-full">
                  Adicionar ao carrinho{' '}
                  <ShoppingCart className="ml-2" size={16} />
                </Button>
                <Button className="w-full" variant="secondary">
                  Comprar agora
                </Button>
              </CardFooter>
            </Card>

            <div className="col-span-4 space-y-10">
              <article className="px-14 pt-24 py-6 rounded-lg bg-[url(https://img.freepik.com/vetores-gratis/fundo-de-gradiente-de-linhas-azuis-dinamicas_23-2148995756.jpg?t=st=1741912139~exp=1741915739~hmac=605557bbee48b97ab8735a8164bb5e01a17a12d0fb221d1adec21051a97600e4&w=996)]">
                <h1 className="text-4xl font-semibold text-white">
                  {course?.name}
                </h1>
              </article>

              <div className="space-y-3">
                <h4 className="font-semibold text-xl">Descrição</h4>

                <div className="space-y-6 leading-8">
                  <p>{course?.description}</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Separator />

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h5 className="text-4xl font-semibold">Opiniões do curso</h5>

            <div className="flex gap-6">
              <h5 className="text-5xl font-semibold text-primary">
                {averageStars}
              </h5>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      size={24}
                      className={
                        index < averageStars
                          ? `fill-primary stroke-primary`
                          : `fill-zinc-400 stroke-zinc-400`
                      }
                    />
                  ))}
                </div>

                <p className="text-sm text-zinc-500">
                  {course?.reviews.length} Avaliações
                </p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader className="py-2 flex-row items-center gap-4">
              <div className="p-1 border rounded-lg w-fit">
                <Sparkles size={20} className="stroke-primary" />
              </div>

              <div>
                <h5 className="text-xl text-primary font-medium">Resumo</h5>
                <p className="text-sm text-zinc-500">
                  Esse resumo é desenvolvido pela IA para que você tenha um
                  conhecimento sobre a opinião geral do curso
                </p>
              </div>
            </CardHeader>

            <Separator />

            <CardContent className="py-4">
              <p className="text-sm">
                É amplamente elogiado por sua excelente qualidade, design
                atraente e desempenho superior, com destaque para a câmera e a
                duração da bateria. A experiência de uso é descrita como
                satisfatória, especialmente para aqueles que estão migrando de
                modelos anteriores ou de outras marcas.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h5 className="text-lg font-medium">Todas as opiniões</h5>

            {!course?.reviews.length && (
              <Card>
                <CardContent className="text-center p-4 flex flex-col items-center gap-4">
                  <div className="p-1 border rounded-lg w-fit">
                    <MessageCircleOff size={20} className="stroke-primary" />
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold">
                      Nenhuma avaliação encontrada
                    </h5>
                    <p className="text-xs text-zinc-500">
                      Seja o primeiro a adicionar um novo comentário!
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            <ul className="space-y-6">
              {course?.reviews.map((review) => (
                <li className="space-y-2">
                  <p className="text-sm">{review.review}</p>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          size={16}
                          className={
                            index < review.stars
                              ? `fill-primary stroke-primary`
                              : `fill-zinc-400 stroke-zinc-400`
                          }
                        />
                      ))}
                    </div>

                    <span className="text-sm text-zinc-500">
                      {format(
                        parseISO(review.createdAt),
                        "dd 'de' MMMM 'de' yyyy",
                        {
                          locale: pt,
                        },
                      )}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
