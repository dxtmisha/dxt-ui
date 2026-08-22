import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { NavigationRailItem } from './NavigationRailItem'

import {
  type NavigationRailItemPropsBasic
} from './props'
import {
  type NavigationRailItemClasses,
  type NavigationRailItemComponents,
  type NavigationRailItemEmits,
  type NavigationRailItemExpose,
  type NavigationRailItemSlots
} from './types'

/**
 * NavigationRailItemDesign class responsible for rendering the NavigationRailItem component, mapping props to elements, classes, and sub-components.
 *
 * Класс NavigationRailItemDesign, отвечающий за рендеринг компонента NavigationRailItem, сопоставление свойств с элементами, классами и подкомпонентами.
 */
export class NavigationRailItemDesign<
  COMP extends NavigationRailItemComponents,
  EXPOSE extends NavigationRailItemExpose,
  CLASSES extends NavigationRailItemClasses,
  P extends NavigationRailItemPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    NavigationRailItemEmits,
    EXPOSE,
    NavigationRailItemSlots,
    CLASSES,
    P
  > {
  /** Instance of the NavigationRailItem constructor / Экземпляр конструктора NavigationRailItem */
  protected readonly item: NavigationRailItem

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor item constructor class / класс конструктора элемента
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, NavigationRailItemEmits, P>,
    ItemConstructor: typeof NavigationRailItem = NavigationRailItem
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
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns expose object / объект экспонирования
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
   * @returns list of classes / список классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        label: this.getSubClass('label'),
        context: this.getSubClass('context'),
        contextLine: this.getSubClass('contextLine'),
        badge: this.getSubClass('badge')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns list of styles / список стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns rendered VNode or undefined / отрендеренный VNode или undefined
   */
  protected initRender(): VNode | undefined {
    const children: any[] = []

    this.initSlot('leading', children)

    children.push(
      ...this.renderContext(),
      ...this.item.progress.render(),
      ...this.item.ripple.render()
    )

    this.initSlot('body', children)

    return h(
      this.item.tag,
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value,
        ...this.item.binds,
        ...this.item.aria
      },
      children
    )
  }

  /**
   * Generates icon and badge container.
   *
   * Генерирует контейнер для иконки и значка.
   */
  readonly renderContext = (): VNode[] => {
    if (this.item.badge.is) {
      if (this.item.icon.isIcon()) {
        return [
          h('div', this.getKeyClass('context'), [
            ...this.item.icon.renderIcon(),
            ...this.item.badge.render()
          ]),
          ...this.item.label.render()
        ]
      }

      return [
        h('div', this.getKeyClass('contextLine'), [
          ...this.item.label.render(),
          ...this.item.badge.render()
        ])
      ]
    }

    return [
      ...this.item.icon.renderIcon(),
      ...this.item.label.render()
    ]
  }
}
