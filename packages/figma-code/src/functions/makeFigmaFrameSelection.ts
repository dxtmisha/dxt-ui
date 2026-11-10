import { UI_FIGMA_FRAME_GET_SELECTION } from '@dxtmisha/figma'

import { FigmaFrame } from '../classes/FigmaFrame'
import { FigmaPluginMessenger } from '../classes/FigmaPluginMessenger'

/**
 * Sends information about the current selection to the UI.
 *
 * Отправляет информацию о текущем выделении в UI.
 * @returns promise that resolves after message is sent / промис, завершающийся после отправки сообщения
 */
async function sendMessenger(): Promise<void> {
  const frame = new FigmaFrame(figma.currentPage, true)

  FigmaPluginMessenger
    .getInstance()
    .post(UI_FIGMA_FRAME_GET_SELECTION, await frame.getMainItemsInfo())
}

/**
 * Sets up a listener for selection changes in Figma and sends the selection data to the UI.
 *
 * Настраивает слушатель изменений выделения в Figma и отправляет данные о выделении в UI.
 */
export function makeFigmaFrameSelection(): void {
  figma.on('selectionchange', () => {
    void sendMessenger()
  })

  void sendMessenger()
}
