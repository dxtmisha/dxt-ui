import { copyObjectLite } from '../functions/copyObjectLite'
import { getRequestString } from '../functions/getRequestString'
import { isArray } from '../functions/isArray'
import { isFilled } from '../functions/isFilled'
import { isObjectNotArray } from '../functions/isObjectNotArray'
import { isString } from '../functions/isString'

import { Geo } from './Geo'
import { Loading } from './Loading'
import { type LoadingInstance } from './LoadingInstance'

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

/** Options for the API instance/ Опции для экземпляра API */
export type ApiInstanceOptions = {
  headersClass?: typeof ApiHeaders
  requestDefaultClass?: typeof ApiDefault
  statusClass?: typeof ApiStatus
  responseClass?: typeof ApiResponse
  preparationClass?: typeof ApiPreparation
  loadingClass?: LoadingInstance
}

/**
 * Class for working with requests.
 *
 * Класс для работы с запросами.
 */
export class ApiInstance {
  /** Headers / Заголовки */
  protected headers: ApiHeaders

  /** Default request parameters / Параметры запроса по умолчанию */
  protected requestDefault: ApiDefault

  /** Status of the last request / Статус последнего запроса */
  protected status: ApiStatus

  /** Response handler / Обработчик ответа */
  protected response: ApiResponse

  /** Request modification handler / Обработчик модификации запроса */
  protected preparation: ApiPreparation

  /** Loading handler / Обработчик загрузки */
  protected loading: LoadingInstance

  /**
   * Constructor
   * @param url base path to the script/ базовый путь к скрипту
   * @param options options for the API instance/ опции для экземпляра API
   */
  constructor(
    protected url: string = '/api/',
    options: ApiInstanceOptions = {}
  ) {
    const {
      headersClass = ApiHeaders,
      requestDefaultClass = ApiDefault,
      statusClass = ApiStatus,
      responseClass = ApiResponse,
      preparationClass = ApiPreparation,
      loadingClass = Loading.getItem()
    } = options

    this.headers = new headersClass()
    this.requestDefault = new requestDefaultClass()
    this.status = new statusClass()
    this.response = new responseClass(this.requestDefault)
    this.preparation = new preparationClass()
    this.loading = loadingClass
  }

  /**
   * Is the server local.
   *
   * Является ли сервер локальный.
   */
  isLocalhost(): boolean {
    return typeof location === 'undefined' || location.hostname === 'localhost'
  }

  /**
   * Returns the status of the last request.
   *
   * Возвращает статус последнего запроса.
   */
  getStatus() {
    return this.status
  }

  /**
   * Getting the response handler.
   *
   * Получение обработчика ответа.
   */
  getResponse() {
    return this.response
  }

