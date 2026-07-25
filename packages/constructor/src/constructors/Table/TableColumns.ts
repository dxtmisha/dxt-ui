import type { ConstrStyles } from '@dxtmisha/functional'
import { getLast, isArray, isFilled } from '@dxtmisha/functional'

import type { TableColumnCol } from './basicTypes'
import type { TableProps } from './props'

/**
 * Class representing table columns logic.
 * Determines and manages available table column keys from props or header structure.
 *
 * Класс, представляющий логику колонок таблицы.
 * Определяет и управляет ключами доступных колонок таблицы из props или структуры заголовка (header).
 */
export class TableColumns {
  /**
   * Constructor for TableColumns.
   * @param props input table properties / входные свойства таблицы
   */
  constructor(protected readonly props: TableProps) { }

  /**
   * Returns a list of available column names. /
   * Возвращает список доступных имен колонок.
   */
  get list(): string[] {
    if (this.props.columns) {
      return this.props.columns
    }

    if (isFilled(this.props.header)) {
      if (isArray(this.props.header)) {
        const last = getLast(this.props.header)

        if (last) {
          return Object.keys(last)
        }
      } else {
        return Object.keys(this.props.header)
      }
    }

    return []
  }

  /**
   * Returns column attributes for col elements in colgroup. /
   * Возвращает атрибуты для элементов col в colgroup.
   */
  get cols(): TableColumnCol[] {
    return this.list.map(column => this.getCol(column))
  }

  /**
   * Returns column attributes for a single col element. /
   * Возвращает атрибуты для одного элемента col.
   * @param column column name / имя колонки
   */
  getCol(column: string): TableColumnCol {
    return {
      'key': `col-${column}`,
      'data-col': column,
      'style': this.getColStyle(column)
    }
  }

  /**
   * Returns style object for a col element based on column width property. /
   * Возвращает объект стилей для элемента col на основе свойства ширины колонки.
   * @param column column name / имя колонки
   */
  getColStyle(column: string): ConstrStyles | undefined {
    const width = this.props.columnsWidth?.[column]

    if (width !== undefined) {
      return {
        width: typeof width === 'number'
          ? `${width}px`
          : width
      }
    }

    return undefined
  }
}
