import { ErrorCenterHandler } from './ErrorCenterHandler'

import type { ErrorCenterCauseItem, ErrorCenterCauseList, ErrorCenterGroup, ErrorCenterHandlerCallback, ErrorCenterHandlerList } from '../types/errorCenter'

/**
 * Class for managing error storage and handling within an instance.
 *
 * Класс для управления хранилищем ошибок и их обработкой внутри экземпляра.
 */
export class ErrorCenterInstance {
  /** List of stored error causes / Список сохраненных причин ошибок */
  protected causes: ErrorCenterCauseList = []

  /**
   * Constructor
   * @param causes initial list of error causes / начальный список причин ошибок
   * @param handler handler instance / экземпляр обработчика
   */
  constructor(
    causes?: ErrorCenterCauseList,
    protected handler: ErrorCenterHandler = new ErrorCenterHandler()
  ) {
    if (causes) {
      this.addList(causes)
    }
  }

  /**
   * Checks if a cause with specific code exists.
   *
   * Проверяет наличие причины с конкретным кодом.
   * @param code error code / код ошибки
   * @param group error group / группа ошибки
   */
  has(
    code: string,
    group?: string
  ): boolean {
    return Boolean(this.get(code, group))
  }

  /**
   * Gets a specific error cause by code and group.
   *
   * Получает конкретную причину ошибки по коду и группе.
   * @param code error code / код ошибки
   * @param group error group / группа ошибки
   */
  get(
    code: string,
    group?: string
  ): ErrorCenterCauseItem | undefined {
    return this.causes.find(
      cause => cause.group === group && cause.code === code
    )
  }

  /**
   * Adds an error cause to the storage.
   *
   * Добавляет причину ошибки в хранилище.
   * @param cause error cause item / элемент причины ошибки
   */
  add(cause: ErrorCenterCauseItem): this {
    this.causes.unshift(cause)
    return this
  }

  /**
   * Adds a list of error causes to the storage.
   *
   * Добавляет список причин ошибок в хранилище.
   * @param causes error causes list / список причин ошибок
   */
  addList(causes: ErrorCenterCauseList): this {
    this.causes.unshift(...causes)
    return this
  }

  /**
   * Registers a new handler.
   *
   * Регистрирует новый обработчик.
   * @param group target group / целевая группа
   * @param handler handler callback / обратный вызов обработчика
   */
  addHandler(
    group: ErrorCenterGroup,
    handler: ErrorCenterHandlerCallback
  ): this {
    this.handler.add(group, handler)
    return this
  }

  /**
   * Registers a list of handlers.
   *
   * Регистрирует список обработчиков.
   * @param handlers handlers list / список обработчиков
   */
  addHandlerList(handlers: ErrorCenterHandlerList): this {
    this.handler.addList(handlers)
    return this
  }

  /**
   * Triggers error handling for a group.
   *
   * Вызывает обработку ошибки для группы.
   * @param cause error cause details / детали причины ошибки
   */
  on(cause: ErrorCenterCauseItem): this {
    this.handler.on(this.assign(cause))
    return this
  }

  /**
   * Merges provided cause with stored cause data.
   *
   * Объединяет предоставленную причину с сохраненными данными причины.
   * @param cause input cause / входная причина
   */
  protected assign(cause: ErrorCenterCauseItem) {
    const causeMain = this.get(cause.code, cause.group)

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
