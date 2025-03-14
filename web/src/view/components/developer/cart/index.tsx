import { CheckCheck, SearchX, ShoppingCart, Trash } from 'lucide-react'
import { Button } from '@/view/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/view/components/ui/sheet'
import { Separator } from '@/view/components/ui/separator'
import { Card, CardContent } from '@/view/components/ui/card'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const itens = [1, 1, 1]

export function Cart() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <span className="size-5 grid place-items-center rounded-full absolute -right-1 -top-1 bg-primary text-primary-foreground">
            {itens.length}
          </span>
          <ShoppingCart size={16} />
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col gap-6 min-w-[600px]">
        <SheetHeader className="space-y-1">
          <SheetTitle>Carrinho ({itens.length})</SheetTitle>
          <SheetDescription>
            Veja todos os itens que você adicionou no carrinho
          </SheetDescription>
        </SheetHeader>

        <Separator />

        <div className="flex-1 overflow-auto space-y-4">
          {itens.length > 0 &&
            itens.map(() => (
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://img.freepik.com/psd-gratuitas/icone-3d-com-balde-de-tinta_23-2150813748.jpg?t=st=1741905614~exp=1741909214~hmac=cc123fdcd8fd4ecfff6004aaab25331d3c2da451deb214f6cab58055664eda68&w=740"
                      className="size-20 rounded-lg"
                      alt=""
                    />

                    <div className="flex-1 flex items-start justify-between">
                      <div className="space-y-3">
                        <div className="-space-y-1">
                          <span className="font-sm text-zinc-500">
                            Novidade ✨
                          </span>

                          <h4 className="font-semibold text-xl">
                            Curso de Pintura
                          </h4>
                        </div>

                        <p className="text-2xl font-semibold">R$200,00</p>
                      </div>

                      <Button variant="secondary">
                        <Trash size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

          {itens.length <= 0 && (
            <Card>
              <CardContent className="text-center p-4 flex flex-col items-center gap-4">
                <div className="p-1 border rounded-lg w-fit">
                  <SearchX size={20} className="stroke-primary" />
                </div>

                <div>
                  <h5 className="text-sm font-semibold">
                    Nenhum items na lista
                  </h5>
                  <p className="text-xs text-zinc-500">
                    Procure novos produtos para adicionar ao seu carrinho
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <SheetFooter>
          <Button className="w-full" asChild>
            <Link to="/confirm-purchase" onClick={() => setIsOpen(false)}>
              Finalizar pedido <CheckCheck className="ml-2" size={16} />
            </Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
