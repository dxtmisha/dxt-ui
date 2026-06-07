import { computed, ref, type ToRefs, watch } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import type { TextInclude } from '../../classes/TextInclude'

import type { PaginationEmits } from './types'
import type { PaginationProps } from './props'

/**
 * Class for managing the pages, ranges, navigation buttons, and show more button.
 *
 * Класс для управления страницами, диапазонами, кнопками навигации и кнопкой "Показать еще".
 */
export class PaginationPage {
  readonly valueItem = ref<number>(1)
  readonly rowsItem = ref<number>(1)

  /**
   * Constructor for PaginationPage.
   *
   * Конструктор для PaginationPage.
   * @param props input properties / входные свойства
   * @param refs raw properties wrapped as refs / исходные свойства в виде ссылок (refs)
   * @param text text manager instance / экземпляр менеджера текстов
   * @param emits callback for event emitter / функция для генерации событий
   */
  constructor(
    protected readonly props: PaginationProps,
    protected readonly refs: ToRefs<PaginationProps>,
    protected readonly text?: TextInclude,
    protected readonly emits?: ConstrEmit<PaginationEmits>
  ) {
    watch(
      [
        this.refs.value,
        this.refs.modelValue,
        this.refs.rows,
        this.refs.modelRows
      ],
      () => {
        this.valueItem.value = Number(this.props.modelValue ?? this.props.value ?? 1)
        this.rowsItem.value = Number(this.props.modelRows ?? this.props.rows ?? 1)
      },
      { immediate: true }
    )
  }

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
    return this.rowsItem.value
  }

  /**
   * Returns the current active page number (1-indexed).
   *
   * Возвращает номер текущей активной страницы (начиная с 1).
   */
  get value(): number {
    return this.valueItem.value
  }

  /**
   * Returns the number of visible page links.
   *
   * Возвращает количество отображаемых ссылок на страницы.
   */
  get visible(): number {
    return Number(this.props.visible ?? 3)
  }

  /**
   * Returns the number of buttons for the first and last pages.
   *
   * Возвращает количество отображаемых кнопок у первой и последней страниц.
   */
  get ends(): number {
    return Number(this.props.ends ?? 1)
  }
}
