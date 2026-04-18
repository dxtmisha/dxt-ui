import { executeFunction } from '../functions/executeFunction'
import { executePromise } from '../functions/executePromise'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isFilled } from '../functions/isFilled'
import { isFunction } from '../functions/isFunction'
import { isObjectNotArray } from '../functions/isObjectNotArray'
import { random } from '../functions/random'
import { toArray } from '../functions/toArray'

import { ApiDefault } from './ApiDefault'
import { Loading } from './Loading'

import {
  type ApiFetch,
  type ApiMethod,
  ApiMethodItem,
  type ApiResponseItem
} from '../types/apiTypes'

const CLASS_RESPONSE_LOADING = 'd-response-loading'

/**
 * Class for working with API responses.
 *
 * Класс для работы с ответами API.
 */
export class ApiResponse {
  /** List of first-time API requests / Список первичных API запросов */
  protected readonly first: ApiResponseItem[] = []

  /** Cached responses / Кешированные ответы */
  protected readonly response: ApiResponseItem[] = []

  /** Loading instance / Экземпляр загрузки */
  protected loading?: any

  /** Developer mode flag / Флаг режима разработчика */
  protected devMode: boolean = false

  /**
   * Constructor
   * @param requestDefault default request class/ класс запросов по умолчанию
   */
  constructor(
    protected readonly requestDefault: ApiDefault
  ) {
  }

  /**
   * Checks if there is a global cached request, if there is, returns it.
   *
   * Проверяет, есть ли глобальный кешированный запрос, если есть, возвращает его.
   * @param path link to the request / ссылка на запрос
   * @param method request method / метод запроса
   * @param request data for the request / данные для запроса
   * @param devMode is it developer mode / является ли режим разработчика
   * @returns cached response item or undefined / кешированный элемент ответа или undefined
   */
  get(
    path: string = '',
    method: ApiMethod,
    request?: ApiFetch['request'],
    devMode?: boolean
  ): ApiResponseItem | undefined {
    return this.response.find((item) => {
      if (
        !this.isDisable(item)
        && this.isPath(item, path)
        && method === item.method
        && this.isFirst(item, devMode)
        && this.isResponse(item, request)
      ) {
        if (this.isDevMode(devMode)) {
          console.warn(`Response type: ${item.path}`)
        }

        this.first.push(item)
        return true
      }

      return false
    })
  }

  /**
   * Returns a list of cached API responses (excluding global responses).
   *
   * Возвращает список кешированных ответов API (исключая глобальные ответы).
   */
  getList(): (ApiResponseItem & Record<string, any>)[] {
    return this.response.filter(item => item.isForGlobal !== true)
  }

  /**
   * Adds cached requests.
   *
   * Добавляет кешированные запросы.
   * @param response data for caching / данные для кеширования
   */
  add(
    response: ApiResponseItem | ApiResponseItem[]
  ): this {
    this.response.push(...toArray(response) as ApiResponseItem[])
    return this
  }

  /**
   * Sets developer mode.
   *
   * Устанавливает режим разработчика.
   * @param devMode is it developer mode / является ли режим разработчика
   * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
   */
  setDevMode(devMode: boolean): this {
    this.devMode = devMode
    return this
  }

  /**
   * Executes the emulator if available.
   *
   * Выполняет эмулятор, если доступно.
   * @param apiFetch fetch configuration / конфигурация запроса
   * @returns emulated response or undefined / эмулированный ответ или undefined
   */
  async emulator<T>(apiFetch: ApiFetch): Promise<T | undefined> {
    if (!isDomRuntime()) {
      return undefined
    }

    const {
      path = '',
      method = ApiMethodItem.get,
      global = method === ApiMethodItem.get,
      devMode = false
    } = apiFetch

    if (
      global
      || this.isDevMode(devMode)
    ) {
      const request: ApiFetch['request'] = this.requestDefault.request(apiFetch.request)
      const response = this.get(path, method, request, devMode)

      if (response) {
        const read = (await this.fetch<T>(response, request))

        if (this.isDevMode(devMode)) {
          console.warn('Response data:', path, request, read)
        }

        return read
      }
    }

    return undefined
  }

