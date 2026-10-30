import { computed, type ComputedRef } from 'vue'
import {
  type ApiData,
  type ApiDataItem,
  type ApiErrorItem,
  isApiSuccess,
  isObjectNotArray
} from '@dxtmisha/functional-basic'

import type { RefType } from '../../types/refTypes'

/**
 * Returns the error item for the Api ref.
 *
 * Возвращает элемент ошибки для Api ref.
 * @param data reactive API response data / реактивные данные ответа API
 * @returns computed reference to the error item or undefined / вычисляемая ссылка на элемент ошибки или undefined
 */
export function getApiErrorRef<R = unknown>(
  data: RefType<ApiData<R> | undefined> | { readonly value: unknown }
): ComputedRef<ApiErrorItem | undefined> {
  return computed<ApiErrorItem | undefined>(() => {
    if (
      !data.value
      || !isObjectNotArray(data.value)
      || isApiSuccess(data.value)
    ) {
      return undefined
    }

    return (data.value as ApiDataItem<R>).errorObject
  })
}
