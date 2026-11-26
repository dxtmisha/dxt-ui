import type { ConstrBind } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { TableItem } from '../TableItem'

import type { AriaList } from '../../types/ariaTypes'

/**
 * Class representing a flex table cell constructor (TableFlexItem).
 * Coordinates flex-based cell rendering, ARIA role, and data attributes, inheriting lazy logic from TableItem.
 *
 * Класс, представляющий конструктор ячейки флекс-таблицы (TableFlexItem).
 * Координирует рендеринг ячейки флекс-таблицы, ARIA-роль и data-атрибуты, наследуя ленивую логику TableItem.
 */
export class TableFlexItem extends TableItem {
  /**
   * Computed ARIA attributes for the flex table cell.
   *
   * Вычисляемые ARIA-атрибуты для ячейки флекс-таблицы.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  override get aria(): AriaList {
    return {
      ...super.aria,
      ...AriaStaticInclude.role('cell')
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
   * Returns the HTML tag for the flex table cell.
   *
   * Возвращает HTML-тег для ячейки флекс-таблицы.
   * @returns HTML tag name / имя HTML-тега
   */
  override get tag(): string {
    return this.props.tag || 'div'
  }
}
