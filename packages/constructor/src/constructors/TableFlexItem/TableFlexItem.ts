import { TableItem } from '../TableItem'

/**
 * Class representing a flex table cell constructor (TableFlexItem).
 * Coordinates flex-based cell rendering and attributes, inheriting logic from TableItem.
 *
 * Класс, представляющий конструктор ячейки флекс-таблицы (TableFlexItem).
 * Координирует рендеринг ячейки флекс-таблицы и её атрибуты, наследуя логику TableItem.
 */
export class TableFlexItem extends TableItem {
  /**
   * Returns the HTML tag for the table cell.
   *
   * Возвращает HTML-тег для ячейки таблицы.
   */
  override get tag(): string {
    return this.props.tag ?? 'div'
  }

  /**
   * Computed HTML attributes and bindings for the main element.
   *
   * Вычисляемые HTML-атрибуты и привязки для главного элемента.
   */
  override get binds(): Record<string, any> {
    return {
      'data-colspan': this.props.colspan,
      'data-rowspan': this.props.rowspan,
      'data-index': this.props.index,
      ...this.aria
    }
  }
}
