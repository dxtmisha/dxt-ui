import { FigmaPostCode } from './FigmaPostCode'

import type { UiFigmaMessengerCallback, UiFigmaMessengerData, UiFigmaMessengerList } from '../types/figmaMessengerTypes'

/**
 * Base abstract class for managing messaging between the Figma plugin and UI.
 *
 * Базовый абстрактный класс для управления обменом сообщениями между плагином Figma и UI.
 */
export abstract class FigmaPostAbstract {
  /** Flag indicating whether the message listener is initialized / Флаг, указывающий, инициализирован ли слушатель сообщений */
  protected isMake: boolean = false

  /** Dictionary of registered message callbacks indexed by type / Словарь зарегистрированных колбэков сообщений, индексированный по типу */
  protected readonly posts: UiFigmaMessengerList = {}

  /**
   * Adds a callback listener for a specific message type.
   *
   * Добавляет колбэк-слушатель для определенного типа сообщения.
   * @param type The type of the message / Тип сообщения
   * @param callback The function to call when the message is received / Функция, вызываемая при получении сообщения
   * @param once Whether the callback should only be called once / Вызывать ли колбэк только один раз
   * @returns Current instance / Текущий экземпляр
   */
  add<Message>(
    type: string,
    callback: UiFigmaMessengerCallback<Message>,
    once: boolean = false
  ): this {
    if (!Object.hasOwn(this.posts, type)) {
      this.posts[type] = {
        type,
        callbackList: []
      }
    }

    this.posts[type].callbackList.push({
      callback,
      once
    })

    return this
  }

  /**
   * Removes a callback listener for a specific message type.
   *
   * Удаляет колбэк-слушатель для определенного типа сообщения.
   * @param type The type of the message / Тип сообщения
   * @param callback The function to remove / Функция для удаления
   * @returns Current instance / Текущий экземпляр
   */
  remove<Message>(
    type: string,
    callback: UiFigmaMessengerCallback<Message>
  ): this {
    if (!Object.hasOwn(this.posts, type)) {
      return this
    }

    this.posts[type].callbackList
      = this.posts[type].callbackList
        .filter(callbackPost => callbackPost.callback !== callback)

    return this
  }

  /**
   * Initializes the message listener.
   *
   * Инициализирует слушатель сообщений.
   * @returns Current instance / Текущий экземпляр
   */
  make(): this {
    if (!this.isMake) {
      this.isMake = true
      this.prepare()
    }

    return this
  }

  /**
   * Sends a message to the other side.
   *
   * Отправляет сообщение на другую сторону.
   * @param type The type of the message / Тип сообщения
   * @param message The message data / Данные сообщения
   */
  abstract post<Message>(
    type: string,
    message?: Message
  ): void

  /**
   * Notifies all registered listeners for a specific message type.
   *
   * Уведомляет всех зарегистрированных слушателей для определенного типа сообщения.
   * @param type The type of the message / Тип сообщения
   * @param message The message data / Данные сообщения
   */
  protected notify<Message>(
    type: string,
    message: Message
  ): void {
    if (Object.hasOwn(this.posts, type)) {
      this.posts[type].callbackList.forEach((item) => {
        item.callback(message)

        if (item.once) {
          this.remove(type, item.callback)
        }
      })
    }
  }

  /**
   * Internal message handler that filters by post code and notifies listeners.
   *
   * Внутренний обработчик сообщений, который фильтрует по коду сообщения и уведомляет слушателей.
   * @param data The received message data / Данные полученного сообщения
   */
  protected onMessage = (data?: UiFigmaMessengerData): void => {
    if (
      data
      && FigmaPostCode.is(data.code)
    ) {
      this.notify(
        data.type,
        data.message
      )
    }
  }

  /**
   * Sets up the actual environment-specific message listener.
   *
   * Настраивает фактический слушатель сообщений, зависящий от среды.
   */
  protected abstract prepare(): void
}
