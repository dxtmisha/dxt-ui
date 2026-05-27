import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Skeleton } from './Skeleton'

import {
  type SkeletonPropsBasic
} from './props'
import {
  type SkeletonClasses,
  type SkeletonComponents,
  type SkeletonEmits,
  type SkeletonExpose,
  type SkeletonSlots
} from './types'

/**
 * Constructor class for the Skeleton component design.
 * It integrates the abstract design constructor, hooks up components, attributes, ARIA lifecycles, and slot rendering.
 *
 * Класс конструктора дизайна для компонента Skeleton.
 * Интегрирует абстрактный конструктор дизайна, подключает компоненты, атрибуты, жизненные циклы ARIA и рендеринг слотов.
 */
export class SkeletonDesign<
  COMP extends SkeletonComponents,
  EXPOSE extends SkeletonExpose,
  CLASSES extends SkeletonClasses,
  P extends SkeletonPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    SkeletonEmits,
    EXPOSE,
    SkeletonSlots,
    CLASSES,
    P
  > {
  /** Item instance for working with Skeleton logic / Экземпляр элемента для работы с логикой Skeleton */
  protected readonly item: Skeleton

  /**
   * Constructor
   *
   * Конструктор
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor class for working with the item / класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, SkeletonEmits, P>,
    ItemConstructor: typeof Skeleton = Skeleton
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ItemConstructor(
      this.props,
      this.getName()
    )

    this.init()
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns expose object / объект expose
   */
  protected initExpose(): EXPOSE {
    return {
      isActive: this.item.isActive
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns classes object / объект классов
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
   * @returns VNode or undefined / VNode или undefined
   */
  protected initRender(): VNode {
    return h(
      'div',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        ...AriaStaticInclude.busy(this.item.isActive()),
        ...AriaStaticInclude.live('polite')
      },
      this.initSlot('default', undefined, this.item.classes)
    )
  }
}