  /**
   * Getting the full path to the request script.
   *
   * Получение полного пути к скрипту запроса.
   * @param path path to the script/ путь к скрипту
   * @param api adding a path to the site’s API/ добавление пути к API сайта
   */
  getUrl(path: string, api: boolean = true): string {
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
  getBody(
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
  getBodyForGet(
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
  setHeaders(headers: Record<string, string>): this {
    this.headers.set(headers)
    return this
  }

  /**
   * Modifies the default request data.
   *
   * Изменяет данные запроса по умолчанию.
   */
  setRequestDefault(request: Record<string, any>): this {
    this.requestDefault.set(request)
    return this
  }

  /**
   * Change the base path to the script.
   *
   * Изменить базовый путь к скрипту.
   * @param url path to the script/ путь к скрипту
   */
  setUrl(url: string): this {
    this.url = url
    return this
  }

  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): this {
    this.preparation.set(callback)
    return this
  }

  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this {
    this.preparation.setEnd(callback)
    return this
  }

  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters/ строка запроса или список параметров
   */
  async request<T>(pathRequest: string | ApiFetch): Promise<T> {
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
  get<T>(request: ApiFetch): Promise<T> {
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
  post<T>(request: ApiFetch): Promise<T> {
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
  put<T>(request: ApiFetch): Promise<T> {
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
  delete<T>(request: ApiFetch): Promise<T> {
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
  protected async fetch<T>(apiFetch: ApiFetch): Promise<T> {
    const {
      toData = true,
      hideError = false,
      hideLoading = false,
      queryReturn = undefined,
      globalPreparation = true,
      globalEnd = true
    } = apiFetch

    const emulator = await this.response.emulator<T>(apiFetch)

    if (emulator) {
      return emulator
    }

    const status = new ApiStatus()
    let data: ApiData<T>

    if (!hideLoading) {
      this.loading.show()
    }

    try {
      await this.preparation.make(globalPreparation, apiFetch)

      const query = await this.makeQuery(apiFetch)
      const end = await this.preparation.makeEnd(globalEnd, query, apiFetch)

      status.setStatus(query.status, query.statusText)
      this.status.setStatus(query.status, query.statusText)

      if (end?.reset) {
        this.loading.hide()
        return await this.fetch(apiFetch)
      }

      data = await this.readData<T>(
        query,
        queryReturn,
        end
      )
    } catch (e) {
      if (!hideError) {
        console.error('Api: ', e)
      }

      status.setError(String(e))
      this.status.setError(String(e))

      if (!hideLoading) {
        this.loading.hide()
      }

      throw e
    }

    if (!hideLoading) {
      this.loading.hide()
    }

    status.setLastResponse(data)
    this.status.setLastResponse(data)

    return this.makeStatus(
      this.makeData(data, toData),
      status
    )
  }

  /**
   * Reading data from the response.
   *
   * Чтение данных из ответа.
   * @param query response from the server/ ответ от сервера
   * @param queryReturn custom function for reading data/ кастомная функция для чтения данных
   * @param end finalization data/ данные финализации
   */
  protected async readData<T>(
    query: Response,
    queryReturn: ApiFetch['queryReturn'],
    end: ApiPreparationEnd
  ): Promise<ApiData<T>> {
    if (queryReturn) {
      return await queryReturn(query)
    }

    if ('data' in end) {
      return end.data
    }

    if ((query.headers.get('Content-Type') ?? '').match('application/json')) {
      return await query.json()
    }

    return { data: await query.text() } as ApiData<T>
  }

  /**
   * Executing the request.
   *
   * Выполнение запроса.
   * @param apiFetch property of the request/ свойство запроса
   */
  protected async makeQuery(apiFetch: ApiFetch): Promise<Response> {
    const request: ApiFetch['request'] = this.requestDefault.request(apiFetch.request)
    const {
      api = true,
      path = '',
      pathFull = undefined,
      method = ApiMethodItem.get,
      headers = {},
      type = 'application/json;charset=UTF-8',
      init = {},
      controller = undefined
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

    if (controller) {
      fetchInit.signal = controller.signal
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
  protected makeData<T>(
    data: ApiData<T>,
    toData: boolean
  ): ApiData<T> {
    if (
      !toData
      || !data
      || !isObjectNotArray(data)
      || !('data' in data)
    ) {
      return data
    }

    if (data.data !== null && typeof data.data !== 'object') {
      return data.data as any
    }

    if (isArray(data.data)) {
      return data.data as any
    }

    const item: ApiData<T & Record<string, any>> = copyObjectLite(data.data)

    if (
      'success' in data
      && !('success' in item)
    ) {
      item.success = data.success
    }

    if (
      'status' in data
      && !('status' in item)
    ) {
      item.status = data.status
    }

    if (
      'message' in data
      && !('message' in item)
    ) {
      item.message = data.message
    }

    return item
  }

  /**
   * Appends the status object to the response data if possible.
   *
   * Добавляет объект статуса к данным ответа, если это возможно.
   * @param data response data/ данные ответа
   * @param status status object/ объект статуса
   */
  protected makeStatus<T>(
    data: ApiData<T>,
    status: ApiStatus
  ): ApiData<T> {
    if (
      data
      && isObjectNotArray(data)
    ) {
      return {
        ...data,
        statusObject: status.get()
      }
    }

    return data
  }
}
