import { isDomRuntime } from '../functions/isDomRuntime'
import { random } from '../functions/random'

import { DataStorage } from './DataStorage'
import { ErrorCenter } from './ErrorCenter'
import type { ErrorCenterInstance } from './ErrorCenterInstance'

/**
 * Class for working with BroadcastChannel messages.
 *
 * Класс для работы с сообщениями BroadcastChannel.
 */
export class BroadcastMessage<Message = any> {
  protected channel?: BroadcastChannel

  /**
   * Constructor that initializes the broadcast channel with event handlers.
   *
   * Конструктор, инициализирующий канал вещания с обработчиками событий.
   * @param name unique identifier for the broadcast channel / уникальный идентификатор для канала вещания
   * @param callback function called when a message is received / функция, вызываемая при получении сообщения
   * @param callbackError function called when a message error occurs / функция, вызываемая при возникновении ошибки сообщения
   * @param errorCenter ErrorCenter instance for error reporting / экземпляр ErrorCenter для отчета об ошибках
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
   * Gets the BroadcastChannel instance if available.
   *
   * Получает экземпляр BroadcastChannel, если он доступен.
   * @returns BroadcastChannel instance or undefined if not in DOM runtime / экземпляр BroadcastChannel или undefined, если не в среде DOM
   */
  getChannel(): BroadcastChannel | undefined {
    return this.channel
  }

  /**
   * Sends a message through the broadcast channel.
   *
   * Отправляет сообщение через канал вещания.
   * @param message message data to send / данные сообщения для отправки
   * @returns this instance for chaining / этот экземпляр для цепочки вызовов
   */
  post(message: Message): this {
    this.channel?.postMessage(message)
    return this
  }

  /**
   * Sets the callback function to be executed when a message is received.
   *
   * Устанавливает функцию обратного вызова, выполняемую при получении сообщения.
   * @param callback function to execute on message received / функция для выполнения при получении сообщения
   * @returns this instance for chaining / этот экземпляр для цепочки вызовов
   */
  setCallback(callback: (event: MessageEvent<Message>) => void): this {
    this.callback = callback
    return this
  }

  /**
   * Sets the error callback function to be executed when a message error occurs.
   *
   * Устанавливает функцию обратного вызова для обработки ошибок сообщений.
   * @param callbackError function to execute on message error / функция для выполнения при ошибке сообщения
   * @returns this instance for chaining / этот экземпляр для цепочки вызовов
   */
  setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this {
    this.callbackError = callbackError
    return this
  }

  /**
   * Closes the broadcast channel and stops listening for messages.
   *
   * Закрывает канал вещания и прекращает прослушивание сообщений.
   * @returns this instance for chaining / этот экземпляр для цепочки вызовов
   */
  destroy(): this {
    this.channel?.close()
    this.channel = undefined

    return this
  }

  /**
   * Updates state when a message is received.
   *
   * Обновляет состояние при получении сообщения.
   * @param event message event object / объект события сообщения
   * @returns this instance for chaining / этот экземпляр для цепочки вызовов
   */
  protected readonly update = (event: MessageEvent<Message>): this => {
    this.callback?.(event)
    return this
  }

  /**
   * Updates error state when a message error occurs.
   *
   * Обновляет состояние ошибки при возникновении ошибки сообщения.
   * @param event message error event object / объект события ошибки сообщения
   * @returns this instance for chaining / этот экземпляр для цепочки вызовов
   */
  protected readonly updateError = (event: MessageEvent<Message>): this => {
    this.callbackError?.(event)
    return this
  }
}

/**
 * Generates a persistent random name for the broadcast channel.
 *
 * Генерирует постоянное случайное имя для канала вещания.
 * BroadcastChannel requires unique channel names across the same origin.
 * This utility ensures each broadcast instance gets a unique channel name.
 *
 * BroadcastChannel требует уникальные имена каналов в рамках одного источника.
 * Эта утилита обеспечивает, что каждый экземпляр вещания получает уникальное имя канала.
 * @returns generated unique channel name / сгенерированное уникальное имя канала
 */
const getBroadcastName = () => new DataStorage('__ui:broadcast-name__')
  .get(() => `name_${random(1_000_000, 9_999_999)}`)
