import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Header } from './Header'

import type {
  HeaderPropsBasic
} from './props'
import type {
  HeaderClasses,
  HeaderComponents,
  HeaderEmits,
  HeaderExpose,
  HeaderSlots
} from './types'

/**
 * HeaderDesign component class for rendering the header component layout and slots.
 * Assembles icon, heading label, caption, and optional trailing content with spacer.
 *
 * Класс компонента HeaderDesign для рендеринга разметки и слотов компонента шапки.
 * Собирает иконку, метку заголовка, подпись и необязательный правый контент с разделителем.
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
  /** Header logic orchestrator instance / Экземпляр оркестратора логики шапки */
  protected readonly item: Header

  /**
   * Constructor for creating a HeaderDesign instance.
   *
   * Конструктор для создания экземпляра HeaderDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Renders the trailing spacer and trailing slot content when provided.
   *
   * Рендерит разделитель и содержимое слота trailing при его наличии.
   * @returns array of VNodes / массив VNode
   */
  readonly renderTrailing = (): VNode[] => {
    const children: VNode[] = []

    if (this.slots?.trailing) {
      children.push(h('div', this.getKeyClass('space')))
      this.initSlot('trailing', children)
    }

    return children
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed API object / объект экспортируемого API
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes object / частичный объект классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        label: this.naming.getSubClass('label'),
        caption: this.naming.getSubClass('caption'),
        icon: this.naming.getSubClass('icon'),
        space: this.naming.getSubClass('space')
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
   * A method for rendering the header root element and its sub-elements.
   *
   * Метод для рендеринга корневого элемента шапки и её подэлементов.
   * @returns rendered VNode / отрисованный VNode
   */
  protected initRender(): VNode {
    const children: VNode[] = [
      ...this.item.callInstance('icon', item => item.renderIcon(), []),
      ...this.item.callInstance('label', item => item.render(), []),
      ...this.item.callInstance('caption', item => item.render(), []),
      ...this.renderTrailing()
    ]

    return h(
      'div',
      mergeProps(
        this.getAttrs(),
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      children
    )
  }
}
