import { type Ref, ref } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName,
  isFilled,
  type SearchItem
} from '@dxtmisha/functional'

import { CaptionInclude } from '../../classes/CaptionInclude'
import { PaginationInclude } from '../../classes/PaginationInclude'
import { SearchInclude } from '../../classes/SearchInclude'
import { StickyInclude } from '../../classes/StickyInclude'

import { TableRecordInclude } from '../TableRecord'
import { TableColumns } from './TableColumns'
import { TableSort } from './TableSort'

import type { TableItemPropsBasic } from '../TableItem'
import type { TableProps } from './props'
import type { TableComponents, TableEmits, TableSlots } from './types'

/** Internal table row item type combining cell props and arbitrary column keys / Внутренний тип строки таблицы, объединяющий свойства ячейки и произвольные ключи колонок */
type TableRowItem = TableItemPropsBasic & SearchItem

/** Table dependency constructors type / Тип конструкторов зависимостей Table */
export type TableConstructors = {
  /** Caption include constructor / Конструктор включения подписи */
  caption: typeof CaptionInclude
  /** Table columns constructor / Конструктор колонок таблицы */
  columns: typeof TableColumns
  /** Pagination include constructor / Конструктор включения пагинации */
  pagination: typeof PaginationInclude<TableRowItem>
  /** Search include constructor / Конструктор включения поиска */
  search: typeof SearchInclude<TableRowItem>
  /** Table sort constructor / Конструктор сортировки таблицы */
  sort: typeof TableSort<TableRowItem>
  /** Sticky include constructor / Конструктор включения липкого элемента */
  sticky: typeof StickyInclude
  /** Table record include constructor / Конструктор включения записи таблицы */
  tableRecord: typeof TableRecordInclude
}

/**
 * Class representing a table constructor (Table).
 * Coordinates table column indices, search/sort/pagination data pipeline, rendering of header/item rows, and sticky scroll synchronization.
 *
 * Класс, представляющий конструктор таблицы (Table).
 * Координирует индексы колонок таблицы, конвейер поиска/сортировки/пагинации, рендеринг строк шапки/элементов и синхронизацию липкой прокрутки.
 */
export class Table extends DesignLogicAbstract<
  HTMLElement,
  TableComponents,
  TableEmits,
  TableSlots,
  TableProps,
  TableConstructors
> {
  /** Table header element reference / Ссылка на элемент шапки таблицы */
  readonly headerElement = ref<HTMLElement>()

  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<TableConstructors> = {
    caption: {
      item: CaptionInclude,
      canCreate: () => CaptionInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots,
        undefined,
        this.tagCaption
      ]
    },
    columns: {
      item: TableColumns,
      canCreate: () => TableColumns.is(this.props),
      parameters: () => [
        this.props
      ]
    },
    pagination: {
      item: PaginationInclude,
      canCreate: () => isFilled(this.props.list),
      parameters: () => [
        this.props,
        () => this.i('sort').getList()
      ]
    },
    search: {
      item: SearchInclude,
      parameters: () => [
        this.props,
        () => this.callInstanceArray('columns', item => item.list)
      ]
    },
    sort: {
      item: TableSort,
      parameters: () => [
        this.props,
        () => this.i('search').list,
        this.emits
      ]
    },
    sticky: {
      item: StickyInclude,
      parameters: () => [
        () => ({
          stickyScrollBottom: this.props.stickyScrollBottom,
          stickyEnable: Boolean(this.props.headerTop)
        }),
        this.naming,
        this.headerElement,
        this.element
      ]
    },
    tableRecord: {
      item: TableRecordInclude,
      canCreate: () => Boolean(this.components?.is('tableRecord')),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({ onSort: this.i('sort').onSort }),
        this.slots
      ]
    }
  }

  /**
   * Constructor for Table.
   * Eagerly initializes `sort` (for Vue `provide()` inside `setup()`) and `sticky` (for Vue lifecycle registration inside `setup()`).
   *
   * Конструктор для Table.
   * Немедленно инициализирует `sort` (для Vue `provide()` внутри `setup()`) и `sticky` (для регистрации хуков жизненного цикла Vue внутри `setup()`).
   * @param props input properties / входные свойства
   * @param element target HTML element / целевой HTML-элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   * @param hasLifecycle whether to register component lifecycle hooks / регистрировать ли хуки жизненного цикла компонента
   */
  constructor(
    props: Readonly<TableProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<TableComponents, TableProps>,
    slots?: TableSlots,
    emits?: ConstrEmit<TableEmits>,
    constructors?: Partial<TableConstructors>,
    hasLifecycle: boolean = true
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors,
      hasLifecycle
    )

    this.i('sort')
    this.i('sticky')
  }

  /**
   * Computed HTML attributes and bindings for the table element.
   * Serves as a polymorphic extension point for derived table constructors such as TableFlex.
   *
   * Вычисляемые HTML-атрибуты и привязки для элемента таблицы.
   * Служит полиморфной точкой расширения для производных конструкторов таблиц, таких как TableFlex.
   * @returns HTML attributes and bindings object / объект HTML-атрибутов и привязок
   */
  get binds(): ConstrBind {
    return {}
  }

  /**
   * Computed HTML attributes and bindings for table section wrappers (`header`, `items`, `foot`).
   * Serves as a polymorphic extension point for derived table constructors such as TableFlex.
   *
   * Вычисляемые HTML-атрибуты и привязки для обёрток секций таблицы (`header`, `items`, `foot`).
   * Служит полиморфной точкой расширения для производных конструкторов таблиц, таких как TableFlex.
   * @returns HTML attributes and bindings object / объект HTML-атрибутов и привязок
   */
  get bindsSection(): ConstrBind {
    return {}
  }

  /**
   * Returns the HTML tag for the table.
   *
   * Возвращает HTML-тег для таблицы.
   * @returns HTML tag name / имя HTML-тега
   */
  get tag(): string {
    return 'table'
  }

  /**
   * Returns the HTML tag for the table caption.
   *
   * Возвращает HTML-тег для подписи таблицы.
   * @returns HTML tag name / имя HTML-тега
   */
  get tagCaption(): string {
    return 'caption'
  }

  /**
   * Returns the HTML tag for the table col.
   *
   * Возвращает HTML-тег для col таблицы.
   * @returns HTML tag name / имя HTML-тега
   */
  get tagCol(): string {
    return 'col'
  }

  /**
   * Returns the HTML tag for the table colgroup.
   *
   * Возвращает HTML-тег для colgroup таблицы.
   * @returns HTML tag name or undefined / имя HTML-тега или undefined
   */
  get tagColgroup(): string | undefined {
    return 'colgroup'
  }

  /**
   * Returns the HTML tag for the table foot.
   *
   * Возвращает HTML-тег для подвала таблицы.
   * @returns HTML tag name / имя HTML-тега
   */
  get tagFoot(): string {
    return 'tfoot'
  }

  /**
   * Returns the HTML tag for the table header.
   *
   * Возвращает HTML-тег для шапки таблицы.
   * @returns HTML tag name / имя HTML-тега
   */
  get tagHeader(): string {
    return 'thead'
  }

  /**
   * Returns the HTML tag for the table items.
   *
   * Возвращает HTML-тег для элементов таблицы.
   * @returns HTML tag name / имя HTML-тега
   */
  get tagItems(): string {
    return 'tbody'
  }
}
