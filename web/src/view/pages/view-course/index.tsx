import { Clock, Medal, ShoppingCart, Sparkles, Star } from 'lucide-react'

import { NavigateBreadcrumb } from '@/view/components/developer/navigate-breadcrumb'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/view/components/ui/card'
import { Separator } from '@/view/components/ui/separator'
import { Button } from '@/view/components/ui/button'

export function ViewCoursePage() {
  const breadcrumbLinks = [
    {
      link: '/courses',
      name: 'Cursos',
    },
    {
      link: '',
      name: 'Curso de tinta',
    },
  ]

  return (
    <div className="py-16">
      <main className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="space-y-8">
          <NavigateBreadcrumb links={breadcrumbLinks} />

          <section className="grid grid-cols-6 items-start gap-6">
            <div className="col-span-4 space-y-10">
              <article className="px-14 pt-24 py-6 rounded-lg bg-[url(https://img.freepik.com/vetores-gratis/fundo-de-gradiente-de-linhas-azuis-dinamicas_23-2148995756.jpg?t=st=1741912139~exp=1741915739~hmac=605557bbee48b97ab8735a8164bb5e01a17a12d0fb221d1adec21051a97600e4&w=996)]">
                <h1 className="text-4xl font-semibold text-white">
                  Curso de tinta
                </h1>
              </article>

              <div className="space-y-3">
                <h4 className="font-semibold text-xl">Descrição</h4>

                <div className="space-y-6 leading-8">
                  <p>
                    Você já imaginou transformar paredes comuns em verdadeiras
                    obras de arte? No Curso Profissionalizante de Pintura e
                    Técnicas de Acabamento, você aprenderá desde os fundamentos
                    da pintura até as técnicas mais avançadas para criar efeitos
                    sofisticados em diferentes superfícies.
                  </p>

                  <p>
                    Nosso curso é voltado para iniciantes e profissionais que
                    desejam aprimorar suas habilidades, oferecendo uma abordagem
                    completa sobre materiais, ferramentas e métodos de
                    aplicação. Ao longo das aulas, você aprenderá a escolher
                    tintas e texturas adequadas para cada ambiente, garantindo
                    um acabamento impecável.
                  </p>

                  <p>
                    Com uma metodologia prática e dinâmica, o curso aborda desde
                    a preparação de superfícies, como lixamento e aplicação de
                    seladores, até técnicas modernas como pintura decorativa,
                    estêncil, marmorização e grafiato. Além disso, você terá
                    acesso a conteúdos exclusivos sobre combinação de cores,
                    psicologia das cores e tendências do mercado.
                  </p>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <h5 className="text-xl text-primary font-medium">
                      O que você aprenderá
                    </h5>
                  </CardHeader>

                  <Separator />

                  <CardContent className="pt-6">
                    <ul className="grid grid-cols-2 gap-4 list-disc ml-5">
                      <li>
                        Aprenda Diversas Téncnicas de Detecção de Anomalias
                      </li>
                      <li>Implemente Algoritmos de Busca e Otimização</li>
                      <li>
                        Classifique Documentos com Processamento de Linguagem
                        Natural
                      </li>
                      <li>
                        Construa Sistemas Baseados em Regras com Lógica Difusa
                      </li>
                      <li>
                        Resolva Problemas de Otimização com Algoritmos Genéticos
                      </li>
                      <li>
                        Reconheça Caracteres com Redes Neurais Artificias e Deep
                        Learning
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="border-l col-span-2">
              <CardHeader className="flex-row gap-4">
                <h5 className="text-4xl font-semibold text-primary">5</h5>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }).map(() => (
                      <Star size={16} className="fill-primary stroke-primary" />
                    ))}
                  </div>

                  <p className="text-sm text-zinc-500">20 Avaliações</p>
                </div>
              </CardHeader>

              <Separator />

              <CardContent className="pt-6 space-y-4">
                <h4 className="text-4xl font-medium">R$ 50.00</h4>

                <ul className="space-y-1">
                  <li className="flex items-center gap-1">
                    <Clock size={16} className="stroke-primary" />{' '}
                    <span className="text-zinc-600">8 horas de conteúdo</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <Medal size={16} className="stroke-primary" />{' '}
                    <span className="text-zinc-600">Certificado</span>
                  </li>
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
          </section>
        </div>

        <Separator />

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h5 className="text-4xl font-semibold">Opiniões do curso</h5>

            <div className="flex gap-6">
              <h5 className="text-5xl font-semibold text-primary">5</h5>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {Array.from({ length: 5 }).map(() => (
                    <Star size={24} className="fill-primary stroke-primary" />
                  ))}
                </div>

                <p className="text-sm text-zinc-500">20 Avaliações</p>
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

            <ul className="space-y-6">
              <li className="space-y-2">
                <p className="text-sm">
                  Simplesmente sensacional!!! meu primeiro iphone, decidi sair
                  do android e estou amando!!! celular original, funcionando
                  perfeitamente! sem contar a cor que é linda!!! e valor bem em
                  conta por ser o iphone 15! custo benefício ótimo e chega no
                  dia seguinte! comprem sem medo.
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }).map(() => (
                      <Star size={16} className="fill-primary stroke-primary" />
                    ))}
                  </div>

                  <span className="text-sm text-zinc-500">12 de Março</span>
                </div>
              </li>
              <li className="space-y-2">
                <p className="text-sm">
                  Simplesmente sensacional!!! meu primeiro iphone, decidi sair
                  do android e estou amando!!! celular original, funcionando
                  perfeitamente! sem contar a cor que é linda!!! e valor bem em
                  conta por ser o iphone 15! custo benefício ótimo e chega no
                  dia seguinte! comprem sem medo.
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }).map(() => (
                      <Star size={16} className="fill-primary stroke-primary" />
                    ))}
                  </div>

                  <span className="text-sm text-zinc-500">12 de Março</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
