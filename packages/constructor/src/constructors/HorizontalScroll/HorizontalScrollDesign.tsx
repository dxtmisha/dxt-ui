import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { HorizontalScroll } from './HorizontalScroll'

import {
  type HorizontalScrollPropsBasic
} from './props'
import {
  type HorizontalScrollClasses,
  type HorizontalScrollComponents,
  type HorizontalScrollEmits,
  type HorizontalScrollExpose,
  type HorizontalScrollSlots
} from './types'

/**
 * HorizontalScrollDesign
 */
export class HorizontalScrollDesign<
  COMP extends HorizontalScrollComponents,
  EXPOSE extends HorizontalScrollExpose,
  CLASSES extends HorizontalScrollClasses,
  P extends HorizontalScrollPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    HorizontalScrollEmits,
    EXPOSE,
    HorizontalScrollSlots,
    CLASSES,
    P
  > {
  protected readonly item: HorizontalScroll

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
    options?: ConstrOptions<COMP, HorizontalScrollEmits, P>,
    ItemConstructor: typeof HorizontalScroll = HorizontalScroll
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
      // TODO: list of properties for export
      // TODO: список свойств для экспорта
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
    return {
      // TODO: list of user styles
      // TODO: список пользовательских стилей
    }
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected initRender(): VNode {
    const children: any[] = []

    this.initSlot('default', children, this.item.slotData.value)

    return h(
      this.props.tag ?? 'div',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main
      },
      children
    )
  }
}
