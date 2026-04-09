import { UI_FIGMA_FRAME_SET_SELECTION, useFigmaUiMessenger } from '../library'

/**
 * Send selection frame to UI
 *
 * Отправка выделенного фрейма в UI
 * @param id - Frame ID / ID фрейма
 */
export function sendFrameSelection(id?: string) {
  useFigmaUiMessenger()
    .post(UI_FIGMA_FRAME_SET_SELECTION, { id })
}
