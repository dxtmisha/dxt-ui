import { isObjectNotArray } from '../functions/isObjectNotArray'
import { ApiInstance } from './ApiInstance'

import {
  type ApiConfig,
  type ApiFetch,
  ApiMethodItem,
  type ApiPreparationEnd
} from '../types/apiTypes'

/**
 * Class for working with requests.
 *
 * Класс для работы с запросами.
 */
export class Api {
  protected static item = new ApiInstance()

  /**
   * Is the server local.
   *
   * Является ли сервер локальный.
   */
  static isLocalhost(): boolean {
    return this.item.isLocalhost()
  }

  /**
   * Returns the instance of the class.
   *
   * Возвращает инстанс класса.
   */
  static getItem(): ApiInstance {
    return this.item
  }

  /**
   * Returns the status of the last request.
   *
   * Возвращает статус последнего запроса.
   */
  static getStatus() {
    return this.item.getStatus()
  }

  /**
   * Getting the response handler.
   *
   * Получение обработчика ответа.
   */
  static getResponse() {
    return this.item.getResponse()
  }

  /**
   * Getting the full path to the request script.
   *
   * Получение полного пути к скрипту запроса.
   * @param path path to the script/ путь к скрипту
   * @param api adding a path to the site’s API/ добавление пути к API сайта
   */
  static getUrl(path: string, api: boolean = true): string {
    return this.item.getUrl(path, api)
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
    return this.item.getBody(request, method)
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
    return this.item.getBodyForGet(request, path, method)
  }

  /**
   * Modifies the default header data.
   *
   * Изменяет данные заголовка по умолчанию.
   */
  static setHeaders(headers: Record<string, string>): Api {
    this.item.setHeaders(headers)
    return Api
  }

  /**
   * Modifies the default request data.
   *
   * Изменяет данные запроса по умолчанию.
   */
  static setRequestDefault(request: Record<string, any>): Api {
    this.item.setRequestDefault(request)
    return Api
  }

  /**
   * Change the base path to the script.
   *
   * Изменить базовый путь к скрипту.
   * @param url path to the script/ путь к скрипту
   */
  static setUrl(url: string): Api {
    this.item.setUrl(url)
    return Api
  }

  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  static setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): Api {
    this.item.setPreparation(callback)
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
    }

    return this
  }

  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  static setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): Api {
    this.item.setEnd(callback)
    return Api
  }

  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters/ строка запроса или список параметров
   */
  static async request<T>(pathRequest: string | ApiFetch): Promise<T> {
    return this.item.request<T>(pathRequest)
  }

  /**
   * Sends a get method request.
   *
   * Отправляет запрос метода get.
   * @param request list of parameters/ список параметров
   */
  static get<T>(request: ApiFetch): Promise<T> {
    return this.item.get<T>(request)
  }

  /**
   * Sends a post method request.
   *
   * Отправляет запрос метода post.
   * @param request list of parameters/ список параметров
   */
  static post<T>(request: ApiFetch): Promise<T> {
    return this.item.post<T>(request)
  }

  /**
   * Sends a put method request.
   *
   * Отправляет запрос метода put.
   * @param request list of parameters/ список параметров
   */
  static put<T>(request: ApiFetch): Promise<T> {
    return this.item.put<T>(request)
  }

  /**
   * Sends a delete method request.
   *
   * Отправляет запрос метода delete.
   * @param request list of parameters/ список параметров
   */
  static delete<T>(request: ApiFetch): Promise<T> {
    return this.item.delete<T>(request)
  }
}
