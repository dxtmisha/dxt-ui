import { isFilled } from '../functions/isFilled'
import { isObjectNotArray } from '../functions/isObjectNotArray'

import { type ApiDefaultValue, type ApiFetch } from '../types/apiTypes'

/**
 * Class for working with default API request data.
 *
 * Класс для работы с данными запроса API по умолчанию.
 */
export class ApiDefault {
  /** Default request data/ Данные запроса по умолчанию */
  protected value?: ApiDefaultValue

  /**
   * Checks if default request data exists.
   *
   * Проверяет, существуют ли данные запроса по умолчанию.
   * @returns true if default data exists / true, если данные по умолчанию существуют
   */
  is(): boolean {
    return Boolean(this.value)
  }

  /**
   * Gets the default request data.
   *
   * Получает данные запроса по умолчанию.
   * @returns default request data or undefined / данные запроса по умолчанию или undefined
   */
  get(): ApiDefaultValue | undefined {
    return this.value
  }

  /**
   * Adds default data to the request.
   *
   * Добавляет данные по умолчанию к запросу.
   * @param request request data/ данные запроса
   * @returns merged request data with defaults / объединенные данные запроса с значениями по умолчанию
   */
  request(
    request: ApiFetch['request']
  ): ApiFetch['request'] {
    const value = this.get()

    if (isFilled(value)) {
      if (request instanceof FormData) {
        this.addByFormData(request, value)
      } else if (isObjectNotArray(request)) {
        return {
          ...value,
          ...request
        }
      }
    }

    return request
  }

  /**
   * Sets the default request data.
   *
   * Устанавливает данные запроса по умолчанию.
   * @param request default request data/ данные запроса по умолчанию
   * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
   */
  set(request: ApiDefaultValue): this {
    this.value = request
    return this
  }

  /**
   * Adds default data to FormData request.
   *
   * Добавляет данные по умолчанию к запросу FormData.
   * @param request FormData request/ запрос FormData
   * @param value default values/ значения по умолчанию
   * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
   */
  protected addByFormData(
    request: FormData,
    value: ApiDefaultValue
  ): this {
    Object.entries(value)
      .forEach(([name, value]) => {
        if (!request.has(name)) {
          request.set(name, value)
        }
      })

    return this
  }
}
