import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Ripple } from './Ripple'

import {
  type RipplePropsBasic
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
  P extends RipplePropsBasic
> extends DesignConstructorAbstract<
    HTMLSpanElement,
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
   * A method for rendering.
   * Метод для рендеринга.
   */
  protected initRender(): VNode {
    return h('span', {
      ref: this.element,
      key: 'ripple',
      class: this.classes?.value.main,
      onPointerdown: this.item.onClick,
      ...AriaStaticInclude.hidden()
    })
  }
}
