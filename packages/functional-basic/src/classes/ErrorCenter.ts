import { ErrorCenterInstance } from './ErrorCenterInstance'
import { errorCauseList } from '../media/errorCauseList'

import type { ErrorCenterHandler } from './ErrorCenterHandler'
import type {
  ErrorCenterCauseItem,
  ErrorCenterCauseList,
  ErrorCenterGroup,
  ErrorCenterHandlerCallback,
  ErrorCenterHandlerIsConsole,
  ErrorCenterHandlerList
} from '../types/errorCenterTypes'

/**
 * Class for managing error storage and handling.
 *
 * Класс для управления хранилищем ошибок и их обработкой.
 */
export class ErrorCenter {
  /** Instance of the error center / Экземпляр центра ошибок */
  protected static item?: ErrorCenterInstance

  /**
   * Gets a specific error cause by code and group.
   *
   * Получает конкретную причину ошибки по коду и группе.
   * @param code error code / код ошибки
   * @param group error group / группа ошибки
   * @returns error cause item or undefined / элемент причины ошибки или undefined
   */
  static get(
    code: string,
    group?: ErrorCenterGroup
  ): ErrorCenterCauseItem | undefined {
    return this.getItem().get(code, group)
  }

  /**
   * Returns the handler instance.
   *
   * Возвращает экземпляр обработчика.
   * @returns handler instance / экземпляр обработчика
   */
  static getHandler(): ErrorCenterHandler {
    return this.getItem().getHandler()
  }

  /**
   * Checks if a cause with specific code exists.
   *
   * Проверяет наличие причины с конкретным кодом.
   * @param code error code / код ошибки
   * @param group error group / группа ошибки
   * @returns true if cause exists / true, если причина существует
   */
  static has(
    code: string,
    group?: ErrorCenterGroup
  ): boolean {
    return this.getItem().has(code, group)
  }

  /**
   * Returns the global singleton instance of ErrorCenterInstance.
   *
   * Возвращает глобальный экземпляр синглтона ErrorCenterInstance.
   * @returns ErrorCenterInstance instance / экземпляр ErrorCenterInstance
   */
  static getItem(): ErrorCenterInstance {
    if (!this.item) {
      this.item = new ErrorCenterInstance(errorCauseList)
    }

    return this.item
  }

  /**
   * Sets console output flag or filter function.
   *
   * Устанавливает флаг или функцию фильтрации вывода в консоль.
   * @param isConsole console output flag or filter function / флаг или функция вывода в консоль
   */
  static setIsConsole(
    isConsole: ErrorCenterHandlerIsConsole
  ): void {
    this.getItem().setIsConsole(isConsole)
  }

  /**
   * Adds an error cause to the storage.
   *
   * Добавляет причину ошибки в хранилище.
   * @param cause error cause item / элемент причины ошибки
   */
  static add(cause: ErrorCenterCauseItem): void {
    this.getItem().add(cause)
  }

  /**
   * Adds a callback to be executed on any error.
   *
   * Добавляет обратный вызов, который будет выполняться при любой ошибке.
   * @param callback callback function / функция обратного вызова
   */
  static addCallback(
    callback: ErrorCenterHandlerCallback
  ): void {
    this.getItem().addCallback(callback)
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
  ): void {
    this.getItem().addHandler(group, handler)
  }

  /**
   * Registers a list of handlers.
   *
   * Регистрирует список обработчиков.
   * @param handlers handlers list / список обработчиков
   */
  static addHandlerList(handlers: ErrorCenterHandlerList): void {
    this.getItem().addHandlerList(handlers)
  }

  /**
   * Adds a list of error causes to the storage.
   *
   * Добавляет список причин ошибок в хранилище.
   * @param causes error causes list / список причин ошибок
   */
  static addList(causes: ErrorCenterCauseList): void {
    this.getItem().addList(causes)
  }

  /**
   * Removes a cause from the storage by code and group.
   *
   * Удаляет причину ошибки из хранилища по коду и группе.
   * @param code error code / код ошибки
   * @param group error group / группа ошибки
   */
  static remove(
    code: string,
    group?: ErrorCenterGroup
  ): void {
    this.getItem().remove(code, group)
  }

  /**
   * Removes a handler or all handlers for a group.
   *
   * Удаляет обработчик или все обработчики для группы.
   * @param group target group / целевая группа
   * @param handler handler callback / обратный вызов обработчика
   */
  static removeHandler(
    group?: ErrorCenterGroup,
    handler?: ErrorCenterHandlerCallback
  ): void {
    this.getItem().removeHandler(group, handler)
  }

  /**
   * Removes a global callback.
   *
   * Удаляет глобальный обратный вызов.
   * @param callback callback function to remove / функция обратного вызова для удаления
   */
  static removeCallback(
    callback: ErrorCenterHandlerCallback
  ): void {
    this.getItem().removeCallback(callback)
  }

  /**
   * Resets registered handlers and callbacks.
   *
   * Сбрасывает зарегистрированные обработчики и обратные вызовы.
   */
  static reset(): void {
    this.getItem().reset()
  }

  /**
   * Triggers error handling for a group.
   *
   * Вызывает обработку ошибки для группы.
   * @param cause error cause details / детали причины ошибки
   */
  static on(cause: ErrorCenterCauseItem): void {
    this.getItem().on(cause)
  }
}
