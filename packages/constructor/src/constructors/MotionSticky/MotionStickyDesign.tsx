import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { MotionSticky } from './MotionSticky'

import {
  type MotionStickyPropsBasic
} from './props'
import {
  type MotionStickyClasses,
  type MotionStickyComponents,
  type MotionStickyEmits,
  type MotionStickyExpose,
  type MotionStickySlots
} from './types'

/**
 * MotionStickyDesign
 *
 * Дизайн-компонент липкого элемента.
 */
export class MotionStickyDesign<
  COMP extends MotionStickyComponents,
  EXPOSE extends MotionStickyExpose,
  CLASSES extends MotionStickyClasses,
  P extends MotionStickyPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    MotionStickyEmits,
    EXPOSE,
    MotionStickySlots,
    CLASSES,
    P
  > {
  /** Constructor logic instance / Экземпляр логики конструктора */
  protected readonly item: MotionSticky

  /**
   * Constructor
   * @param name component name / название компонента
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MotionStickyEmits, P>,
    ItemConstructor: typeof MotionSticky = MotionSticky
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
    return h(
      this.item.tag,
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main
      },
      this.initSlot('default')
    )
  }
}
