import { useFigmaUiMessenger } from '../composables/useFigmaUiMessenger'
import { UI_FIGMA_FRAMES_SELECTED_POST_NAME } from '../types/framesTypes'

/** Cached list of selected frames / Кэшированный список выбранных фреймов */
let selected: string[] | undefined

/** Indicates if a fetch operation is currently in progress / Указывает, выполняется ли в данный момент операция получения */
let loading: boolean = false

/**
 * Fetches the selected frames from the Figma plugin.
 *
 * Получает выбранные фреймы из плагина Figma.
 * @param callback The function to call once the frames are received / Функция, вызываемая после получения выбранных фреймов
 */
export function fetchFramesSelected(
  callback: (selected: string[]) => void
): void {
  if (selected) {
    callback(selected)
    return
  }

  if (loading) {
    setTimeout(() => fetchFramesSelected(callback), 160)
    return
  }

  loading = true

  /** The messenger instance for bidirectional communication / Экземпляр мессенджера для двусторонней связи */
  const messenger = useFigmaUiMessenger()

  /**
   * The callback function that updates the selected frames state and notifies the requester.
   *
   * Функция обратного вызова, которая обновляет состояние выбранных фреймов и уведомляет запрашивающего.
   * @param selectedNew The new list of selected frame IDs / Новый список идентификаторов выбранных фреймов
   */
  const update = (selectedNew: string[]) => {
    selected = selectedNew

    if (selected.length > 0) {
      callback(selected)
      messenger.remove(UI_FIGMA_FRAMES_SELECTED_POST_NAME, update)

      loading = false
    }
  }

  messenger.add(UI_FIGMA_FRAMES_SELECTED_POST_NAME, update)
    .post(UI_FIGMA_FRAMES_SELECTED_POST_NAME)
}

