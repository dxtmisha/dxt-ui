import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { TableHeaderItem } from './TableHeaderItem'
import { TableHeaderItemSort } from './TableHeaderItemSort'

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
   * Constructor for TableHeaderItemDesign.
   *
   * Конструктор для TableHeaderItemDesign.
   * @param name class name / имя класса
   * @param props properties / свойства
   * @param options additional design options / дополнительные параметры дизайна
   * @param ItemConstructor class constructor for the table header cell item / конструктор класса элемента ячейки шапки таблицы
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Renders the basic part of the table header cell (label, sort control, and tooltip).
   *
   * Рендерит базовую часть ячейки шапки таблицы (метку, элемент сортировки и подсказку).
   * @returns array of virtual nodes (VNode) / массив виртуальных узлов (VNode)
   */
  readonly renderBody = (): VNode[] => {
    const children: VNode[] = [
      ...this.item.callInstance('label', item => item.render(), []),
      ...this.item.callInstance(
        'chip',
        item => item.render(
          undefined,
          undefined,
          () => TableHeaderItemSort.is(this.props) && item.is
        ),
        []
      ),
      ...this.item.callInstance(
        'tooltip',
        item => item.render({
          control: this.renderTooltipControl
        }),
        []
      )
    ]

    if (children.length > 0) {
      return [
        h(
          'div',
          this.getKeyClass('body'),
          children
        )
      ]
    }

    return []
  }

  /**
   * Renders the tooltip control element.
   *
   * Рендерит элемент управления подсказкой.
   * @param control tooltip control options / параметры управления подсказкой
   * @returns virtual node (VNode) or undefined / виртуальный узел (VNode) или undefined
   */
  readonly renderTooltipControl = (
    control: TooltipControl
  ): VNode | undefined => {
    return this.components?.renderOne(
      'icon',
      mergeProps(
        this.item.tooltipControlBind,
        control.binds
      ),
      undefined,
      'iconControl'
    )
  }

  /**
   * Initializes exposed interface for the table header item component.
   *
   * Инициализирует экспортируемые свойства для компонента ячейки шапки таблицы.
   * @returns exposed object / экспортируемый объект
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Initializes classes for elements in the table header item component.
   *
   * Инициализирует классы для элементов компонента ячейки шапки таблицы.
   * @returns object with classes / объект с классами
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        label: this.naming.getSubClass('label'),
        description: this.naming.getSubClass('description'),
        body: this.naming.getSubClass('body'),
        sort: this.naming.getSubClass('sort'),
        tooltip: this.naming.getSubClass('tooltip')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Initializes styles for the table header item component.
   *
   * Инициализирует стили для компонента ячейки шапки таблицы.
   * @returns styles object / объект стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Main render function for the table header item component.
   *
   * Основная функция рендеринга для компонента ячейки шапки таблицы.
   * @returns virtual node (VNode) / виртуальный узел (VNode)
   */
  protected initRender(): VNode {
    const children: VNode[] = [
      ...this.renderBody(),
      ...this.item.callInstance('description', item => item.render(), [])
    ]

    this.initSlot('context', children)

    return h(
      this.item.tag,
      mergeProps(
        this.getAttrs(),
        this.item.binds,
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      children
    )
  }
}
