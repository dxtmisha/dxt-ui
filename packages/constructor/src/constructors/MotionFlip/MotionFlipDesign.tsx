import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { MotionFlip } from './MotionFlip'
import type { MotionFlipCallback } from './basicTypes'
import type { MotionFlipPropsBasic } from './props'
import type {
  MotionFlipClasses,
  MotionFlipComponents,
  MotionFlipEmits,
  MotionFlipExpose,
  MotionFlipSlots
} from './types'

/**
 * MotionFlipDesign
 */
export class MotionFlipDesign<
  COMP extends MotionFlipComponents,
  EXPOSE extends MotionFlipExpose,
  CLASSES extends MotionFlipClasses,
  P extends MotionFlipPropsBasic,
  SLOTS extends MotionFlipSlots = MotionFlipSlots
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    MotionFlipEmits,
    EXPOSE,
    SLOTS,
    CLASSES,
    P
  > {
  protected readonly item: MotionFlip

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MotionFlipEmits, P>,
    ItemConstructor: typeof MotionFlip = MotionFlip
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
   * Exposed method properties.
   */
  protected initExpose(): EXPOSE {
    return {
      update: (callback: MotionFlipCallback) => this.item.update(callback)
    } as EXPOSE
  }

  /**
   * Class list preparation.
   */
  protected initClasses(): Partial<CLASSES> {
    return ({
      main: {
        [`${this.getName()}--freeze`]: this.item.isFreeze.value,
        [`${this.getName()}--go`]: this.item.isGo.value,
        [`status-freeze`]: this.item.isFreeze.value,
        [`status-go`]: this.item.isGo.value
      },
      item: this.getSubClass('item')
    } as unknown) as Partial<CLASSES>
  }

  /**
   * Style list preparation.
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Render function.
   */
  protected initRender(): VNode {
    const children: VNode[] = []

    this.initSlot('default' as keyof SLOTS, children as any)

    return h(
      'div',
      {
        ref: this.element,
        class: this.classes?.value.main,
        onTransitionend: (event: TransitionEvent) => this.item.onTransition(event)
      },
      children
    )
  }
}
