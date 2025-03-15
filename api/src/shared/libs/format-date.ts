/* eslint-disable prettier/prettier */

import { format } from 'date-fns';

export function formatDate(
  value: string | number | Date,
  formatting: string = 'dd/MM/yyyy',
) {
  const adjustedDate = new Date(value);
  adjustedDate.setUTCHours(adjustedDate.getUTCHours() + 3);

  return format(adjustedDate, formatting);
}
