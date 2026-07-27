import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { TableHeaderItem } from '../TableHeaderItem'

/**
 * Class representing a flex table header cell constructor (TableFlexHeaderItem).
 * Coordinates flex-based header cell rendering and attributes, inheriting logic from TableHeaderItem.
 *
 * Класс, представляющий конструктор ячейки шапки флекс-таблицы (TableFlexHeaderItem).
 * Координирует рендеринг ячейки шапки флекс-таблицы и её атрибуты, наследуя логику TableHeaderItem.
 */
export class TableFlexHeaderItem extends TableHeaderItem {
  /**
   * Returns the HTML tag for the table cell.
   *
   * Возвращает HTML-тег для ячейки таблицы.
   * @returns HTML tag name / имя HTML-тега
   */
  override get tag(): string {
    return this.props.tag ?? 'div'
  }

  /**
   * Computed HTML attributes and bindings for the main element.
   *
   * Вычисляемые HTML-атрибуты и привязки для главного элемента.
   * @returns HTML attributes and bindings object / объект HTML-атрибутов и привязок
   */
  override get binds(): Record<string, any> {
    return {
      ...super.binds,
      ...AriaStaticInclude.role('columnheader'),
      'data-colspan': this.props.colspan,
      'data-rowspan': this.props.rowspan,
      'data-index': this.props.index
    }
  }
}
