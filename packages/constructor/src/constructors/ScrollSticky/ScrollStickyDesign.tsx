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

    // TODO: Method for initializing base objects
    // TODO: Метод для инициализации базовых объектов

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
        item: this.getSubClass('item')
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
    return h('div', {
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main
    }, [
      h('div', {
        class: this.classes?.value.item
      })
    ])
  }
}
