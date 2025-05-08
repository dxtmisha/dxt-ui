import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxt-ui/functional'

import { Ripple } from './Ripple'

import {
  type RippleProps
} from './props'
import {
  type RippleClasses,
  type RippleComponents,
  type RippleEmits,
  type RippleExpose,
  type RippleSlots
} from './types'

/**
 * RippleDesign
 */
export class RippleDesign<
  COMP extends RippleComponents,
  EXPOSE extends RippleExpose,
  CLASSES extends RippleClasses,
  P extends RippleProps
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    RippleEmits,
    EXPOSE,
    RippleSlots,
    CLASSES,
    P
  > {
  protected readonly item: Ripple

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, RippleEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new Ripple(
      this.props,
      this.refs,
      this.element,
      this.getName(),
      this.components,
      this.slots,
      this.emits
    )

    this.init()
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        item: this.getSubClass('item')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  protected initRender(): VNode {
    return h('div', {
      ref: this.element,
      class: this.classes?.value.main,
      onMousedown: this.item.onClick
    })
  }
}
