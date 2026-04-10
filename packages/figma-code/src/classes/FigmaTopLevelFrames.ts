import { UI_FIGMA_FRAMES_POST_NAME, type UiFigmaFramesList } from '@dxtmisha/figma'
import { FigmaFrame } from './FigmaFrame'
import { FigmaPluginMessenger } from './FigmaPluginMessenger'

/**
 * Class for managing and sending the list of top-level frames in the Figma plugin.
 *
 * Класс для управления и отправки списка фреймов верхнего уровня в плагине Figma.
 */
export class FigmaTopLevelFrames {
  /** Cached list of top-level frames / Кэшированный список фреймов верхнего уровня */
  protected static frames: UiFigmaFramesList | undefined

  /**
   * Retrieves and caches the formatted list of top-level frames.
   *
   * Получает и кэширует отформатированный список фреймов верхнего уровня.
   * @returns A promise that resolves to the list of frames / Промис, который разрешается в список фреймов
   */
  static async get() {
    if (!this.frames) {
      this.frames = []

      for (const item of this.getList()) {
        this.frames.push({
          name: item.getName(),
          id: item.getId(),
          image: await item.exportJpg()
        })
      }
    }

    return this.frames
  }

  /**
   * Sets up a listener for frame requests and sends the data back using the plugin messenger.
   *
   * Настраивает прослушиватель для запросов фреймов и отправляет данные обратно с помощью мессенджера плагина.
   */
  static send() {
    /** Plugin messenger instance for communication / Экземпляр мессенджера плагина для связи */
    const messenger = FigmaPluginMessenger.getInstance()

    messenger.add(UI_FIGMA_FRAMES_POST_NAME, () => {
      this
        .get()
        .then((frames) => {
          messenger.post(UI_FIGMA_FRAMES_POST_NAME, frames)
        })
    })
  }

  /**
   * Gets the list of main frames from the current Figma page.
   *
   * Получает список основных фреймов с текущей страницы Figma.
   * @returns An array of Figma items / Массив элементов Figma
   */
  protected static getList() {
    return new FigmaFrame(figma.currentPage).getMainFrames()
  }
}
