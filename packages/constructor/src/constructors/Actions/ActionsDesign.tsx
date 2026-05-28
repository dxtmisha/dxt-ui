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
 * ActionsDesign is a design constructor for the Actions component.
 * It connects the Actions logic, sets up slots, classes, styles, and defines the rendering function.
 *
 * ActionsDesign — конструктор дизайна для компонента Actions.
 * Он связывает логику Actions, настраивает слоты, классы, стили и определяет функцию рендеринга.
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
  /** Actions class instance managing component logic / Экземпляр класса Actions, управляющий логикой компонента */
  protected readonly item: Actions

  /**
   * Constructor for the ActionsDesign class.
   *
   * Конструктор для класса ActionsDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor actions item class / класс элемента действий
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
   * Initialization of all the necessary properties for exposure.
   *
   * Инициализация всех необходимых свойств для экспозиции.
   * @returns exposed properties / экспонируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns initialized classes / инициализированные классы
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
   * @returns initialized styles / инициализированные стили
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering the component.
   *
   * Метод для рендеринга компонента.
   * @returns component virtual node / виртуальный узел компонента
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
   * List rendering method.
   *
   * Метод рендеринга списка.
   * @returns array of list virtual nodes / массив виртуальных узлов списка
   */
  readonly renderList = (): VNode[] => {
    const children: any[] = []

    if (this.item.isList()) {
      if (this.props.list) {
        this.props.list.forEach((item, key) => {
          this.components.renderAdd(
            children,
            'button',
            toBinds(
              {
                class: [
                  this.classes?.value.item,
                  this.classes?.value.list
                ],
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

  /**
   * Secondary list rendering method.
   *
   * Метод рендеринга вторичного списка.
   * @returns array of secondary list virtual nodes / массив виртуальных узлов вторичного списка
   */
  readonly renderSecondary = (): VNode[] => {
    const children: any[] = []

    if (this.item.isSecondary()) {
      if (this.props.listSecondary) {
        this.props.listSecondary.forEach((item, key) => {
          this.components.renderAdd(
            children,
            'button',
            toBinds(
              {
                class: [
                  this.classes?.value.item,
                  this.classes?.value.secondary
                ],
                onClick: this.item.event.onClick
              },
              this.props.buttonSecondaryAttrs,
              item
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
   * Separator rendering method.
   *
   * Метод рендеринга разделителя.
   * @returns array of separator virtual nodes / массив виртуальных узлов разделителя
   */
  readonly renderSpacer = (): VNode[] => {
    return [h('div', { class: this.classes?.value.spacer })]
  }
}
