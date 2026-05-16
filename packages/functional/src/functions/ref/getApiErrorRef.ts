import { computed, type ComputedRef } from 'vue'
import {
  type ApiData,
  type ApiErrorItem,
  isApiSuccess,
  isObjectNotArray
} from '@dxtmisha/functional-basic'

import type { RefType } from '../../types/refTypes'

/**
 * Returns the error item for the Api ref.
 *
 * Возвращает элемент ошибки для Api ref.
 * @param data data for the request / данные для запроса
 */
export function getApiErrorRef<R>(
  data: RefType<ApiData<R> | undefined>
): ComputedRef<ApiErrorItem | undefined> {
  return computed<ApiErrorItem | undefined>(() => {
    if (
      !data.value
      || isApiSuccess(data.value)
      || !isObjectNotArray(data.value)
    ) {
      return undefined
    }

    return data.value.errorObject
  })
}
