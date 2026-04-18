import { isFilled } from '../functions/isFilled'
import { isObjectNotArray } from '../functions/isObjectNotArray'

import type { ApiFetch } from '../types/apiTypes'

/**
 * Class for managing HTTP request headers.
 *
 * Класс для управления заголовками HTTP-запросов.
 */
export class ApiHeaders {
  /** Default headers/ Заголовки по умолчанию */
  protected headers: Record<string, string> = {}

  /**
   * Gets the headers for the request.
   *
   * Получает заголовки для запроса.
   * @param value list of headers/ список заголовков
   * @param type Content-Type header value (default: application/json;charset=UTF-8)/ значение заголовка Content-Type (по умолчанию: application/json;charset=UTF-8)
   * @returns merged headers or undefined / объединенные заголовки или undefined
   */
  get(
    value?: Record<string, string> | null,
    type: string | undefined | null = 'application/json;charset=UTF-8'
  ): Record<string, string> | undefined {
    if (value === null) {
      return undefined
    }

    const headers = { ...this.headers }

    if (isObjectNotArray(value)) {
      Object.assign(headers, value)
    }

    if (isFilled(type)) {
      headers['Content-Type'] = type
    }

    return headers
  }

  /**
   * Gets the headers for the request based on request type.
   *
   * Получает заголовки для запроса на основе типа запроса.
   * @param request request data/ данные запроса
   * @param value list of headers/ список заголовков
   * @param type Content-Type header value (default: application/json;charset=UTF-8)/ значение заголовка Content-Type (по умолчанию: application/json;charset=UTF-8)
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
  set(headers: Record<string, string>): this {
    if (isObjectNotArray(headers)) {
      this.headers = headers
    }

    return this
  }
}