  /**
   * Checks if the cached item is disabled.
   *
   * Проверяет, отключен ли кешированный элемент.
   * @param item cached item / кешированный элемент
   * @returns true if item is disabled / true, если элемент отключен
   */
  protected isDisable(item: ApiResponseItem): boolean {
    return Boolean(executeFunction(item?.disable))
  }

  /**
   * Checks if the path matches the cached one.
   *
   * Проверяет, совпадает ли путь с кешированным.
   * @param item cached item / кешированный элемент
   * @param path request path / путь запроса
   * @returns true if paths match / true, если пути совпадают
   */
  protected isPath(
    item: ApiResponseItem,
    path: string
  ): boolean {
    return path === item.path
      || Boolean(
        item.path instanceof RegExp
        && item.path.test(path)
      )
  }

  /**
   * Checks if it is developer mode.
   *
   * Проверяет, является ли режимом разработчика.
   * @param devMode is it developer mode / является ли режим разработчика
   * @returns true if in dev mode / true, если в режиме разработчика
   */
  protected isDevMode(devMode?: boolean): boolean {
    return devMode || this.devMode
  }

  /**
   * Checks if this is the first request.
   *
   * Проверяет, является ли это первым запросом.
   * @param item cached item / кешированный элемент
   * @param devMode is it developer mode / является ли режим разработчика
   * @returns true if this is the first request / true, если это первый запрос
   */
  protected isFirst(
    item: ApiResponseItem,
    devMode?: boolean
  ): boolean {
    return this.first.indexOf(item) === -1
      || this.isDevMode(devMode)
  }

  /**
   * Checks if the request matches the cached one.
   *
   * Проверяет, совпадает ли запрос с кешированным.
   * @param item cached item / кешированный элемент
   * @param request request data/ данные запроса
   * @returns true if requests match / true, если запросы совпадают
   */
  protected isResponse(
    item: ApiResponseItem,
    request?: ApiFetch['request']
  ): boolean {
    const requestItem = this.requestDefault.request(item?.request)

    return request === requestItem
      || '*any' === requestItem
      || (
        isFilled(request)
        && isFilled(requestItem)
        && isObjectNotArray(request)
        && isObjectNotArray(requestItem)
        && !(request instanceof FormData)
        && !(requestItem instanceof FormData)
        && Object.values(request).length === Object.values(requestItem).length
        && Object.entries(requestItem)
          .every(([key, value]) => value === request?.[key] || value === '*any')
      )
  }

  /**
   * Emulates an execution request (internal fetch).
   *
   * Эмулирует запрос выполнения (внутренний fetch).
   * @param response response item for emulation / элемент ответа для эмуляции
   * @param request data for the request / данные для запроса
   * @returns Promise with emulated response data / Promise с эмулированными данными ответа
   */
  protected fetch<T>(
    response: ApiResponseItem,
    request?: ApiFetch['request']
  ): Promise<T> {
    this.startResponseLoading()

    return new Promise((resolve) => {
      executePromise(
        isFunction(response.response)
          ? response.response(request)
          : response.response
      ).then((data) => {
        if (response?.lag) {
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
   * Enables loading for request emulation.
   *
   * Включает загрузку для эмуляции запроса.
   */
  protected startResponseLoading() {
    if (this.loading) {
      clearTimeout(this.loading)
    }

    if (isDomRuntime()) {
      document.body.classList.add(CLASS_RESPONSE_LOADING)
    }
  }

  /**
   * Disables loading for request emulation.
   *
   * Отключает загрузку для эмуляции запроса.
   */
  protected stopResponseLoading() {
    if (isDomRuntime()) {
      this.loading = setTimeout(() => {
        this.loading = undefined
        document.body.classList.remove(CLASS_RESPONSE_LOADING)
      }, 2400)
    }
  }
}
