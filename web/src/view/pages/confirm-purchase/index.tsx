import { Separator } from '@/view/components/ui/separator'
import { WalletMinimal } from 'lucide-react'

export function ConfirmPurchase() {
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
      </main>
    </div>
  )
}
