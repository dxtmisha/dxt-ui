import { isString, type ApiFetch, type ApiMethod } from '@dxtmisha/functional-basic'

import type { ApiOptions } from '../types/apiTypes'
import type { RefOrNormal } from '../types/refTypes'

/**
 * Normalizes API request options into a fetch options object or reactive reference.
 *
 * Нормализует параметры API-запроса в объект опций запроса или реактивную ссылку.
 * @param options Request method string or request options object / Метод запроса строкой или объект параметров запроса
 * @returns Request options object or reactive reference / Объект параметров запроса или реактивная ссылка
 */
export function getOptions(options?: ApiOptions | ApiMethod): RefOrNormal<ApiFetch> {
  if (isString(options)) {
    return { method: options }
  }

  if (options) {
    return options
  }

  return {}
}
