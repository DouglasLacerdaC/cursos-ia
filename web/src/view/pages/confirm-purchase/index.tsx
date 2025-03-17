import { Separator } from '@/view/components/ui/separator'
import { Loader2, Trash, WalletMinimal } from 'lucide-react'
import { useController } from './use-controller'
import { Card, CardContent, CardHeader } from '@/view/components/ui/card'
import { formatMoney } from '@/shared/utils/format-money'
import { Button } from '@/view/components/ui/button'

export function ConfirmPurchase() {
  const {
    itemsCart,
    removeItem,
    totalPrice,
    handlePurchase,
    isPending,
    handleResetCart,
  } = useController()

  return (
    <div className="py-16">
      <main className="max-w-7xl mx-auto space-y-8">
        <section className="flex items-center gap-4">
          <div className="p-1 border rounded-lg w-fit">
            <WalletMinimal size={24} className="stroke-primary" />
          </div>

          <div>
            <h1 className="text-2xl font-semibold">Confirmar compra</h1>
            <p className="text-sm text-zinc-500">
              Confirme todos os seus produtos que foram adicionados o carrinho e
              faça o pagamento.
            </p>
          </div>
        </section>

        <Separator />

        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-4 space-y-4">
            {itemsCart.length > 0 &&
              itemsCart.map((course) => (
                <Card key={course.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-6">
                      <img
                        src={course.bannerUrl}
                        className="w-48 h-auto rounded-lg object-cover"
                        alt=""
                      />

                      <div className="flex-1 flex items-start justify-between">
                        <div className="space-y-3">
                          <div className="-space-y-1">
                            <span className="font-sm text-zinc-500">
                              Novidade ✨
                            </span>

                            <h4 className="font-semibold text-xl">
                              {course.name}
                            </h4>
                          </div>

                          <p className="text-2xl font-semibold">
                            {formatMoney(Number(course.price))}
                          </p>
                        </div>

                        <Button
                          variant="secondary"
                          onClick={() => removeItem(course.id)}
                        >
                          <Trash size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          <Card className="col-span-2">
            <CardHeader>
              <h4 className="font-medium text-zinc-500">Total</h4>
              <strong className="text-3xl">{totalPrice}</strong>
            </CardHeader>

            <Separator />

            <CardContent className="pt-4 space-y-2">
              <Button
                className="w-full"
                onClick={handlePurchase}
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    Processando compra
                    <Loader2 size={16} className="ml-2 animate-spin" />
                  </>
                ) : (
                  <>Realizar pagamento</>
                )}
              </Button>
              <Button
                className="w-full"
                variant="secondary"
                onClick={handleResetCart}
              >
                Cancelar compra
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
