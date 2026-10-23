// ai-none

import { isNumber } from '../functions/isNumber'
import { isObjectNotArray } from '../functions/isObjectNotArray'
import { isString } from '../functions/isString'
import { toArray } from '../functions/toArray'

import { type ApiErrorStorageList, type ApiErrorStorageItem, ApiMethodItem } from '../types/apiTypes'

/**
 * Manager for handling and identifying API error states.
 *
 * This class provides a centralized storage for API error criteria. It allows the system
 * to identify specific errors by matching the response status, error code from the JSON body,
 * request method, and URL. It is used to transform raw network errors into structured
 * application-level error items for consistent processing.
 *
 * Менеджер для обработки и идентификации состояний ошибок API.
 *
 * Этот класс обеспечивает централизованное хранилище критериев ошибок API. Он позволяет
 * системе идентифицировать конкретные ошибки путем сопоставления статуса ответа,
 * кода ошибки из тела JSON, метода запроса и URL. Используется для преобразования
 * сырых сетевых ошибок в структурированные элементы ошибок прикладного уровня для
 * единообразной обработки.
 */
export class ApiErrorStorage {
  /** Error storage list / Список хранилища ошибок */
  protected storage: ApiErrorStorageList = []

  /**
   * Adds one or more error items or lists to the internal storage.
   *
   * Добавляет один или несколько элементов или списков ошибок во внутреннее хранилище.
   * @param item error item or list of items / элемент ошибки или список элементов
   * @param url URL pattern or RegExp / шаблон URL или регулярное выражение
   * @param method HTTP method of the request / HTTP-метод запроса
   * @returns current instance / текущий экземпляр
   */
  add(
    item: Partial<ApiErrorStorageItem> | Partial<ApiErrorStorageItem>[],
    url?: string | RegExp,
    method?: ApiMethodItem
  ): this {
    toArray(item)
      .forEach((error) => {
        const itemUrl = error.url || url
        const itemMethod = error.method || method

        if (itemUrl && itemMethod) {
          this.storage.push({
            ...error,
            url: itemUrl,
            method: itemMethod
          })
        }
      })

    return this
  }

  /**
   * Finds a matching error item in the storage by analyzing the response.
   *
   * Ищет подходящий элемент ошибки в хранилище путем анализа ответа.
   * @param method API method / Метод API
   * @param response fetch response / Ответ fetch
   * @returns matched error item or undefined / найденный элемент ошибки или undefined
   */
  async find(
    method: ApiMethodItem,
    response: Response
  ): Promise<ApiErrorStorageItem> {
    const body = await this.getBody(response)
    const code = this.getCode(body)
    const message = this.getMessage(body) || response.statusText
    const item = this.findItem(method, response, code)

    if (item) {
      return {
        ...item,
        code: item.code ?? code,
        message: item.message || message
      }
    }

    return {
      url: response.url,
      method,
      code,
      status: response.status,
      message
    }
  }

  /**
   * Validates if the given URL matches the specified pattern.
   *
   * Проверяет, соответствует ли данный URL указанному шаблону.
   * @param url URL to check / URL для проверки
   * @param pattern URL pattern or RegExp / шаблон URL или регулярное выражение
   * @returns true if the URL matches the pattern / true, если URL соответствует шаблону
   */
  protected isUrl(
    url: string,
    pattern: string | RegExp
  ): boolean {
    if (pattern instanceof RegExp) {
      return pattern.test(url)
    }

    return url.includes(pattern)
  }

  /**
   * Attempts to extract the response body in JSON format.
   *
   * Пытается извлечь тело ответа в формате JSON.
   * @param response fetch response / Ответ fetch
   * @returns parsed JSON body or undefined / разобранное тело JSON или undefined
   */
  protected async getBody(
    response: Response
  ): Promise<Record<string, unknown> | undefined> {
    try {
      const data = await response.clone().json()
      return isObjectNotArray(data) ? (data as Record<string, unknown>) : undefined
    } catch {
      return undefined
    }
  }

  /**
   * Attempts to extract an error code from the response body in JSON format.
   *
   * Пытается извлечь код ошибки из тела ответа в формате JSON.
   * @param body response body / тело ответа
   * @returns extracted error code or undefined / извлеченный код ошибки или undefined
   */
  protected getCode(
    body: Record<string, unknown> | undefined
  ): string | number | undefined {
    return this.getDataByKey(body, 'code')
  }

  /**
   * Retrieves data from the response body by key.
   *
   * Получает данные из тела ответа по ключу.
   * @param body response body / тело ответа
   * @param key property key / ключ свойства
   * @returns extracted value or undefined / извлеченное значение или undefined
   */
  protected getDataByKey<R = string | number>(
    body: Record<string, unknown> | undefined,
    key: string
  ): R | undefined {
    if (!body) {
      return undefined
    }

    const value = body[key]
    if (isString(value) || isNumber(value)) {
      return value as R
    }

    if (isObjectNotArray(body.error)) {
      const nestedValue = (body.error as Record<string, unknown>)[key]
      if (isString(nestedValue) || isNumber(nestedValue)) {
        return nestedValue as R
      }
    }

    return undefined
  }

  /**
   * Attempts to extract an error message from the response body in JSON format.
   *
   * Пытается извлечь сообщение об ошибке из тела ответа в формате JSON.
   * @param body response body / тело ответа
   * @returns extracted error message or undefined / извлеченное сообщение об ошибке или undefined
   */
  protected getMessage(
    body: Record<string, unknown> | undefined
  ): string | undefined {
    const message = this.getDataByKey<string>(body, 'message')
    return isString(message) ? message : undefined
  }

  /**
   * Checks if the response matches the criteria of any stored error item.
   *
   * Проверяет, соответствует ли ответ критериям любого сохраненного элемента ошибки.
   * @param method API method / Метод API
   * @param response fetch response / Ответ fetch
   * @param code error code from response body / код ошибки из тела ответа
   * @returns matched error item or undefined if no match found / найденный элемент ошибки или undefined, если совпадений не найдено
   */
  protected findItem(
    method: ApiMethodItem,
    response: Response,
    code?: string | number
  ): ApiErrorStorageItem | undefined {
    for (const item of this.storage) {
      if (
        !item.method.includes(method)
        || !this.isUrl(response.url, item.url)
      ) {
        continue
      }

      if (item.validation?.(response)) {
        return item
      }

      if (item.code !== undefined) {
        if (
          code !== undefined
          && String(item.code) === String(code)
          && (item.status === undefined || item.status === response.status)
        ) {
          return item
        }

        continue
      }

      if (
        item.status !== undefined
        && item.status === response.status
      ) {
        return item
      }
    }

    return undefined
  }
}
