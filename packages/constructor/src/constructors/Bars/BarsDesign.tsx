import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Bars } from './Bars'

import {
  type BarsProps,
  type BarsPropsBasic
} from './props'
import {
  type BarsClasses,
  type BarsComponents,
  type BarsEmits,
  type BarsExpose,
  type BarsSlots
} from './types'

/**
 * BarsDesign
 */
export class BarsDesign<
  COMP extends BarsComponents,
  EXPOSE extends BarsExpose,
  CLASSES extends BarsClasses,
  P extends BarsProps
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    BarsEmits,
    EXPOSE,
    BarsSlots,
    CLASSES,
    P
  > {
  protected readonly item: Bars

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor bars item class/ класс элемента bars
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, BarsEmits, P>,
    ItemConstructor: typeof Bars = Bars
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
      main: this.item.classes.value,
      ...{
        // :classes [!] System label / Системная метка
        context: this.getSubClass('context'),
        label: this.getSubClass('label'),
        description: this.getSubClass('description')
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
        class: this.classes?.value.main,
        ...AriaStaticInclude.live(this.item.ariaLive.value)
      },
      [
        ...this.renderBackButton(),
        ...this.renderContext(),
        ...this.renderBars(),
        ...this.renderActionBars()
      ]
    )
  }

  /**
   * Rendering the close button.
   *
   * Рендеринг кнопки закрытия.
   */
  readonly renderBackButton = (): VNode[] => {
    if (
      this.props.backHide
      && (
        !this.item.action.action.value
        || this.props.backActionHide
      )
    ) {
      return []
    }

    return [
      this.components.renderOne(
        'button',
        {
          ...this.item.backBinds.value,
          label: this.item.backLabel.value,
          selected: this.item.action.action.value
        }
      ) as VNode
    ]
  }

  /**
   * Rendering the content.
   *
   * Рендеринг контента.
   */
  readonly renderContext = (): VNode[] => {
    return [
      h(
        'div',
        {
          class: this.classes?.value.context
        },
        [
          ...this.item.label.render(),
          ...this.item.description.render()
        ]
      )
    ]
  }

  /**
   * Rendering the control button.
   *
   * Рендеринг кнопки управления.
   */
  readonly renderBars = (): VNode[] => {
    const children: any[] = []

    if (this.item.action.action.value) {
      return children
    }

    children.push(...this.renderList(this.item.barsBinds.value))
    this.initSlot('bars', children)

    return children
  }

  /**
   * Rendering the control button.
   *
   * Рендеринг кнопки управления.
   */
  readonly renderActionBars = (): VNode[] => {
    const children: any[] = []

    if (this.item.action.action.value) {
      children.push(...this.renderList(this.item.actionBarsBinds.value))
      this.initSlot('actionBars', children)
    }

    return children
  }

  /**
   * Rendering a list of buttons from the list.
   *
   * Рендеринг списка кнопок по списку.
   * @param list list of data for the button/ список данных для кнопки
   */
  readonly renderList = (
    list: BarsPropsBasic['bars']
  ): VNode[] => {
    const children: VNode[] = []

    if (list) {
      list.forEach(
        item => this.components.renderAdd(children, 'button', item)
      )
    }

    return children
  }
}
