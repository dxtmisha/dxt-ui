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
    protected errorCenter?: ErrorCenterInstance
  ) {}

  /**
   * Returns the ErrorCenter instance used for error dispatching.
   *
   * Возвращает экземпляр ErrorCenter, используемый для отправки ошибок.
   * @returns ErrorCenter instance / Экземпляр ErrorCenter
   */
  getErrorCenter(): ErrorCenterInstance {
    return this.errorCenter ?? ErrorCenter.getItem()
  }

  /**
   * Sets or overrides the ErrorCenter instance used for error dispatching.
   *
   * Устанавливает или заменяет экземпляр ErrorCenter, используемый для отправки ошибок.
   * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
   * @returns this instance / текущий экземпляр
   */
  setErrorCenter(errorCenter: ErrorCenterInstance): this {
    this.errorCenter = errorCenter
    return this
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
    const errorCenter = this.getErrorCenter()

    errorCenter.on(cause)

    throw new ErrorCenterError<D>(
      this.resolveCause(errorCenter, cause),
      options
    )
  }

  /**
   * Merges provided cause with stored cause data from ErrorCenter respecting priority.
   *
   * Объединяет переданную причину с сохранёнными данными причины из ErrorCenter с учётом приоритета.
   * @param errorCenter active ErrorCenter instance / активный экземпляр ErrorCenter
   * @param cause input cause / входная причина
   * @returns merged error cause / объединённая причина ошибки
   */
  protected resolveCause<D>(
    errorCenter: ErrorCenterInstance,
    cause: ErrorCenterCauseItem<D>
  ): ErrorCenterCauseItem<D> {
    const causeMain = errorCenter.get(cause.code, cause.group) as ErrorCenterCauseItem<D> | undefined

    if (causeMain) {
      if ((causeMain.priority ?? 500) > (cause.priority ?? 500)) {
        return {
          ...cause,
          ...causeMain
        }
      }

      return {
        ...causeMain,
        ...cause
      }
    }

    return cause
  }
}
