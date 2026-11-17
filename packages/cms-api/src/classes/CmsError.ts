import {
  ServerStorage,
  type ErrorCenterCauseItem
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
   * Reports an error via the active CmsErrorInstance and throws an ErrorCenterError.
   *
   * Регистрирует ошибку через активный CmsErrorInstance и выбрасывает исключение ErrorCenterError.
   * @param cause Error cause details / Детали причины ошибки
   * @param options Standard Error options / Стандартные опции Error
   * @returns never returns; always throws ErrorCenterError / не возвращает значение; всегда выбрасывает ErrorCenterError
   */
  static report<D = unknown>(
    cause: ErrorCenterCauseItem<D>,
    options?: ErrorOptions
  ): never {
    return this.getItem().report(cause, options)
  }

  /**
   * Reports unexpected transaction errors through the active CmsErrorInstance without double-reporting domain errors.
   *
   * Передаёт неожиданные ошибки транзакции через активный CmsErrorInstance, избегая повторной регистрации доменных ошибок.
   * @param cause Error cause details / Детали причины ошибки
   * @param error Caught error instance / Перехваченная ошибка
   * @returns never returns; always throws ErrorCenterError / не возвращает значение; всегда выбрасывает ErrorCenterError
   */
  static handleTransaction<D = unknown>(
    cause: ErrorCenterCauseItem<D>,
    error: unknown = cause.details
  ): never {
    return this.getItem().handleTransaction(cause, error)
  }
}
