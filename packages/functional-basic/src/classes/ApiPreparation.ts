import type { ApiPreparationEnd } from '../types/apiTypes'

/**
 * Class for preparing requests.
 *
 * Класс для подготовки запросов.
 */
export class ApiPreparation {
  /** Function for call before the request/ Функция для вызова перед запросом */
  protected callback?: () => Promise<void>

  /** Function for call after the request/ Функция для вызова после запроса */
  protected callbackEnd?: (query: Response) => Promise<ApiPreparationEnd>

  /** Is the preparation in progress/ Идет ли подготовка */
  protected loading = false

  /**
   * Preparation before executing the request.
   *
   * Подготовка перед выполнением запроса.
   * @param active is preparation active/ активна ли подготовка
   */
  async make(active: boolean) {
    if (
      active
      && this.callback
    ) {
      return this.go()
    }
  }

  /**
   * Analysis of the request after execution.
   *
   * Анализ запроса после выполнения.
   * @param active is preparation active/ активна ли подготовка
   * @param query data received in the request/ данные, полученные в запросе
   */
  async makeEnd(
    active: boolean,
    query: Response
  ): Promise<ApiPreparationEnd> {
    let data: ApiPreparationEnd = {}

    if (
      active
      && this.callbackEnd
    ) {
      data = await this.callbackEnd(query)
    }

    return data
  }

  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  set(callback: () => Promise<void>): this {
    this.callback = callback
    return this
  }

  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  setEnd(callback: (query: Response) => Promise<ApiPreparationEnd>): this {
    this.callbackEnd = callback
    return this
  }

  /**
   * To execute preparation.
   *
   * Выполнить подготовку.
   */
  protected async go() {
    return new Promise<void>((resolve) => {
      if (this.loading) {
        setTimeout(() => this.go().then(resolve), 160)
      } else if (this.callback) {
        this.loading = true
        this.callback().then(() => {
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
   */
  protected async end(query: Response) {
    let data: ApiPreparationEnd = {}

    if (this.callbackEnd) {
      data = await this.callbackEnd(query)
    }

    return data
  }
}
