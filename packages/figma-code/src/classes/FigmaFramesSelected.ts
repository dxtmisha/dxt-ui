import { UI_FIGMA_FRAMES_SELECTED_ADD_NAME, UI_FIGMA_FRAMES_SELECTED_POST_NAME } from '@dxtmisha/figma'
import { useFigmaPluginMessenger } from '../composables/useFigmaPluginMessenger'
import { FigmaStorage } from './FigmaStorage'

/**
 * Class for managing and synchronizing the list of selected frames in the Figma plugin.
 *
 * Класс для управления и синхронизации списка выбранных фреймов в плагине Figma.
 */
export class FigmaFramesSelected {
  /** Storage for persistent selected frames / Хранилище для постоянного списка выбранных фреймов */
  protected static storage: FigmaStorage<string[]> = new FigmaStorage(UI_FIGMA_FRAMES_SELECTED_POST_NAME)
  /** Cached list of selected frame IDs / Кэшированный список идентификаторов выбранных фреймов */
  protected static selected: string[] | undefined = undefined

  /**
   * Checks if a frame with the given ID is selected.
   *
   * Проверяет, выбран ли фрейм с указанным идентификатором.
   * @param id Frame ID / Идентификатор фрейма
   * @returns `true` if selected / `true`, если выбран
   */
  static has(id: string) {
    return this.get().includes(id)
  }

  /**
   * Retrieves the current list of selected frame IDs, using cache if available.
   *
   * Получает текущий список идентификаторов выбранных фреймов, используя кэш при его наличии.
   * @returns An array of selected frame IDs / Массив идентификаторов выбранных фреймов
   */
  static get() {
    if (!this.selected) {
      this.selected = this.getList()
    }

    return this.selected
  }

  /**
   * Adds a frame ID to the selection list.
   *
   * Добавляет идентификатор фрейма в список выбора.
   * @param id Frame ID / Идентификатор фрейма
   */
  static add(id: string): void {
    if (this.has(id)) {
      return
    }

    const selected = this.get()

    selected.push(id)
    this.set(selected)
  }

  /**
   * Removes a frame ID from the selection list.
   *
   * Удаляет идентификатор фрейма из списка выбора.
   * @param id Frame ID / Идентификатор фрейма
   */
  static remove(id: string): void {
    if (this.has(id)) {
      const selected = this.get()

      selected.splice(selected.indexOf(id), 1)
      this.set(selected)
    }
  }

  /**
   * Toggles the selection state of a frame.
   *
   * Переключает состояние выбора фрейма.
   * @param id Frame ID / Идентификатор фрейма
   * @param selected Whether to select or deselect / Выбрать или отменить выбор
   */
  static toggle(id: string, selected: boolean) {
    if (selected) {
      this.add(id)
    } else {
      this.remove(id)
    }
  }

  /**
   * Sets up communication via the plugin messenger to handle selection state.
   *
   * Настраивает связь через мессенджер плагина для управления состоянием выбора.
   */
  static send() {
    const messenger = useFigmaPluginMessenger()

    messenger.add(UI_FIGMA_FRAMES_SELECTED_POST_NAME, () => {
      messenger.post(UI_FIGMA_FRAMES_SELECTED_POST_NAME, this.get())
    })

    messenger.add(
      UI_FIGMA_FRAMES_SELECTED_ADD_NAME,
      ({ id, selected }: { id: string, selected: boolean }) => this.toggle(id, selected)
    )
  }

  /**
   * Retrieves the raw selection list from storage.
   *
   * Получает необработанный список выбора из хранилища.
   * @returns An array of frame IDs / Массив идентификаторов фреймов
   */
  protected static getList(): string[] {
    return this.storage.get() ?? []
  }

  /**
   * Updates the selection list in cache and storage.
   *
   * Обновляет список выбора в кэше и хранилище.
   * @param selected New selection list / Новый список выбора
   */
  protected static set(selected: string[]): void {
    this.selected = selected
    this.storage.set(selected)
  }
}
