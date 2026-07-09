import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { ScrollSticky } from './ScrollSticky'

import {
  type ScrollStickyPropsBasic
} from './props'
import {
  type ScrollStickyClasses,
  type ScrollStickyComponents,
  type ScrollStickyEmits,
  type ScrollStickyExpose,
  type ScrollStickySlots
} from './types'

/**
 * ScrollStickyDesign
 */
export class ScrollStickyDesign<
  COMP extends ScrollStickyComponents,
  EXPOSE extends ScrollStickyExpose,
  CLASSES extends ScrollStickyClasses,
  P extends ScrollStickyPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ScrollStickyEmits,
    EXPOSE,
    ScrollStickySlots,
    CLASSES,
    P
  > {
  protected readonly item: ScrollSticky

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
    options?: ConstrOptions<COMP, ScrollStickyEmits, P>,
    ItemConstructor: typeof ScrollSticky = ScrollSticky
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
        scroll: this.getSubClass('scroll')
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
      ref: this.element,
      class: this.classes?.value.main
    }, [
      this.renderScroll()
    ])
  }

  /**
   * Renders the scroll element.
   *
   * Рендерит элемент прокрутки.
   * @returns virtual node / виртуальный узел
   */
  protected renderScroll(): VNode {
    return h('div', {
      ref: this.item.scrollElement,
      class: this.classes?.value.scroll
    })
  }
}
