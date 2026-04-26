import { getInject } from '@dxtmisha/functional'
import { NITRO_API_HEADERS } from '../types/nitroAppTypes'

/**
 * Composable for getting request headers.
 *
 * Композабл для получения заголовков запроса.
 * @param name Header name / Имя заголовка
 */
export function useHeaders(name: string): string | undefined
export function useHeaders(): Headers | undefined
export function useHeaders(name?: string): Headers | string | undefined {
  const headers = getInject<Headers>(NITRO_API_HEADERS)

  if (name && headers) {
    return headers.get(name) ?? undefined
  }

  return headers
}
