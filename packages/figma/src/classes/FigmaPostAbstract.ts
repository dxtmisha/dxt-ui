import { FigmaPostCode } from './FigmaPostCode'

import type { UiFigmaMessengerCallback, UiFigmaMessengerData } from '../types/figmaMessengerTypes'

/**
 * Base abstract class for managing messaging between the Figma plugin and UI.
 *
 * Базовый абстрактный класс для управления обменом сообщениями между плагином Figma и UI.
 */
export abstract class FigmaPostAbstract {
  protected isMake: boolean = false
  protected readonly posts: Record<string, UiFigmaMessengerCallback[]> = {}

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
   * Adds a callback listener for a specific message type.
   *
   * Добавляет колбэк-слушатель для определенного типа сообщения.
   * @param type The type of the message / Тип сообщения
   * @param callback The function to call when the message is received / Функция, вызываемая при получении сообщения
   */
  add<Message>(
    type: string,
    callback: UiFigmaMessengerCallback<Message>
  ): this {
    if (!this.posts[type]) {
      this.posts[type] = []
    }

    this.posts[type].push(callback)

    return this
  }

  /**
   * Initializes the message listener.
   *
   * Инициализирует слушатель сообщений.
   */
  make(): this {
    if (!this.isMake) {
      this.isMake = true
      this.prepare()
    }

    return this
  }

  /**
   * Sets up the actual environment-specific message listener.
   *
   * Настраивает фактический слушатель сообщений, зависящий от среды.
   */
  protected abstract prepare(): void

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
  ) {
    this.posts[type]?.forEach(callback => callback(message))
  }

  /**
   * Internal message handler that filters by post code and notifies listeners.
   *
   * Внутренний обработчик сообщений, который фильтрует по коду сообщения и уведомляет слушателей.
   * @param data The received message data / Данные полученного сообщения
   */
  protected onMessage = (data?: UiFigmaMessengerData) => {
    console.log('data', data)

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
}
