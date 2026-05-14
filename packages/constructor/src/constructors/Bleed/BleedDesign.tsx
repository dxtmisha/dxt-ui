import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Bleed } from './Bleed'

import {
  type BleedPropsBasic
} from './props'
import {
  type BleedClasses,
  type BleedComponents,
  type BleedEmits,
  type BleedExpose,
  type BleedSlots
} from './types'

/**
 * BleedDesign
 */
export class BleedDesign<
  COMP extends BleedComponents,
  EXPOSE extends BleedExpose,
  CLASSES extends BleedClasses,
  P extends BleedPropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  BleedEmits,
  EXPOSE,
  BleedSlots,
  CLASSES,
  P
> {
  protected readonly item: Bleed

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
    options?: ConstrOptions<COMP, BleedEmits, P>,
    ItemConstructor: typeof Bleed = Bleed
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
    return {} as EXPOSE
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
