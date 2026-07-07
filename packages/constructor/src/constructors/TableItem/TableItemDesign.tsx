import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { TableItem } from './TableItem'

import type { TooltipControl } from '../Tooltip'
import type { TableItemProps } from './props'
import type {
  TableItemClasses,
  TableItemComponents,
  TableItemEmits,
  TableItemExpose,
  TableItemSlots
} from './types'

/**
 * TableItemDesign handles component integration, styles, classes, and markup rendering for the TableItem constructor.
 *
 * TableItemDesign управляет интеграцией компонентов, стилями, классами и рендерингом разметки для конструктора TableItem.
 */
export class TableItemDesign<
  COMP extends TableItemComponents,
  EXPOSE extends TableItemExpose,
  CLASSES extends TableItemClasses,
  P extends TableItemProps
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    TableItemEmits,
    EXPOSE,
    TableItemSlots,
    CLASSES,
    P
  > {
  /** TableItem controller instance / Экземпляр контроллера ячейки таблицы (TableItem) */
  protected readonly item: TableItem

  /**
   * Constructor
   * @param name class name / имя класса
   * @param props properties / свойства
   * @param options additional design options / дополнительные параметры дизайна
   * @param ItemConstructor class constructor for the table cell item / конструктор класса элемента ячейки таблицы
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, TableItemEmits, P>,
    ItemConstructor: typeof TableItem = TableItem
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
   * Initializes exposed interface for the table item component.
   *
   * Инициализирует экспортируемые свойства для компонента ячейки таблицы.
   * @returns exposed object / экспортируемый объект
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Initializes classes for elements in the table item component.
   *
   * Инициализирует классы для элементов компонента ячейки таблицы.
   * @returns object with classes / объект с классами
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        body: this.getSubClass('body'),
        label: this.getSubClass('label'),
        labelHeader: this.getSubClass('labelHeader'),
        description: this.getSubClass('description'),
        tooltip: this.getSubClass('tooltip')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Initializes styles for the table item component.
   *
   * Инициализирует стили для компонента ячейки таблицы.
   * @returns styles object / объект стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Main render function for the table item component.
   *
   * Основная функция рендеринга для компонента ячейки таблицы.
   * @returns virtual node (VNode) / виртуальный узел (VNode)
   */
  protected initRender(): VNode {
    const children: any[] = [
      ...this.renderBody(),
      ...this.item.description.render()
    ]

    this.initSlot('context', children)

    return h(
      this.props.tag ?? 'div',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        ...this.item.binds
      },
      children
    )
  }

  /**
   * Renders the basic part of the table cell.
   *
   * Рендер базовой части ячейки таблицы.
   * @returns array of virtual nodes (VNode) / массив виртуальных узлов (VNode)
   */
  readonly renderBody = (): VNode[] => {
    const children: any[] = this.renderContext()

    if (children.length > 0) {
      return [
        h(
          'div',
          { class: this.classes?.value.body },
          children
        )
      ]
    }

    return []
  }

  /**
   * Renders the table cell context containing header and label, and optional tooltip.
   *
   * Рендер контекста ячейки таблицы, содержащего заголовок, метку и необязательную подсказку.
   * @returns array of virtual nodes (VNode) / массив виртуальных узлов (VNode)
   */
  readonly renderContext = (): VNode[] => {
    const children: any[] = [
      ...this.renderHeader(),
      ...this.item.label.render()
    ]

    if (this.item.isTooltip) {
      children.push(
        ...this.item.tooltip.render({
          control: (props: TooltipControl): VNode => this.renderTooltipControl(props),
          body: this.slots?.tooltip
        })
      )
    }

    return children
  }

  /**
   * Renders the header label.
   *
   * Рендер заголовка.
   * @returns array of virtual nodes (VNode) / массив виртуальных узлов (VNode)
   */
  readonly renderHeader = (): VNode[] => {
    if (
      this.props.headerLabel
      && this.props.verticalHeader
      && Boolean(this.props.vertical)
      && this.props.vertical !== 'none'
    ) {
      return [
        h(
          'span',
          { class: this.classes?.value.labelHeader },
          `${this.props.headerLabel}${this.props.headerLabelEnd}`
        )
      ]
    }

    return []
  }

  /**
   * Renders the tooltip control element.
   *
   * Рендер элемента управления подсказкой.
   * @param control tooltip control options / параметры управления подсказкой
   * @returns virtual node (VNode) / виртуальный узел (VNode)
   */
  readonly renderTooltipControl = (
    control: TooltipControl
  ): VNode => {
    return this.components.renderOne(
      'icon',
      {
        ...this.item.tooltipControlBind.value,
        ...control.binds,
        class: {
          ...this.toClass(this.item.tooltipControlBind.value?.class),
          ...this.toClass(control.binds?.class)
        }
      },
      undefined,
      'iconControl'
    ) as VNode
  }
}
