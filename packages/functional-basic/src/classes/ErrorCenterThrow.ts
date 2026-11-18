import { ErrorCenterThrowInstance } from './ErrorCenterThrowInstance'
import { ServerStorage } from './ServerStorage'

import type { ErrorCenterCauseItem } from '../types/errorCenterTypes'

/** Key for the error throw instance in server storage / Ключ экземпляра выброса ошибок в серверном хранилище */
const ERROR_CENTER_THROW_INSTANCE_KEY = '__ui:error-center-throw-instance__'

/**
 * Static facade for dispatching errors through ErrorCenter and throwing ErrorCenterError.
 * Delegates all operations to a request-isolated ErrorCenterThrowInstance.
 *
 * Статический фасад для регистрации ошибок через ErrorCenter и выброса ErrorCenterError.
 * Делегирует все операции изолированному в рамках запроса экземпляру ErrorCenterThrowInstance.
 */
export class ErrorCenterThrow {
  /**
   * Returns the ErrorCenterThrowInstance for the active storage context.
   *
   * Возвращает экземпляр ErrorCenterThrowInstance для текущего контекста хранилища.
   * @returns ErrorCenterThrowInstance instance / экземпляр ErrorCenterThrowInstance
   */
  static getItem(): ErrorCenterThrowInstance {
    // ErrorCenterThrow may run inside error paths without an active SSR request context / ErrorCenterThrow может вызываться в обработчиках ошибок без активного контекста SSR-запроса
    return ServerStorage.get(
      ERROR_CENTER_THROW_INSTANCE_KEY,
      () => new ErrorCenterThrowInstance(),
      false,
      false
    )
  }

  /**
   * Triggers error handling in ErrorCenter for a group and throws an ErrorCenterError.
   *
   * Вызывает обработку ошибки в ErrorCenter для группы и выбрасывает ErrorCenterError.
   * @param cause error cause details / детали причины ошибки
   * @param options standard Error options / стандартные опции Error
   * @returns never returns; always throws ErrorCenterError / не возвращает значение; всегда выбрасывает ErrorCenterError
   */
  static on<D = unknown>(
    cause: ErrorCenterCauseItem<D>,
    options?: ErrorOptions
  ): never {
    return this.getItem().on(cause, options)
  }

  /**
   * Handles a caught error without double-reporting ErrorCenterError instances.
   *
   * Обрабатывает перехваченную ошибку без повторной регистрации экземпляров ErrorCenterError.
   * @param cause error cause details / детали причины ошибки
   * @param error caught error instance / перехваченная ошибка
   * @param options standard Error options / стандартные опции Error
   * @returns never returns; always throws ErrorCenterError / не возвращает значение; всегда выбрасывает ErrorCenterError
   */
  static handle<D = unknown>(
    cause: ErrorCenterCauseItem<D>,
    error?: unknown,
    options?: ErrorOptions
  ): never {
    return this.getItem().handle(cause, error, options)
  }
}
