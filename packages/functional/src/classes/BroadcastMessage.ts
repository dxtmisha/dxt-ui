import { isDomRuntime } from '../functions/isDomRuntime'
import { random } from '../functions/random'
import { useStorageRef } from '../composables/ref/useStorageRef'

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
   */
  constructor(
    name: string,
    protected callback?: (event: MessageEvent<Message>) => void
  ) {
    if (isDomRuntime()) {
      try {
        this.channel = new BroadcastChannel(`${getBroadcastName()}__${name}`)
        this.channel.onmessage = this.update
      } catch (e) {
        console.error(`BroadcastMessage ${name}:`, e)
      }
    }
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
   * Update state on message received.
   *
   * Обновление состояния при получении сообщения.
   * @param event message event/ событие сообщения
   */
  protected readonly update = (event: MessageEvent<Message>): this => {
    this.callback?.(event)
    return this
  }
}

/**
 * Generates a random name and saves it in local storage.
 *
 * Генерирует случайное имя и сохраняет его в локальном хранилище.
 */
const getBroadcastName = () => useStorageRef(
  '__broadcast-name',
  () => `name_${random(1_000_000, 9_999_999)}`
)
