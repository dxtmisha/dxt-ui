import { executeFunction } from '../functions/executeFunction'
import { executePromise } from '../functions/executePromise'
import { forEach } from '../functions/forEach'
import { getRef } from '../functions/ref/getRef'
import { getRequestString } from '../functions/getRequestString'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isFilled } from '../functions/isFilled'
import { isFunction } from '../functions/isFunction'
import { isObjectNotArray } from '../functions/isObjectNotArray'
import { isString } from '../functions/isString'
import { random } from '../functions/random'
import { toArray } from '../functions/toArray'

import { Loading } from './Loading'
import { Geo } from './Geo'

import type { RefOrNormal } from '../types/refTypes'

export enum ApiMethodItem {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  delete = 'DELETE'
}

export type ApiMethod = string & ApiMethodItem
export type ApiFetch = {
  api?: boolean
  path?: string
  pathFull?: string
  method?: ApiMethod
  request?: FormData | Record<string, any> | string
  auth?: boolean
  headers?: Record<string, string> | null
  type?: string
  toData?: boolean
  global?: boolean
  devMode?: boolean
  hideError?: boolean
  queryReturn?: (query: Response) => Promise<any>
  globalPreparation?: boolean
  globalEnd?: boolean
  init?: RequestInit
}
export type ApiResponse = {
  path: string | RegExp
  method: ApiMethod
  request?: ApiFetch['request'] | '*any'
  response: any | ((request?: ApiFetch['request']) => any)
  disable?: RefOrNormal<boolean | undefined>
  isForGlobal?: boolean
  lag?: RefOrNormal<boolean | undefined>
}

export type ApiData<T> =
  T &
  {
    data?: T
    success?: boolean
  }

export type ApiPreparationEnd = {
  reset?: boolean
  data?: any
}

const CLASS_RESPONSE_LOADING = 'd-response-loading'

const apiFirst: ApiResponse[] = []

/**
 * Class for working with requests.
 *
 * Класс для работы с запросами.
 */
export class Api {
  protected static url = '/api/'
  protected static response: ApiResponse[] = []
  protected static responseLoading?: any
  protected static headers: Record<string, string> = {}
  protected static requestDefault: Record<string, any> = {}

  protected static preparation = false
  protected static preparationItem?: () => Promise<void>
  protected static preparationEndItem?: (query: Response) => Promise<ApiPreparationEnd>

  protected static status?: number
  protected static statusText?: string
  protected static error?: string
  protected static lastResponse?: any
  protected static lastMessage?: string

  /**
   * Is the server local.
   *
   * Является ли сервер локальный.
   */
  static isLocalhost(): boolean {
    return typeof location === 'undefined' || location.hostname === 'localhost'
  }

  /**
   * Returns the data of the last request.
   *
   * Возвращает данные последнего запроса.
   */
  static getLastResponse<T>(): T {
    return this.lastResponse
  }

  /**
   * Returns messages from the last request.
   *
   * Возвращает сообщения от последнего запроса.
   */
  static getLastMessage(): string {
    return this.lastMessage || ''
  }

