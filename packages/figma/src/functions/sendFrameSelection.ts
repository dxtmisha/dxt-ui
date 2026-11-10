import { FigmaUiMessenger } from '../classes/FigmaUiMessenger'
import { UI_FIGMA_FRAME_SET_SELECTION } from '../types/framesTypes'

/**
 * Sends selected frame ID to the Figma plugin to change document selection.
 *
 * Отправляет идентификатор фрейма в плагин Figma для изменения выделения в документе.
 * @param id Frame ID / ID фрейма
 */
export function sendFrameSelection(id?: string): void {
  FigmaUiMessenger
    .getInstance()
    .post<{ id?: string }>(UI_FIGMA_FRAME_SET_SELECTION, { id })
}
