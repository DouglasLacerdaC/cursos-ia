import { format, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'

export const formatDate = (date: string) =>
  format(parseISO(date), "dd 'de' MMMM 'de' yyyy", {
    locale: pt,
  })
