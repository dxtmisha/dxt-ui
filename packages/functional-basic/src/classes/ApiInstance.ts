import { copyObjectLite } from '../functions/copyObjectLite'
import { getRequestString } from '../functions/getRequestString'
import { isArray } from '../functions/isArray'
import { isFilled } from '../functions/isFilled'
import { isObjectNotArray } from '../functions/isObjectNotArray'
import { isOnLine } from '../functions/isOnLine'
import { isString } from '../functions/isString'
import { random } from '../functions/random'
import { sleep } from '../functions/sleep'

import { Geo } from './Geo'
import { Loading } from './Loading'
import { type LoadingInstance } from './LoadingInstance'
import { ErrorCenter } from './ErrorCenter'
import type { ErrorCenterInstance } from './ErrorCenterInstance'

import { ApiDefault } from './ApiDefault'
import { ApiHeaders } from './ApiHeaders'
import { ApiHydration } from './ApiHydration'
import { ApiPreparation } from './ApiPreparation'
import { ApiStatus } from './ApiStatus'
import { ApiResponse } from './ApiResponse'

import {
  type ApiData,
  type ApiFetch,
  ApiMethodItem,
  type ApiPreparationEnd
} from '../types/apiTypes'

/** Options for the API instance/ Опции для экземпляра API */
export type ApiInstanceOptions = {
  /** Class for working with headers/ Класс для работы с заголовками */
  headersClass?: typeof ApiHeaders
  /** Class for working with default request parameters/ Класс для работы с параметрами запроса по умолчанию */
  requestDefaultClass?: typeof ApiDefault
  /** Class for working with status/ Класс для работы со статусом */
  statusClass?: typeof ApiStatus
  /** Class for working with response/ Класс для работы с ответом */
  responseClass?: typeof ApiResponse
  /** Class for working with preparation/ Класс для работы с модификацией запроса */
  preparationClass?: typeof ApiPreparation
  /** Instance of loading handler/ Экземпляр обработчика загрузки */
  loadingClass?: LoadingInstance
  /** Instance of error handler/ Экземпляр обработчика ошибок */
  errorCenterClass?: ErrorCenterInstance
  /** Class for working with hydration/ Класс для работы с гидратацией */
  hydrationClass?: typeof ApiHydration
}

