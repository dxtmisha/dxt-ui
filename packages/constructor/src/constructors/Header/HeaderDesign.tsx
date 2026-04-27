import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Header } from './Header'

import {
  type HeaderPropsBasic
} from './props'
import {
  type HeaderClasses,
  type HeaderComponents,
  type HeaderEmits,
  type HeaderExpose,
  type HeaderSlots
} from './types'

/**
 * HeaderDesign
 */
export class HeaderDesign<
  COMP extends HeaderComponents,
  EXPOSE extends HeaderExpose,
  CLASSES extends HeaderClasses,
  P extends HeaderPropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  HeaderEmits,
  EXPOSE,
  HeaderSlots,
  CLASSES,
  P
> {
  protected readonly item: Header

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
    options?: ConstrOptions<COMP, HeaderEmits, P>,
    ItemConstructor: typeof Header = Header
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
        label: this.getSubClass('label'),
        caption: this.getSubClass('caption'),
        icon: this.getSubClass('icon'),
        space: this.getSubClass('space')
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
      ...this.item.icon.renderIcon(),
      ...this.item.label.render(),
      ...this.item.caption.render(),
      ...this.renderTrailing()
    ]

    return h('div', {
      ...this.getAttrs(),
      class: [
        this.classes?.value.main,
        ...this.item.classList.value
      ]
    }, children)
  }

  /**
   * Trailing rendering.
   *
   * Рендеринг правого контента.
   */
  protected readonly renderTrailing = (): VNode[] => {
    const children: any[] = []

    if (this.slots?.trailing) {
      children.push(h('div', {
        key: 'spacer',
        class: this.classes?.value.space
      }))

      this.initSlot('trailing', children)
    }

    return children
  }
}
