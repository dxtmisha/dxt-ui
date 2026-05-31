import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Divider } from './Divider'

import {
  type DividerPropsBasic
} from './props'
import {
  type DividerClasses,
  type DividerComponents,
  type DividerEmits,
  type DividerExpose,
  type DividerSlots
} from './types'

/**
 * DividerDesign
 */
export class DividerDesign<
  COMP extends DividerComponents,
  EXPOSE extends DividerExpose,
  CLASSES extends DividerClasses,
  P extends DividerPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    DividerEmits,
    EXPOSE,
    DividerSlots,
    CLASSES,
    P
  > {
  protected readonly item: Divider

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
    options?: ConstrOptions<COMP, DividerEmits, P>,
    ItemConstructor: typeof Divider = Divider
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
    return {
    } as EXPOSE
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
      ...this.getAttrs(),
      class: this.classes?.value.main
    })
  }
}
