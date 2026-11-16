import {
  ErrorCenter,
  type ErrorCenterInstance
} from '@dxtmisha/functional-basic'
import { cmsErrorCauseList } from '../media/errors/cmsErrorCauseList'

/** Prefix prepended to thrown CMS API error messages / Префикс для выбрасываемых сообщений об ошибках CMS API */
const CMS_ERROR_PREFIX = '[@dxtmisha/cms-api]'

/**
 * Instance-level error handler for CMS API operations backed by ErrorCenter.
 *
 * Экземплярный обработчик ошибок для операций CMS API на базе ErrorCenter.
 */
export class CmsErrorInstance {
  /**
   * Initializes the CMS error handler with an ErrorCenter instance.
   *
   * Инициализирует обработчик ошибок CMS с экземпляром ErrorCenter.
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   */
  constructor(
    protected errorCenter: ErrorCenterInstance = ErrorCenter.getItem()
  ) {
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
    this.registerCauses()
    return this
  }

  /**
   * Reports an error via the instance ErrorCenter and throws an Error.
   *
   * Регистрирует ошибку через ErrorCenter экземпляра и выбрасывает исключение Error.
   * @param group Error group / Группа ошибки
   * @param code Error code within the group / Код ошибки в группе
   * @param details Optional raw error payload / Необязательные дополнительные детали ошибки
   * @param message Optional override error message / Необязательное переопределяющее сообщение об ошибке
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
   * Reports unexpected transaction errors through the instance ErrorCenter without double-reporting domain errors.
   *
   * Передаёт неожиданные ошибки транзакции в ErrorCenter экземпляра, избегая повторной регистрации доменных ошибок.
   * @param group Error group / Группа ошибки
   * @param code Fallback error code / Код ошибки по умолчанию
   * @param error Caught error instance / Перехваченная ошибка
   * @param message Optional override error message / Необязательное переопределяющее сообщение об ошибке
   */
  handleTransaction(
    group: string,
    code: string,
    error: unknown,
    message?: string
  ): never {
    if (
      error instanceof Error
      && error.message.startsWith(CMS_ERROR_PREFIX)
    ) {
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
   * Registers an error in ErrorCenter and throws either the original Error or a prefixed CMS Error.
   *
   * Регистрирует ошибку в ErrorCenter и выбрасывает исходный Error или новую ошибку CMS с префиксом.
   * @param group Error group / Группа ошибки
   * @param code Error code within the group / Код ошибки в группе
   * @param details Optional raw error payload / Необязательные дополнительные детали ошибки
   * @param message Optional override error message / Необязательное переопределяющее сообщение об ошибке
   * @param originalError Optional original caught error / Необязательная исходная перехваченная ошибка
   */
  protected emitError(
    group: string,
    code: string,
    details?: unknown,
    message?: string,
    originalError?: unknown
  ): never {
    const resolvedMessage = message
      ?? this.errorCenter.get(code, group)?.message
      ?? code

    this.errorCenter.on({
      group,
      code,
      ...(message !== undefined ? { message } : {}),
      details
    })

    throw originalError instanceof Error
      ? originalError
      : new Error(`${CMS_ERROR_PREFIX} ${resolvedMessage}`)
  }
}
