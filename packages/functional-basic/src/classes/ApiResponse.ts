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

import { type ApiFetch, type ApiMethod, ApiMethodItem, type ApiResponseItem } from '../types/apiTypes'

const CLASS_RESPONSE_LOADING = 'd-response-loading'

export class ApiResponse<V extends ApiResponseItem> {
  /** List of first-time API requests/ Список первичных API запросов */
  protected readonly first: V[] = []

  /** Cached responses/ Кешированные ответы */
  protected readonly response: V[] = []

  /** Loading instance/ Экземпляр загрузки */
  protected loading?: any

  /** Developer mode flag/ Флаг режима разработчика */
  protected devMode: boolean = false

  /**
   * Constructor
   * @param requestDefault default request processor/ процессор запросов по умолчанию
   */
  constructor(
    protected readonly requestDefault: ApiDefault
  ) {
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
   * Returns a list of data about the emulator.
   *
   * Возвращает список данных об эмуляторе.
   */
  getList(): (V & Record<string, any>)[] {
    return this.response.filter(item => item.isForGlobal !== true)
  }

  /**
   * Adding cached requests.
   *
   * Добавление кешированных запросов.
   * @param response data for caching/ данные для кеширования
   */
  add(
    response: V | V[]
  ): this {
    this.response.push(...toArray(response) as V[])
    return this
  }

  /**
   * Sets developer mode.
   *
   * Устанавливает режим разработчика.
   * @param devMode is it developer mode/ является ли режим разработчика
   */
  setDevMode(devMode: boolean): this {
    this.devMode = devMode
    return this
  }

  /**
   * Выполнение эмулятора, если доступно
   * @param apiFetch property of the request/ свойство запроса
   */
  async emulator<T>(apiFetch: ApiFetch): Promise<T | undefined> {
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
   * @param item cached item/ кешированный элемент
   */
  protected isDisable(item: V): boolean {
    return Boolean(executeFunction(item?.disable))
  }

  /**
   * Checks if the path matches the cached one.
   *
   * Проверяет, совпадает ли путь с кешированным.
   * @param item cached item/ кешированный элемент
   * @param path request path/ путь запроса
   */
  protected isPath(
    item: V,
    path: string
  ): boolean {
    return path === item.path
      || Boolean(
        item.path instanceof RegExp
        && path.match(item.path)
      )
  }

  /**
   * Checks if it is developer mode.
   *
   * Проверяет, является ли режимом разработчика.
   * @param devMode is it developer mode/ является ли режим разработчика
   */
  protected isDevMode(devMode?: boolean): boolean {
    return devMode || this.devMode
  }

  /**
   * Checks if this is the first request.
   *
   * Проверяет, является ли это первым запросом.
   * @param item cached item/ кешированный элемент
   * @param devMode is it developer mode/ является ли режим разработчика
   */
  protected isFirst(
    item: V,
    devMode?: boolean
  ): boolean {
    return this.first.indexOf(item) === -1
      || this.isDevMode(devMode)
  }

  /**
   * Checks if the request matches the cached one.
   *
   * Проверяет, совпадает ли запрос с кешированным.
   * @param item cached item/ кешированный элемент
   * @param request request data/ данные запроса
   */
  protected isResponse(
    item: V,
    request?: ApiFetch['request']
  ) {
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
        && Object.entries(requestItem).reduce(
          (accum, [key, value]) => (accum && (value === request?.[key] || value === '*any')),
          true
        )
      )
  }

  /**
   * Emulates an execution request.
   *
   * Эмулирует запрос выполнения.
   * @param response Data for pre-request/ Данные для пред-запроса
   * @param request data for the request/ данные для запроса
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
   * Enable loading for request emulation.
   *
   * Включить загрузку для эмуляции запроса.
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
   * Disable loading for request emulation.
   *
   * Отключить загрузку для эмуляции запроса.
   */
  protected stopResponseLoading() {
    this.loading = setTimeout(() => {
      this.loading = undefined

      if (isDomRuntime()) {
        document.body.classList.remove(CLASS_RESPONSE_LOADING)
      }
    }, 1200)
  }
}
