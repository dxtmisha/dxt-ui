import { FigmaUiMessenger } from '../classes/FigmaUiMessenger'
import {
  FIGMA_FRAME_STYLES_MESSENGER_NAME,
  type UiFigmaFrameStylesMessengerAttributes
} from '../types/figmaStylesTypes'

/**
 * Send request to get frame styles.
 *
 * Отправить запрос на получение стилей фреймов.
 * @param attributes Attributes for fetching styles / Атрибуты для получения стилей
 */
export function sendFrameStyles(attributes: UiFigmaFrameStylesMessengerAttributes) {
  FigmaUiMessenger
    .getInstance()
    .post(FIGMA_FRAME_STYLES_MESSENGER_NAME, attributes)
}
