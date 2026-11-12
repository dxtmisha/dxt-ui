import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

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
 * BarsDesign is a design constructor for the Bars component.
 * It connects the Bars logic, sets up slots, classes, styles, and defines the rendering function.
 *
 * BarsDesign — конструктор дизайна для компонента Bars.
 * Он связывает логику Bars, настраивает слоты, классы, стили и определяет функцию рендеринга.
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
  /** Bars class instance managing component logic / Экземпляр класса Bars, управляющий логикой компонента */
  protected readonly item: Bars

  /**
   * Constructor.
   *
   * Конструктор.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor bars item class / класс элемента bars
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed properties / экспонируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns class object / объект классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        context: this.naming.getSubClass('context'),
        label: this.naming.getSubClass('label'),
        description: this.naming.getSubClass('description')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns styles object / объект стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns component virtual node / виртуальный узел компонента
   */
  protected initRender(): VNode {
    return h(
      'div',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value,
        ...this.item.aria
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
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderBackButton = (): VNode[] => {
    if (
      (
        this.props.backHide
        && !this.item.isAction()
      )
      || (
        this.props.backActionHide
        && this.item.isAction()
      )
    ) {
      return []
    }

    return [
      this.components?.renderOne(
        'button',
        {
          ...this.item.backBinds.value,
          label: this.item.backLabel,
          selected: this.item.isAction()
        }
      ) as VNode
    ]
  }

  /**
   * Rendering the content.
   *
   * Рендеринг контента.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderContext = (): VNode[] => {
    return [
      h(
        'div',
        this.getKeyClass('context'),
        [
          ...this.renderLabel(),
          ...this.renderDescription()
        ]
      )
    ]
  }

  /**
   * Rendering the label element.
   *
   * Рендеринг элемента заголовка.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderLabel = (): VNode[] => {
    if (this.item.isLabel()) {
      return this.item.i('label').render()
    }

    return []
  }

  /**
   * Rendering the description element.
   *
   * Рендеринг элемента описания.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderDescription = (): VNode[] => {
    if (this.item.isDescription()) {
      return this.item.i('description').render()
    }

    return []
  }

  /**
   * Rendering the control button.
   *
   * Рендеринг кнопки управления.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderBars = (): VNode[] => {
    const children: any[] = []

    if (this.item.isAction()) {
      return children
    }

    children.push(...this.renderList(this.item.barsBinds.value))
    this.initSlot('bars', children)

    return children
  }

  /**
   * Rendering the action control button.
   *
   * Рендеринг кнопки управления в режиме действия.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderActionBars = (): VNode[] => {
    const children: any[] = []

    if (this.item.isAction()) {
      children.push(...this.renderList(this.item.actionBarsBinds.value))
      this.initSlot('actionBars', children)
    }

    return children
  }

  /**
   * Rendering a list of buttons from the list.
   *
   * Рендеринг списка кнопок по списку.
   * @param list list of data for the button / список данных для кнопки
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderList = (
    list: BarsPropsBasic['bars']
  ): VNode[] => {
    const children: VNode[] = []

    if (list) {
      list.forEach(
        item => this.components?.renderAdd(children, 'button', item)
      )
    }

    return children
  }
}
