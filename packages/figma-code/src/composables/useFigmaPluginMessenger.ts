import { FigmaPluginMessenger } from '../classes/FigmaPluginMessenger'

let item: FigmaPluginMessenger | undefined

/**
 * Composable for accessing the FigmaPluginMessenger singleton.
 * Initializes the messenger on first call.
 *
 * Композиция для доступа к синглтону FigmaPluginMessenger.
 * Инициализирует мессенджер при первом вызове.
 * @returns FigmaPluginMessenger
 */
export function useFigmaPluginMessenger() {
  if (!item) {
    item = new FigmaPluginMessenger()
    item.make()
  }

  return item
}