  /**
   * Getting the header for the request.
   *
   * Получение заголовка для запроса.
   * @param value list of headers/ список заголовков
   * @param type type of request/ тип запроса
   */
  static getHeaders(
    value?: Record<string, string> | null,
    type = 'application/json;charset=UTF-8'
  ): Record<string, string> | undefined {
    if (value !== null) {
      const headers = {
        ...this.headers,
        ...(value || {})
      }

      if (type) {
        headers['Content-Type'] = type
      }

      return headers
    }

    return undefined
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
    if (
      method !== ApiMethodItem.get
      && isFilled(request)
    ) {
      if (
        request instanceof FormData
        || isString(request)
      ) {
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
   * Returns a list of data about the emulator.
   *
   * Возвращает список данных об эмуляторе.
   */
  static getResponseList(): (ApiResponse & Record<string, any>)[] {
    return this.response.filter(item => item.isForGlobal !== true)
  }

  /**
   * Returns the execution status code.
   *
   * Возвращает код статуса выполнения.
   */
  static getStatus(): number | undefined {
    return this.status
  }

  /**
   * Returns the execution status text.
   *
   * Возвращает текст статуса выполнения.
   */
  static getStatusText(): string | undefined {
    return this.statusText
  }

  /**
   * Returns the script execution error.
   *
   * Возвращает ошибку выполнения скрипта.
   */
  static getError(): string | undefined {
    return this.error
  }

  /**
   * Adds default data to the request.
   *
   * Добавляет данные по умолчанию к запросу.
   */
  static addRequestDefault(request: ApiFetch['request']): ApiFetch['request'] {
    if (request instanceof FormData) {
      forEach(this.requestDefault, (value, name) => {
        if (!request.has(name)) {
          request.set(name, value)
        }
      })
    } else if (isObjectNotArray(request)) {
      return {
        ...this.requestDefault,
        ...request
      }
    }

    return request
  }

  /**
   * Modifies the default header data.
   *
   * Изменяет данные заголовка по умолчанию.
   */
  static setHeaders(headers: Record<string, string>): Api {
    if (isObjectNotArray(headers)) {
      this.headers = headers
    }

    return Api
  }

  /**
   * Modifies the default request data.
   *
   * Изменяет данные запроса по умолчанию.
   */
  static setRequestDefault(request: Record<string, any>) {
    this.requestDefault = request
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
    this.preparationItem = callback
    return Api
  }

  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  static setEnd(callback: (query: Response) => Promise<ApiPreparationEnd>): Api {
    this.preparationEndItem = callback
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
    return this.request({
      ...request,
      method: ApiMethodItem.get
    })
  }

  /**
   * Sends a post method request.
   *
   * Отправляет запрос метода post.
   * @param request list of parameters/ список параметров
   */
  static post<T>(request: ApiFetch): Promise<T> {
    return this.request({
      ...request,
      method: ApiMethodItem.post
    })
  }

  /**
   * Sends a put method request.
   *
   * Отправляет запрос метода put.
   * @param request list of parameters/ список параметров
   */
  static put<T>(request: ApiFetch): Promise<T> {
    return this.request({
      ...request,
      method: ApiMethodItem.put
    })
  }

  /**
   * Sends a delete method request.
   *
   * Отправляет запрос метода delete.
   * @param request list of parameters/ список параметров
   */
  static delete<T>(request: ApiFetch): Promise<T> {
    return this.request({
      ...request,
      method: ApiMethodItem.delete
    })
  }

  /**
   * Adding cached requests.
   *
   * Добавление кешированных запросов.
   * @param response data for caching/ данные для кеширования
   */
  static addResponse(
    response: ApiResponse | ApiResponse[]
  ): Api {
    this.response.push(...toArray(response))
    return Api
  }

  /**
   * Checks if there is a global cached request, if there is, returns it.
   *
   * Проверяет, есть ли глобальный кешированный запрос, если есть, возвращает его.
   * @param path link to the request/ ссылка на запрос
   * @param method request method/ метод запроса
   * @param request data for the request/ данные для запроса
   * @param devMode is it developer mode/ является ли режим разработчика
   */
  protected static getResponse(
    path: string = '',
    method: ApiMethod,
    request?: ApiFetch['request'],
    devMode?: boolean
  ): ApiResponse | undefined {
    return this.response.find((item) => {
      if (
        executeFunction(getRef(item?.disable)) !== true
        && ((item.path instanceof RegExp && path.match(item.path)) || path === item.path)
        && method === item.method
        && (
          apiFirst.indexOf(item) === -1
          || devMode
        )
      ) {
        let response = false

        if (request === item?.request) {
          response = true
        }

        if ('*any' === item?.request) {
          response = true
        }

        if (
          isFilled(request)
          && isFilled(item.request)
          && isObjectNotArray(request)
          && isObjectNotArray(item.request)
          && !(request instanceof FormData)
          && !(item.request instanceof FormData)
          && Object.values(request).length === Object.values(item.request).length
        ) {
          response = Object.entries(item.request).reduce(
            (accum, [key, value]) => (accum && (value === request?.[key] || value === '*any')),
            true
          )
        }

        if (response) {
          if (devMode) {
            console.warn(`Response type: ${item.path}`)
          }

          apiFirst.push(item)
          return true
        }
      }

      return false
    })
  }

  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param apiFetch property of the request/ свойство запроса
   */
  protected static async fetch<T>(apiFetch: ApiFetch): Promise<T> {
    const request: ApiFetch['request'] = this.addRequestDefault(apiFetch.request)
    const {
      path = '',
      method = ApiMethodItem.get,
      toData = true,
      global = method === ApiMethodItem.get,
      devMode = false,
      hideError = false,
      queryReturn = undefined,
      globalPreparation = true,
      globalEnd = true
    } = apiFetch

    if (global || devMode) {
      const response = this.getResponse(path, method, request, devMode)

      if (response) {
        const read = (await this.fetchResponse<T>(response, request))

        if (devMode) {
          console.warn('Response data:', path, request, read)
        }

        return read
      }
    }

    let data: ApiData<T> = {} as ApiData<T>

    Loading.show()

    try {
      if (
        this.preparationItem
        && globalPreparation
      ) {
        await this.makePreparation()
      }

      const query = await this.makeQuery(apiFetch)
      const end = globalEnd && this.preparationEndItem ? (await this.makePreparationEnd(query)) : {}

      this.status = query.status
      this.statusText = query.statusText

      if (end?.reset) {
        Loading.hide()
        return await this.fetch(apiFetch)
      }

      if (queryReturn) {
        data = await queryReturn(query)
      } else if ('data' in end) {
        data = end.data
      } else if (query.headers.get('Content-Type') === 'application/json') {
        data = await query.json()
      } else {
        data = { data: await query.text() } as any
      }
    } catch (e) {
      if (hideError) {
        console.error('Api: ', e)
      }
      this.error = e as any
    }

    Loading.hide()

    return this.makeData(data, toData)
  }

  /**
   * Emulates an execution request.
   *
   * Эмулирует запрос выполнения.
   * @param response Data for pre-request/ Данные для пред-запроса
   * @param request data for the request/ данные для запроса
   */
  protected static fetchResponse<T>(
    response: ApiResponse,
    request?: ApiFetch['request']
  ): Promise<T> {
    this.startResponseLoading()

    return new Promise((resolve) => {
      executePromise(
        isFunction(response.response)
          ? response.response(request)
          : response.response
      ).then((data) => {
        if (getRef(response?.lag)) {
          Loading.show()

          setTimeout(() => {
            this.stopResponseLoading()

            resolve(data)
            Loading.hide()
          }, random(0, 2000))
        } else {
          this.stopResponseLoading()
          resolve(data)
        }
      })
    })
  }

  /**
   * Executing the request.
   *
   * Выполнение запроса.
   * @param apiFetch property of the request/ свойство запроса
   */
  protected static async makeQuery(apiFetch: ApiFetch) {
    const request: ApiFetch['request'] = this.addRequestDefault(apiFetch.request)
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
    const fetchHeaders = this.getHeaders(headers, type)
    const fetchInit = {
      ...init,
      method,
      body: this.getBody(request, method)
    }

    if (fetchHeaders) {
      fetchInit.headers = fetchHeaders
    }

    return await fetch(url, fetchInit)
  }

  /**
   * Preparation before executing the request.
   *
   * Подготовка перед выполнением запроса.
   */
  protected static async makePreparation() {
    return new Promise<void>((resolve) => {
      if (this.preparation) {
        setTimeout(() => this.makePreparation().then(resolve), 160)
      } else if (this.preparationItem) {
        this.preparation = true
        this.preparationItem().then(() => {
          this.preparation = false
          resolve()
        })
      } else {
        resolve()
      }
    })
  }

  /**
   * Analysis of the request after execution.
   *
   * Анализ запроса после выполнения.
   * @param query data received in the request/ данные, полученные в запросе
   */
  protected static async makePreparationEnd(query: Response): Promise<ApiPreparationEnd> {
    let data: ApiPreparationEnd = {}

    if (this.preparationEndItem) {
      data = await this.preparationEndItem(query)
    }

    return data
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
    this.lastResponse = data

    if (
      data
      && isObjectNotArray(data)
    ) {
      if ('message' in data) {
        this.lastMessage = String(data.message)
      }

      if (
        toData
        && 'data' in data
      ) {
        if (isObjectNotArray(data.data)) {
          const item: ApiData<T> = { ...data.data }

          if ('success' in data) {
            item.success = data.success
          }

          return item
        }

        return data.data as T
      }
    }

    return data
  }

  /**
   * Enable loading for request emulation.
   *
   * Включить загрузку для эмуляции запроса.
   */
  protected static startResponseLoading() {
    if (this.responseLoading) {
      clearTimeout(this.responseLoading)
    }

    if (isDomRuntime()) {
      document.body.classList.add(CLASS_RESPONSE_LOADING)
    }
  }

  /**
   * Disable loading for request emulation.
   *
   * Отключить загрузку для эмуляции запроса.
   */
  protected static stopResponseLoading() {
    this.responseLoading = setTimeout(() => {
      this.responseLoading = undefined

      if (isDomRuntime()) {
        document.body.classList.remove(CLASS_RESPONSE_LOADING)
      }
    }, 1200)
  }
}
