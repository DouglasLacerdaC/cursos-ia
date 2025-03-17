import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { CourseCartType } from '../services/courses/types'
import toast from 'react-hot-toast'
import { z } from 'zod'
import { useSearchParams } from 'react-router-dom'
import { useAuthContext } from './auth-context'
import { useMutation } from '@tanstack/react-query'
import { cartService } from '../services/cart'

interface CartContextType {
  itemsCart: CourseCartType[]
  addItem: (item: CourseCartType) => void
  removeItem: (id: number) => void
  existInCart: (id: number) => boolean
  resetCart: () => void
}

const CartSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.string(),
  bannerUrl: z.string(),
})

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuthContext()
  const [itemsCart, setItemsCart] = useState<CourseCartType[]>([])

  const [searchParams, setSearchParams] = useSearchParams()

  const { mutateAsync } = useMutation({
    mutationFn: cartService.getAvailableItems,
    onSuccess: (response) => {
      localStorage.setItem('cart', JSON.stringify(response))
      setItemsCart(response)
    },
    onError: (response) => console.log(response),
  })

  function addItem(item: CourseCartType) {
    const existItem = itemsCart.find((course) => course.id == item.id)

    if (!existItem) {
      setItemsCart((prev) => {
        const newData = [
          ...prev,
          {
            id: item.id,
            name: item.name,
            price: item.price,
            bannerUrl: item.bannerUrl,
          },
        ]

        localStorage.setItem('cart', JSON.stringify(newData))

        return newData
      })
    } else {
      toast.error('Esse produto já está no carrinho!')
    }
  }

  function removeItem(id: number) {
    setItemsCart((prev) => {
      const newData = prev.filter((course) => course.id != id)
      localStorage.setItem('cart', JSON.stringify(newData))

      return newData
    })
  }

  function existInCart(id: number) {
    return !!itemsCart.find((course) => course.id == id)
  }

  function resetCart() {
    setItemsCart([])
    localStorage.removeItem('cart')
  }

  useEffect(() => {
    const paymentStatus = searchParams.get('payment')

    if (paymentStatus == 'success') {
      setItemsCart([])
      localStorage.removeItem('cart')

      const newParams = new URLSearchParams(searchParams)
      newParams.delete('payment')
      setSearchParams(newParams, { replace: true })
    } else if (paymentStatus == 'cancel') {
      toast.error('O pagamento não foi finalizado!')

      const newParams = new URLSearchParams(searchParams)
      newParams.delete('payment')
      setSearchParams(newParams, { replace: true })
    }
  }, [])

  useEffect(() => {
    const cartStorage =
      localStorage.getItem('cart') &&
      JSON.parse(localStorage.getItem('cart') ?? '')

    if (cartStorage) {
      const CartListSchema = z.array(CartSchema)
      const result = CartListSchema.safeParse(cartStorage)

      if (result.success) {
        if (isAuthenticated) {
          const ids = result.data?.map((item) => item.id)

          async function onMutate() {
            await mutateAsync(ids)
          }

          onMutate()
        } else {
          setItemsCart(cartStorage)
        }
      }
    }
  }, [])

  return (
    <CartContext.Provider
      value={{ itemsCart, addItem, removeItem, existInCart, resetCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return { ...useContext(CartContext) }
}
