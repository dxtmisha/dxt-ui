import { h, mergeProps, type VNode } from 'vue'
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
    HTMLElement,
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
   * Constructor for TableDesign.
   *
   * Конструктор для TableDesign.
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Renders the custom body content slot.
   *
   * Рендерит слот пользовательского содержимого тела таблицы.
   * @returns rendered slot virtual nodes array / массив виртуальных узлов слота
   */
  readonly renderBody = (): VNode[] => {
    const children: VNode[] = []

    this.initSlot('body', children)

    return children
  }

  /**
   * Renders the colgroup element with col definitions for column widths.
   *
   * Рендерит элемент colgroup с определениями col для ширины колонок.
   * @returns rendered colgroup virtual nodes array / массив виртуальных узлов colgroup
   */
  readonly renderColgroup = (): VNode[] => {
    const tag = this.item.tagColgroup

    if (!tag) {
      return []
    }

    const cols = this.item.callInstanceArray('columns', item => item.cols)

    if (cols.length === 0) {
      return []
    }

    return [
      h(
        tag,
        this.getKeyClass('colgroup'),
        cols.map(columnAttributes => h(
          this.item.tagCol,
          {
            ...columnAttributes,
            class: this.classes?.value.col
          }
        ))
      )
    ]
  }

  /**
   * Renders the table footer.
   *
   * Рендерит подвал таблицы.
   * @returns rendered foot virtual nodes array / массив виртуальных узлов подвала
   */
  readonly renderFoot = (): VNode[] => {
    const children = this.renderRecords('foot', this.props.foot, false, true)

    this.initSlot(
      'foot',
      children,
      { columns: this.item.callInstanceArray('columns', item => item.list) }
    )

    if (children.length > 0) {
      return [
        h(
          this.item.tagFoot,
          mergeProps(
            this.item.bindsSection,
            this.getKeyClass('foot')
          ),
          children
        )
      ]
    }

    return []
  }

  /**
   * Renders the table header.
   *
   * Рендерит заголовок таблицы.
   * @returns rendered header virtual nodes array / массив виртуальных узлов заголовка
   */
  readonly renderHeader = (): VNode[] => {
    const children = this.renderRecords('header', this.props.header, true)

    this.initSlot(
      'header',
      children,
      { columns: this.item.callInstanceArray('columns', item => item.list) }
    )

    if (children.length > 0) {
      return [
        h(
          this.item.tagHeader,
          mergeProps(
            this.item.bindsSection,
            {
              key: 'header',
              ref: this.item.headerElement,
              class: this.classes?.value.header
            }
          ),
          children
        )
      ]
    }

    return []
  }

  /**
   * Renders the table items container.
   *
   * Рендерит контейнер элементов таблицы.
   * @returns rendered items virtual nodes array / массив виртуальных узлов элементов
   */
  readonly renderItems = (): VNode[] => {
    const children: VNode[] = this.renderList()

    this.initSlot(
      'items',
      children,
      { columns: this.item.callInstanceArray('columns', item => item.list) }
    )

    if (children.length > 0) {
      return [
        h(
          this.item.tagItems,
          mergeProps(
            this.item.bindsSection,
            this.getKeyClass('items')
          ),
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
  readonly renderList = (): VNode[] => {
    const children: VNode[] = []
    const list = this.item.callInstanceArray('pagination', item => item.list)

    if (list.length > 0) {
      const columns = this.item.callInstanceArray('columns', item => item.list)

      list.forEach((item, key) => {
        const record = this.item.callInstance(
          'tableRecord',
          tableRecord => tableRecord.renderRecord(
            `item-${key}`,
            columns,
            item
          )
        )

        if (record) {
          children.push(record)
        }
      })
    }

    return children
  }

  /**
   * Renders the main element wrapper.
   *
   * Рендерит обертку основного элемента.
   * @returns rendered main virtual node / виртуальный узел основного элемента
   */
  readonly renderMain = (): VNode => {
    return h(
      'div',
      mergeProps(
        this.getAttrs(),
        {
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      this.renderTable()
    )
  }

  /**
   * Helper for rendering header or footer records.
   *
   * Вспомогательный метод для рендеринга записей шапки или подвала.
   * @param index prefix index name / префиксное имя индекса
   * @param data record header/foot items / элементы записей шапки/подвала
   * @param isHeader header flag / флаг шапки
   * @param isFoot footer flag / флаг подвала
   * @returns list of rendered VNodes / список отрендеренных VNode
   */
  readonly renderRecords = (
    index: string,
    data?: TableHeader | TableHeaders,
    isHeader: boolean = true,
    isFoot: boolean = false
  ): VNode[] => {
    const children: VNode[] = []

    if (data) {
      const columns = this.item.callInstanceArray('columns', item => item.list)

      toArray(data).forEach((item, key) => {
        const record = this.item.callInstance(
          'tableRecord',
          tableRecord => tableRecord.renderRecord(
            `${index}-${key}`,
            columns,
            item,
            isHeader,
            isFoot
              ? { stickyTop: false, isFoot: true }
              : { stickyTop: false }
          )
        )

        if (record) {
          children.push(record)
        }
      })
    }

    return children
  }

  /**
   * Renders the sticky scroll component if available.
   *
   * Рендерит компонент липкой прокрутки, если он доступен.
   * @returns rendered scroll sticky virtual node or undefined / виртуальный узел липкой прокрутки или undefined
   */
  readonly renderScrollSticky = (): VNode | undefined => {
    if (
      this.components?.is('scrollSticky')
      && this.props.stickyScrollBottom
    ) {
      return this.components.renderOne(
        'scrollSticky',
        mergeProps(
          this.getAttrs(),
          {
            class: this.classes?.value.main,
            style: this.styles?.value
          }
        ),
        { default: () => this.renderTable() }
      )
    }

    return undefined
  }

  /**
   * Renders the table element.
   *
   * Рендерит элемент таблицы.
   * @returns rendered table virtual node / виртуальный узел таблицы
   */
  readonly renderTable = (): VNode => {
    return h(
      this.item.tag,
      mergeProps(
        this.item.binds,
        {
          ref: this.element,
          class: this.classes?.value.table
        }
      ),
      [
        ...this.item.callInstanceArray('caption', item => item.render()),
        ...this.renderColgroup(),
        ...this.renderBody(),
        ...this.renderHeader(),
        ...this.renderItems(),
        ...this.renderFoot()
      ]
    )
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed object / экспортируемый объект
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns object with classes / объект с классами
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        table: this.naming.getSubClass('table'),
        colgroup: this.naming.getSubClass('colgroup'),
        col: this.naming.getSubClass('col'),
        header: this.naming.getSubClass('header'),
        foot: this.naming.getSubClass('foot'),
        items: this.naming.getSubClass('items'),
        caption: this.naming.getSubClass('caption')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns styles object / объект стилей
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
}
