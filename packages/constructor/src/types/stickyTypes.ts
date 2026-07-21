import { type RefOrNormal } from '@dxtmisha/functional'

/**
 * Properties for StickyInclude class / Свойства для класса StickyInclude
 */
export interface StickyPropsInclude {
  /** Top offset from the visible top boundary of the parent (in pixels) / Верхний отступ от видимой верхней границы родителя (в пикселях) */
  stickyTop?: number | RefOrNormal<number>

  /**
   * Custom scroll container selector or element. If not specified, the closest scroll parent or window is used /
   * Пользовательский селектор или элемент контейнера прокрутки. Если не указан, используется ближайший родительский элемент прокрутки или окно
   */
  stickyScrollContainer?: string | HTMLElement | Window
}
