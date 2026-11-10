import { FIGMA_MESSAGE_TEXTS } from '../config'
import { FigmaFrame } from '../classes/FigmaFrame'
import { FigmaPluginMessenger } from '../classes/FigmaPluginMessenger'

/**
 * Sends information about text elements and screenshots of the current selection to the UI.
 *
 * Отправляет информацию о текстовых элементах и скриншоты текущего выделения в UI.
 * @returns promise that resolves after message is sent / промис, завершающийся после отправки сообщения
 */
async function sendMessenger(): Promise<void> {
  const frame = new FigmaFrame(figma.currentPage, true)

  FigmaPluginMessenger
    .getInstance()
    .post(FIGMA_MESSAGE_TEXTS, {
      frame,
      texts: frame.getTexts(),
      screenshot: await frame.screenshot()
    })
}

/**
 * Sets up a listener for selection changes in Figma and sends text elements to the UI.
 *
 * Настраивает слушатель изменений выделения в Figma и отправляет текстовые элементы в UI.
 */
export function makeFigmaTexts(): void {
  figma.on('selectionchange', () => {
    void sendMessenger()
  })
}
