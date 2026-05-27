import { isFilled } from '../functions/isFilled'
import { isObjectNotArray } from '../functions/isObjectNotArray'

import type { ApiFetch, ApiHeadersValue } from '../types/apiTypes'
import { executeFunction } from '../functions/executeFunction'

/**
 * Class for managing HTTP request headers.
 *
 * Класс для управления заголовками HTTP-запросов.
 */
export class ApiHeaders {
  /** Default headers / Заголовки по умолчанию */
  protected headers: ApiHeadersValue = {}

  /**
   * Gets the headers for the request.
   *
   * Получает заголовки для запроса.
   * @param value list of headers / список заголовков
   * @param type Content-Type header value / значение заголовка Content-Type
   * @returns merged headers or undefined / объединенные заголовки или undefined
   */
  get(
    value?: Record<string, string> | null,
    type: string | undefined | null = 'application/json;charset=UTF-8'
  ): Record<string, string> | undefined {
    if (value === null) {
      return undefined
    }

    const headers = { ...executeFunction(this.headers) }

    if (isObjectNotArray(value)) {
      for (const key in value) {
        headers[key.toLowerCase()] = value[key]
      }
    }

    if (isFilled(type)) {
      headers['content-type'] = type
    }

    return headers
  }

  /**
   * Gets the headers for the request based on request type.
   *
   * Получает заголовки для запроса на основе типа запроса.
   * @param request request data / данные запроса
   * @param value list of headers / список заголовков
   * @param type Content-Type header value / значение заголовка Content-Type
   * @returns merged headers or undefined / объединенные заголовки или undefined
   */
  getByRequest(
    request: ApiFetch['request'],
    value?: Record<string, string> | null,
    type = 'application/json;charset=UTF-8'
  ): Record<string, string> | undefined {
    if (request instanceof FormData) {
      return this.get(value, null)
    }

    return this.get(value, type)
  }

  /**
   * Sets the default headers.
   *
   * Устанавливает заголовки по умолчанию.
   * @param headers list of default headers/ список заголовков по умолчанию
   * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
   */
  set(headers: ApiHeadersValue): this {
    this.headers = headers
    return this
  }
}