/**
 * Core class for managing HTTP requests using the Fetch API.
 *
 * `ApiInstance` is a powerful and flexible engine for network communication, designed to handle
 * complex scenarios like automatic token refreshing, request retries, response emulation,
 * and global loading/error management. It is used as the base for the static {@link Api} class.
 *
 * ### Key Features:
 * - **CRUD operations**: Support for `GET`, `POST`, `PUT`, `DELETE` methods with full type support.
 * - **Lifecycle Hooks**: `setPreparation` (before request) and `setEnd` (after response) callbacks.
 * - **Automatic Retries**: Built-in support for request repetition with randomized delays (jitter).
 * - **Data Processing**: Intelligent JSON/FormData parsing and automatic payload extraction.
 * - **Response Emulation**: Intercept and mock requests using the {@link ApiResponse} manager.
 * - **Localization**: Automated substitution of `{locale}`, `{country}`, and `{language}` in URLs.
 * - **Integration**: Seamless connectivity with {@link Loading} and {@link ErrorCenter} components.
 *
 * ---
 *
 * Основной класс для управления HTTP-запросами через Fetch API.
 *
 * `ApiInstance` — это мощный и гибкий движок для сетевого взаимодействия, разработанный для решения
 * сложных задач, таких как автоматическое обновление токенов, повторы запросов, эмуляция ответов
 * и глобальное управление индикацией загрузки и ошибками. Используется как основа для статического класса {@link Api}.
 *
 * ### Ключевые особенности:
 * - **CRUD операции**: Поддержка методов `GET`, `POST`, `PUT`, `DELETE` с полной типизацией.
 * - **Хуки жизненного цикла**: Колбэки `setPreparation` (до запроса) и `setEnd` (после ответа).
 * - **Автоматические повторы**: Встроенная поддержка повтора запросов с джиттером.
 * - **Обработка данных**: Интеллектуальный парсинг JSON/FormData и извлечение полезной нагрузки.
 * - **Эмуляция ответов**: Перехват и подмена запросов через менеджер {@link ApiResponse}.
 * - **Локализация**: Автоматическая подстановка плейсхолдеров `{locale}`, `{country}` и `{language}`.
 * - **Интеграция**: Бесшовная связь с компонентами {@link Loading} и {@link ErrorCenter}.
 *
 * ---
 *
 * ### Usage Examples / Примеры использования:
 *
 * #### 1. Initialization and Configuration / Инициализация и настройка
 * ```typescript
 * const api = new ApiInstance('https://api.example.com/v1/');
 * api.setHeaders({ 'Accept-Language': 'en' })
 *    .setTimeout(10000);
 * ```
 *
 * #### 2. Simple Request / Простой запрос
 * ```typescript
 * const users = await api.get<User[]>({ path: 'users' });
 * ```
 *
 * #### 3. Lifecycle Hooks: Auth & Refresh Token / Хуки жизненного цикла: Авторизация и Refresh Token
 * ```typescript
 * // Preparation hook for adding tokens / Хук подготовки для добавления токенов
 * api.setPreparation(async (apiFetch) => {
 *   const token = localStorage.getItem('token');
 *   if (token) apiFetch.headers = { ...apiFetch.headers, Authorization: `Bearer ${token}` };
 * });
 *
 * // End hook for token refresh / Хук завершения для обновления токена
 * api.setEnd(async (response, apiFetch) => {
 *   if (response.status === 401) {
 *     const refreshed = await refreshToken();
 *     if (refreshed) return { reset: true }; // Retries the request / Повтор запроса
 *   }
 *   return {};
 * });
 * ```
 *
 * #### 4. Response Emulation (Mocking) / Эмуляция ответов (Моки)
 * ```typescript
 * api.getResponse().add({
 *   path: 'profile',
 *   method: 'GET',
 *   response: { id: 1, name: 'John Doe' },
 *   lag: true // simulate network delay / имитация задержки сети
 * });
 * ```
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

  /** Timeout for the request in milliseconds/ Таймаут запроса в миллисекундах */
  protected timeout: number = 16000

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
   * Getting the hydration handler.
   *
   * Получение обработчика гидратации.
   */
  getHydration() {
    return this.hydration
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
   * Returns a string representation of the hydration data for the client.
   *
   * Возвращает строковое представление данных гидратации для клиента.
   */
  getHydrationScript(): string {
    return this.hydration.toString()
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
   * Change the timeout for the request in milliseconds.
   *
   * Изменить таймаут запроса в миллисекундах.
   * @param timeout timeout in milliseconds/ таймаут в миллисекундах
   */
  setTimeout(timeout: number): this {
    this.timeout = timeout
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
   * Get retry delay.
   *
   * Получить задержку повтора.
   * @param retryCount count of retries/ количество повторов
   * @param retryDelay delay between retries/ задержка между повторами
   */
  protected getRetryDelay(retryCount: number, retryDelay: number): number {
    return random(retryDelay, retryDelay + (retryCount * retryDelay))
  }

  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param apiFetch property of the request/ свойство запроса
   * @param retryCount count of retries/ количество повторов
   */
  protected async fetch<T>(
    apiFetch: ApiFetch,
    retryCount: number = 0
  ): Promise<T> {
    const {
      toData = true,
      hideError = false,
      hideLoading = false,
      retry = 0,
      retryDelay = 64,
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
        end?.reset
        || retryCount < retry
      ) {
        await sleep(this.getRetryDelay(retryCount, retryDelay))

        this.loading.hide()
        return await this.fetch(apiFetch, retryCount + 1)
      }

      data = await this.readData<T>(
        query,
        queryReturn,
        end
      )
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

    if (!hideLoading) {
      this.loading.hide()
    }

    status.setLastResponse(data)
    this.status.setLastResponse(data)

    const responseData = this.makeStatus(
      this.makeData(data, toData),
      status
    )

    this.hydration.toClient(apiFetch, responseData)

    return responseData
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
    const fetchInit = copyObjectLite(init, {
      method,
      body: this.getBody(request, method)
    })

    if (fetchHeaders) {
      fetchInit.headers = fetchHeaders
    }

    const timeoutId = this.initController(apiFetch, fetchInit)

    return {
      query: await fetch(url, fetchInit),
      timeoutId
    }
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

  /**
   * Processing an error.
   *
   * Обработка ошибки.
   * @param error error object/ объект ошибки
   * @param group error group/ группа ошибки
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
   * Processing an error query.
   *
   * Обработка ошибки запроса.
   * @param query error query/ ошибка запроса
   */
  protected makeErrorQuery(query: Response): void {
    switch (query.status) {
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
   * Initialize controller for request.
   *
   * Инициализация контроллера для запроса.
   * @param apiFetch request options/ опции запроса
   * @param fetchInit request initialization/ инициализация запроса
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
