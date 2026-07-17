import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { SkeletonItem } from './SkeletonItem'

import {
  type SkeletonItemPropsBasic
} from './props'
import {
  type SkeletonItemClasses,
  type SkeletonItemComponents,
  type SkeletonItemEmits,
  type SkeletonItemExpose,
  type SkeletonItemSlots
} from './types'

/**
 * SkeletonItemDesign
 */
export class SkeletonItemDesign<
  COMP extends SkeletonItemComponents,
  EXPOSE extends SkeletonItemExpose,
  CLASSES extends SkeletonItemClasses,
  P extends SkeletonItemPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    SkeletonItemEmits,
    EXPOSE,
    SkeletonItemSlots,
    CLASSES,
    P
  > {
  /** Constructor logic instance / Экземпляр логики конструктора */
  protected readonly item: SkeletonItem

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, SkeletonItemEmits, P>,
    ItemConstructor: typeof SkeletonItem = SkeletonItem
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
   * @returns object with exposed properties / объект с открытыми свойствами
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns list of classes / список классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes.value,
      ...{
        // :classes [!] System label / Системная метка
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns list of styles / список стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns virtual node / виртуальный узел
   */
  protected initRender(): VNode {
    const children: any[] = []

    const isObject = typeof this.props.tag === 'object'
    const tag: any = this.props.tag ?? 'div'
    const props = {
      ...this.getAttrs(),
      ...this.props.props,
      ref: this.element,
      class: this.classes?.value.main
    }

    this.initSlot('default', children)

    if (
      isObject
      || this.slots?.default
    ) {
      return h(tag, props, isObject ? () => children : children)
    } else {
      return h(tag, {
        ...props,
        innerHTML: this.item.label.value
      })
    }
  }
}
