import { ErrorCenter } from './ErrorCenter'
import { ErrorCenterError } from './ErrorCenterError'

import type { ErrorCenterInstance } from './ErrorCenterInstance'
import type { ErrorCenterCauseItem } from '../types/errorCenterTypes'

/**
 * Wrapper around ErrorCenterInstance that dispatches errors to ErrorCenter and throws an ErrorCenterError.
 * Uses the active static ErrorCenter instance by default when no custom instance is provided.
 *
 * Обёртка над ErrorCenterInstance, которая регистрирует ошибку в ErrorCenter и выбрасывает ErrorCenterError.
 * По умолчанию использует активный статический экземпляр ErrorCenter, если пользовательский экземпляр не передан.
 */
export class ErrorCenterThrow {
  /**
   * Constructor for ErrorCenterThrow.
   *
   * Конструктор ErrorCenterThrow.
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   */
  constructor(
    protected errorCenter: ErrorCenterInstance = ErrorCenter.getItem()
  ) {}

  /**
   * Triggers error handling in ErrorCenter for a group and throws an ErrorCenterError.
   *
   * Вызывает обработку ошибки в ErrorCenter для группы и выбрасывает ErrorCenterError.
   * @param cause error cause details / детали причины ошибки
   * @param options standard Error options / стандартные опции Error
   * @returns never returns; always throws ErrorCenterError / не возвращает значение; всегда выбрасывает ErrorCenterError
   */
  on<D = unknown>(
    cause: ErrorCenterCauseItem<D>,
    options?: ErrorOptions
  ): never {
    this.errorCenter.on(cause)

    throw new ErrorCenterError<D>(
      this.errorCenter.assign(cause),
      options
    )
  }
}
