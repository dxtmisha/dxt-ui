import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract, toBinds
} from '@dxtmisha/functional'

import { TableHeaderItem } from './TableHeaderItem'

import type { TooltipControl } from '../Tooltip'
import type { TableHeaderItemProps } from './props'
import type {
  TableHeaderItemClasses,
  TableHeaderItemComponents,
  TableHeaderItemEmits,
  TableHeaderItemExpose,
  TableHeaderItemSlots
} from './types'

/**
 * TableHeaderItemDesign handles component integration, styles, classes, and markup rendering for the TableHeaderItem constructor.
 *
 * TableHeaderItemDesign управляет интеграцией компонентов, стилями, классами и рендерингом разметки для конструктора TableHeaderItem.
 */
export class TableHeaderItemDesign<
  COMP extends TableHeaderItemComponents,
  EXPOSE extends TableHeaderItemExpose,
  CLASSES extends TableHeaderItemClasses,
  P extends TableHeaderItemProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  TableHeaderItemEmits,
  EXPOSE,
  TableHeaderItemSlots,
  CLASSES,
  P
> {
  /** TableHeaderItem controller instance / Экземпляр контроллера ячейки шапки таблицы (TableHeaderItem) */
  protected readonly item: TableHeaderItem

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
    options?: ConstrOptions<COMP, TableHeaderItemEmits, P>,
    ItemConstructor: typeof TableHeaderItem = TableHeaderItem
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
      this.item.tag,
      {
        ...this.getAttrs(),
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
    const children: any[] = [
      ...this.item.label.render(),
      ...this.renderTooltip()
    ]

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
   * Renders the tooltip.
   *
   * Рендер подсказки.
   * @returns array of virtual nodes (VNode) / массив виртуальных узлов (VNode)
   */
  readonly renderTooltip = (): VNode[] => {
    if (this.item.isTooltip) {
      return this.item.tooltip.render({
        control: (props: TooltipControl): VNode | undefined => this.renderTooltipControl(props),
        body: this.slots?.tooltip
      })
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
  ): VNode | undefined => {
    return this.components.renderOne(
      'icon',
      toBinds(
        this.item.tooltipControlBind.value,
        control.binds
      ),
      undefined,
      'iconControl'
    )
  }
}
