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
   * Getting the header for the request.
   *
   * Получение заголовка для запроса.
   * @param value list of headers/ список заголовков
   * @param type type of request (default: application/json;charset=UTF-8)/ тип запроса (по умолчанию: application/json;charset=UTF-8)
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
   * Getting the header for the request.
   *
   * Получение заголовка для запроса.
   * @param request request data/ данные запроса
   * @param value list of headers/ список заголовков
   * @param type type of request (default: application/json;charset=UTF-8)/ тип запроса (по умолчанию: application/json;charset=UTF-8)
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
   * Modifies the default header data.
   *
   * Изменяет данные заголовка по умолчанию.
   * @param headers list of default headers/ список заголовков по умолчанию
   */
  set(headers: Record<string, string>): this {
    if (isObjectNotArray(headers)) {
      this.headers = headers
    }

    return this
  }
}
