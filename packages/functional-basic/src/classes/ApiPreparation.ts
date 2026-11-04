// ai-none

import type { ApiFetch, ApiPreparationEnd } from '../types/apiTypes'

/** Default maximum number of retry polling attempts / Лимит попыток опроса по умолчанию */
const DEFAULT_PREPARATION_LIMIT = 32

/** Delay in milliseconds between preparation polling attempts / Задержка в миллисекундах между попытками опроса подготовки */
const PREPARATION_RETRY_DELAY = 160

/**
 * Class for preparing requests.
 *
 * Класс для подготовки запросов.
 */
export class ApiPreparation {
  /** Function for call before the request / Функция для вызова перед запросом */
  protected callback?: (apiFetch: ApiFetch) => Promise<void>

  /** Function for call after the request / Функция для вызова после запроса */
  protected callbackEnd?: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>

  /** Is the preparation in progress / Идет ли подготовка */
  protected loading = false

  /**
   * Modifies the function to be called before the request.
   *
   * Изменяет функцию для вызова перед запросом.
   * @param callback function to call before request / функция для вызова перед запросом
   * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
   */
  set(callback?: (apiFetch: ApiFetch) => Promise<void>): this {
    this.callback = callback
    return this
  }

  /**
   * Modifies the function to be called after the request.
   *
   * Изменяет функцию для вызова после запроса.
   * @param callback function to call after request / функция для вызова после запроса
   * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
   */
  setEnd(callback?: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this {
    this.callbackEnd = callback
    return this
  }

  /**
   * Executes preparation before the request.
   *
   * Выполняет подготовку перед выполнением запроса.
   * @param active is preparation active / активна ли подготовка
   * @param apiFetch request options / опции запроса
   * @returns Promise<void> / Promise без возвращаемого значения
   */
  async make(active: boolean, apiFetch: ApiFetch): Promise<void> {
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
   * @param active is preparation active / активна ли подготовка
   * @param query data received in the request / данные, полученные в запросе
   * @param apiFetch request options / опции запроса
   * @returns preparation end data / данные завершения подготовки
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
   * To execute preparation.
   *
   * Выполнить подготовку.
   * @param apiFetch request options / опции запроса
   * @param limit limit of retry attempts / лимит попыток повтора
   * @returns Promise<void> / Promise без возвращаемого значения
   */
  protected async go(
    apiFetch: ApiFetch,
    limit: number = DEFAULT_PREPARATION_LIMIT
  ): Promise<void> {
    if (
      this.loading
      && limit > 0
    ) {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          void this.go(apiFetch, limit - 1).then(resolve)
        }, PREPARATION_RETRY_DELAY)
      })
    }

    if (this.callback) {
      this.loading = true

      try {
        await this.callback(apiFetch)
      } catch {
        // Ignore callback failure to allow the request lifecycle to proceed /
        // Игнорируем ошибку коллбэка, чтобы жизненный цикл запроса продолжился
      } finally {
        this.loading = false
      }
    }
  }
}
