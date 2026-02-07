import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Scrollbar } from './Scrollbar'

import {
  type ScrollbarPropsBasic
} from './props'
import {
  type ScrollbarClasses,
  type ScrollbarComponents,
  type ScrollbarEmits,
  type ScrollbarExpose,
  type ScrollbarSlots
} from './types'

/**
 * ScrollbarDesign
 */
export class ScrollbarDesign<
  COMP extends ScrollbarComponents,
  EXPOSE extends ScrollbarExpose,
  CLASSES extends ScrollbarClasses,
  P extends ScrollbarPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ScrollbarEmits,
    EXPOSE,
    ScrollbarSlots,
    CLASSES,
    P
  > {
  protected readonly item: Scrollbar

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ScrollbarEmits, P>,
    ItemConstructor: typeof Scrollbar = Scrollbar
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
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected initRender(): VNode | undefined {
    const children: any[] = [this.initSlot('default')]

    if (this.item.width.is.value) {
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

    return undefined
  }
}
