import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { SelectableArea } from './SelectableArea'

import {
  type SelectableAreaPropsBasic
} from './props'
import {
  type SelectableAreaClasses,
  type SelectableAreaComponents,
  type SelectableAreaEmits,
  type SelectableAreaExpose,
  type SelectableAreaSlots
} from './types'

/**
 * SelectableAreaDesign
 */
export class SelectableAreaDesign<
  COMP extends SelectableAreaComponents,
  EXPOSE extends SelectableAreaExpose,
  CLASSES extends SelectableAreaClasses,
  P extends SelectableAreaPropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  SelectableAreaEmits,
  EXPOSE,
  SelectableAreaSlots,
  CLASSES,
  P
> {
  protected readonly item: SelectableArea

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
    options?: ConstrOptions<COMP, SelectableAreaEmits, P>,
    ItemConstructor: typeof SelectableArea = SelectableArea
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
      reset: this.item.item.reset,
      setSelected: this.item.item.set
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
        item: this.getSubClass('item'),
        square: this.getSubClass('square')
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
    const children: any[] = []

    this.initSlot('default', children, this.item.slotData)
    children.push(this.renderSquare())

    return h(
      this.item.tag,
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        ...this.item.events.binds
      },
      children
    )
  }

  /**
   * Render square placeholder.
   *
   * Рендер элемента-квадрата.
   */
  protected readonly renderSquare = (): VNode => {
    return h('div', {
      ref: this.item.square.squareElement,
      class: this.classes?.value.square
    })
  }
}
