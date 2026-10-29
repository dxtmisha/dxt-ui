// ai-none

import { executeFunction } from '../functions/executeFunction'
import { isDomRuntime } from '../functions/isDomRuntime'
import type {
  ErrorCenterCauseItem,
  ErrorCenterGroup,
  ErrorCenterHandlerCallback,
  ErrorCenterHandlerIsConsole,
  ErrorCenterHandlerItem,
  ErrorCenterHandlerList
} from '../types/errorCenterTypes'

/**
 * Class for managing and triggering error handlers.
 *
 * Класс для управления и вызова обработчиков ошибок.
 */
export class ErrorCenterHandler {
  /** Registered handlers list / Список зарегистрированных обработчиков */
  protected handlers: ErrorCenterHandlerList = []

  /** Callbacks executed on every error / Обратные вызовы, выполняемые при каждой ошибке */
  protected callbacks: ErrorCenterHandlerCallback[] = []

  /** Console output flag or filter function / Флаг или функция фильтрации вывода в консоль */
  protected isConsole: ErrorCenterHandlerIsConsole = true

  /**
   * Constructor for ErrorCenterHandler.
   *
   * Конструктор ErrorCenterHandler.
   * @param handlers initial handlers list / начальный список обработчиков
   * @param isConsole console output flag or filter function / флаг или функция вывода в консоль
   */
  constructor(
    handlers?: ErrorCenterHandlerList,
    isConsole: ErrorCenterHandlerIsConsole = true
  ) {
    this.isConsole = isConsole
    if (handlers) {
      this.addList(handlers)
    }
  }

  /**
   * Gets handlers for a group.
   *
   * Получает обработчики для группы.
   * @param group error group / группа ошибки
   * @returns handler item or undefined / элемент обработчика или undefined
   */
  get(group?: ErrorCenterGroup): ErrorCenterHandlerItem | undefined {
    return this.handlers.find(cause => cause.group === group)
  }

  /**
   * Checks if handlers exist for a group.
   *
   * Проверяет наличие обработчиков для группы.
   * @param group error group / группа ошибки
   * @returns true if handlers exist / true, если обработчики существуют
   */
  has(group?: ErrorCenterGroup): boolean {
    return Boolean(this.get(group))
  }

  /**
   * Sets console output flag or filter function.
   *
   * Устанавливает флаг или функцию фильтрации вывода в консоль.
   * @param isConsole console output flag or filter function / флаг или функция вывода в консоль
   * @returns this instance / текущий экземпляр
   */
  setIsConsole(
    isConsole: ErrorCenterHandlerIsConsole
  ): this {
    this.isConsole = isConsole
    return this
  }

  /**
   * Adds a handler for a specific group.
   *
   * Добавляет обработчик для определенной группы.
   * @param group error group / группа ошибки
   * @param handler callback function / функция обратного вызова
   * @returns this instance / текущий экземпляр
   */
  add(
    group: ErrorCenterGroup,
    handler: ErrorCenterHandlerCallback
  ): this {
    const item = this.get(group)

    if (item) {
      item.handlers.push(handler)
    } else {
      this.handlers.push({
        group,
        handlers: [handler]
      })
    }

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
    this.callbacks.push(callback)
    return this
  }

  /**
   * Adds a list of group-based handlers.
   *
   * Добавляет список обработчиков по группам.
   * @param handlers handlers list / список обработчиков
   * @returns this instance / текущий экземпляр
   */
  addList(
    handlers: ErrorCenterHandlerList
  ): this {
    handlers.forEach(
      handlerGroup => handlerGroup.handlers.forEach(
        handler => this.add(handlerGroup.group, handler)
      )
    )
    return this
  }

  /**
   * Removes a handler or all handlers for a group.
   *
   * Удаляет обработчик или все обработчики для группы.
   * @param group error group / группа ошибки
   * @param handler callback function to remove / функция обратного вызова для удаления
   * @returns this instance / текущий экземпляр
   */
  remove(
    group?: ErrorCenterGroup,
    handler?: ErrorCenterHandlerCallback
  ): this {
    if (handler) {
      const item = this.get(group)

      if (item) {
        item.handlers = item.handlers.filter(current => current !== handler)

        if (item.handlers.length === 0) {
          this.handlers = this.handlers.filter(current => current !== item)
        }
      }
    } else {
      this.handlers = this.handlers.filter(item => item.group !== group)
    }

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
    this.callbacks = this.callbacks.filter(current => current !== callback)
    return this
  }

  /**
   * Resets all registered handlers and callbacks.
   *
   * Сбрасывает все зарегистрированные обработчики и обратные вызовы.
   * @returns this instance / текущий экземпляр
   */
  reset(): this {
    this.handlers = []
    this.callbacks = []
    return this
  }

  /**
   * Triggers handlers for a group and logs to console.
   *
   * Вызывает обработчики для группы и выводит ошибку в консоль.
   * @param cause error cause details / детали причины ошибки
   * @returns this instance / текущий экземпляр
   */
  on(cause: ErrorCenterCauseItem): this {
    const item = this.get(cause.group) ?? this.get(undefined)

    if (item) {
      item.handlers.forEach(handler => handler(cause))
    }

    this.callbacks.forEach(callback => callback(cause))

    this.toConsole(cause)

    return this
  }

  /**
   * Logs error cause to the console.
   *
   * Выводит причину ошибки в консоль.
   * @param cause error details / детали ошибки
   * @returns this instance / текущий экземпляр
   */
  protected toConsole(
    cause: ErrorCenterCauseItem
  ): this {
    if (executeFunction(this.isConsole, cause)) {
      console.error(`Error Center: ${cause.code}`)
      console.error('Error Center/message: ', cause.message)
      console.error('Error Center/details: ', cause.details)

      if (!isDomRuntime()) {
        const trace = new Error().stack
        console.error('Error Center/trace: ', trace)
      }
    }

    return this
  }
}
