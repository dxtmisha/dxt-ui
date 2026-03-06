import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Dummy } from './Dummy'

import {
  type DummyPropsBasic
} from './props'
import {
  type DummyClasses,
  type DummyComponents,
  type DummyEmits,
  type DummyExpose,
  type DummySlots
} from './types'

/**
 * DummyDesign
 */
export class DummyDesign<
  COMP extends DummyComponents,
  EXPOSE extends DummyExpose,
  CLASSES extends DummyClasses,
  P extends DummyPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    DummyEmits,
    EXPOSE,
    DummySlots,
    CLASSES,
    P
  > {
  protected readonly item: Dummy

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
    options?: ConstrOptions<COMP, DummyEmits, P>,
    ItemConstructor: typeof Dummy = Dummy
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
    return h('div', {
      class: this.classes?.value.main
    }, this.initSlot('default'))
  }
}
