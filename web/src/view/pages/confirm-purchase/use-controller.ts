import { useCart } from '@/shared/contexts/cart-context'
import { purchasesService } from '@/shared/services/purchases'
import { formatMoney } from '@/shared/utils/format-money'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export function useController() {
  const { itemsCart, removeItem, resetCart } = useCart()
  const navigate = useNavigate()

  function handleResetCart() {
    resetCart()
    navigate('/courses')
  }

  const { isPending, mutateAsync } = useMutation({
    mutationFn: purchasesService.generatePaymentUrl,
    onSuccess: (response) => {
      if (response) console.log(response.url)
      location.href = response.url
    },
    onError: () => {
      toast.error('Erro ao processar compra!')
    },
  })

  async function handlePurchase() {
    await mutateAsync(itemsCart.map((item) => item.id))
  }

  const totalPriceReduce = itemsCart.reduce(
    (acc, currentValue) => acc + parseFloat(currentValue.price),
    0,
  )

  return {
    itemsCart,
    totalPrice: formatMoney(totalPriceReduce),
    isPending,
    removeItem,
    handlePurchase,
    handleResetCart,
  }
}
