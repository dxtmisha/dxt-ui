import { computed } from 'vue'
import { forEach, type ListList } from '@dxtmisha/functional'
import { type TextInclude } from '../../classes/TextInclude'
import { type PaginationEvent } from './PaginationEvent'

import type { PaginationProps } from './props'

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
   * @param event click event control instance / экземпляр управления событием клика
   * @param text text manager instance / экземпляр менеджера текстов
   */
  constructor(
    protected readonly props: PaginationProps,
    protected readonly event?: PaginationEvent,
    protected readonly text?: TextInclude
  ) { }

  /**
   * Returns list of rows limit options formatted for menu selection (e.g. [{ value: 10, label: '10' }]).
   *
   * Возвращает список вариантов лимита строк, отформатированный для меню выбора (например, [{ value: 10, label: '10' }]).
   */
  readonly menuList = computed<ListList | undefined>(() => {
    if (this.props.menuRows) {
      return forEach(this.props.menuRows, item => ({
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

  get binds() {
    return {
      selected: this.props.rows,
      list: this.menuList.value,
      onClick: this.event?.onClick,
      ...this.props.menuAttrs
    }
  }
}
