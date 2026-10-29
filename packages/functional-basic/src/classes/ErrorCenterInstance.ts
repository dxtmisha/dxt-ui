// ai-none

import { ErrorCenterHandler } from './ErrorCenterHandler'

import type {
  ErrorCenterCauseItem,
  ErrorCenterCauseList,
  ErrorCenterGroup,
  ErrorCenterHandlerCallback,
  ErrorCenterHandlerIsConsole,
  ErrorCenterHandlerList
} from '../types/errorCenterTypes'

/**
 * Class for managing error storage and handling within an instance.
 *
 * Класс для управления хранилищем ошибок и их обработкой внутри экземпляра.
 */
export class ErrorCenterInstance {
  /** List of stored error causes / Список сохраненных причин ошибок */
  protected causes: ErrorCenterCauseList = []

  /**
   * Constructor for ErrorCenterInstance.
   *
   * Конструктор ErrorCenterInstance.
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
   * Gets a specific error cause by code and group.
   *
   * Получает конкретную причину ошибки по коду и группе.
   * @param code error code / код ошибки
   * @param group error group / группа ошибки
   * @returns error cause item or undefined / элемент причины ошибки или undefined
   */
  get(
    code: string,
    group?: ErrorCenterGroup
  ): ErrorCenterCauseItem | undefined {
    return this.causes.find(
      cause => cause.group === group && cause.code === code
    )
  }

  /**
   * Returns the handler instance.
   *
   * Возвращает экземпляр обработчика.
   * @returns handler instance / экземпляр обработчика
   */
  getHandler(): ErrorCenterHandler {
    return this.handler
  }

  /**
   * Checks if a cause with specific code exists.
   *
   * Проверяет наличие причины с конкретным кодом.
   * @param code error code / код ошибки
   * @param group error group / группа ошибки
   * @returns true if cause exists / true, если причина существует
   */
  has(
    code: string,
    group?: ErrorCenterGroup
  ): boolean {
    return Boolean(this.get(code, group))
  }

  /**
   * Sets console output flag or filter function for the handler.
   *
   * Устанавливает флаг или функцию фильтрации вывода в консоль для обработчика.
   * @param isConsole console output flag or filter function / флаг или функция вывода в консоль
   * @returns this instance / текущий экземпляр
   */
  setIsConsole(
    isConsole: ErrorCenterHandlerIsConsole
  ): this {
    this.handler.setIsConsole(isConsole)
    return this
  }

  /**
   * Adds an error cause to the storage.
   *
   * Добавляет причину ошибки в хранилище.
   * @param cause error cause item / элемент причины ошибки
   * @returns this instance / текущий экземпляр
   */
  add(cause: ErrorCenterCauseItem): this {
    this.causes.unshift(cause)
    return this
  }

  /**
   * Adds a callback to be executed on any error.
   *
   * Добавляет обратный вызов, который будет выполняться при любой ошибке.
   * @param callback callback function / функция обратного вызова
   * @returns this instance / текущий экземпляр
   */
  addCallback(
    callback: ErrorCenterHandlerCallback
  ): this {
    this.handler.addCallback(callback)
    return this
  }

  /**
   * Registers a new handler.
   *
   * Регистрирует новый обработчик.
   * @param group target group / целевая группа
   * @param handler handler callback / обратный вызов обработчика
   * @returns this instance / текущий экземпляр
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
   * @returns this instance / текущий экземпляр
   */
  addHandlerList(handlers: ErrorCenterHandlerList): this {
    this.handler.addList(handlers)
    return this
  }

  /**
   * Adds a list of error causes to the storage.
   *
   * Добавляет список причин ошибок в хранилище.
   * @param causes error causes list / список причин ошибок
   * @returns this instance / текущий экземпляр
   */
  addList(causes: ErrorCenterCauseList): this {
    this.causes.unshift(...causes)
    return this
  }

  /**
   * Removes a cause from the storage by code and group.
   *
   * Удаляет причину ошибки из хранилища по коду и группе.
   * @param code error code / код ошибки
   * @param group error group / группа ошибки
   * @returns this instance / текущий экземпляр
   */
  remove(
    code: string,
    group?: ErrorCenterGroup
  ): this {
    this.causes = this.causes.filter(
      cause => !(cause.code === code && cause.group === group)
    )
    return this
  }

  /**
   * Removes a handler or all handlers for a group.
   *
   * Удаляет обработчик или все обработчики для группы.
   * @param group target group / целевая группа
   * @param handler handler callback / обратный вызов обработчика
   * @returns this instance / текущий экземпляр
   */
  removeHandler(
    group?: ErrorCenterGroup,
    handler?: ErrorCenterHandlerCallback
  ): this {
    this.handler.remove(group, handler)
    return this
  }

  /**
   * Removes a global callback.
   *
   * Удаляет глобальный обратный вызов.
   * @param callback callback function to remove / функция обратного вызова для удаления
   * @returns this instance / текущий экземпляр
   */
  removeCallback(
    callback: ErrorCenterHandlerCallback
  ): this {
    this.handler.removeCallback(callback)
    return this
  }

  /**
   * Resets registered handlers and callbacks.
   *
   * Сбрасывает зарегистрированные обработчики и обратные вызовы.
   * @returns this instance / текущий экземпляр
   */
  reset(): this {
    this.handler.reset()
    return this
  }

  /**
   * Triggers error handling for a group.
   *
   * Вызывает обработку ошибки для группы.
   * @param cause error cause details / детали причины ошибки
   * @returns this instance / текущий экземпляр
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
   * @returns merged error cause / объединенная причина ошибки
   */
  protected assign(cause: ErrorCenterCauseItem): ErrorCenterCauseItem {
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
