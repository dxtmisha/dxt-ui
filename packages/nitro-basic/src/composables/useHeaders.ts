import { getInject } from '@dxtmisha/functional'

import { getContextValue } from '../functions/getContextValue'
import { NITRO_API_HEADERS } from '../types/nitroAppTypes'

/**
 * Composable for getting request headers.
 *
 * Композабл для получения заголовков запроса.
 * @param name Header name / Имя заголовка
 * @returns headers object or specific header value / объект заголовков или значение конкретного заголовка
 */
export function useHeaders<T extends string | undefined = undefined>(
  name?: T
): (T extends string ? string : Headers) | undefined {
  const headers = getInject<Headers>(NITRO_API_HEADERS)
    ?? getContextValue<Headers>('headers')

  if (name !== undefined) {
    return (
      name && headers
        ? headers.get(name) ?? undefined
        : undefined
    ) as (T extends string ? string : Headers) | undefined
  }

  return headers as (T extends string ? string : Headers) | undefined
}
