import { copyObjectLite } from '../functions/copyObjectLite'
import { getRequestString } from '../functions/getRequestString'
import { isFilled } from '../functions/isFilled'
import { isObjectNotArray } from '../functions/isObjectNotArray'
import { isString } from '../functions/isString'

import { Geo } from './Geo'
import { Loading } from './Loading'

import { ApiHeaders } from './ApiHeaders'
import { ApiDefault } from './ApiDefault'
import { ApiStatus } from './ApiStatus'
import { ApiResponse } from './ApiResponse'
import { ApiPreparation } from './ApiPreparation'

import {
  type ApiData,
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
  protected static url = '/api/'

  protected static headers = new ApiHeaders()
  protected static requestDefault: ApiDefault = new ApiDefault()
  protected static status = new ApiStatus()
  protected static response = new ApiResponse(this.requestDefault)
  protected static preparation = new ApiPreparation()

  /**
   * Is the server local.
   *
   * Является ли сервер локальный.
   */
  static isLocalhost(): boolean {
    return typeof location === 'undefined' || location.hostname === 'localhost'
  }

  /**
   * Returns the status of the last request.
   *
   * Возвращает статус последнего запроса.
   */
  static getStatus() {
    return this.status
  }

  /**
   * Getting the response handler.
   *
   * Получение обработчика ответа.
   */
  static getResponse() {
    return this.response
  }

  /**
   * Getting the full path to the request script.
   *
   * Получение полного пути к скрипту запроса.
   * @param path path to the script/ путь к скрипту
   * @param api adding a path to the site’s API/ добавление пути к API сайта
   */
  static getUrl(path: string, api: boolean = true): string {
    return `${api ? this.url : ''}${path}`
      .replace('{locale}', Geo.getLocation())
      .replace('{country}', Geo.getCountry())
      .replace('{language}', Geo.getLanguage())
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
    if (request instanceof FormData) {
      return request
    }

    if (
      method !== ApiMethodItem.get
      && isFilled(request)
    ) {
      if (isString(request)) {
        return request
      }

      return JSON.stringify(request)
    }

    return undefined
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
    if (method === ApiMethodItem.get) {
      const type = path.match(/\?/) ? '&' : '?'
      const body = typeof request === 'object' ? getRequestString(request) : request

      if (isFilled(body)) {
        return `${type}${body}`
      }
    }

    return ''
  }

  /**
   * Modifies the default header data.
   *
   * Изменяет данные заголовка по умолчанию.
   */
  static setHeaders(headers: Record<string, string>): Api {
    this.headers.set(headers)
    return Api
  }

  /**
   * Modifies the default request data.
   *
   * Изменяет данные запроса по умолчанию.
   */
  static setRequestDefault(request: Record<string, any>): Api {
    this.requestDefault.set(request)
    return Api
  }

  /**
   * Change the base path to the script.
   *
   * Изменить базовый путь к скрипту.
   * @param url path to the script/ путь к скрипту
   */
  static setUrl(url: string): Api {
    this.url = url
    return Api
  }

  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  static setPreparation(callback: () => Promise<void>): Api {
    this.preparation.set(callback)
    return Api
  }

  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  static setEnd(callback: (query: Response) => Promise<ApiPreparationEnd>): Api {
    this.preparation.setEnd(callback)
    return Api
  }

  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters/ строка запроса или список параметров
   */
  static async request<T>(pathRequest: string | ApiFetch): Promise<T> {
    if (isString(pathRequest)) {
      return await this.fetch<T>({
        path: pathRequest
      })
    }

    return await this.fetch<T>(pathRequest)
  }

  /**
   * Sends a get method request.
   *
   * Отправляет запрос метода get.
   * @param request list of parameters/ список параметров
   */
  static get<T>(request: ApiFetch): Promise<T> {
    return this.request(copyObjectLite(request, {
      method: ApiMethodItem.get
    }))
  }

  /**
   * Sends a post method request.
   *
   * Отправляет запрос метода post.
   * @param request list of parameters/ список параметров
   */
  static post<T>(request: ApiFetch): Promise<T> {
    return this.request(copyObjectLite(request, {
      method: ApiMethodItem.post
    }))
  }

  /**
   * Sends a put method request.
   *
   * Отправляет запрос метода put.
   * @param request list of parameters/ список параметров
   */
  static put<T>(request: ApiFetch): Promise<T> {
    return this.request(copyObjectLite(request, {
      method: ApiMethodItem.put
    }))
  }

  /**
   * Sends a delete method request.
   *
   * Отправляет запрос метода delete.
   * @param request list of parameters/ список параметров
   */
  static delete<T>(request: ApiFetch): Promise<T> {
    return this.request(copyObjectLite(request, {
      method: ApiMethodItem.delete
    }))
  }

  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param apiFetch property of the request/ свойство запроса
   */
  protected static async fetch<T>(apiFetch: ApiFetch): Promise<T> {
    const {
      toData = true,
      hideError = false,
      queryReturn = undefined,
      globalPreparation = true,
      globalEnd = true
    } = apiFetch

    const emulator = await this.response.emulator<T>(apiFetch)

    if (emulator) {
      return emulator
    }

    let data: ApiData<T> = {} as ApiData<T>

    Loading.show()

    try {
      await this.preparation.make(globalPreparation)

      const query = await this.makeQuery(apiFetch)
      const end = await this.preparation.makeEnd(globalEnd, query)

      this.status.setStatus(
        query.status,
        query.statusText
      )

      if (end?.reset) {
        Loading.hide()
        return await this.fetch(apiFetch)
      }

      data = await this.readData(
        query,
        queryReturn,
        end
      )
    } catch (e) {
      if (!hideError) {
        console.error('Api: ', e)
      }

      this.status.setError(String(e))
    }

    Loading.hide()

    return this.makeData(data, toData)
  }

  /**
   * Reading data from the response.
   *
   * Чтение данных из ответа.
   * @param query response from the server/ ответ от сервера
   * @param queryReturn custom function for reading data/ кастомная функция для чтения данных
   * @param end finalization data/ данные финализации
   */
  protected static async readData(
    query: Response,
    queryReturn: ApiFetch['queryReturn'],
    end: ApiPreparationEnd
  ) {
    if (queryReturn) {
      return await queryReturn(query)
    }

    if ('data' in end) {
      return end.data
    }

    if ((query.headers.get('Content-Type') ?? '').match('application/json')) {
      return await query.json()
    }

    return { data: await query.text() } as any
  }

  /**
   * Executing the request.
   *
   * Выполнение запроса.
   * @param apiFetch property of the request/ свойство запроса
   */
  protected static async makeQuery(apiFetch: ApiFetch): Promise<Response> {
    const request: ApiFetch['request'] = this.requestDefault.request(apiFetch.request)
    const {
      api = true,
      path = '',
      pathFull = undefined,
      method = ApiMethodItem.get,
      headers = {},
      type = 'application/json;charset=UTF-8',
      init = {}
    } = apiFetch

    const pathFinal = pathFull ?? this.getUrl(path, api)
    const url = `${pathFinal}${this.getBodyForGet(request, pathFinal, method)}`
    const fetchHeaders = this.headers.get(headers, type)
    const fetchInit = copyObjectLite(init, {
      method,
      body: this.getBody(request, method)
    })

    if (fetchHeaders) {
      fetchInit.headers = fetchHeaders
    }

    return await fetch(url, fetchInit)
  }

  /**
   * Transforms data if needed.
   *
   * Преобразует данные, если нужно.
   * @param data data for transformation/ данные для преобразования
   * @param toData is it necessary to process the data/ нужно ли обрабатывать данные
   */
  protected static makeData<T>(
    data: ApiData<T>,
    toData: boolean
  ): T {
    this.status.setLastResponse(data)

    if (
      data
      && toData
      && isObjectNotArray(data)
      && 'data' in data
    ) {
      if (isObjectNotArray(data.data)) {
        const item: ApiData<T> = copyObjectLite(data.data)

        if ('success' in data) {
          item.success = data.success
        }

        return item
      }

      return data.data as T
    }

    return data
  }
}
