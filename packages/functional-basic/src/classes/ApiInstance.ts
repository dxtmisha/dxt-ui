import { getRequestString } from '../functions/getRequestString'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isFilled } from '../functions/isFilled'
import { isOnLine } from '../functions/isOnLine'
import { isString } from '../functions/isString'
import { random } from '../functions/random'
import { sleep } from '../functions/sleep'

import { Geo } from './Geo'
import { Loading } from './Loading'
import { type LoadingInstance } from './LoadingInstance'
import { ErrorCenter } from './ErrorCenter'
import type { ErrorCenterInstance } from './ErrorCenterInstance'

import { ApiCache } from './ApiCache'
import { ApiDataReturn } from './ApiDataReturn'
import { ApiDefault } from './ApiDefault'
import { ApiHeaders } from './ApiHeaders'
import { ApiHydration } from './ApiHydration'
import { ApiPreparation } from './ApiPreparation'
import { ApiStatus } from './ApiStatus'
import { ApiResponse } from './ApiResponse'

import {
  type ApiFetch,
  ApiMethodItem,
  type ApiPreparationEnd
} from '../types/apiTypes'

/** Options for the API instance / Опции для экземпляра API */
export type ApiInstanceOptions = {
  /** Class for working with headers / Класс для работы с заголовками */
  headersClass?: typeof ApiHeaders
  /** Class for working with default request parameters / Класс для работы с параметрами запроса по умолчанию */
  requestDefaultClass?: typeof ApiDefault
  /** Class for working with status / Класс для работы со статусом */
  statusClass?: typeof ApiStatus
  /** Class for working with response / Класс для работы с ответом */
  responseClass?: typeof ApiResponse
  /** Class for working with preparation / Класс для работы с модификацией запроса */
  preparationClass?: typeof ApiPreparation
  /** Instance of loading handler / Экземпляр обработчика загрузки */
  loadingClass?: LoadingInstance
  /** Instance of error handler / Экземпляр обработчика ошибок */
  errorCenterClass?: ErrorCenterInstance
  /** Class for working with hydration / Класс для работы с гидратацией */
  hydrationClass?: typeof ApiHydration
}

