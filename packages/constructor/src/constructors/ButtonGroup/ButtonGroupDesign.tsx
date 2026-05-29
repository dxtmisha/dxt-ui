import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'

import { ButtonGroup } from './ButtonGroup'

import {
  type ButtonGroupPropsBasic
} from './props'
import {
  type ButtonGroupClasses,
  type ButtonGroupComponents,
  type ButtonGroupEmits,
  type ButtonGroupExpose,
  type ButtonGroupSlots
} from './types'

/**
 * ButtonGroupDesign
 */
export class ButtonGroupDesign<
  COMP extends ButtonGroupComponents,
  EXPOSE extends ButtonGroupExpose,
  CLASSES extends ButtonGroupClasses,
  P extends ButtonGroupPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ButtonGroupEmits,
    EXPOSE,
    ButtonGroupSlots,
    CLASSES,
    P
  > {
  protected readonly item: ButtonGroup

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
    options?: ConstrOptions<COMP, ButtonGroupEmits, P>,
    ItemConstructor: typeof ButtonGroup = ButtonGroup
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
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected initRender(): VNode {
    return h(
      'div',
      {
        ...this.getAttrs(),
        class: this.classes?.value.main
      },
      this.renderList()
    )
  }

  /**
   * List rendering.
   *
   * Рендеринг списка.
   */
  protected readonly renderList = (): VNode[] => {
    const children: any[] = []

    if (this.item.isList()) {
      if (this.props.list) {
        this.props.list.forEach((item, key) => {
          this.components.renderAdd(
            children,
            'button',
            toBinds(
              {
                class: this.classes?.value.item,
                onClick: this.item.event.onClick
              },
              this.props.buttonAttrs,
              item
            ),
            undefined,
            `list-${key}`
          )
        })
      }

      this.initSlot('default', children)
    }

    return children
  }
}
