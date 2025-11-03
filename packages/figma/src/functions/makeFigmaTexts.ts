import { FigmaMessage } from '../classes/FigmaMessage'
import { FigmaFrame } from '../classes/FigmaFrame'

import { FIGMA_MESSAGE_TEXTS } from '../config'

/**
 * Sets up a listener for selection changes in Figma and sends text elements to the UI.
 *
 * Настраивает слушатель изменений выделения в Figma и отправляет текстовые элементы в UI.
 */
export const makeFigmaTexts = () => {
  figma.on('selectionchange', () => {
    const frame = new FigmaFrame(figma.currentPage, true)

    FigmaMessage.post(FIGMA_MESSAGE_TEXTS, {
      frame,
      texts: frame.getTexts()
    })
  })
}
