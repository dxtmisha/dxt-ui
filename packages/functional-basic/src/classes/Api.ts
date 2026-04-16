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
 * It is a static wrapper over {@link ApiInstance}, providing a convenient interface for:
 * - Performing standard HTTP requests (GET, POST, PUT, DELETE).
 * - Global configuration (URL, headers, defaults).
 * - Request lifecycle hooks (`setPreparation`, `setEnd`).
 * - Automatic retries and session handling (Refresh Token).
 * - Data processing and JSON parsing.
 * - Localization support (`{locale}`, `{country}`, `{language}`).
 * - Error handling and {@link ErrorCenter} integration.
 * - Response emulation via {@link ApiResponse}.
 *
 * ---
 *
 * Класс для работы с HTTP-запросами.
 *
 * Является статической оберткой над {@link ApiInstance}, предоставляя удобный интерфейс для:
 * - Выполнения стандартных HTTP-запросов (GET, POST, PUT, PATCH, DELETE).
 * - Глобальной настройки (URL, заголовки, параметры).
 * - Хуков жизненного цикла (`setPreparation`, `setEnd`).
 * - Автоматических повторов и обработки сессий (Refresh Token).
 * - Обработки данных и парсинга JSON.
 * - Поддержки локализации в URL (`{locale}`, `{country}`, `{language}`).
 * - Обработки ошибок и интеграции с {@link ErrorCenter}.
 * - Эмуляции ответов через {@link ApiResponse}.
 *
 * ---
 *
 * ### Usage Examples / Примеры использования:
 *
 * #### 1. Global Setup / Глобальная настройка
 * ```typescript
 * Api.setUrl('https://api.example.com/v1/')
 *    .setHeaders({ 'Authorization': 'Bearer token' });
 * ```
 *
 * #### 2. Basic Request / Базовый запрос
 * ```typescript
 * const data = await Api.get<User>({ path: 'profile' });
 * ```
 */
export class Api {
  /**
   * Is the server local.
   *
   * Является ли сервер локальный.
   */
  static isLocalhost(): boolean {
    return this.getItem().isLocalhost()
  }

  /**
   * Returns the instance of the class.
   *
   * Возвращает инстанс класса.
   */
  static getItem(): ApiInstance {
    return ServerStorage.get('__dxt_api_instance__', () => new ApiInstance())
  }

  /**
   * Returns the status of the last request.
   *
   * Возвращает статус последнего запроса.
   */
  static getStatus() {
    return this.getItem().getStatus()
  }

  /**
   * Getting the response handler.
   *
   * Получение обработчика ответа.
   */
  static getResponse() {
    return this.getItem().getResponse()
  }

  /**
   * Getting the hydration handler.
   *
   * Получение обработчика гидратации.
   */
  static getHydration() {
    return this.getItem().getHydration()
  }

  /**
   * Returns a string representation of the hydration data for the client.
   *
   * Возвращает строковое представление данных гидратации для клиента.
   */
  static getHydrationScript(): string {
    return this.getItem().getHydrationScript()
  }

  /**
   * Getting the full path to the request script.
   *
   * Получение полного пути к скрипту запроса.
   * @param path path to the script/ путь к скрипту
   * @param api adding a path to the site’s API/ добавление пути к API сайта
   */
  static getUrl(path: string, api: boolean = true): string {
    return this.getItem().getUrl(path, api)
  }

  /**
   * Getting data for the body.
   *
   * Получение данных для тела.
   * @param request this request/ данный запрос
   * @param method method for request/ метод запрос
   */
  static getBody(
    request: ApiFetch['request'] = {},
    method = ApiMethodItem.get
  ): string | FormData | undefined {
    return this.getItem().getBody(request, method)
  }

  /**
   * Getting data for the body of the get method.
   *
   * Получение данных для тела метода get.
   * @param request this request/ данный запрос
   * @param path path to request/ путь к запрос
   * @param method method for request/ метод запрос
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
   */
  static setHeaders(headers: Record<string, string>): Api {
    this.getItem().setHeaders(headers)
    return Api
  }

  /**
   * Modifies the default request data.
   *
   * Изменяет данные запроса по умолчанию.
   */
  static setRequestDefault(request: Record<string, any>): Api {
    this.getItem().setRequestDefault(request)
    return Api
  }

  /**
   * Change the base path to the script.
   *
   * Изменить базовый путь к скрипту.
   * @param url path to the script/ путь к скрипту
   */
  static setUrl(url: string): Api {
    this.getItem().setUrl(url)
    return Api
  }

  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  static setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): Api {
    this.getItem().setPreparation(callback)
    return Api
  }

  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  static setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): Api {
    this.getItem().setEnd(callback)
    return Api
  }

  /**
   * Change the timeout for the request in milliseconds.
   *
   * Изменить таймаут запроса в миллисекундах.
   * @param timeout timeout in milliseconds/ таймаут в миллисекундах
   */
  static setTimeout(timeout: number): Api {
    this.getItem().setTimeout(timeout)
    return Api
  }

  /**
   * Set config for API.
   *
   * Установить конфигурацию для API.
   * @param config config for API/ конфигурация для API
   */
  static setConfig(config?: ApiConfig): Api {
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

    return this
  }

  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param pathRequest path or configuration/ путь или конфигурация запроса
   */
  static async request<T>(pathRequest: string | ApiFetch): Promise<T> {
    return this.getItem().request<T>(pathRequest)
  }

  /**
   * Sends a GET method request.
   *
   * Отправляет запрос метода GET.
   * @param request fetch configuration/ конфигурация запроса
   */
  static get<T>(request: ApiFetch): Promise<T> {
    return this.getItem().get<T>(request)
  }

  /**
   * Sends a POST method request.
   *
   * Отправляет запрос метода POST.
   * @param request fetch configuration/ конфигурация запроса
   */
  static post<T>(request: ApiFetch): Promise<T> {
    return this.getItem().post<T>(request)
  }

  /**
   * Sends a PUT method request.
   *
   * Отправляет запрос метода PUT.
   * @param request fetch configuration/ конфигурация запроса
   */
  static put<T>(request: ApiFetch): Promise<T> {
    return this.getItem().put<T>(request)
  }

  /**
   * Sends a PATCH method request.
   *
   * Отправляет запрос метода PATCH.
   * @param request fetch configuration/ конфигурация запроса
   */
  static patch<T>(request: ApiFetch): Promise<T> {
    return this.getItem().patch<T>(request)
  }

  /**
   * Sends a DELETE method request.
   *
   * Отправляет запрос метода DELETE.
   * @param request fetch configuration/ конфигурация запроса
   */
  static delete<T>(request: ApiFetch): Promise<T> {
    return this.getItem().delete<T>(request)
  }
}
