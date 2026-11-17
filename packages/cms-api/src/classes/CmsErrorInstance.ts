import {
  ErrorCenter,
  ErrorCenterError,
  ErrorCenterThrow,
  type ErrorCenterCauseItem,
  type ErrorCenterInstance
} from '@dxtmisha/functional-basic'
import { cmsErrorCauseList } from '../media/errors/cmsErrorCauseList'

/**
 * Instance-level error handler for CMS API operations backed by ErrorCenter and ErrorCenterThrow.
 *
 * Экземплярный обработчик ошибок для операций CMS API на базе ErrorCenter и ErrorCenterThrow.
 */
export class CmsErrorInstance {
  /** Throw helper backed by the active ErrorCenter instance / Помощник генерации исключений на базе активного экземпляра ErrorCenter */
  protected errorThrow: ErrorCenterThrow

  /**
   * Initializes the CMS error handler with an ErrorCenter instance.
   *
   * Инициализирует обработчик ошибок CMS с экземпляром ErrorCenter.
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   */
  constructor(
    protected errorCenter: ErrorCenterInstance = ErrorCenter.getItem()
  ) {
    this.errorThrow = new ErrorCenterThrow(errorCenter)
    this.registerCauses()
  }

  /**
   * Reports an error via ErrorCenterThrow and throws an ErrorCenterError.
   *
   * Регистрирует ошибку через ErrorCenterThrow и выбрасывает исключение ErrorCenterError.
   * @param cause Error cause details / Детали причины ошибки
   * @param options Standard Error options / Стандартные опции Error
   * @returns never returns; always throws ErrorCenterError / не возвращает значение; всегда выбрасывает ErrorCenterError
   */
  report<D = unknown>(
    cause: ErrorCenterCauseItem<D>,
    options?: ErrorOptions
  ): never {
    return this.errorThrow.on(cause, options)
  }

  /**
   * Reports unexpected transaction errors through ErrorCenterThrow without double-reporting ErrorCenterError instances.
   *
   * Передаёт неожиданные ошибки транзакции через ErrorCenterThrow, избегая повторной регистрации экземпляров ErrorCenterError.
   * @param cause Error cause details / Детали причины ошибки
   * @param error Caught error instance / Перехваченная ошибка
   * @returns never returns; always throws ErrorCenterError / не возвращает значение; всегда выбрасывает ErrorCenterError
   */
  handleTransaction<D = unknown>(
    cause: ErrorCenterCauseItem<D>,
    error: unknown = cause.details
  ): never {
    if (error instanceof ErrorCenterError) {
      throw error
    }

    return this.report<unknown>(
      cause.details === undefined && error !== undefined
        ? { ...cause, details: error }
        : cause,
      error instanceof Error ? { cause: error } : undefined
    )
  }

  /**
   * Registers default CMS error causes in the active ErrorCenter without overwriting existing entries.
   *
   * Регистрирует стандартные описания ошибок CMS в активном ErrorCenter без перезаписи существующих.
   */
  protected registerCauses(): void {
    for (const cause of cmsErrorCauseList) {
      if (!this.errorCenter.has(cause.code, cause.group)) {
        this.errorCenter.add(cause)
      }
    }
  }
}
