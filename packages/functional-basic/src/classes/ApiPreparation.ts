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
   * Executes preparation before the request.
   *
   * Выполняет подготовку перед выполнением запроса.
   * @param active is preparation active/ активна ли подготовка
   * @param apiFetch request options/ опции запроса
   * @returns Promise<void> / Promise без возвращаемого значения
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
   * Analyzes the request after execution.
   *
   * Анализирует запрос после выполнения.
   * @param active is preparation active/ активна ли подготовка
   * @param query data received in the request/ данные, полученные в запросе
   * @param apiFetch request options/ опции запроса
   * @returns preparation end data/ данные завершения подготовки
   */
  async makeEnd(
    active: boolean,
    query: Response,
    apiFetch: ApiFetch
  ): Promise<ApiPreparationEnd> {
    if (active && this.callbackEnd) {
      return await this.callbackEnd(query, apiFetch)
    }

    return {}
  }

  /**
   * Modifies the function to be called before the request.
   *
   * Изменяет функцию для вызова перед запросом.
   * @param callback function to call before request/ функция для вызова перед запросом
   */
  set(callback: (apiFetch: ApiFetch) => Promise<void>): this {
    this.callback = callback
    return this
  }

  /**
   * Modifies the function to be called after the request.
   *
   * Изменяет функцию для вызова после запроса.
   * @param callback function to call after request/ функция для вызова после запроса
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
   * @param limit limit of retry attempts/ лимит попыток повтора
   */
  protected async go(apiFetch: ApiFetch, limit: number = 32) {
    return new Promise<void>((resolve) => {
      if (
        this.loading
        && limit > 0
      ) {
        setTimeout(() => this.go(apiFetch, limit - 1).then(resolve), 160)
      } else if (this.callback) {
        this.loading = true
        this.callback(apiFetch)
          .then(() => {
            this.loading = false
            resolve()
          })
          .catch(() => {
            this.loading = false
            resolve()
          })
      } else {
        resolve()
      }
    })
  }
}
