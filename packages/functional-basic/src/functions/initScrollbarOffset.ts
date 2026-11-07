import { isDomRuntime } from './isDomRuntime'
import { ScrollbarWidth } from '../classes/ScrollbarWidth'

/**
 * Writes the measured scrollbar width in pixels to --sys-scrollbar-offset on document.body.
 * Without a DOM runtime or an available body, resolves without measuring or writing.
 *
 * Записывает измеренную ширину скроллбара в пикселях в --sys-scrollbar-offset на document.body.
 * Без DOM-среды или доступного body завершается без измерения и записи.
 * @returns promise resolving after initialization or an early exit / промис, завершающийся после инициализации или раннего выхода
 */
export async function initScrollbarOffset(): Promise<void> {
  if (isDomRuntime() && document.body) {
    const width = await ScrollbarWidth.get()
    document.body.style.setProperty('--sys-scrollbar-offset', `${width}px`)
  }
}
