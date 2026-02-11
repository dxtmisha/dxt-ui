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
 * TabItemDesign
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
  protected readonly item: TabItem

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
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
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
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
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
    const children: any[] = [
      ...this.item.icon.render(),
      ...this.item.label.render(),
      ...this.item.badge.render(),
      ...this.item.ripple.render()
    ]

    return h('div', {
      ...this.getAttrs(),
      class: this.classes?.value.main
    }, children)
  }
}
