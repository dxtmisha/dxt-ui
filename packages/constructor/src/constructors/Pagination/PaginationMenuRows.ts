import { computed } from 'vue'
import { type ConstrEmit, forEach, type ListList } from '@dxtmisha/functional'
import { type TextInclude } from '../../classes/TextInclude'

import type { PaginationProps } from './props'
import type { PaginationEmits } from './types'

/**
 * Class for managing the rows per page menu logic of the pagination component.
 *
 * Класс для управления логикой лимита строк на странице компонента пагинации.
 */
export class PaginationMenuRows {
  /**
   * Constructor for PaginationMenuRows.
   *
   * Конструктор для PaginationMenuRows.
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
   * Returns list of rows limit options formatted for menu selection (e.g. [{ value: 10, label: '10' }]).
   *
   * Возвращает список вариантов лимита строк, отформатированный для меню выбора (например, [{ value: 10, label: '10' }]).
   */
  readonly menuList = computed<ListList | undefined>(() => {
    if (this.props.menu) {
      return forEach(this.props.menu, item => ({
        value: item,
        label: item.toString()
      })) as ListList
    }

    return undefined
  })

  /**
   * Returns localized "Rows per page" text label.
   *
   * Возвращает локализованную метку «Строк на странице».
   */
  get labelRowsPerPage(): string | undefined {
    return this.text?.rowsPerPage
  }
}
