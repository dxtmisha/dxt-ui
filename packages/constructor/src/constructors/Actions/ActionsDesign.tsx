import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
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
        item: this.naming.getSubClass('item'),
        list: this.naming.getSubClass('list'),
        secondary: this.naming.getSubClass('secondary'),
        spacer: this.naming.getSubClass('spacer')
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
      mergeProps(
        this.getAttrs(),
        this.item.aria,
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      this.renderData()
    )
  }

  /**
   * Data rendering method according to alignment order.
   *
   * Метод рендеринга данных в соответствии с порядком выравнивания.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderData = (): VNode[] => {
    if (this.item.isLeft()) {
      return [
        ...this.renderList(),
        ...this.renderSpacer(),
        ...this.renderSecondary()
      ]
    }

    return [
      ...this.renderSecondary(),
      ...this.renderSpacer(),
      ...this.renderList()
    ]
  }

  /**
   * List rendering method.
   *
   * Метод рендеринга списка.
   * @returns array of list virtual nodes / массив виртуальных узлов списка
   */
  readonly renderList = (): VNode[] => {
    if (this.item.isList()) {
      return this.renderItems(
        this.props.list,
        this.classes?.value.list,
        this.props.buttonAttrs,
        'default',
        'list'
      )
    }

    return []
  }

  /**
   * Secondary list rendering method.
   *
   * Метод рендеринга вторичного списка.
   * @returns array of secondary list virtual nodes / массив виртуальных узлов вторичного списка
   */
  readonly renderSecondary = (): VNode[] => {
    if (this.item.isSecondary()) {
      return this.renderItems(
        this.props.listSecondary,
        this.classes?.value.secondary,
        this.props.buttonSecondaryAttrs,
        'secondary',
        'secondary'
      )
    }

    return []
  }

  /**
   * Separator rendering method.
   *
   * Метод рендеринга разделителя.
   * @returns array of separator virtual nodes / массив виртуальных узлов разделителя
   */
  readonly renderSpacer = (): VNode[] => {
    return [h('div', this.getKeyClass('spacer'))]
  }

  /**
   * Renders a list of action buttons and appends the corresponding slot content.
   *
   * Рендерит список кнопок действий и добавляет содержимое соответствующего слота.
   * @param list button configuration list / список конфигураций кнопок
   * @param className list-specific CSS class / CSS-класс конкретного списка
   * @param buttonAttrs shared button attributes / общие атрибуты кнопок
   * @param slotName slot name / имя слота
   * @param keyPrefix key prefix for rendered items / префикс ключа для отрендеренных элементов
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderItems = (
    list: ActionsPropsBasic['list'],
    className: string | undefined,
    buttonAttrs: ActionsPropsBasic['buttonAttrs'],
    slotName: keyof ActionsSlots,
    keyPrefix: string
  ): VNode[] => {
    const children: VNode[] = []

    if (list) {
      list.forEach((item, key) => {
        this.components?.renderAdd(
          children,
          'button',
          mergeProps(
            {
              class: [
                this.classes?.value.item,
                className
              ],
              onClick: this.item.i('event').onClick
            },
            buttonAttrs ?? {},
            item
          ),
          undefined,
          `${keyPrefix}-${key}`
        )
      })
    }

    this.initSlot(slotName, children)

    return children
  }
}
