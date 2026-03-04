import type { ApiFetch } from '@dxtmisha/functional-basic'

import type { ApiOptions } from '../types/apiTypes'
import type { RefOrNormal } from '../types/refTypes'

/**
 * Get request options.
 *
 * Возвращает опции запроса.
 * @param options options / параметры
 */
export const getOptions = (options?: ApiOptions): RefOrNormal<ApiFetch> => {
  if (typeof options === 'string') {
    return { method: options }
  }

  if (options) {
    return options
  }

  return {} as ApiFetch
}
