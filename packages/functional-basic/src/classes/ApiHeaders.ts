import { isFilled } from '../functions/isFilled'
import { isObjectNotArray } from '../functions/isObjectNotArray'

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
   * @param type type of request/ тип запроса
   */
  get(
    value?: Record<string, string> | null,
    type = 'application/json;charset=UTF-8'
  ): Record<string, string> | undefined {
    if (value !== null) {
      const headers = {
        ...this.headers,
        ...(value || {})
      }

      if (isFilled(type)) {
        headers['Content-Type'] = type
      }

      return headers
    }

    return undefined
  }

  /**
   * Modifies the default header data.
   *
   * Изменяет данные заголовка по умолчанию.
   */
  set(headers: Record<string, string>): this {
    if (isObjectNotArray(headers)) {
      this.headers = headers
    }

    return this
  }
}
