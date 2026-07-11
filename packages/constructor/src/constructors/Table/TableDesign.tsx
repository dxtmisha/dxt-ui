import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Table } from './Table'
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
        header: this.getSubClass('header'),
        items: this.getSubClass('items')
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
    const children: any[] = [
      this.renderHeader(),
      this.renderItems()
    ]

    return h('div', {
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main
    }, children)
  }

  /**
   * Renders the table header.
   *
   * Рендерит заголовок таблицы.
   * @returns rendered header virtual node or undefined / виртуальный узел заголовка или undefined
   */
  readonly renderHeader = (): VNode | undefined => {
    if (this.props.header) {
      return h(
        'div',
        {
          class: this.classes?.value.header
        },
        this.item.tableRecord.renderRecord(
          'header',
          this.item.columns,
          this.item.headerData.value,
          true,
          {
            isHeader: true,
            stickyTop: this.props.headerTop
          }
        )
      )
    }

    return undefined
  }

  /**
   * Renders the table items.
   *
   * Рендерит элементы таблицы.
   * @returns rendered items virtual node or undefined / виртуальный узел элементов или undefined
   */
  readonly renderItems = (): VNode | undefined => {
    const children: any[] = []
    const slot = this.initSlot(
      'body',
      undefined,
      { columns: this.item.columns }
    )

    this.props.list?.forEach((item, key) => {
      children.push(
        this.item.tableRecord.renderRecord(
          this.item.getKeyItem(item, key),
          this.item.columns,
          item
        )
      )
    })

    if (slot) {
      children.push(slot)
    }

    if (children.length > 0) {
      return h(
        'div',
        {
          class: this.classes?.value.items
        },
        children
      )
    }

    return undefined
  }
}
