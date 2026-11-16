import {
  ErrorCenter,
  type ErrorCenterInstance
} from '@dxtmisha/functional-basic'

/** Error group name for CMS API errors / Название группы ошибок для CMS API */
const CMS_ERROR_GROUP = 'cms'

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
  ) {}

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
  report(
    code: string,
    message: string,
    details?: unknown
  ): never {
    this.errorCenter.on({
      group: CMS_ERROR_GROUP,
      code,
      message,
      details
    })

    throw new Error(`${CMS_ERROR_PREFIX} ${message}`)
  }

  /**
   * Reports unexpected transaction errors through the instance ErrorCenter without double-reporting domain errors.
   *
   * Передаёт неожиданные ошибки транзакции в ErrorCenter экземпляра, избегая повторной регистрации доменных ошибок.
   * @param code Fallback error code / Код ошибки по умолчанию
   * @param message Fallback error message / Сообщение об ошибке по умолчанию
   * @param error Caught error instance / Перехваченная ошибка
   */
  handleTransaction(
    code: string,
    message: string,
    error: unknown
  ): never {
    if (error instanceof Error && error.message.startsWith(CMS_ERROR_PREFIX)) {
      throw error
    }

    this.errorCenter.on({
      group: CMS_ERROR_GROUP,
      code,
      message,
      details: error
    })

    throw error instanceof Error ? error : new Error(`${CMS_ERROR_PREFIX} ${message}`)
  }
}
