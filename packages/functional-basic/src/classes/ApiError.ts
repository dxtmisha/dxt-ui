import { ApiErrorItem } from './ApiErrorItem'
import { ApiErrorStorage } from './ApiErrorStorage'
import { ServerStorage } from './ServerStorage'

import type { ApiErrorStorageItem, ApiMethodItem } from '../types/apiTypes'

/**
 * Utility class for managing the API error storage and creating error items.
 * It provides a centralized way to access the error storage and wrap raw
 * responses into structured error items.
 *
 * Утилитарный класс для управления хранилищем ошибок API и создания элементов ошибок.
 * Обеспечивает централизованный способ доступа к хранилищу ошибок и оборачивания
 * сырых ответов в структурированные элементы ошибок.
 */
export class ApiError {
  /**
   * Retrieves the singleton instance of the API error storage.
   *
   * Возвращает синглтон-экземпляр хранилища ошибок API.
   * @returns error storage instance / экземпляр хранилища ошибок
   */
  static getStorage(): ApiErrorStorage {
    return ServerStorage.get(
      '__ui:api-error-storage__',
      () => new ApiErrorStorage()
    )
  }

  /**
   * Adds an error item or a list of error items to the storage.
   *
   * Добавляет элемент ошибки или список элементов ошибок в хранилище.
   * @param item error item or list of error items / элемент ошибки или список элементов ошибок
   * @param url URL pattern or RegExp / шаблон URL или регулярное выражение
   * @param method HTTP method of the request / HTTP-метод запроса
   */
  static add(
    item: Partial<ApiErrorStorageItem> | Partial<ApiErrorStorageItem>[],
    url?: string | RegExp,
    method?: ApiMethodItem
  ): void {
    this.getStorage().add(item, url, method)
  }

  /**
   * Creates an ApiErrorItem by matching the response against stored error criteria.
   *
   * Создает ApiErrorItem путем сопоставления ответа с сохраненными критериями ошибок.
   * @param method HTTP method of the request / HTTP-метод запроса
   * @param response raw Fetch response / сырой ответ Fetch
   * @returns structured error item / структурированный элемент ошибки
   */
  static async getItem(
    method: ApiMethodItem,
    response: Response
  ): Promise<ApiErrorItem> {
    const error = await this.getStorage().find(method, response)
    return new ApiErrorItem(method, response, error)
  }
}
