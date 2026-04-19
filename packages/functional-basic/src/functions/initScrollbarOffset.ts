import { isDomRuntime } from './isDomRuntime'
import { ScrollbarWidth } from '../classes/ScrollbarWidth'

/**
 * Initialization of data for scroll control.
 *
 * Инициализация данных для управления скроллом.
 * @returns promise without return value / промис без возвращаемого значения
 */
export async function initScrollbarOffset() {
  if (isDomRuntime()) {
    const width = await ScrollbarWidth.get()
    document.body.style.setProperty('--sys-scrollbar-offset', `${width}px`)
  }
}
