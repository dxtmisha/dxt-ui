import { isObjectNotArray } from '../functions/isObjectNotArray'
import { ApiInstance } from './ApiInstance'
import { ServerStorage } from './ServerStorage'

import {
  type ApiConfig,
  type ApiFetch,
  ApiMethodItem,
  type ApiPreparationEnd
} from '../types/apiTypes'

/**
 * Class for working with HTTP requests.
 *
 * Класс для работы с HTTP-запросами.
 */
export class Api {
  /**
   * Checks if the server is running on localhost.
   *
   * Проверяет, работает ли сервер на localhost.
   * @returns true if server is localhost / true, если сервер является локальным
   */
  static isLocalhost(): boolean {
    return this.getItem().isLocalhost()
  }

  /**
   * Returns the singleton instance of the ApiInstance class.
   *
   * Возвращает синглтон-экземпляр класса ApiInstance.
   * @returns ApiInstance singleton / синглтон ApiInstance
   */
  static getItem(): ApiInstance {
    return ServerStorage.get('__ui:api-instance__', () => new ApiInstance())
  }

  /**
   * Returns the status of the last request.
   *
   * Возвращает статус последнего запроса.
   * @returns ApiStatus instance / экземпляр ApiStatus
   */
  static getStatus() {
    return this.getItem().getStatus()
  }

  /**
   * Gets the response handler.
   *
   * Получает обработчик ответа.
   * @returns ApiResponse instance / экземпляр ApiResponse
   */
  static getResponse() {
    return this.getItem().getResponse()
  }

  /**
   * Gets the hydration handler.
   *
   * Получает обработчик гидратации.
   * @returns ApiHydration instance / экземпляр ApiHydration
   */
  static getHydration() {
    return this.getItem().getHydration()
  }

  /**
   * Returns a string representation of the hydration data for the client.
   *
   * Возвращает строковое представление данных гидратации для клиента.
   * @returns HTML script element string / строка HTML элемента script
   */
  static getHydrationScript(): string {
    return this.getItem().getHydrationScript()
  }

  /**
   * Gets the full path to the request script.
   *
   * Получает полный путь к скрипту запроса.
   * @param path path to the script / путь к скрипту
   * @param api whether to prepend base API URL / нужно ли добавить базовый URL API
   * @returns full URL / полный URL
   */
  static getUrl(path: string, api: boolean = true): string {
    return this.getItem().getUrl(path, api)
  }

  /**
   * Gets data for the request body.
   *
   * Получает данные для тела запроса.
   * @param request request data / данные запроса
   * @param method HTTP method / HTTP метод
   * @returns body data for non-GET requests or FormData / данные тела для не-GET запросов или FormData
   */
  static getBody(
    request: ApiFetch['request'] = {},
    method = ApiMethodItem.get
  ): string | FormData | undefined {
    return this.getItem().getBody(request, method)
  }

  /**
   * Gets query string for GET method requests.
   *
   * Получает строку запроса для GET-методов.
   * @param request request data / данные запроса
   * @param path path to request / путь к запросу
   * @param method HTTP method / HTTP метод
   * @returns query string for GET requests / строка запроса для GET-запросов
   */
  static getBodyForGet(
    request: ApiFetch['request'],
    path: string = '',
    method = ApiMethodItem.get
  ): string {
    return this.getItem().getBodyForGet(request, path, method)
  }

  /**
   * Modifies the default header data.
   *
   * Изменяет данные заголовка по умолчанию.
   * @param headers default headers / заголовки по умолчанию
   */
  static setHeaders(headers: Record<string, string>): void {
    this.getItem().setHeaders(headers)
  }

  /**
   * Modifies the default request data.
   *
   * Изменяет данные запроса по умолчанию.
   * @param request default request data / данные запроса по умолчанию
   */
  static setRequestDefault(request: Record<string, any>): void {
    this.getItem().setRequestDefault(request)
  }

  /**
   * Changes the base path to the script.
   *
   * Изменяет базовый путь к скрипту.
   * @param url path to the script / путь к скрипту
   */
  static setUrl(url: string): void {
    this.getItem().setUrl(url)
  }

  /**
   * Modifies the function to be called before the request.
   *
   * Изменяет функцию для вызова перед запросом.
   * @param callback function to call before request / функция для вызова перед запросом
   */
  static setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): void {
    this.getItem().setPreparation(callback)
  }

  /**
   * Modifies the function to be called after the request.
   *
   * Изменяет функцию для вызова после запроса.
   * @param callback function to call after request / функция для вызова после запроса
   */
  static setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): void {
    this.getItem().setEnd(callback)
  }

  /**
   * Changes the timeout for the request in milliseconds.
   *
   * Изменяет таймаут запроса в миллисекундах.
   * @param timeout timeout in milliseconds / таймаут в миллисекундах
   */
  static setTimeout(timeout: number): void {
    this.getItem().setTimeout(timeout)
  }

  /**
   * Sets multiple API configuration options at once.
   *
   * Устанавливает несколько опций конфигурации API одновременно.
   * @param config configuration object / объект конфигурации
   */
  static setConfig(config?: ApiConfig): void {
    if (
      config
      && isObjectNotArray(config)
    ) {
      if (config.urlRoot) {
        this.setUrl(config.urlRoot)
      }

      if (config.headers) {
        this.setHeaders(config.headers)
      }

      if (config.requestDefault) {
        this.setRequestDefault(config.requestDefault)
      }

      if (config.preparation) {
        this.setPreparation(config.preparation)
      }

      if (config.end) {
        this.setEnd(config.end)
      }

      if (config.timeout) {
        this.setTimeout(config.timeout)
      }
    }
  }

  /**
   * Executes a request with the given path or configuration.
   *
   * Выполняет запрос с указанным путем или конфигурацией.
   * @param pathRequest path or configuration / путь или конфигурация запроса
   * @returns Promise with response data / Promise с данными ответа
   */
  static async request<T>(pathRequest: string | ApiFetch): Promise<T> {
    return this.getItem().request<T>(pathRequest)
  }

  /**
   * Sends a GET method request.
   *
   * Отправляет запрос метода GET.
   * @param request fetch configuration / конфигурация запроса
   * @returns Promise with response data / Promise с данными ответа
   */
  static get<T>(request: ApiFetch): Promise<T> {
    return this.getItem().get<T>(request)
  }

  /**
   * Sends a POST method request.
   *
   * Отправляет запрос метода POST.
   * @param request fetch configuration / конфигурация запроса
   * @returns Promise with response data / Promise с данными ответа
   */
  static post<T>(request: ApiFetch): Promise<T> {
    return this.getItem().post<T>(request)
  }

  /**
   * Sends a PUT method request.
   *
   * Отправляет запрос метода PUT.
   * @param request fetch configuration / конфигурация запроса
   * @returns Promise with response data / Promise с данными ответа
   */
  static put<T>(request: ApiFetch): Promise<T> {
    return this.getItem().put<T>(request)
  }

  /**
   * Sends a PATCH method request.
   *
   * Отправляет запрос метода PATCH.
   * @param request fetch configuration / конфигурация запроса
   * @returns Promise with response data / Promise с данными ответа
   */
  static patch<T>(request: ApiFetch): Promise<T> {
    return this.getItem().patch<T>(request)
  }

  /**
   * Sends a DELETE method request.
   *
   * Отправляет запрос метода DELETE.
   * @param request fetch configuration / конфигурация запроса
   * @returns Promise with response data / Promise с данными ответа
   */
  static delete<T>(request: ApiFetch): Promise<T> {
    return this.getItem().delete<T>(request)
  }
}
