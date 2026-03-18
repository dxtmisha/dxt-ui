import { isArray } from './isArray'
import { isObjectNotArray } from './isObjectNotArray'

import { Api } from '../classes/Api'

import type { ApiData } from '../types/apiTypes'

/**
 * Checks if the API response is successful.
 *
 * Проверяет, является ли ответ API успешным.
 * @param data API response data/ данные ответа API
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
        && String(data.statusObject.status).match(/^2/)
      )
      || (
        !('status' in data)
        && !('success' in data)
        && !('statusObject' in data)
        && String(Api.getStatus().getStatus()).match(/^2/)
      )
    )
  )
}
