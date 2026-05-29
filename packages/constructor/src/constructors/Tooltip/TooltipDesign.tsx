import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Tooltip } from './Tooltip'

import {
  type TooltipPropsBasic
} from './props'
import {
  type TooltipClasses,
  type TooltipComponents,
  type TooltipEmits,
  type TooltipExpose,
  type TooltipSlots
} from './types'

/**
 * TooltipDesign component class for rendering the tooltip layout and slots.
 *
 * Класс компонента TooltipDesign для рендеринга разметки и слотов подсказки.
 */
export class TooltipDesign<
  COMP extends TooltipComponents,
  EXPOSE extends TooltipExpose,
  CLASSES extends TooltipClasses,
  P extends TooltipPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    TooltipEmits,
    EXPOSE,
    TooltipSlots,
    CLASSES,
    P
  > {
  /** Tooltip controller instance / Экземпляр контроллера подсказки */
  protected readonly item: Tooltip

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor tooltip item class / класс элемента тултипа
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, TooltipEmits, P>,
    ItemConstructor: typeof Tooltip = Tooltip
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
   * @returns exposed API object / объект экспортируемого API
   */
  protected initExpose(): EXPOSE {
    return {
      toggle: this.item.open.toggle
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes object / частичный объект классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        label: this.getSubClass('label'),
        description: this.getSubClass('description'),
        body: this.getSubClass('body')
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
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns array of VNodes / массив VNode
   */
  protected initRender(): VNode[] {
    return [
      ...this.renderControl(),
      ...this.renderTooltip()
    ]
  }

  /**
   * Rendering of the control slot.
   *
   * Рендеринг слота управления.
   * @returns array of VNodes / массив VNode
   */
  protected readonly renderControl = (): VNode[] => {
    return [
      this.initSlot('control', undefined, this.item.slotData) as VNode
    ]
  }

  /**
   * Rendering of the tooltip.
   *
   * Рендеринг тултипа.
   * @returns array of VNodes / массив VNode
   */
  protected readonly renderTooltip = (): VNode[] => {
    if (this.item.status.isShow()) {
      const children: any[] = [
        ...this.item.label.render(),
        ...this.item.description.render(),
        ...this.renderBody()
      ]

      if (this.item.status.isArrow()) {
        children.push(
          ...this.item.arrow.render()
        )
      }

      const element = h(
        'div',
        {
          ref: this.element,
          class: this.classes?.value.main,
          ...this.item.binds
        },
        children
      )

      if (this.props.embedded) {
        return [element]
      }

      return this.item.teleport.render(element)
    }

    return []
  }

  /**
   * Rendering of the body slot.
   *
   * Рендеринг слота тела.
   * @returns array of VNodes / массив VNode
   */
  protected readonly renderBody = (): VNode[] => {
    if (
      this.slots
      && 'body' in this.slots
    ) {
      return [
        this.initSlot('body') as VNode
      ]
    }

    return []
  }
}
