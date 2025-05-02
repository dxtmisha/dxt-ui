import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxt-ui/functional'

import { Skeleton } from './Skeleton'

import {
  type SkeletonProps
} from './props'
import {
  type SkeletonClasses,
  type SkeletonComponents,
  type SkeletonEmits,
  type SkeletonExpose,
  type SkeletonSlots
} from './types'

/**
 * SkeletonDesign
 */
export class SkeletonDesign<
  COMP extends SkeletonComponents,
  EXPOSE extends SkeletonExpose,
  CLASSES extends SkeletonClasses,
  P extends SkeletonProps
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    SkeletonEmits,
    EXPOSE,
    SkeletonSlots,
    CLASSES,
    P
  > {
  protected readonly item: Skeleton

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, SkeletonEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new Skeleton(
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
    return {
      isActive: this.item.isActive
    } as EXPOSE
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
    const children: any[] = []

    this.initSlot('default', children, this.item.classes)

    return h('div', {
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main
    }, children)
  }
}
