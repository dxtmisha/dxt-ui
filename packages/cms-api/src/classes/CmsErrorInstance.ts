import {
  ErrorCenter,
  ErrorCenterError,
  ErrorCenterThrow,
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
   * Returns the underlying ErrorCenter instance.
   *
   * Возвращает используемый экземпляр ErrorCenter.
   * @returns ErrorCenter instance / Экземпляр ErrorCenter
   */
  getErrorCenter(): ErrorCenterInstance {
    return this.errorCenter
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
    this.errorThrow = new ErrorCenterThrow(errorCenter)
    this.registerCauses()
    return this
  }

  /**
   * Reports an error via ErrorCenterThrow and throws an ErrorCenterError.
   *
   * Регистрирует ошибку через ErrorCenterThrow и выбрасывает исключение ErrorCenterError.
   * @param group Error group / Группа ошибки
   * @param code Error code within the group / Код ошибки в группе
   * @param details Optional raw error payload / Необязательные дополнительные детали ошибки
   * @param message Optional override error message / Необязательное переопределяющее сообщение об ошибке
   * @returns never returns; always throws ErrorCenterError / не возвращает значение; всегда выбрасывает ErrorCenterError
   */
  report(
    group: string,
    code: string,
    details?: unknown,
    message?: string
  ): never {
    return this.emitError(group, code, details, message)
  }

  /**
   * Reports unexpected transaction errors through ErrorCenterThrow without double-reporting ErrorCenterError instances.
   *
   * Передаёт неожиданные ошибки транзакции через ErrorCenterThrow, избегая повторной регистрации экземпляров ErrorCenterError.
   * @param group Error group / Группа ошибки
   * @param code Fallback error code / Код ошибки по умолчанию
   * @param error Caught error instance / Перехваченная ошибка
   * @param message Optional override error message / Необязательное переопределяющее сообщение об ошибке
   * @returns never returns; always throws ErrorCenterError / не возвращает значение; всегда выбрасывает ErrorCenterError
   */
  handleTransaction(
    group: string,
    code: string,
    error: unknown,
    message?: string
  ): never {
    if (error instanceof ErrorCenterError) {
      throw error
    }

    return this.emitError(group, code, error, message, error)
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

  /**
   * Dispatches an error via ErrorCenterThrow and throws an ErrorCenterError, preserving original Error instances as cause.
   *
   * Передаёт ошибку через ErrorCenterThrow и выбрасывает ErrorCenterError, сохраняя исходный Error в свойстве cause.
   * @param group Error group / Группа ошибки
   * @param code Error code within the group / Код ошибки в группе
   * @param details Optional raw error payload / Необязательные дополнительные детали ошибки
   * @param message Optional override error message / Необязательное переопределяющее сообщение об ошибке
   * @param originalError Optional original caught error / Необязательная исходная перехваченная ошибка
   * @returns never returns; always throws ErrorCenterError / не возвращает значение; всегда выбрасывает ErrorCenterError
   */
  protected emitError(
    group: string,
    code: string,
    details?: unknown,
    message?: string,
    originalError?: unknown
  ): never {
    return this.errorThrow.on(
      {
        group,
        code,
        ...(message !== undefined ? { message } : {}),
        details
      },
      originalError instanceof Error ? { cause: originalError } : undefined
    )
  }
}
