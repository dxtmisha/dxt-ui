import { isArray } from './isArray'
import { isObjectNotArray } from './isObjectNotArray'

import { Api } from '../classes/Api'

import type { ApiData } from '../types/apiTypes'

/**
 * Checks if the API response is successful.
 *
 * Проверяет, является ли ответ API успешным.
 * @param data API response data/ данные ответа API
 * @returns true if successful / true, если успешно
 */
export const isApiSuccess = <T>(
  data: ApiData<T>
): boolean => {
  if (isArray(data)) {
    return true
  }

  return Boolean(
    data
    && isObjectNotArray(data)
    && (
      data?.status === 'success'
      || data?.success
      || (
        data?.statusObject?.status
        && /^2/.test(String(data.statusObject.status))
      )
      || (
        !('status' in data)
        && !('success' in data)
        && !('statusObject' in data)
        && /^2/.test(String(Api.getStatus().getStatus()))
      )
    )
  )
}
