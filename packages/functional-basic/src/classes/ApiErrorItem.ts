import { executeFunction } from '../library'
import type { ApiErrorStorageItem, ApiMethodItem } from '../types/apiTypes'

/**
 * Class for managing and extracting data from an API error response.
 * It encapsulates the request method, raw response, and identified error criteria,
 * providing unified methods to retrieve error codes, messages, and status.
 *
 * Класс для управления и извлечения данных из ответа об ошибке API.
 * Инкапсулирует метод запроса, сырой ответ и идентифицированные критерии ошибки,
 * предоставляя единые методы для получения кодов ошибок, сообщений и статуса.
 */
export class ApiErrorItem {
  /** Cached JSON response body / Кэшированное тело ответа JSON */
  protected jsonResponse: any | undefined

  /**
   * Constructor for ApiErrorItem.
   *
   * Конструктор для ApiErrorItem.
   * @param method HTTP method used for the request / HTTP-метод, использованный для запроса
   * @param response raw Fetch response object / сырой объект ответа Fetch
   * @param error matched error item from storage (optional) / найденный элемент ошибки из хранилища (опционально)
   */
  constructor(
    protected readonly method: ApiMethodItem,
    protected readonly response: Response,
    protected readonly error: ApiErrorStorageItem
  ) { }

  /**
   * Returns the HTTP method used for the request.
   *
   * Возвращает HTTP-метод, использованный для запроса.
   * @returns HTTP method / HTTP-метод
   */
  getMethod(): ApiMethodItem {
    return this.method
  }

  /**
   * Returns the raw Fetch response object.
   *
   * Возвращает сырой объект ответа Fetch.
   * @returns Fetch response / ответ Fetch
   */
  getResponse(): Response {
    return this.response
  }

  /**
   * Returns the identified error item from storage if it exists.
   *
   * Возвращает идентифицированный элемент ошибки из хранилища, если он существует.
   * @returns error item or undefined / элемент ошибки или undefined
   */
  getError(): ApiErrorStorageItem {
    return this.error
  }

  /**
   * Asynchronously retrieves the error code from storage or the response body.
   *
   * Асинхронно получает код ошибки из хранилища или тела ответа.
   * @returns error code or undefined / код ошибки или undefined
   */
  getCode(): string | undefined {
    return this.error?.code
  }

  /**
   * Asynchronously retrieves the error message.
   * Checks the identified error item, the response body, or falls back to status text.
   *
   * Асинхронно получает сообщение об ошибке.
   * Проверяет идентифицированный элемент ошибки, тело ответа или использует текст статуса.
   * @returns error message or undefined / сообщение об ошибке или undefined
   */
  getMessage(): string | undefined {
    return executeFunction(this.error?.message, this.getResponse())
  }

  /**
   * Returns the HTTP status code of the response.
   *
   * Возвращает код статуса HTTP ответа.
   * @returns status code / код статуса
   */
  getStatus(): number {
    return this.response.status
  }
}
