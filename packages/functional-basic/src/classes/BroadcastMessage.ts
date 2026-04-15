import { isDomRuntime } from '../functions/isDomRuntime'
import { random } from '../functions/random'

import { DataStorage } from './DataStorage'
import { ErrorCenter } from './ErrorCenter'
import type { ErrorCenterInstance } from './ErrorCenterInstance'

/**
 * A class to handle BroadcastChannel messaging.
 *
 * Класс для работы с сообщениями BroadcastChannel.
 */
export class BroadcastMessage<Message = any> {
  protected channel?: BroadcastChannel

  /**
   * Constructor
   * @param name channel name/ название канала
   * @param callback callback on message received/ колбэк на получение сообщения
   * @param callbackError callback on message error/ колбэк на ошибку сообщения
   * @param errorCenter error center instance/ экземпляр центра ошибок
   */
  constructor(
    name: string,
    protected callback?: (event: MessageEvent<Message>) => void,
    protected callbackError?: (event: MessageEvent<Message>) => void,
    errorCenter: ErrorCenterInstance = ErrorCenter.getItem()
  ) {
    if (isDomRuntime()) {
      try {
        this.channel = new BroadcastChannel(`${getBroadcastName()}__${name}`)
        this.channel.onmessage = this.update
        this.channel.onmessageerror = this.updateError
      } catch (e) {
        errorCenter.on({
          group: 'broadcast',
          code: 'error',
          details: e
        })
      }
    }
  }

  /**
   * Get the channel.
   *
   * Получить канал.
   * @returns channel/ канал
   */
  getChannel(): BroadcastChannel | undefined {
    return this.channel
  }

  /**
   * Send a message to the channel.
   *
   * Отправить сообщение в канал.
   * @param message message to send/ сообщение для отправки
   */
  post(message: Message): this {
    this.channel?.postMessage(message)
    return this
  }

  /**
   * Set the callback function to be called when a message is received.
   *
   * Установить функцию колбэка, которая будет вызвана при получении сообщения.
   * @param callback callback function/ функция колбэка
   */
  setCallback(callback: (event: MessageEvent<Message>) => void): this {
    this.callback = callback
    return this
  }

  /**
   * Set the callback function to be called when a message error occurs.
   *
   * Установить функцию колбэка, которая будет вызвана при возникновении ошибки сообщения.
   * @param callbackError callback function/ функция колбэка
   */
  setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this {
    this.callbackError = callbackError
    return this
  }

  /**
   * Closes the channel and stops listening for messages.
   *
   * Закрывает канал и прекращает прослушивание сообщений.
   */
  destroy(): void {
    this.channel?.close()
    this.channel = undefined
  }

  /**
   * Update state on message received.
   *
   * Обновление состояния при получении сообщения.
   * @param event message event/ событие сообщения
   */
  protected readonly update = (event: MessageEvent<Message>): this => {
    this.callback?.(event)
    return this
  }

  /**
   * Update error state on message error.
   *
   * Обновление состояния ошибки при получении ошибки сообщения.
   * @param event message error event/ событие ошибки сообщения
   */
  protected readonly updateError = (event: MessageEvent<Message>): this => {
    this.callbackError?.(event)
    return this
  }
}

/**
 * Generates a random name and saves it in local storage.
 *
 * Генерирует случайное имя и сохраняет его в локальном хранилище.
 */
const getBroadcastName = () => new DataStorage('__broadcast-name')
  .get(() => `name_${random(1_000_000, 9_999_999)}`)
