import type { ErrorCenterCauseItem, ErrorCenterGroup } from '../types/errorCenterTypes'

/**
 * Custom Error subclass carrying structured ErrorCenter cause data.
 * Provides strongly typed access to error group, code, label, and details.
 *
 * Пользовательский подкласс Error, содержащий структурированные данные причины ErrorCenter.
 * Предоставляет строго типизированный доступ к группе, коду, названию и деталям ошибки.
 */
export class ErrorCenterError<D = unknown> extends Error {
  /**
   * Constructor for ErrorCenterError.
   *
   * Конструктор ErrorCenterError.
   * @param causeItem structured error cause data / структурированные данные причины ошибки
   * @param options standard Error options / стандартные опции Error
   */
  constructor(
    protected readonly causeItem: ErrorCenterCauseItem<D>,
    options?: ErrorOptions
  ) {
    super(
      causeItem.message ?? causeItem.code,
      options ?? { cause: causeItem }
    )

    this.name = 'ErrorCenterError'

    Object.setPrototypeOf(this, new.target.prototype)
  }

  /**
   * Returns the full structured cause item.
   *
   * Возвращает полный структурированный объект причины ошибки.
   * @returns structured error cause data / структурированные данные причины ошибки
   */
  getCauseItem(): ErrorCenterCauseItem<D> {
    return this.causeItem
  }

  /**
   * Returns the error code.
   *
   * Возвращает код ошибки.
   * @returns error code / код ошибки
   */
  getCode(): string {
    return this.causeItem.code
  }

  /**
   * Returns the additional error details payload.
   *
   * Возвращает дополнительные детали ошибки.
   * @returns error details or undefined / детали ошибки или undefined
   */
  getDetails(): D | undefined {
    return this.causeItem.details
  }

  /**
   * Returns the error group identifier.
   *
   * Возвращает идентификатор группы ошибки.
   * @returns error group or undefined / группа ошибки или undefined
   */
  getGroup(): ErrorCenterGroup {
    return this.causeItem.group
  }

  /**
   * Returns the error label.
   *
   * Возвращает название ошибки.
   * @returns error label or undefined / название ошибки или undefined
   */
  getLabel(): string | undefined {
    return this.causeItem.label
  }

  /**
   * Returns the error message from cause item.
   *
   * Возвращает сообщение об ошибке из объекта причины.
   * @returns error message or undefined / сообщение об ошибке или undefined
   */
  getMessage(): string | undefined {
    return this.causeItem.message
  }
}
