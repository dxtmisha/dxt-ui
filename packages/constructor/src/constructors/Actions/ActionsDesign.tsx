import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'

import { Actions } from './Actions'

import {
  type ActionsPropsBasic
} from './props'
import {
  type ActionsClasses,
  type ActionsComponents,
  type ActionsEmits,
  type ActionsExpose,
  type ActionsSlots
} from './types'

/**
 * ActionsDesign
 */
export class ActionsDesign<
  COMP extends ActionsComponents,
  EXPOSE extends ActionsExpose,
  CLASSES extends ActionsClasses,
  P extends ActionsPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ActionsEmits,
    EXPOSE,
    ActionsSlots,
    CLASSES,
    P
  > {
  protected readonly item: Actions

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor actions item class/ класс элемента действий
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ActionsEmits, P>,
    ItemConstructor: typeof Actions = Actions
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
        item: this.getSubClass('item'),
        list: this.getSubClass('list'),
        secondary: this.getSubClass('secondary'),
        spacer: this.getSubClass('spacer')
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
      [
        ...this.renderList(),
        ...this.renderSpacer(),
        ...this.renderSecondary()
      ]
    )
  }

  /**
   * List rendering.
   *
   * Рендеринг списка.
   */
  protected readonly renderList = (): VNode[] => {
    const children: any[] = []

    if (this.item.isList.value) {
      if (this.props.list) {
        this.props.list.forEach((item, key) => {
          this.components.renderAdd(
            children,
            'button',
            toBinds(
              {
                onClick: this.item.event.onClick
              },
              this.props.buttonAttrs,
              item,
              {
                class: [
                  this.classes?.value.item,
                  this.classes?.value.list
                ]
              }
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

  /**
   * Secondary list rendering.
   *
   * Рендеринг вторичного списка.
   */
  protected readonly renderSecondary = (): VNode[] => {
    const children: any[] = []

    if (this.item.isSecondary.value) {
      if (this.props.listSecondary) {
        this.props.listSecondary.forEach((item, key) => {
          this.components.renderAdd(
            children,
            'button',
            toBinds(
              this.props.buttonSecondaryAttrs,
              item,
              {
                class: [
                  this.classes?.value.item,
                  this.classes?.value.secondary
                ]
              }
            ),
            undefined,
            `secondary-${key}`
          )
        })
      }

      this.initSlot('secondary', children)
    }

    return children
  }

  /**
   * Separator rendering.
   *
   * Рендеринг разделителя.
   */
  protected readonly renderSpacer = (): VNode[] => {
    return [h('div', { class: this.classes?.value.spacer })]
  }
}
