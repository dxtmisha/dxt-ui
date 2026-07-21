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
import {
  type ScrollStickyBind,
  type ScrollStickyBindItem
} from './basicTypes'

/**
 * ScrollStickyDesign class implements the design layout and rendering logic for ScrollSticky.
 *
 * Класс ScrollStickyDesign реализует макет дизайна и логику рендеринга для ScrollSticky.
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
  /** Logical ScrollSticky instance / Экземпляр логики ScrollSticky */
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
   * @returns exposed properties / открытые свойства
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns custom classes object / объект пользовательских классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        context: this.getSubClass('context'),
        scroll: this.getSubClass('scroll')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns custom styles object / объект пользовательских стилей
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
    return h('div', {
      ...this.getAttrs(),
      class: this.classes?.value.main
    }, [
      this.renderContext(),
      this.renderScroll()
    ])
  }

  /**
   * Renders the context element. /
   * Рендерит элемент контекста.
   * @returns virtual node / виртуальный узел
   */
  protected renderContext(): VNode {
    if (this.slots?.context) {
      const context = this.initSlot('context', undefined, this.getContextSlotProps())

      if (context) {
        return context
      }
    }

    return h(
      'div',
      this.getContextBinds(),
      this.initSlot('default', undefined, {
        onResize: this.item.onResize
      })
    )
  }

  /**
   * Renders the scroll element.
   *
   * Рендерит элемент прокрутки.
   * @returns virtual node / виртуальный узел
   */
  protected renderScroll(): VNode | undefined {
    if (this.props.visible === false) {
      return undefined
    }

    if (this.slots?.scroll) {
      const scroll = this.initSlot('scroll', undefined, this.getScrollSlotProps())

      if (scroll) {
        return scroll
      }
    }

    return h('div', this.getScrollBinds())
  }

  /**
   * Returns properties to pass to the context slot. /
   * Возвращает свойства для передачи в слот контекста.
   * @returns context slot properties / свойства слота контекста
   */
  protected getContextSlotProps(): ScrollStickyBindItem {
    const context = this.getContextBinds()
    const scroll = this.getScrollBinds()

    return {
      ...context,
      binds: context,
      bindsScroll: scroll,
      bindsContext: context
    }
  }

  /**
   * Returns context element binding properties. /
   * Возвращает свойства привязки элемента контекста.
   * @returns context properties object / объект свойств контекста
   */
  protected getContextBinds(): ScrollStickyBind {
    return {
      ref: this.element,
      class: this.classes?.value.context
    }
  }

  /**
   * Returns properties to pass to the scroll slot. /
   * Возвращает свойства для передачи в слот прокрутки.
   * @returns scroll slot properties / свойства слота прокрутки
   */
  protected getScrollSlotProps(): ScrollStickyBindItem {
    const context = this.getContextBinds()
    const scroll = this.getScrollBinds()

    return {
      ...scroll,
      binds: scroll,
      bindsScroll: scroll,
      bindsContext: context
    }
  }

  /**
   * Returns scroll element binding properties. /
   * Возвращает свойства привязки элемента прокрутки.
   * @returns scroll properties object / объект свойств прокрутки
   */
  protected getScrollBinds(): ScrollStickyBind {
    return {
      ref: this.item.scrollElement,
      class: this.classes?.value.scroll
    }
  }
}
