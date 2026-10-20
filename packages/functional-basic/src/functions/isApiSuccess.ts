import { isArray } from './isArray'
import { isObjectNotArray } from './isObjectNotArray'

import { Api } from '../classes/Api'

import type { ApiData } from '../types/apiTypes'

/**
 * Checks if the HTTP status code is in the 2xx success range.
 *
 * Проверяет, находится ли HTTP статус в диапазоне успешных ответов 2xx.
 * @param status HTTP status code / код статуса HTTP
 * @returns true if 2xx / true, если код 2xx
 */
function isHttpSuccess(status: unknown): boolean {
  if (typeof status !== 'number' && typeof status !== 'string') {
    return false
  }

  const code = Number(status)
  return !Number.isNaN(code) && code >= 200 && code < 300
}

/**
 * Checks if the API response is successful.
 *
 * Проверяет, является ли ответ API успешным.
 * @param data API response data / данные ответа API
 * @returns true if successful / true, если успешно
 */
export function isApiSuccess<T>(
  data?: ApiData<T>
): boolean {
  if (isArray(data)) {
    return true
  }

  if (!data || !isObjectNotArray(data)) {
    return false
  }

  if (
    data.success === false
    || data.status === 'error'
    || data.status === 'warning'
    || Boolean(data.errorObject)
  ) {
    return false
  }

  if (data.status === 'success' || data.success === true) {
    return true
  }

  if (data.statusObject && 'status' in data.statusObject) {
    return isHttpSuccess(data.statusObject.status)
  }

  if (
    !('status' in data)
    && !('success' in data)
    && !('statusObject' in data)
  ) {
    return isHttpSuccess(Api.getStatus().getStatus())
  }

  return false
}
