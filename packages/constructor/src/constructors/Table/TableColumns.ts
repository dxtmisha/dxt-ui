import { getLast, isArray, isFilled } from '@dxtmisha/functional'

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
  constructor(protected readonly props: TableProps) {}

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
}
