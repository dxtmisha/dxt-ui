import { type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  type ListDataFullItem,
  toBinds
} from '@dxtmisha/functional'

import type { HorizontalScrollControlItem } from '../HorizontalScroll'
import type { TabItemPropsBasic } from '../TabItem'
import { TabsNavigation } from './TabsNavigation'

import {
  type TabsNavigationPropsBasic
} from './props'
import {
  type TabsNavigationClasses,
  type TabsNavigationComponents,
  type TabsNavigationEmits,
  type TabsNavigationExpose,
  type TabsNavigationSlots
} from './types'

/**
 * TabsNavigationDesign
 */
export class TabsNavigationDesign<
  COMP extends TabsNavigationComponents,
  EXPOSE extends TabsNavigationExpose,
  CLASSES extends TabsNavigationClasses,
  P extends TabsNavigationPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    TabsNavigationEmits,
    EXPOSE,
    TabsNavigationSlots,
    CLASSES,
    P
  > {
  protected readonly item: TabsNavigation

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
    options?: ConstrOptions<COMP, TabsNavigationEmits, P>,
    ItemConstructor: typeof TabsNavigation = TabsNavigation
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
  protected initRender(): VNode[] {
    return this.item.scroll.render(
      { default: this.renderList },
      {
        ...this.item.binds.value,
        class: this.classes?.value.main
      }
    )
  }

  protected readonly renderList = (
    props: HorizontalScrollControlItem
  ) => {
    const children: any[] = []

    this.item.data.fullData.value.forEach(
      item => children.push(
        this.renderItem(props, item)
      )
    )

    return children
  }

  /**
   * Generates an element.
   *
   * Генерирует элемент.
   * @param props data for the transferable property/ данные для передаваемого свойства
   * @param item selected element / выбранный элемент
   */
  protected readonly renderItem = (
    props: HorizontalScrollControlItem,
    item: ListDataFullItem<TabItemPropsBasic>
  ): VNode => {
    const isSelected = this.item.selected.isSelected(item.index)

    return this.components.renderOne(
      'tabItem',
      toBinds(
        {
          tag: this.props.tag,
          key: item.index
        },
        this.props.itemAttrs,
        item,
        props.binds,
        {
          onClick: this.item.onClick,
          class: {
            [props.classItemSelected]: isSelected
          },
          selected: isSelected
        }
      )
    ) as VNode
  }
}
