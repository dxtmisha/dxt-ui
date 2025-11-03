import type { UiFigmaMessageCallback, UiFigmaMessageData, UiFigmaMessageList } from '../types/figmaTypes'
import { FIGMA_MESSAGE_CODE } from '../config'

/**
 * Class for working with messages between Figma plugin code and UI.
 *
 * Класс для работы с сообщениями между кодом плагина Figma и UI.
 */
export class FigmaMessage {
  /**
   * List of registered message handlers/
   * Список зарегистрированных обработчиков сообщений
   */
  protected static readonly messages: UiFigmaMessageList = []

  /**
   * Unique code for message identification/
   * Уникальный код для идентификации сообщений
   */
  protected static readonly code: string = FIGMA_MESSAGE_CODE

  /**
   * Sends a message from plugin code to UI.
   *
   * Отправляет сообщение из кода плагина в UI.
   * @param type message type/ тип сообщения
   * @param message message data/ данные сообщения
   */
  static post<MESSAGE>(
    type: string,
    message?: MESSAGE
  ): void {
    figma.ui.postMessage({
      code: this.code,
      type,
      message
    })
  }

  /**
   * Registers a callback handler for a specific message type.
   *
   * Регистрирует обработчик callback для определённого типа сообщения.
   * @param type message type/ тип сообщения
   * @param callback callback function/ функция обратного вызова
   */
  static add<T>(
    type: string,
    callback: UiFigmaMessageCallback<T>
  ) {
    const item = this.messages.find(item => item.type === type)

    if (item) {
      item.callbackList.push(callback)
    } else {
      this.messages.push({
        type,
        callbackList: [callback]
      })
    }
  }

  /**
   * Checks if the message code matches the expected code.
   *
   * Проверяет, соответствует ли код сообщения ожидаемому коду.
   * @param code message code/ код сообщения
   */
  protected static isCode(code: string): boolean {
    return this.code === code
  }

  /**
   * Executes all registered callbacks for a specific message type.
   *
   * Выполняет все зарегистрированные обработчики для определённого типа сообщения.
   * @param type message type/ тип сообщения
   * @param message message data/ данные сообщения
   */
  protected static go(
    type: string,
    message: any
  ) {
    const item = FigmaMessage.messages.find(item => item.type === type)

    if (item) {
      item.callbackList.forEach(callback => callback(message))
    }
  }

  /**
   * Message event handler from the plugin.
   *
   * Обработчик события сообщения от плагина.
   * @param event message event/ событие сообщения
   */
  protected static on = (event: MessageEvent) => {
    const data: UiFigmaMessageData = event.data?.pluginMessage

    if (
      data
      && this.isCode(data.code)
    ) {
      this.go(
        data.type,
        data.message
      )
    }
  }

  /**
   * Static initialization block that registers the message listener.
   *
   * Статический блок инициализации, который регистрирует слушатель сообщений.
   */
  static {
    if (window !== undefined) {
      window.addEventListener('message', this.on)
    }
  }
}
