import { provide, ref } from 'vue'
import { type ConstrEmit, type SortColumnItem, type SortDir } from '@dxtmisha/functional'

import { SortInclude } from '../../classes/SortInclude'
import type { SortColumn, SortPropsInclude } from '../../types/sortTypes'

import type { TableEmits } from './types'

/**
 * Class representing table sorting logic (TableSort).
 * Manages reactive column sorting state and processes sort event emissions for Table.
 *
 * Класс, представляющий логику сортировки таблицы (TableSort).
 * Управляет реактивным состоянием сортировки колонок и обрабатывает события сортировки для таблицы.
 */
export class TableSort<T = any> extends SortInclude<T> {
  /** Reactive reference to currently selected sort column key / Реактивная ссылка на ключевой индекс текущей колонки сортировки */
  readonly sortColumn = ref<SortColumn | undefined>()

  /** Reactive reference to current sort direction / Реактивная ссылка на текущее направление сортировки */
  readonly sortDir = ref<SortDir | undefined>()

  /**
   * Constructor for TableSort.
   *
   * Конструктор для TableSort.
   * @param props input sort properties / входные свойства сортировки
   * @param targetList target list array or callback function returning list / целевой массив списка или функция обратного вызова, возвращающая список
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   */
  constructor(
    props: SortPropsInclude<T>,
    targetList?: any[] | (() => any[] | undefined),
    protected readonly emits?: ConstrEmit<TableEmits>
  ) {
    super(
      props,
      targetList,
      () => this.sortColumn.value,
      () => this.sortDir.value
    )

    provide('sortColumn', this.sortColumn)
    provide('sortDir', this.sortDir)
  }

  /**
   * Handles sorting action event, updating reactive state and emitting sort event.
   *
   * Обрабатывает событие действия сортировки, обновляя реактивное состояние и вызывая событие sort.
   * @param item sorting specification item / элемент спецификации сортировки
   */
  readonly onSort = (item: SortColumnItem): void => {
    this.sortColumn.value = item.column
    this.sortDir.value = item.dir

    this.emits?.('sort', item)
  }
}
