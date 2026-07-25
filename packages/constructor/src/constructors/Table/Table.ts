import { type Ref, type ToRefs, ref } from 'vue'
import {
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'

import { CaptionInclude } from '../../classes/CaptionInclude'
import { PaginationInclude } from '../../classes/PaginationInclude'
import { SearchInclude } from '../../classes/SearchInclude'
import { StickyInclude } from '../../classes/StickyInclude'

import { TableColumns } from './TableColumns'
import { TableRecordInclude } from '../TableRecord'

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
  /** Caption include manager instance / Экземпляр включения подписи */
  readonly caption: CaptionInclude
  /** Table columns manager instance / Экземпляр менеджера колонок таблицы */
  readonly columns: TableColumns
  /** Search include manager instance / Экземпляр включения поиска */
  readonly search: SearchInclude
  /** Pagination include manager instance / Экземпляр включения пагинации */
  readonly pagination: PaginationInclude

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
   * @param slots object for working with slots / object for working with slots
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   * @param constructors optional class constructor overrides / необязательные переопределения конструкторов классов
   * @param constructors.CaptionIncludeConstructor class for working with caption / класс для работы с подписью
   * @param constructors.PaginationIncludeConstructor class for creating a pagination include / класс для создания включения пагинации
   * @param constructors.SearchIncludeConstructor class for creating a search include / класс для создания включения поиска
   * @param constructors.StickyIncludeConstructor class for creating a sticky include / класс для создания включения липкого элемента
   * @param constructors.TableColumnsConstructor class for creating table columns / класс для создания колонок таблицы
   * @param constructors.TableRecordIncludeConstructor class for creating a table record include / класс для создания включения записи таблицы
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
      CaptionIncludeConstructor?: typeof CaptionInclude
      PaginationIncludeConstructor?: typeof PaginationInclude
      SearchIncludeConstructor?: typeof SearchInclude
      StickyIncludeConstructor?: typeof StickyInclude
      TableColumnsConstructor?: typeof TableColumns
      TableRecordIncludeConstructor?: typeof TableRecordInclude
    } = {}
  ) {
    const {
      CaptionIncludeConstructor = CaptionInclude,
      PaginationIncludeConstructor = PaginationInclude,
      SearchIncludeConstructor = SearchInclude,
      StickyIncludeConstructor = StickyInclude,
      TableColumnsConstructor = TableColumns,
      TableRecordIncludeConstructor = TableRecordInclude
    } = constructors

    this.caption = new CaptionIncludeConstructor(props, className, slots, undefined, 'caption')
    this.columns = new TableColumnsConstructor(props)
    this.search = new SearchIncludeConstructor(props, () => this.columns.list)
    this.pagination = new PaginationIncludeConstructor(props, () => this.search.list)

    this.tableRecord = new TableRecordIncludeConstructor(
      classDesign,
      className,
      props,
      components,
      undefined,
      slots
    )

    new StickyIncludeConstructor(
      () => ({
        stickyScrollBottom: this.props.stickyScrollBottom,
        stickyEnable: this.props.headerTop
      }),
      className,
      this.headerElement,
      element
    )
  }
}
