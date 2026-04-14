import { ErrorCenterInstance } from './ErrorCenterInstance'
import { errorCauseList } from '../media/errorCauseList'

import type { ErrorCenterCauseItem, ErrorCenterCauseList, ErrorCenterGroup, ErrorCenterHandlerCallback, ErrorCenterHandlerList } from '../types/errorCenter'

/**
 * Class for managing error storage and handling.
 *
 * Класс для управления хранилищем ошибок и их обработкой.
 */
export class ErrorCenter {
  /** Instance of the error center / Экземпляр центра ошибок */
  protected static item = new ErrorCenterInstance(errorCauseList)

  /**
   * Checks if a cause with specific code exists.
   *
   * Проверяет наличие причины с конкретным кодом.
   * @param code error code / код ошибки
   * @param group error group / группа ошибки
   */
  static has(
    code: string,
    group?: string
  ): boolean {
    return this.getItem().has(code, group)
  }

  /**
   * Gets a specific error cause by code and group.
   *
   * Получает конкретную причину ошибки по коду и группе.
   * @param code error code / код ошибки
   * @param group error group / группа ошибки
   */
  static get(
    code: string,
    group?: string
  ): ErrorCenterCauseItem | undefined {
    return this.getItem().get(code, group)
  }

  /**
   * Returns a request-isolated instance of ErrorCenterInstance.
   *
   * Возвращает изолированный в рамках запроса экземпляр ErrorCenterInstance.
   * @returns ErrorCenterInstance instance / экземпляр ErrorCenterInstance
   */
  static getItem(): ErrorCenterInstance {
    return this.item
  }

  /**
   * Adds an error cause to the storage.
   *
   * Добавляет причину ошибки в хранилище.
   * @param cause error cause item / элемент причины ошибки
   */
  static add(cause: ErrorCenterCauseItem): ErrorCenter {
    this.getItem().add(cause)
    return this
  }

  /**
   * Adds a list of error causes to the storage.
   *
   * Добавляет список причин ошибок в хранилище.
   * @param causes error causes list / список причин ошибок
   */
  static addList(causes: ErrorCenterCauseList): ErrorCenter {
    this.getItem().addList(causes)
    return this
  }

  /**
   * Registers a new handler.
   *
   * Регистрирует новый обработчик.
   * @param group target group / целевая группа
   * @param handler handler callback / обратный вызов обработчика
   */
  static addHandler(
    group: ErrorCenterGroup,
    handler: ErrorCenterHandlerCallback
  ): ErrorCenter {
    this.getItem().addHandler(group, handler)
    return this
  }

  /**
   * Registers a list of handlers.
   *
   * Регистрирует список обработчиков.
   * @param handlers handlers list / список обработчиков
   */
  static addHandlerList(handlers: ErrorCenterHandlerList): ErrorCenter {
    this.getItem().addHandlerList(handlers)
    return this
  }

  /**
   * Triggers error handling for a group.
   *
   * Вызывает обработку ошибки для группы.
   * @param cause error cause details / детали причины ошибки
   */
  static on(cause: ErrorCenterCauseItem): ErrorCenter {
    this.getItem().on(cause)
    return this
  }
}
