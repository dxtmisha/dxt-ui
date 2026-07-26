import type { ConstrEmit, SortColumnItem, SortDir } from '@dxtmisha/functional'

import type { TableHeaderItemEmits } from './types'
import type { TableHeaderItemProps } from './props'

/**
 * Class representing table header item sorting logic (TableHeaderItemSort).
 * Manages sorting column index name, sorting direction state, and toggle emissions.
 *
 * Класс, представляющий логику сортировки ячейки шапки таблицы (TableHeaderItemSort).
 * Управляет именем индекса колонки сортировки, состоянием направления сортировки и эмиссией переключений.
 */
export class TableHeaderItemSort {
  /**
   * Constructor
   * @param props input properties / входные свойства
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   */
  constructor(
    protected readonly props: TableHeaderItemProps,
    protected readonly emits?: ConstrEmit<TableHeaderItemEmits>
  ) { }

  /**
   * Returns column index name for sorting.
   *
   * Возвращает имя индекса колонки для сортировки.
   * @returns column index name / имя индекса колонки
   */
  get column(): string {
    return String(this.props.index || '')
  }

  /**
   * Returns current sorting direction.
   *
   * Возвращает текущее направление сортировки.
   * @returns sorting direction / направление сортировки
   */
  get dir(): SortDir | undefined {
    return this.props.sortDir
  }

  /**
   * Returns current sort column item status object.
   *
   * Возвращает текущий объект статуса колонки сортировки.
   * @returns sort column item object / объект элемента колонки сортировки
   */
  get item(): SortColumnItem {
    return {
      column: this.column,
      dir: this.dir
    }
  }

  /**
   * Checks whether the current column is sorted.
   *
   * Проверяет, отсортирована ли текущая колонка.
   * @returns sorting active status / статус активности сортировки
   */
  isSorted(): boolean {
    return String(this.props.sortColumn) === this.column && Boolean(this.props.sortDir)
  }

  /**
   * Returns extra properties for chip component inclusion.
   *
   * Возвращает дополнительные свойства для включения компонента чипа.
   */
  readonly chipExtra = () => {
    if (this.isSorted()) {
      return {
        icon: {
          icon: this.props.iconArrowUp,
          iconActive: this.props.iconArrowDown,
          active: this.dir === 'desc'
        },
        selected: this.isSorted(),
        onClick: this.onSort
      }
    }

    return {
      icon: this.props.iconSort,
      onClick: this.onSort
    }
  }

  /**
   * Triggers sorting action: emits sort event with next direction in 3-state cycle.
   *
   * Запускает действие сортировки: вызывает событие sort со следующим направлением в 3-состоятельном цикле.
   */
  readonly onSort = (): void => {
    const dir = this.getNextDir()

    this.emits?.('sort', {
      column: dir ? this.column : undefined,
      dir
    })
  }

  /**
   * Returns next sorting direction in 3-state cycle (asc -> desc -> undefined -> asc).
   *
   * Возвращает следующее направление сортировки в 3-состоятельном цикле (asc -> desc -> undefined -> asc).
   * @returns next sorting direction / следующее направление сортировки
   */
  protected getNextDir(): SortDir | undefined {
    if (!this.isSorted()) {
      return 'asc'
    }

    if (this.dir === 'asc') {
      return 'desc'
    }

    return undefined
  }
}
