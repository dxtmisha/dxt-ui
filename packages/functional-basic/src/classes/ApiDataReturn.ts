// ai-none

import { isArray } from '../functions/isArray'
import { isObjectNotArray } from '../functions/isObjectNotArray'

import { ApiStatus } from './ApiStatus'
import type { ApiErrorItem } from './ApiErrorItem'

import type { ApiData, ApiFetch, ApiPreparationEnd } from '../types/apiTypes'

/**
 * A list of additional keys to be extracted from the API response and added to the final data object /
 * Перечень дополнительных ключей, которые будут извлечены из ответа API и добавлены в итоговый объект данных
 */
const API_DATA_RETURN_KEY_ADD: string[] = [
  'success',
  'status',
  'code',
  'message',
  'error'
]

/**
 * Class for handling and processing data returned from an API request.
 *
 * Класс для обработки и подготовки данных, полученных в результате запроса к API.
 */
export class ApiDataReturn<T = unknown> {
  /**
   * Raw data received from the API /
   * Исходные данные, полученные от API
   */
  protected data?: ApiData<T>

  /**
   * Processed data ready for use /
   * Обработанные данные, готовые к использованию
   */
  protected dataMod?: ApiData<T>

  /**
   * Constructor for ApiDataReturn.
   *
   * Конструктор ApiDataReturn.
   * @param apiFetch API fetch configuration / конфигурация запроса API
   * @param query response object / объект ответа
   * @param end preparation end data / данные завершения подготовки
   * @param error error object / объект ошибки
   */
  constructor(
    protected readonly apiFetch: ApiFetch,
    protected readonly query: Response,
    protected readonly end: ApiPreparationEnd,
    protected readonly error?: ApiErrorItem
  ) {
  }

  /**
   * Returns processed data.
   *
   * Возвращает обработанные данные.
   * @returns processed API data / обработанные данные API
   */
  get(): ApiData<T> {
    if (!this.dataMod) {
      this.dataMod = this.initData()
    }

    return this.dataMod
  }

  /**
   * Returns processed data along with the status object.
   *
   * Возвращает обработанные данные вместе с объектом статуса.
   * @param status API status instance / экземпляр статуса API
   * @returns processed API data with status / обработанные данные API со статусом
   */
  getAndStatus(
    status: ApiStatus
  ): ApiData<T> {
    const data = this.get()

    if (
      data
      && isObjectNotArray(data)
    ) {
      return {
        ...data,
        statusObject: status.get(),
        errorObject: this.error
      }
    }

    return data
  }

  /**
   * Returns raw data received from the API.
   *
   * Возвращает исходные данные, полученные от API.
   * @returns raw API data or undefined / исходные данные API или undefined
   */
  getData(): ApiData<T> | undefined {
    return this.data
  }

  /**
   * Initializes the class by reading data from the response.
   *
   * Инициализирует класс, считывая данные из ответа.
   * @returns this instance / текущий экземпляр
   */
  async init(): Promise<this> {
    this.data = await this.readData()
    return this
  }

  /**
   * Prepares and formats the raw data.
   *
   * Подготавливает и форматирует исходные данные.
   * @returns prepared API data / подготовленные данные API
   */
  protected initData(): ApiData<T> {
    const { toData = true } = this.apiFetch
    const data = this.getData()

    if (!data) {
      return {} as ApiData<T>
    }

    if (
      !toData
      || !data
      || !isObjectNotArray(data)
      || !('data' in data)
    ) {
      return data
    }

    if (
      data.data !== null
      && typeof data.data !== 'object'
    ) {
      return data.data as ApiData<T>
    }

    if (isArray(data.data)) {
      return data.data as ApiData<T>
    }

    return this.initItem(data as Record<string, unknown>)
  }

  /**
   * Initializes the result item and merges metadata (success, status, code, message) from raw data.
   *
   * Инициализирует результирующий объект и переносит метаданные (success, status, code, message) из исходных данных.
   * @param data raw response data / исходные данные ответа
   * @returns initialized data with metadata / инициализированные данные с метаданными
   */
  protected initItem(
    data: Record<string, unknown>
  ): ApiData<T> {
    const item: ApiData<T & Record<string, unknown>>
      = { ...(data.data as Record<string, unknown>) } as ApiData<T & Record<string, unknown>>

    API_DATA_RETURN_KEY_ADD.forEach((key) => {
      if (
        key in data
        && !(key in item)
      ) {
        ;(item as Record<string, unknown>)[key] = data[key]

        if (
          key === 'error'
          && isObjectNotArray(data[key])
        ) {
          const error = data[key] as Record<string, unknown>
          item.code = (error?.code ?? data.code) as string | number | undefined
          item.message = (error?.message ?? data.message) as string | undefined
        }
      }
    })

    return item
  }

  /**
   * Reads and parses data from the response.
   *
   * Считывает и анализирует данные из ответа.
   * @returns parsed API data / обработанные данные API
   */
  protected async readData<T>(): Promise<ApiData<T>> {
    const { queryReturn } = this.apiFetch
    const query = this.query

    if (queryReturn) {
      return await queryReturn(query)
    }

    if ('data' in this.end) {
      return this.end.data
    }

    const headers = query.headers.get('Content-Type') ?? ''

    if (headers.includes('application/json')) {
      try {
        return await query.json()
      } catch {
        return {} as ApiData<T>
      }
    }

    return {
      data: await query.text()
    } as ApiData<T>
  }
}
