import { h, Teleport, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
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
 * TooltipDesign
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
  protected readonly item: Tooltip

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor tooltip item class/ класс элемента тултипа
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
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
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
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
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
   */
  protected readonly renderTooltip = (): VNode[] => {
    if (this.item.status.isShow.value) {
      const children: any[] = [
        ...this.item.label.render(),
        ...this.item.description.render(),
        ...this.renderBody()
      ]

      if (this.item.status.isArray.value) {
        children.push(
          ...this.item.arrow.render()
        )
      }

      return [
        h(
          Teleport,
          {
            key: 'teleport',
            to: 'body'
          },
          h(
            'div',
            {
              ref: this.element,
              id: this.item.classes.getIdItem(),
              class: this.classes?.value.main,
              onMouseover: this.item.event.onMouseoverTooltip,
              onMouseout: this.item.event.onMouseout,
              onTransitionend: this.item.event.onTransitionend,
              ...AriaStaticInclude.role('tooltip')
            },
            children
          )
        )
      ]
    }

    return []
  }

  /**
   * Rendering of the body slot.
   *
   * Рендеринг слота тела.
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
