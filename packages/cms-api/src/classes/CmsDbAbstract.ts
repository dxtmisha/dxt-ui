import { ErrorCenter, type ErrorCenterInstance } from '@dxtmisha/functional-basic'

import { useCmsDb } from '../composables/useCmsDb'
import type { CmsDbInstance } from './CmsDbInstance'
import type { CmsDb } from '../types/cmsDbTypes'

/**
 * Abstract base class providing unified CMS database instance management and centralized ErrorCenter error handling.
 *
 * Абстрактный базовый класс для единого управления экземпляром базы данных CMS и централизованной обработки ошибок через ErrorCenter.
 */
export abstract class CmsDbAbstract {
  /**
   * Initializes the base CMS database handler with a CmsDbInstance and ErrorCenter.
   *
   * Инициализирует базовый обработчик БД CMS с экземпляром CmsDbInstance и центром ошибок ErrorCenter.
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   */
  constructor(
    protected databaseInstance: CmsDbInstance = useCmsDb().cmsDbInstance,
    protected errorCenter: ErrorCenterInstance = ErrorCenter.getItem()
  ) {}

  /**
   * Returns the active Drizzle database instance from the managed CmsDbInstance.
   *
   * Возвращает активный экземпляр базы данных Drizzle из управляемого CmsDbInstance.
   * @returns Typed Drizzle CMS database instance / Типизированный экземпляр базы данных Drizzle CMS
   */
  getDatabase(): CmsDb {
    return this.databaseInstance.get()
  }

  /**
   * Returns the managed CmsDbInstance wrapper.
   *
   * Возвращает управляемый экземпляр CmsDbInstance.
   * @returns CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  getDatabaseInstance(): CmsDbInstance {
    return this.databaseInstance
  }

  /**
   * Returns the ErrorCenter instance used for centralized error reporting.
   *
   * Возвращает экземпляр ErrorCenter, используемый для централизованной регистрации ошибок.
   * @returns ErrorCenter instance / Экземпляр ErrorCenter
   */
  getErrorCenter(): ErrorCenterInstance {
    return this.errorCenter
  }

  /**
   * Sets or overrides the CmsDbInstance wrapper used by this instance.
   *
   * Устанавливает или заменяет экземпляр CmsDbInstance, используемый текущим объектом.
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   * @returns Current instance for chaining / Текущий экземпляр для цепочки вызовов
   */
  setDatabaseInstance(databaseInstance: CmsDbInstance): this {
    this.databaseInstance = databaseInstance
    return this
  }

  /**
   * Sets or overrides the ErrorCenter instance used for error reporting.
   *
   * Устанавливает или заменяет экземпляр ErrorCenter для регистрации ошибок.
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @returns Current instance for chaining / Текущий экземпляр для цепочки вызовов
   */
  setErrorCenter(errorCenter: ErrorCenterInstance): this {
    this.errorCenter = errorCenter
    return this
  }

  /**
   * Reports an error via the instance ErrorCenter and throws an Error.
   *
   * Регистрирует ошибку через ErrorCenter экземпляра и выбрасывает исключение Error.
   * @param code Error code within the cms group / Код ошибки в группе cms
   * @param message Human-readable error message / Человекочитаемое сообщение об ошибке
   * @param details Optional raw error payload / Необязательные дополнительные детали ошибки
   */
  protected reportError(
    code: string,
    message: string,
    details?: unknown
  ): never {
    return CmsDbAbstract.reportError(this.errorCenter, code, message, details)
  }

  /**
   * Reports unexpected transaction errors through the instance ErrorCenter without double-reporting domain errors.
   *
   * Передаёт неожиданные ошибки транзакции в ErrorCenter экземпляра, избегая повторной регистрации доменных ошибок.
   * @param code Fallback error code / Код ошибки по умолчанию
   * @param message Fallback error message / Сообщение об ошибке по умолчанию
   * @param error Caught error instance / Перехваченная ошибка
   */
  protected handleTransactionError(
    code: string,
    message: string,
    error: unknown
  ): never {
    return CmsDbAbstract.handleTransactionError(this.errorCenter, code, message, error)
  }

  /**
   * Checks that an identifier is a positive safe integer.
   *
   * Проверяет, что идентификатор является положительным безопасным целым числом.
   * @param id Candidate identifier / Проверяемый идентификатор
   * @returns True if valid positive safe integer / True, если корректный положительный идентификатор
   */
  static isValidId(id: number): boolean {
    return Number.isSafeInteger(id) && id > 0
  }

  /**
   * Reports an error via ErrorCenter and throws an Error.
   *
   * Регистрирует ошибку через ErrorCenter и выбрасывает исключение Error.
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @param code Error code within the cms group / Код ошибки в группе cms
   * @param message Human-readable error message / Человекочитаемое сообщение об ошибке
   * @param details Optional raw error payload / Необязательные дополнительные детали ошибки
   */
  static reportError(
    errorCenter: ErrorCenterInstance,
    code: string,
    message: string,
    details?: unknown
  ): never {
    errorCenter.on({
      group: 'cms',
      code,
      message,
      details
    })

    throw new Error(`[@dxtmisha/cms-api] ${message}`)
  }

  /**
   * Reports unexpected database transaction errors through ErrorCenter without double-reporting domain errors.
   *
   * Передаёт неожиданные ошибки транзакции БД в ErrorCenter, избегая повторной регистрации доменных ошибок.
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @param code Fallback error code / Код ошибки по умолчанию
   * @param message Fallback error message / Сообщение об ошибке по умолчанию
   * @param error Caught error instance / Перехваченная ошибка
   */
  static handleTransactionError(
    errorCenter: ErrorCenterInstance,
    code: string,
    message: string,
    error: unknown
  ): never {
    if (error instanceof Error && error.message.startsWith('[@dxtmisha/cms-api]')) {
      throw error
    }

    errorCenter.on({
      group: 'cms',
      code,
      message,
      details: error
    })

    throw error instanceof Error ? error : new Error(`[@dxtmisha/cms-api] ${message}`)
  }
}
