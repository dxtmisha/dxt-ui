import type { ApiFetch, ApiPreparationEnd } from '../types/apiTypes'

/**
 * Class for preparing requests.
 *
 * Класс для подготовки запросов.
 */
export class ApiPreparation {
  /** Function for call before the request/ Функция для вызова перед запросом */
  protected callback?: (apiFetch: ApiFetch) => Promise<void>

  /** Function for call after the request/ Функция для вызова после запроса */
  protected callbackEnd?: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>

  /** Is the preparation in progress/ Идет ли подготовка */
  protected loading = false

  /**
   * Preparation before executing the request.
   *
   * Подготовка перед выполнением запроса.
   * @param active is preparation active/ активна ли подготовка
   * @param apiFetch request options/ опции запроса
   */
  async make(active: boolean, apiFetch: ApiFetch) {
    if (
      active
      && this.callback
    ) {
      return this.go(apiFetch)
    }
  }

  /**
   * Analysis of the request after execution.
   *
   * Анализ запроса после выполнения.
   * @param active is preparation active/ активна ли подготовка
   * @param query data received in the request/ данные, полученные в запросе
   * @param apiFetch request options/ опции запроса
   */
  async makeEnd(
    active: boolean,
    query: Response,
    apiFetch: ApiFetch
  ): Promise<ApiPreparationEnd> {
    let data: ApiPreparationEnd = {}

    if (
      active
      && this.callbackEnd
    ) {
      data = await this.callbackEnd(query, apiFetch)
    }

    return data
  }

  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  set(callback: (apiFetch: ApiFetch) => Promise<void>): this {
    this.callback = callback
    return this
  }

  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this {
    this.callbackEnd = callback
    return this
  }

  /**
   * To execute preparation.
   *
   * Выполнить подготовку.
   * @param apiFetch request options/ опции запроса
   */
  protected async go(apiFetch: ApiFetch) {
    return new Promise<void>((resolve) => {
      if (this.loading) {
        setTimeout(() => this.go(apiFetch).then(resolve), 160)
      } else if (this.callback) {
        this.loading = true
        this.callback(apiFetch).then(() => {
          this.loading = false
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
   * @param apiFetch request options/ опции запроса
   */
  protected async end(query: Response, apiFetch: ApiFetch) {
    let data: ApiPreparationEnd = {}

    if (this.callbackEnd) {
      data = await this.callbackEnd(query, apiFetch)
    }

    return data
  }
}
