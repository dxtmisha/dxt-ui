import { FigmaPostAbstract } from './FigmaPostAbstract'
import { FigmaPostCode } from './FigmaPostCode'

/**
 * Messenger for the Figma UI side (frontend).
 *
 * Мессенджер для стороны UI Figma (frontend).
 */
export class FigmaUiMessenger extends FigmaPostAbstract {
  /**
   * Sends a message to the Figma plugin.
   *
   * Отправляет сообщение в плагин Figma.
   * @param type The type of the message / Тип сообщения
   * @param message The message data / Данные сообщения
   */
  post<Message>(
    type: string,
    message?: Message
  ): void {
    parent.postMessage({
      pluginMessage: {
        code: FigmaPostCode.get(),
        type,
        message
      }
    }, '*')
  }

  /**
   * Initializes the listener using the window message event.
   *
   * Инициализирует слушатель, используя событие message объекта window.
   */
  protected prepare() {
    window.addEventListener(
      'message',
      (event: MessageEvent) => this.onMessage(event.data?.pluginMessage)
    )
  }
}
