import { type RefOrNormal } from '@dxtmisha/functional'

/**
 * Sticky positioning modes / Режимы липкого позиционирования
 */
export type StickyIncludeMode = 'transform' | 'top' | 'custom'

/**
 * Properties for StickyInclude class / Свойства для класса StickyInclude
 */
export interface StickyPropsInclude {
  /** Top offset from the visible top boundary of the parent (in pixels) / Верхний отступ от видимой верхней границы родителя (в пикселях) */
  top?: number | RefOrNormal<number>

  /** Positioning strategy mode / Режим стратегии позиционирования */
  mode?: StickyIncludeMode | RefOrNormal<StickyIncludeMode>

  /** Custom scroll container selector or element. If not specified, the closest scroll parent or window is used / Пользовательский селектор или элемент контейнера прокрутки. Если не указан, используется ближайший родительский элемент прокрутки или окно */
  scrollContainer?: string | HTMLElement | Window
}
