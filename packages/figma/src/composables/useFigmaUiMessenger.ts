import { FigmaUiMessenger } from '../classes/FigmaUiMessenger'

let item: FigmaUiMessenger | undefined

/**
 * Composable for accessing the FigmaUiMessenger singleton.
 * Initializes the messenger on first call.
 *
 * Композиция для доступа к синглтону FigmaUiMessenger.
 * Инициализирует мессенджер при первом вызове.
 * @returns FigmaUiMessenger
 */
export function useFigmaUiMessenger() {
  if (!item) {
    item = new FigmaUiMessenger()
    item.make()
  }

  return item
}
