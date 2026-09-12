import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { CollageBar } from './CollageBar'

import {
  type CollageBarProps
} from './props'
import {
  type CollageBarClasses,
  type CollageBarComponents,
  type CollageBarEmits,
  type CollageBarExpose,
  type CollageBarSlots
} from './types'

/**
 * CollageBarDesign
 */
export class CollageBarDesign<
  COMP extends CollageBarComponents,
  EXPOSE extends CollageBarExpose,
  CLASSES extends CollageBarClasses,
  P extends CollageBarProps
> extends DesignConstructorAbstract<
  HTMLElement,
  COMP,
  CollageBarEmits,
  EXPOSE,
  CollageBarSlots,
  CLASSES,
  P
> {
  protected readonly item: CollageBar

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
    options?: ConstrOptions<COMP, CollageBarEmits, P>,
    ItemConstructor: typeof CollageBar = CollageBar
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
      ...this.item.event.expose
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
        context: this.getSubClass('context'),
        label: this.getSubClass('label'),
        description: this.getSubClass('description'),
        button: this.getSubClass('button')
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
    const children: any[] = [
      ...this.renderContext(),
      ...this.renderButton()
    ]

    this.initSlot('trailing', children)

    return h(
      this.item.tag,
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main
      },
      children
    )
  }

  /**
   * Content and text area rendering.
   *
   * Рендеринг области контента и текста.
   */
  readonly renderContext = (): VNode[] => {
    const children: any[] = [
      ...this.renderBody()
    ]

    if (children.length > 0) {
      return [
        h(
          'div',
          this.getKeyClass('context'),
          children
        )
      ]
    }

    return []
  }

  /**
   * Body rendering.
   *
   * Рендеринг тела.
   */
  readonly renderBody = (): VNode[] => {
    const children: any[] = [
      ...this.item.label.render(),
      ...this.item.description.render()
    ]

    this.initSlot('body', children)

    return children
  }

  /**
   * Action button rendering.
   *
   * Рендеринг кнопки действия.
   */
  readonly renderButton = (): VNode[] => {
    if (this.item.isButton()) {
      return this.item.button.render(
        undefined,
        { class: this.classes?.value.button }
      )
    }

    return []
  }
}
