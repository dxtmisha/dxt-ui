import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toArray
} from '@dxtmisha/functional'

import { Table } from './Table'
import type { TableHeader, TableHeaders } from './basicTypes'
import type { TableProps } from './props'
import type {
  TableClasses,
  TableComponents,
  TableEmits,
  TableExpose,
  TableSlots
} from './types'

/**
 * TableDesign handles component integration, styles, classes, and markup rendering for the Table constructor.
 *
 * TableDesign управляет интеграцией компонентов, стилями, классами и рендерингом разметки для конструктора Table.
 */
export class TableDesign<
  COMP extends TableComponents,
  EXPOSE extends TableExpose,
  CLASSES extends TableClasses,
  P extends TableProps
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    TableEmits,
    EXPOSE,
    TableSlots,
    CLASSES,
    P
  > {
  /** Table controller instance / Экземпляр контроллера таблицы (Table) */
  protected readonly item: Table

  /**
   * Constructor
   * @param name class name / имя класса
   * @param props properties / свойства
   * @param options additional design options / дополнительные параметры дизайна
   * @param ItemConstructor class constructor for the table / конструктор класса таблицы
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, TableEmits, P>,
    ItemConstructor: typeof Table = Table
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ItemConstructor(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    )

    this.init()
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        table: this.getSubClass('table'),
        colgroup: this.getSubClass('colgroup'),
        col: this.getSubClass('col'),
        header: this.getSubClass('header'),
        foot: this.getSubClass('foot'),
        items: this.getSubClass('items'),
        caption: this.getSubClass('caption')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Main render function for the table component.
   *
   * Основная функция рендеринга для компонента таблицы.
   * @returns virtual node (VNode) / виртуальный узел (VNode)
   */
  protected initRender(): VNode {
    return this.renderScrollSticky() || this.renderMain()
  }

  /**
   * Renders the main element wrapper. /
   * Рендерит обертку основного элемента.
   * @returns rendered main virtual node / виртуальный узел основного элемента
   */
  readonly renderMain = (): VNode => {
    return h('div', {
      ...this.getAttrs(),
      class: this.classes?.value.main
    }, this.renderTable())
  }

  /**
   * Renders the sticky scroll component if available. /
   * Рендерит компонент липкой прокрутки, если он доступен.
   * @returns rendered scroll sticky virtual node or undefined / виртуальный узел липкой прокрутки или undefined
   */
  readonly renderScrollSticky = (): VNode | undefined => {
    if (
      this.components
      && this.props.stickyScrollBottom
    ) {
      return this.components.renderOne('scrollSticky', {
        ...this.getAttrs(),
        class: this.classes?.value.main
      }, { default: () => this.renderTable() })
    }

    return undefined
  }

  /**
   * Renders the table element. /
   * Рендерит элемент таблицы.
   * @returns rendered table virtual node / виртуальный узел таблицы
   */
  readonly renderTable = (): VNode => {
    return h(
      'table',
      {
        ref: this.element,
        class: this.classes?.value.table
      },
      [
        ...this.item.caption.render(),
        ...this.renderColgroup(),
        ...this.renderBody(),
        ...this.renderHeader(),
        ...this.renderItems(),
        ...this.renderFoot()
      ]
    )
  }

  /**
   * Renders the colgroup element with col definitions for column widths. /
   * Рендерит элемент colgroup с определениями col для ширины колонок.
   * @returns rendered colgroup virtual nodes array / массив виртуальных узлов colgroup
   */
  readonly renderColgroup = (): VNode[] => {
    const cols = this.item.columns.cols

    if (cols.length === 0) {
      return []
    }

    return [
      h(
        'colgroup',
        { class: this.classes?.value.colgroup },
        cols.map(attr => h('col', { ...attr, class: this.classes?.value.col }))
      )
    ]
  }

  /**
   * Renders the table header.
   *
   * Рендерит заголовок таблицы.
   * @returns rendered header virtual node or undefined / виртуальный узел заголовка или undefined
   */
  readonly renderHeader = (): VNode[] => {
    const children = this.renderRecords('header', this.props.header, true)

    this.initSlot(
      'header',
      children,
      { columns: this.item.columns.list }
    )

    if (children.length > 0) {
      return [
        h(
          'thead',
          {
            ref: this.item.headerElement,
            class: this.classes?.value.header
          },
          children
        )
      ]
    }

    return []
  }

  /**
   * Renders the table footer.
   *
   * Рендерит подвал таблицы.
   * @returns rendered foot virtual node or empty array / виртуальный узел подвала или пустой массив
   */
  readonly renderFoot = (): VNode[] => {
    const children = this.renderRecords('foot', this.props.foot, true)

    this.initSlot(
      'foot',
      children,
      { columns: this.item.columns.list }
    )

    if (children.length > 0) {
      return [
        h(
          'tfoot',
          { class: this.classes?.value.foot },
          children
        )
      ]
    }

    return []
  }

  /**
   * Renders the table items.
   *
   * Рендерит элементы таблицы.
   * @returns rendered items virtual node or undefined / виртуальный узел элементов или undefined
   */
  readonly renderItems = (): VNode[] => {
    const children: any[] = this.renderList()

    this.initSlot(
      'items',
      children,
      { columns: this.item.columns.list }
    )

    if (children.length > 0) {
      return [
        h(
          'tbody',
          { class: this.classes?.value.items },
          children
        )
      ]
    }

    return []
  }

  /**
   * Renders the list of table rows/items.
   *
   * Рендерит список строк/элементов таблицы.
   * @returns array of rendered item virtual nodes / массив отрендеренных виртуальных узлов элементов
   */
  readonly renderList = (): any[] => {
    const children: any[] = []

    this.item.pagination.list.forEach((item, key) => {
      children.push(
        this.item.tableRecord.renderRecord(
          this.item.tableRecord.getKey(`item-${key}`, item),
          this.item.columns.list,
          item
        )
      )
    })

    return children
  }

  /**
   * Renders the custom body content slot.
   *
   * Рендерит слот пользовательского содержимого тела таблицы.
   * @returns rendered slot virtual node or undefined / виртуальный узел слота или undefined
   */
  readonly renderBody = (): VNode[] => {
    const children: any[] = []

    this.initSlot('body', children)

    return children
  }

  /**
   * Helper for rendering header or footer records. /
   * Вспомогательный метод для рендеринга записей шапки или подвала.
   * @param index prefix index name / префиксное имя индекса
   * @param data record header/foot items / элементы записей шапки/подвала
   * @param isHeader header flag / флаг шапки
   * @returns list of rendered VNodes / список отрендеренных VNode
   */
  readonly renderRecords = (
    index: string,
    data?: TableHeader | TableHeaders,
    isHeader: boolean = true
  ): VNode[] => {
    const children: any[] = []

    if (data) {
      toArray(data).forEach((item, key) => {
        children.push(
          this.item.tableRecord.renderRecord(
            this.item.tableRecord.getKey(`${index}-${key}`, item),
            this.item.columns.list,
            item,
            isHeader,
            { stickyTop: false }
          )
        )
      })
    }

    return children
  }
}
