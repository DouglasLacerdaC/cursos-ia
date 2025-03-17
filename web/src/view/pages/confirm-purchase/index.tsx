import { Separator } from '@/view/components/ui/separator'
import { Loader2, Trash, WalletMinimal } from 'lucide-react'
import { useController } from './use-controller'
import { Card, CardContent, CardHeader } from '@/view/components/ui/card'
import { formatMoney } from '@/shared/utils/format-money'
import { Button } from '@/view/components/ui/button'
import { Navigate } from 'react-router-dom'

export function ConfirmPurchase() {
  const {
    itemsCart,
    removeItem,
    totalPrice,
    handlePurchase,
    isPending,
    handleResetCart,
  } = useController()

  if (itemsCart.length <= 0) return <Navigate to="/courses" />

  return (
    <div className="py-16">
      <main className="px-4 max-w-7xl mx-auto space-y-8">
        <section className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="bg-white p-2 border rounded-lg w-fit">
            <WalletMinimal size={24} className="stroke-primary" />
          </div>

          <div>
            <h1 className="text-2xl font-semibold font-onest">
              Confirmar compra
            </h1>
            <p className="text-sm text-zinc-500">
              Confirme todos os seus produtos que foram adicionados o carrinho e
              faça o pagamento.
            </p>
          </div>
        </section>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="md:col-span-4 space-y-4">
            {itemsCart.length > 0 &&
              itemsCart.map((course) => (
                <Card key={course.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-8">
                      <img
                        src={course.bannerUrl}
                        className="md:w-48 h-auto rounded-lg object-cover"
                        alt=""
                      />

                      <div className="flex-1 flex flex-col-reverse gap-4 md:flex-row items-start justify-between">
                        <div className="flex-1 space-y-5">
                          <div className="space-y-1">
                            <span className="font-sm text-zinc-500">
                              Novidade ✨
                            </span>

                            <h4 className="font-semibold text-xl font-onest">
                              {course.name}
                            </h4>
                          </div>

                          <Separator className="max-w-[90%]" />

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

          <Card className="md:col-span-2 h-fit">
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
