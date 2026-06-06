import { computed } from 'vue'
import { type ConstrEmit } from '@dxtmisha/functional'

import { type TextInclude } from '../../classes/TextInclude'

import type { PaginationEmits } from './types'
import type { PaginationProps } from './props'

/**
 * Class for managing the pages, ranges, navigation buttons, and show more button.
 *
 * Класс для управления страницами, диапазонами, кнопками навигации и кнопкой "Показать еще".
 */
export class PaginationPage {
  /**
   * Constructor for PaginationPage.
   *
   * Конструктор для PaginationPage.
   * @param props input properties / входные свойства
   * @param text text manager instance / экземпляр менеджера текстов
   * @param emits callback for event emitter / функция для генерации событий
   */
  constructor(
    protected readonly props: PaginationProps,
    protected readonly text?: TextInclude,
    protected readonly emits?: ConstrEmit<PaginationEmits>
  ) { }

  /**
   * Returns localized page range information string (e.g. '1-10 of 100').
   *
   * Возвращает локализованную строку информации о диапазоне страниц (например, '1-10 из 100').
   */
  readonly info = computed<string>(() => {
    const text = this.text?.info

    if (text) {
      const count = this.count
      const rows = this.rows
      const max = this.value * rows

      const start = max - rows + 1
      const end = max < count ? max : count

      return text
        .replace('[item]', `${start}-${end}`)
        .replace('[count]', count.toString())
    }

    return ''
  })

  /**
   * Returns the total number of items to paginate.
   *
   * Возвращает общее количество элементов для постраничного вывода.
   */
  get count(): number {
    return Number(this.props.count ?? 0)
  }

  /**
   * Returns the total number of pages calculated from count and rows.
   *
   * Возвращает общее количество страниц, рассчитанное на основе count и rows.
   */
  get pagesCount(): number {
    return Math.ceil(this.count / this.rows)
  }

  /**
   * Returns the number of items displayed per page.
   *
   * Возвращает количество элементов, отображаемых на одной странице.
   */
  get rows(): number {
    return Number(this.props.rows ?? 1)
  }

  /**
   * Returns the current active page number (1-indexed).
   *
   * Возвращает номер текущей активной страницы (начиная с 1).
   */
  get value(): number {
    return Number(this.props.value ?? 1)
  }
}
