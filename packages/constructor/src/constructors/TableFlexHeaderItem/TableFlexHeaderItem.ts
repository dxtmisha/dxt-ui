import type { ConstrBind } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { TableHeaderItem } from '../TableHeaderItem'

import type { AriaList } from '../../types/ariaTypes'

/**
 * Class representing a flex table header cell constructor (TableFlexHeaderItem).
 * Coordinates flex-based header cell rendering, ARIA role, and data attributes, inheriting lazy logic from TableHeaderItem.
 *
 * Класс, представляющий конструктор ячейки шапки флекс-таблицы (TableFlexHeaderItem).
 * Координирует рендеринг ячейки шапки флекс-таблицы, ARIA-роль и data-атрибуты, наследуя ленивую логику TableHeaderItem.
 */
export class TableFlexHeaderItem extends TableHeaderItem {
  /**
   * Computed ARIA attributes for the flex table header cell.
   * Uses `rowheader` when `scope` is `'row'` or `'rowgroup'`, and `columnheader` otherwise.
   *
   * Вычисляемые ARIA-атрибуты для ячейки шапки флекс-таблицы.
   * Использует `rowheader`, когда `scope` равен `'row'` или `'rowgroup'`, и `columnheader` в остальных случаях.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  override get aria(): AriaList {
    const role = this.props.scope === 'row' || this.props.scope === 'rowgroup'
      ? 'rowheader'
      : 'columnheader'

    return {
      ...super.aria,
      ...AriaStaticInclude.role(role)
    }
  }

  /**
   * Computed HTML attributes and bindings for the main element.
   *
   * Вычисляемые HTML-атрибуты и привязки для главного элемента.
   * @returns HTML attributes and bindings object / объект HTML-атрибутов и привязок
   */
  override get binds(): ConstrBind {
    return {
      'data-colspan': this.props.colspan,
      'data-rowspan': this.props.rowspan,
      'data-index': this.props.index,
      ...this.aria
    }
  }

  /**
   * Returns the HTML tag for the flex table header cell.
   *
   * Возвращает HTML-тег для ячейки шапки флекс-таблицы.
   * @returns HTML tag name / имя HTML-тега
   */
  override get tag(): string {
    return this.props.tag || 'div'
  }
}
