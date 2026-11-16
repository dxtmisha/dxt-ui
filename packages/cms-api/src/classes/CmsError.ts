import {
  ErrorCenter,
  ServerStorage,
  type ErrorCenterInstance
} from '@dxtmisha/functional-basic'
import { CmsErrorInstance } from './CmsErrorInstance'

/** Key for the CMS error instance in server storage / Ключ экземпляра ошибок CMS в серверном хранилище */
const CMS_ERROR_INSTANCE_KEY = '__cms:error-instance__'

/**
 * Static facade for managing CMS API errors via a request-isolated CmsErrorInstance.
 *
 * Статический фасад для управления ошибками CMS API через изолированный в рамках запроса экземпляр CmsErrorInstance.
 */
export class CmsError {
  /**
   * Returns the request-isolated CmsErrorInstance.
   *
   * Возвращает изолированный в рамках запроса экземпляр CmsErrorInstance.
   * @returns CmsErrorInstance instance / Экземпляр CmsErrorInstance
   */
  static getItem(): CmsErrorInstance {
    return ServerStorage.get(
      CMS_ERROR_INSTANCE_KEY,
      () => new CmsErrorInstance(),
      false,
      false
    )
  }

  /**
   * Returns the underlying ErrorCenter instance of the active CmsErrorInstance.
   *
   * Возвращает используемый экземпляр ErrorCenter активного CmsErrorInstance.
   * @returns ErrorCenter instance / Экземпляр ErrorCenter
   */
  static getErrorCenter(): ErrorCenterInstance {
    return this.getItem().getErrorCenter()
  }

  /**
   * Sets or overrides the ErrorCenter instance on the active CmsErrorInstance.
   *
   * Устанавливает или заменяет экземпляр ErrorCenter у активного CmsErrorInstance.
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   */
  static setErrorCenter(errorCenter: ErrorCenterInstance): void {
    this.getItem().setErrorCenter(errorCenter)
  }

  /**
   * Resets the active CmsErrorInstance back to the default ErrorCenter.
   *
   * Сбрасывает активный экземпляр CmsErrorInstance к стандартному ErrorCenter.
   */
  static reset(): void {
    this.getItem().setErrorCenter(ErrorCenter.getItem())
  }

  /**
   * Reports an error via the active CmsErrorInstance and throws an Error.
   *
   * Регистрирует ошибку через активный CmsErrorInstance и выбрасывает исключение Error.
   * @param code Error code within the cms group / Код ошибки в группе cms
   * @param message Human-readable error message / Человекочитаемое сообщение об ошибке
   * @param details Optional raw error payload / Необязательные дополнительные детали ошибки
   */
  static report(
    code: string,
    message: string,
    details?: unknown
  ): never {
    return this.getItem().report(code, message, details)
  }

  /**
   * Reports unexpected transaction errors through the active CmsErrorInstance without double-reporting domain errors.
   *
   * Передаёт неожиданные ошибки транзакции через активный CmsErrorInstance, избегая повторной регистрации доменных ошибок.
   * @param code Fallback error code / Код ошибки по умолчанию
   * @param message Fallback error message / Сообщение об ошибке по умолчанию
   * @param error Caught error instance / Перехваченная ошибка
   */
  static handleTransaction(
    code: string,
    message: string,
    error: unknown
  ): never {
    return this.getItem().handleTransaction(code, message, error)
  }
}
