import { FigmaPostAbstract, FigmaPostCode, type UiFigmaMessengerData } from '@dxtmisha/figma'

/**
 * Messenger for the Figma plugin side (backend).
 *
 * Мессенджер для стороны плагина Figma (backend).
 */
export class FigmaPluginMessenger extends FigmaPostAbstract {
  /**
   * Getting an instance of the class for working with Figma plugin messenger (backend).
   *
   * Получение экземпляра класса для работы с мессенджером плагина Figma (backend).
   * @returns current instance/ текущий экземпляр
   */
  static getInstance() {
    if (item) {
      return item
    }

    item = new FigmaPluginMessenger()
    item.make()

    return item
  }

  /**
   * Sends a message to the Figma UI.
   *
   * Отправляет сообщение в UI Figma.
   * @param type The type of the message / Тип сообщения
   * @param message The message data / Данные сообщения
   */
  post<Message>(
    type: string,
    message?: Message
  ): void {
    figma.ui.postMessage({
      code: FigmaPostCode.get(),
      type,
      message
    })
  }

  /**
   * Initializes the listener using the figma.ui.onmessage API.
   *
   * Инициализирует слушатель, используя API figma.ui.onmessage.
   */
  protected prepare() {
    figma.ui.onmessage = (message: UiFigmaMessengerData) => this.onMessage(message)
  }
}

let item: FigmaPluginMessenger | undefined
