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
export class ErrorCenterThrowInstance {
  /**
   * Constructor for ErrorCenterThrowInstance.
   *
   * Конструктор ErrorCenterThrowInstance.
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   */
  constructor(
    protected errorCenter: ErrorCenterInstance = ErrorCenter.getItem()
  ) {}

  /**
   * Handles a caught error without double-reporting ErrorCenterError instances.
   * Preserves the caught error as `options.cause` when `error` is defined and `options.cause` is not explicitly provided.
   *
   * Обрабатывает перехваченную ошибку без повторной регистрации экземпляров ErrorCenterError.
   * Сохраняет перехваченную ошибку в `options.cause`, если `error` определён и `options.cause` не передан явно.
   * @param cause error cause details / детали причины ошибки
   * @param error caught error instance / перехваченная ошибка
   * @param options standard Error options / стандартные опции Error
   * @returns never returns; always throws ErrorCenterError / не возвращает значение; всегда выбрасывает ErrorCenterError
   */
  handle<D = unknown>(
    cause: ErrorCenterCauseItem<D>,
    error?: unknown,
    options?: ErrorOptions
  ): never {
    if (error instanceof ErrorCenterError) {
      throw error
    }

    const resolvedOptions: ErrorOptions | undefined = error !== undefined && (!options || !('cause' in options))
      ? { ...options, cause: error }
      : options

    return this.on(cause, resolvedOptions)
  }

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
    const assignedCause = this.errorCenter.assign(cause)
    this.errorCenter.getHandler().on(assignedCause)

    throw new ErrorCenterError<D>(
      assignedCause,
      options
    )
  }
}
