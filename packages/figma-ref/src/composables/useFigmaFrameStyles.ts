import { computed, shallowRef, type ComputedRef } from 'vue'
import {
  fetchFrameStyles,
  sendFrameStyles,
  type UiFigmaFrameStylesMessengerAttributes,
  type UiFigmaFrameStylesMessengerResponse
} from '@dxtmisha/figma'

/** Cached frame styles / Кэшированные стили фреймов */
const item = shallowRef<UiFigmaFrameStylesMessengerResponse>([])

/**
 * Flag indicating that the first fetch operation has not yet been performed /
 * Флаг, указывающий, что первая операция получения еще не была выполнена
 */
let start: boolean = true

/**
 * Return type for `useFigmaFrameStyles`.
 *
 * Тип возвращаемого значения для `useFigmaFrameStyles`.
 */
export type UseFigmaFrameStylesReturn = {
  /** Frame styles / Стили фреймов */
  styles: ComputedRef<UiFigmaFrameStylesMessengerResponse>

  /**
   * Send style update request.
   *
   * Отправить запрос на обновление стилей.
   * @param attributes Attributes / Атрибуты
   */
  send(attributes: UiFigmaFrameStylesMessengerAttributes): void
}

/**
 * Composable for managing and observing frame styles from Figma.
 *
 * Композабл для управления и наблюдения за стилями фреймов из Figma.
 * @returns An object containing the frame styles and methods for updating /
 * Объект, содержащий стили фреймов и методы для обновления
 */
export function useFigmaFrameStyles(): UseFigmaFrameStylesReturn {
  if (start) {
    start = false

    fetchFrameStyles((data: UiFigmaFrameStylesMessengerResponse) => {
      item.value = data
    })
  }

  return {
    /** Frame styles / Стили фреймов */
    styles: computed<UiFigmaFrameStylesMessengerResponse>(() => item.value),

    /**
     * Send style update request.
     *
     * Отправить запрос на обновление стилей.
     * @param attributes Attributes / Атрибуты
     */
    send(attributes: UiFigmaFrameStylesMessengerAttributes): void {
      sendFrameStyles(attributes)
    }
  }
}
