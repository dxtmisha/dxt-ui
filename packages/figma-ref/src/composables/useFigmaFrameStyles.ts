import { computed, shallowRef } from 'vue'
import {
  fetchFrameStyles,
  sendFrameStyles,
  type UiFigmaFrameStylesMessengerAttributes,
  type UiFigmaFrameStylesMessengerResponse
} from '@dxtmisha/figma'

const item = shallowRef<UiFigmaFrameStylesMessengerResponse>([])

/**
 * Composable for managing and observing frame styles from Figma.
 *
 * Композабл для управления и наблюдения за стилями фреймов из Figma.
 * @returns An object containing the frame styles and methods for updating /
 * Объект, содержащий стили фреймов и методы для обновления
 */
export function useFigmaFrameStyles() {
  fetchFrameStyles((data: UiFigmaFrameStylesMessengerResponse) => {
    item.value = data
  })

  return {
    /** Frame styles / Стили фреймов */
    styles: computed<UiFigmaFrameStylesMessengerResponse>(() => item.value),

    /**
     * Send style update request.
     *
     * Отправить запрос на обновление стилей.
     * @param attributes Attributes / Атрибуты
     */
    send(attributes: UiFigmaFrameStylesMessengerAttributes) {
      sendFrameStyles(attributes)
    }
  }
}
