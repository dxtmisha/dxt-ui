import { h, mergeProps, type VNode } from 'vue'
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed API object / объект экспортируемого API
   */
  protected initExpose(): EXPOSE {
    return {
      toggle: (open: boolean, flash?: boolean) => this.item.i('open').toggle(open, flash)
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
        label: this.naming.getSubClass('label'),
        description: this.naming.getSubClass('description'),
        body: this.naming.getSubClass('body')
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
  readonly renderControl = (): VNode[] => {
    const control = this.initSlot('control', undefined, this.item.slotData)

    if (control) {
      return [control]
    }

    return []
  }

  /**
   * Rendering of the tooltip.
   *
   * Рендеринг тултипа.
   * @returns array of VNodes / массив VNode
   */
  readonly renderTooltip = (): VNode[] => {
    if (this.item.isShow()) {
      const children: VNode[] = [
        ...this.item.callInstance('label', item => item.render(), []),
        ...this.item.callInstance('description', item => item.render(), []),
        ...this.renderBody(),
        ...this.item.callInstance(
          'arrow',
          item => item.render(undefined, undefined, () => this.item.isArrow()),
          []
        )
      ]

      const element = h(
        'div',
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

      if (this.props.embedded) {
        return [element]
      }

      return this.item.i('teleport').render(element)
    }

    return []
  }

  /**
   * Rendering of the body slot.
   *
   * Рендеринг слота тела.
   * @returns array of VNodes / массив VNode
   */
  readonly renderBody = (): VNode[] => {
    if (
      this.slots
      && 'body' in this.slots
    ) {
      const body = this.initSlot('body')

      if (body) {
        return [body]
      }
    }

    return []
  }
}
