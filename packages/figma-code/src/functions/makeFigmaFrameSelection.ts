import { FigmaPluginMessenger } from '../classes/FigmaPluginMessenger'

import { FigmaFrame } from '../classes/FigmaFrame'

import { UI_FIGMA_FRAME_GET_SELECTION } from '@dxtmisha/figma'

/**
 * Sets up a listener for selection changes in Figma and sends the selection data to the UI.
 *
 * Настраивает слушатель изменений выделения в Figma и отправляет данные о выделении в UI.
 */
export const makeFigmaFrameSelection = () => {
  figma.on('selectionchange', async () => {
    const frame = new FigmaFrame(figma.currentPage, true)

    FigmaPluginMessenger
      .getInstance()
      .post(UI_FIGMA_FRAME_GET_SELECTION, await frame.getMainItemsInfo())
  })
}
