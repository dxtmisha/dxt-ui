import { isObjectNotArray } from '../functions/isObjectNotArray'

import { type ApiDefaultValue, type ApiFetch } from '../types/apiTypes'

/**
 * Class for working with default API request data.
 *
 * Класс для работы с данными запроса API по умолчанию.
 */
export class ApiDefault<V = ApiDefaultValue> {
  /** Default request data/ Данные запроса по умолчанию */
  protected value?: V

  /**
   * Checks if default request data exists.
   *
   * Проверяет, существуют ли данные запроса по умолчанию.
   */
  is(): boolean {
    return Boolean(this.value)
  }

  /**
   * Gets the default request data.
   *
   * Получает данные запроса по умолчанию.
   */
  get(): ApiDefaultValue {
    return this.value as ApiDefaultValue
  }

  /**
   * Adds default data to the request.
   *
   * Добавляет данные по умолчанию к запросу.
   * @param request request data/ данные запроса
   */
  request(
    request: ApiFetch['request']
  ): ApiFetch['request'] {
    const value = this.get()

    if (value) {
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
   * Modifies the default request data.
   *
   * Изменяет данные запроса по умолчанию.
   */
  set(request: V) {
    this.value = request
  }

  /**
   * Adds default data to FormData request.
   *
   * Добавляет данные по умолчанию к запросу FormData.
   * @param request FormData request/ запрос FormData
   * @param value default values/ значения по умолчанию
   */
  protected addByFormData(
    request: FormData,
    value: ApiDefaultValue
  ) {
    for (const name in value) {
      if (!request.has(name)) {
        request.set(name, value[name])
      }
    }
  }
}
