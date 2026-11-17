import { ServerStorage } from '@dxtmisha/functional-basic'
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
   * Reports an error via the active CmsErrorInstance and throws an ErrorCenterError.
   *
   * Регистрирует ошибку через активный CmsErrorInstance и выбрасывает исключение ErrorCenterError.
   * @param group Error group / Группа ошибки
   * @param code Error code within the group / Код ошибки в группе
   * @param details Optional raw error payload / Необязательные дополнительные детали ошибки
   * @param message Optional override error message / Необязательное переопределяющее сообщение об ошибке
   */
  static report(
    group: string,
    code: string,
    details?: unknown,
    message?: string
  ): never {
    return this.getItem().report(group, code, details, message)
  }

  /**
   * Reports unexpected transaction errors through the active CmsErrorInstance without double-reporting domain errors.
   *
   * Передаёт неожиданные ошибки транзакции через активный CmsErrorInstance, избегая повторной регистрации доменных ошибок.
   * @param group Error group / Группа ошибки
   * @param code Fallback error code / Код ошибки по умолчанию
   * @param error Caught error instance / Перехваченная ошибка
   * @param message Optional override error message / Необязательное переопределяющее сообщение об ошибке
   */
  static handleTransaction(
    group: string,
    code: string,
    error: unknown,
    message?: string
  ): never {
    return this.getItem().handleTransaction(group, code, error, message)
  }
}