/**
 * Core class for managing HTTP requests using the Fetch API.
 *
 * Основной класс для управления HTTP-запросами через Fetch API.
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

  /** Error handler / Обработчик ошибок */
  protected errorCenter: ErrorCenterInstance

  /** Hydration handler / Обработчик гидратации */
  protected hydration: ApiHydration

  /** Timeout for the request in milliseconds / Таймаут запроса в миллисекундах */
  protected timeout: number = 16000

  protected origin?: string

  /**
   * Constructor
   * @param url base path to the script / базовый путь к скрипту
   * @param options options for the API instance / опции для экземпляра API
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
      loadingClass = Loading.getItem(),
      errorCenterClass = ErrorCenter.getItem(),
      hydrationClass = ApiHydration
    } = options

    this.headers = new headersClass()
    this.requestDefault = new requestDefaultClass()
    this.status = new statusClass()
    this.response = new responseClass(this.requestDefault)
    this.preparation = new preparationClass()
    this.loading = loadingClass
    this.errorCenter = errorCenterClass
    this.hydration = new hydrationClass()

    this.hydration.initResponse(this.response)
  }

  /**
   * Checks if the server is running on localhost.
   *
   * Проверяет, работает ли сервер на localhost.
   * @returns true if server is localhost / true, если сервер является локальным
   */
  isLocalhost(): boolean {
    return isDomRuntime()
      && typeof location !== 'undefined'
      && location.hostname === 'localhost'
  }

  /**
   * Returns the status of the last request.
   *
   * Возвращает статус последнего запроса.
   * @returns ApiStatus instance / экземпляр ApiStatus
   */
  getStatus() {
    return this.status
  }

  /**
   * Gets the response handler.
   *
   * Получает обработчик ответа.
   * @returns ApiResponse instance / экземпляр ApiResponse
   */
  getResponse() {
    return this.response
  }

  /**
   * Gets the hydration handler.
   *
   * Получает обработчик гидратации.
   * @returns ApiHydration instance / экземпляр ApiHydration
   */
  getHydration() {
    return this.hydration
  }

  /**
   * Gets the base origin URL combined with the API path.
   *
   * Получает базовый URL источника, объединенный с путем API.
   * @returns final base URL string / итоговая строка базового URL
   */
  getOrigin(): string {
    if (
      this.origin
      && /^\//.test(this.url)
    ) {
      return `${this.origin}${this.url}`
    }

    return this.url
  }

  /**
   * Gets the full path to the request script.
   *
   * Получает полный путь к скрипту запроса.
   * @param path path to the script / путь к скрипту
   * @param api whether to prepend base API URL / нужно ли добавить базовый URL API
   * @returns full URL / полный URL
   */
  getUrl(path: string, api: boolean = true): string {
    return `${api ? this.getOrigin() : ''}${path}`
      .replace('{locale}', Geo.getLocation())
      .replace('{country}', Geo.getCountry())
      .replace('{language}', Geo.getLanguage())
  }

  /**
   * Gets data for the request body.
   *
   * Получает данные для тела запроса.
   * @param request request data / данные запроса
   * @param method HTTP method / HTTP метод
   * @returns body data for non-GET requests or FormData / данные тела для не-GET запросов или FormData
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
   * Gets query string for GET method requests.
   *
   * Получает строку запроса для GET-методов.
   * @param request request data / данные запроса
   * @param path path to request / путь к запросу
   * @param method HTTP method / HTTP метод
   * @returns query string with prefix (? or &) / строка запроса с префиксом (? или &)
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
   * Returns a string representation of the hydration data for the client.
   *
   * Возвращает строковое представление данных гидратации для клиента.
   * @returns HTML script element string / строка HTML элемента script
   */
  getHydrationScript(): string {
    return this.hydration.toString()
  }

  /**
   * Modifies the default header data.
   *
   * Изменяет данные заголовка по умолчанию.
   * @param headers default headers / заголовки по умолчанию
   */
  setHeaders(headers: Record<string, string>): this {
    this.headers.set(headers)
    return this
  }

  /**
   * Modifies the default request data.
   *
   * Изменяет данные запроса по умолчанию.
   * @param request default request data / данные запроса по умолчанию
   */
  setRequestDefault(request: Record<string, any>): this {
    this.requestDefault.set(request)
    return this
  }

  /**
   * Changes the base path to the script.
   *
   * Изменяет базовый путь к скрипту.
   * @param url path to the script / путь к скрипту
   */
  setUrl(url: string): this {
    this.url = url
    return this
  }

  /**
   * Modifies the function to be called before the request.
   *
   * Изменяет функцию для вызова перед запросом.
   * @param callback function to call before request / функция для вызова перед запросом
   */
  setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): this {
    this.preparation.set(callback)
    return this
  }

  /**
   * Modifies the function to be called after the request.
   *
   * Изменяет функцию для вызова после запроса.
   * @param callback function to call after request / функция для вызова после запроса
   */
  setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this {
    this.preparation.setEnd(callback)
    return this
  }

  /**
   * Changes the timeout for the request in milliseconds.
   *
   * Изменяет таймаут запроса в миллисекундах.
   * @param timeout timeout in milliseconds / таймаут в миллисекундах
   */
  setTimeout(timeout: number): this {
    this.timeout = timeout
    return this
  }

  /**
   * Changes the origin (protocol and domain) for the base URL.
   *
   * Изменяет источник (протокол и домен) для базового URL.
   * @param origin protocol and domain / протокол и домен
   */
  setOrigin(origin: string): this {
    this.origin = origin
    return this
  }

  /**
   * Executes a request with the given path or configuration.
   *
   * Выполняет запрос с указанным путем или конфигурацией.
   * @param pathRequest path or configuration / путь или конфигурация запроса
   * @returns Promise with response data / Promise с данными ответа
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
   * Sends a GET method request.
   *
   * Отправляет запрос метода GET.
   * @param request fetch configuration / конфигурация запроса
   * @returns Promise with response data / Promise с данными ответа
   */
  get<T>(request: ApiFetch): Promise<T> {
    return this.request({
      ...request,
      method: ApiMethodItem.get
    })
  }

  /**
   * Sends a POST method request.
   *
   * Отправляет запрос метода POST.
   * @param request fetch configuration / конфигурация запроса
   * @returns Promise with response data / Promise с данными ответа
   */
  post<T>(request: ApiFetch): Promise<T> {
    return this.request({
      ...request,
      method: ApiMethodItem.post
    })
  }

  /**
   * Sends a PUT method request.
   *
   * Отправляет запрос метода PUT.
   * @param request fetch configuration / конфигурация запроса
   * @returns Promise with response data / Promise с данными ответа
   */
  put<T>(request: ApiFetch): Promise<T> {
    return this.request({
      ...request,
      method: ApiMethodItem.put
    })
  }

  /**
   * Sends a PATCH method request.
   *
   * Отправляет запрос метода PATCH.
   * @param request fetch configuration / конфигурация запроса
   * @returns Promise with response data / Promise с данными ответа
   */
  patch<T>(request: ApiFetch): Promise<T> {
    return this.request({
      ...request,
      method: ApiMethodItem.patch
    })
  }

  /**
   * Sends a DELETE method request.
   *
   * Отправляет запрос метода DELETE.
   * @param request fetch configuration / конфигурация запроса
   * @returns Promise with response data / Promise с данными ответа
   */
  delete<T>(request: ApiFetch): Promise<T> {
    return this.request({
      ...request,
      method: ApiMethodItem.delete
    })
  }

  /**
   * Gets retry delay with jitter.
   *
   * Получает задержку повтора с джиттером.
   * @param retryCount count of retries / количество повторов
   * @param retryDelay base delay between retries / базовая задержка между повторами
   * @returns delay in milliseconds / задержка в миллисекундах
   */
  protected getRetryDelay(retryCount: number, retryDelay: number): number {
    return random(retryDelay, retryDelay + (retryCount * retryDelay))
  }

  /**
   * Execute API request with retry support.
   *
   * Выполнить запрос API с поддержкой повторов.
   * @param apiFetch fetch configuration / конфигурация запроса
   * @param retryCount current retry count / текущий счетчик повторов
   */
  protected async fetch<T>(
    apiFetch: ApiFetch,
    retryCount: number = 0
  ): Promise<T> {
    const {
      hideError = false,
      hideLoading = false,
      retry = 0,
      retryDelay = 64,
      globalPreparation = true,
      globalEnd = true,
      endResetLimit = 8
    } = apiFetch

    const emulator = await this.response.emulator<T>(apiFetch)

    if (emulator) {
      return emulator
    }

    const cache = await ApiCache.getByFetch<T>(apiFetch)

    if (cache) {
      this.hydration.toClient(apiFetch, cache)
      return cache
    }

    const status = new ApiStatus()
    let dataReturn: ApiDataReturn<T>

    if (!hideLoading) {
      this.loading.show()
    }

    try {
      await this.preparation.make(globalPreparation, apiFetch)

      const { query, timeoutId } = await this.makeQuery(apiFetch)

      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      const end = await this.preparation.makeEnd(globalEnd, query, apiFetch)

      status.setStatus(query.status, query.statusText)
      this.status.setStatus(query.status, query.statusText)

      if (
        !hideError
        && query.status >= 400
      ) {
        this.makeErrorQuery(query)
      }

      if (
        (end?.reset && retryCount < endResetLimit)
        || retryCount < retry
      ) {
        await sleep(this.getRetryDelay(retryCount, retryDelay))

        if (!hideLoading) {
          this.loading.hide()
        }

        return await this.fetch(apiFetch, retryCount + 1)
      }

      dataReturn = new ApiDataReturn(apiFetch, query, end)
      await dataReturn.init()
    } catch (e) {
      if (!hideError) {
        this.makeError(e as { name: string })
      }

      status.setError(String(e))
      this.status.setError(String(e))

      if (!hideLoading) {
        this.loading.hide()
      }

      throw e
    }

    status.setLastResponse(dataReturn.getData())
    this.status.setLastResponse(dataReturn.getData())

    const responseData = dataReturn.getAndStatus(status)

    if (!hideLoading) {
      this.loading.hide()
    }

    this.hydration.toClient(apiFetch, responseData)
    await ApiCache.setByFetch(apiFetch, responseData)

    return responseData
  }

  /**
   * Executing the HTTP request.
   *
   * Выполнение HTTP-запроса.
   * @param apiFetch fetch configuration / конфигурация запроса
   * @returns object containing response and optional timeout ID / объект, содержащий ответ и опциональный ID таймера
   */
  protected async makeQuery(apiFetch: ApiFetch): Promise<{ query: Response, timeoutId: any }> {
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
    const fetchHeaders = this.headers.getByRequest(apiFetch.request, headers, type)
    const fetchInit = {
      ...init,
      method,
      body: this.getBody(request, method)
    }

    if (fetchHeaders) {
      fetchInit.headers = {
        ...fetchHeaders,
        ...(init.headers ?? {})
      }
    }

    const timeoutId = this.initController(apiFetch, fetchInit)

    return {
      query: await fetch(url, fetchInit),
      timeoutId
    }
  }

  /**
   * Processing an error.
   *
   * Обработка ошибки.
   * @param error error object / объект ошибки
   * @param group error group for error center (default: 'api') / группа ошибки для центра ошибок (по умолчанию: 'api')
   */
  protected makeError(
    error: Record<string, any> & { name: string },
    group: string = 'api'
  ): void {
    switch (error.name) {
      case 'TimeoutError':
        this.errorCenter.on({ group, code: 'timeout', details: error })
        break
      case 'AbortError':
        break
      default:
        if (isOnLine()) {
          this.errorCenter.on({ group, code: 'unknown', details: error })
        } else {
          this.errorCenter.on({ group, code: 'offline', details: error })
        }
    }
  }

  /**
   * Processes an error response.
   *
   * Обрабатывает ошибку ответа.
   * @param query error response / ответ с ошибкой
   */
  protected makeErrorQuery(query: Response): void {
    switch (query.status) {
      case 401:
        this.errorCenter.on({ group: 'api', code: 'unauthorized', details: query })
        break
      case 403:
        this.errorCenter.on({ group: 'api', code: 'forbidden', details: query })
        break
      case 404:
        this.errorCenter.on({ group: 'api', code: 'notFound', details: query })
        break
      case 500:
        this.errorCenter.on({ group: 'api', code: 'server', details: query })
        break
      default:
        this.errorCenter.on({
          group: 'api-server',
          code: String(query.status),
          details: query
        })
    }
  }

  /**
   * Initialize controller for request with timeout support.
   *
   * Инициализация контроллера для запроса с поддержкой таймаута.
   * @param apiFetch request options / опции запроса
   * @param fetchInit request initialization object / объект инициализации запроса
   * @returns timeout ID (from setTimeout) or undefined / ID таймера (от setTimeout) или undefined
   */
  protected initController(
    apiFetch: ApiFetch,
    fetchInit: RequestInit
  ): any {
    const {
      timeout = this.timeout,
      controller
    } = apiFetch

    if (
      timeout
      && !controller
      && typeof AbortSignal !== 'undefined'
      && typeof AbortSignal.timeout === 'function'
    ) {
      fetchInit.signal = AbortSignal.timeout(timeout)
      return undefined
    }

    if (
      !timeout
      && controller
    ) {
      fetchInit.signal = controller.signal
      return undefined
    }

    if (timeout) {
      const controllerFocus = controller ?? new AbortController()

      fetchInit.signal = controllerFocus.signal

      return setTimeout(() => {
        controllerFocus.abort(new DOMException('Timeout', 'TimeoutError'))
      }, timeout)
    }

    return undefined
  }
}
