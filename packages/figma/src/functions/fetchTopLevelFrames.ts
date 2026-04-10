import { FigmaUiMessenger } from '../classes/FigmaUiMessenger'
import { UI_FIGMA_FRAMES_POST_NAME, type UiFigmaFramesList } from '../types/framesTypes'

/** Cached list of top-level frames / Кэшированный список фреймов верхнего уровня */
let frames: UiFigmaFramesList | undefined

/** Indicates if a fetch operation is currently in progress / Указывает, выполняется ли в данный момент операция получения */
let loading: boolean = false

/**
 * Fetches the top-level frames from the Figma plugin.
 *
 * Получает фреймы верхнего уровня из плагина Figma.
 * @param callback The function to call once the frames are received / Функция, вызываемая после получения фреймов
 */
export function fetchTopLevelFrames(
  callback: (frames: UiFigmaFramesList) => void
): void {
  if (frames) {
    callback(frames)
    return
  }

  if (loading) {
    setTimeout(() => fetchTopLevelFrames(callback), 160)
    return
  }

  loading = true

  /** The messenger instance for bidirectional communication / Экземпляр мессенджера для двусторонней связи */
  const messenger = FigmaUiMessenger.getInstance()

  /**
   * The callback function that updates the frames state and notifies the requester.
   *
   * Функция обратного вызова, которая обновляет состояние фреймов и уведомляет запрашивающего.
   * @param framesNew The new list of frames / Новый список фреймов
   */
  const update = (framesNew: UiFigmaFramesList) => {
    frames = framesNew

    if (frames.length > 0) {
      callback(frames)
      messenger.remove(UI_FIGMA_FRAMES_POST_NAME, update)

      loading = false
    }
  }

  messenger.add(UI_FIGMA_FRAMES_POST_NAME, update)
    .post(UI_FIGMA_FRAMES_POST_NAME)
}
