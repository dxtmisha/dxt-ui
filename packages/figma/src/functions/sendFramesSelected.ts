import { FigmaUiMessenger } from '../classes/FigmaUiMessenger'
import { UI_FIGMA_FRAMES_SELECTED_ADD_NAME } from '../types/framesTypes'

/**
 * Sends the selected frames to the Figma plugin.
 *
 * Отправляет выбранные фреймы в плагин Figma.
 * @param id The ID of the frame / Идентификатор фрейма
 * @param selected The selection state of the frame / Состояние выбора фрейма
 */
export function sendFramesSelected(
  id: string,
  selected: boolean
): void {
  FigmaUiMessenger
    .getInstance()
    .post(UI_FIGMA_FRAMES_SELECTED_ADD_NAME, { id, selected })
}
