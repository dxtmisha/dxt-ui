// ai-none

import {
  type ConstrStyles,
  getLast,
  isArray,
  isFilled,
  isObjectNotArray
} from '@dxtmisha/functional'

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
   * Checks whether table columns are explicitly configured or inferable from header rows.
   *
   * Проверяет, заданы ли колонки таблицы явно или могут быть выведены из строк заголовка.
   * @param props input table properties / входные свойства таблицы
   * @returns true if columns can be resolved / true, если колонки могут быть определены
   */
  static is(props?: Readonly<TableProps>): boolean {
    return Boolean(
      (props?.columns && props.columns.length > 0)
      || (!props?.columns && isFilled(props?.header))
    )
  }

  /**
   * Constructor for TableColumns.
   *
   * Конструктор для TableColumns.
   * @param props input table properties / входные свойства таблицы
   */
  constructor(protected readonly props: Readonly<TableProps>) {}

  /**
   * Returns column attributes for col elements in colgroup.
   *
   * Возвращает атрибуты для элементов col в colgroup.
   * @returns list of col element attributes / список атрибутов элементов col
   */
  get cols(): TableColumnCol[] {
    return this.list.map(column => this.getCol(column))
  }

  /**
   * Returns a list of available column names.
   *
   * Возвращает список доступных имен колонок.
   * @returns list of column keys / список ключей колонок
   */
  get list(): string[] {
    if (this.props.columns) {
      return this.props.columns
    }

    if (isFilled(this.props.header)) {
      if (isArray(this.props.header)) {
        const last = getLast(this.props.header)

        if (isObjectNotArray(last)) {
          return Object.keys(last)
        }
      } else if (isObjectNotArray(this.props.header)) {
        return Object.keys(this.props.header)
      }
    }

    return []
  }

  /**
   * Returns column attributes for a single col element.
   *
   * Возвращает атрибуты для одного элемента col.
   * @param column column name / имя колонки
   * @returns col element attributes object / объект атрибутов элемента col
   */
  getCol(column: string): TableColumnCol {
    return {
      'key': `col-${column}`,
      'data-col': column,
      'style': this.getColStyle(column)
    }
  }

  /**
   * Returns style object for a col element based on column width property.
   *
   * Возвращает объект стилей для элемента col на основе свойства ширины колонки.
   * @param column column name / имя колонки
   * @returns inline style object or undefined / объект встроенных стилей или undefined
   */
  getColStyle(column: string): ConstrStyles | undefined {
    const columnsWidth = this.props.columnsWidth

    if (columnsWidth && Object.hasOwn(columnsWidth, column)) {
      const width = columnsWidth[column]

      if (typeof width === 'number' && Number.isFinite(width)) {
        return {
          width: `${width}px`
        }
      }

      if (typeof width === 'string' && width !== '') {
        return {
          width
        }
      }
    }

    return undefined
  }
}
