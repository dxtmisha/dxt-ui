import { FigmaUiMessenger } from '../classes/FigmaUiMessenger'
import { UI_FIGMA_FRAME_SET_SELECTION } from '../types/framesTypes'

/**
 * Send selection frame to UI
 *
 * Отправка выделенного фрейма в UI
 * @param id - Frame ID / ID фрейма
 */
export function sendFrameSelection(id?: string) {
  FigmaUiMessenger
    .getInstance()
    .post(UI_FIGMA_FRAME_SET_SELECTION, { id })
}
