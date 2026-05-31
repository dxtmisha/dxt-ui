import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { TabItem } from './TabItem'

import {
  type TabItemPropsBasic
} from './props'
import {
  type TabItemClasses,
  type TabItemComponents,
  type TabItemEmits,
  type TabItemExpose,
  type TabItemSlots
} from './types'

/**
 * TabItemDesign class constructor for managing classes, styles, and rendering the TabItem component.
 * It acts as the bridge between component configuration and standard HTML/Vue virtual DOM nodes.
 *
 * Класс-конструктор дизайна TabItemDesign для управления классами, стилями и рендерингом компонента TabItem.
 * Служит мостом между конфигурацией компонента и стандартными виртуальными DOM-нодами Vue.
 */
export class TabItemDesign<
  COMP extends TabItemComponents,
  EXPOSE extends TabItemExpose,
  CLASSES extends TabItemClasses,
  P extends TabItemPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    TabItemEmits,
    EXPOSE,
    TabItemSlots,
    CLASSES,
    P
  > {
  /** Main component instance / Основной экземпляр компонента */
  protected readonly item: TabItem

  /**
   * Constructor for TabItemDesign.
   *
   * Конструктор для TabItemDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor class for working with the item / класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, TabItemEmits, P>,
    ItemConstructor: typeof TabItem = TabItem
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
   * @returns exposed properties / экспортируемые свойства
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
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        label: this.getSubClass('label'),
        icon: this.getSubClass('icon'),
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
   * @returns rendered virtual node / отрендеренная виртуальная нода
   */
  protected initRender(): VNode {
    const children: any[] = [
      ...this.item.icon.render(),
      ...this.item.label.render(),
      ...this.item.badge.render(),
      ...this.item.ripple.render()
    ]

    return h(
      this.item.tag,
      {
        ...this.getAttrs(),
        class: this.classes?.value.main,
        ...this.item.binds
      },
      children
    )
  }
}
