import { type Ref, type ToRefs, ref } from 'vue'
import {
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'

import { StickyInclude } from '../../classes/StickyInclude'
import { TableColumns } from './TableColumns'
import { TablePagination } from './TablePagination'
import { TableRecordInclude } from '../TableRecord'
import { TableSearch } from './TableSearch'

import type { TableComponents, TableEmits, TableSlots } from './types'
import type { TableProps } from './props'

/**
 * Class representing a table constructor (Table).
 * Coordinates table column indices, rendering of header/item rows, and scroll synchronization.
 *
 * Класс, представляющий конструктор таблицы (Table).
 * Координирует индексы колонок таблицы, рендеринг строк шапки/элементов и синхронизацию прокрутки.
 */
export class Table {
  /** Table columns manager instance / Экземпляр менеджера колонок таблицы */
  readonly columns: TableColumns

  /** Table pagination manager instance / Экземпляр менеджера пагинации таблицы */
  readonly pagination: TablePagination

  /** Table search manager instance / Экземпляр менеджера поиска таблицы */
  readonly search: TableSearch

  /** Table record include manager instance / Экземпляр включения записей таблицы */
  readonly tableRecord: TableRecordInclude

  /** Table header elements reference / Ссылка на элементы шапки таблицы */
  readonly headerElement = ref<HTMLElement>()

  /**
   * Constructor
   * @param props input properties / входные свойства
   * @param refs input properties in the form of reactive references / входные свойства в виде реактивных ссылок
   * @param element target HTML element / целевой HTML-элемент
   * @param classDesign design system prefix / префикс дизайн-системы
   * @param className base CSS class name / базовое имя CSS-класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   * @param constructors optional class constructor overrides / необязательные переопределения конструкторов классов
   * @param constructors.StickyIncludeConstructor class for creating a sticky include / класс для создания включения липкого элемента
   * @param constructors.TableColumnsConstructor class for creating table columns / класс для создания колонок таблицы
   * @param constructors.TablePaginationConstructor class for creating table pagination / класс для создания пагинации таблицы
   * @param constructors.TableRecordIncludeConstructor class for creating a table record include / класс для создания включения записи таблицы
   * @param constructors.TableSearchConstructor class for creating table search / класс для создания поиска таблицы
   */
  constructor(
    protected readonly props: TableProps,
    protected readonly refs: ToRefs<TableProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<TableComponents, TableProps>,
    protected readonly slots?: TableSlots,
    protected readonly emits?: ConstrEmit<TableEmits>,
    constructors: {
      StickyIncludeConstructor?: typeof StickyInclude
      TableColumnsConstructor?: typeof TableColumns
      TablePaginationConstructor?: typeof TablePagination
      TableRecordIncludeConstructor?: typeof TableRecordInclude
      TableSearchConstructor?: typeof TableSearch
    } = {}
  ) {
    const {
      StickyIncludeConstructor = StickyInclude,
      TableColumnsConstructor = TableColumns,
      TablePaginationConstructor = TablePagination,
      TableRecordIncludeConstructor = TableRecordInclude,
      TableSearchConstructor = TableSearch
    } = constructors

    this.columns = new TableColumnsConstructor(props)

    this.search = new TableSearchConstructor(
      props,
      refs,
      this.columns
    )

    this.pagination = new TablePaginationConstructor(
      props,
      this.search
    )

    this.tableRecord = new TableRecordIncludeConstructor(
      classDesign,
      className,
      props,
      components,
      undefined,
      slots
    )

    new StickyIncludeConstructor(
      () => ({ stickyEnable: false }),
      className,
      this.headerElement,
      element
    )
  }
}
