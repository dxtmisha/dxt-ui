import { h, mergeProps, type VNode } from 'vue'
import type { ConstrOptions, ListDataItem } from '@dxtmisha/functional'

import { ListDesign } from '../List'
import { NavigationList } from './NavigationList'

import type { ListGroupSlotsPropsInclude } from '../ListGroup'
import type { WindowControlItem } from '../Window'
import {
  type NavigationListPropsBasic
} from './props'
import {
  type NavigationListClasses,
  type NavigationListComponents,
  type NavigationListEmits,
  type NavigationListExpose
} from './types'

/**
 * Design constructor class for NavigationList component, rendering navigation list containers and applying visual layout styles.
 * Inherits all list container rendering functionality from ListDesign.
 *
 * Дизайн-класс конструктора для компонента NavigationList, выполняющий рендеринг контейнеров списка навигации и применение визуальных стилей макета.
 * Наследует всю функциональность рендеринга контейнера списка от ListDesign.
 */
export class NavigationListDesign<
  COMP extends NavigationListComponents,
  EXPOSE extends NavigationListExpose,
  CLASSES extends NavigationListClasses,
  P extends NavigationListPropsBasic
> extends ListDesign<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
  /** NavigationList logic orchestrator instance / Экземпляр логического оркестратора NavigationList */
  protected declare readonly item: NavigationList

  /**
   * Constructor
   *
   * Конструктор
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor item constructor class / класс конструктора элемента
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, NavigationListEmits, P>,
    ItemConstructor: typeof NavigationList = NavigationList
  ) {
    super(
      name,
      props,
      options,
      ItemConstructor
    )
  }

  /**
   * Renders the navigation list root container with centralized bindings and ARIA attributes.
   *
   * Выполняет рендеринг корневого контейнера навигационного списка с централизованными привязками и ARIA-атрибутами.
   * @returns component virtual node / виртуальный узел компонента
   */
  protected override initRender(): VNode {
    return h(
      'div',
      mergeProps(
        this.getAttrs(),
        this.item.binds,
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      [
        ...this.renderFilterInput(),
        ...this.renderData()
      ]
    )
  }

  /**
   * Generates a group of navigation items, propagating list disabled state.
   *
   * Генерирует группу навигационных элементов с учетом состояния отключения списка.
   * @param item selected element / выбранный элемент
   * @returns group virtual node or undefined / виртуальный узел группы или undefined
   */
  override readonly renderGroup = (item: ListDataItem): VNode | undefined => {
    return this.components?.renderOne(
      'listGroup',
      {
        open: this.item.isOpenGroup(item),
        divider: this.props.divider,
        disabled: Boolean(this.props.disabled || item.disabled)
      },
      {
        head: (props: ListGroupSlotsPropsInclude) => this.renderItemGroup(item, props),
        list: () => this.renderDataByItem('group', this.item.getList(item))
      }
    )
  }

  /**
   * Generates a menu of navigation items, propagating list disabled state.
   *
   * Генерирует меню навигационных элементов с учетом состояния отключения списка.
   * @param item selected element / выбранный элемент
   * @param first is the first element / является ли первым элементом
   * @returns menu virtual node or undefined / виртуальный узел меню или undefined
   */
  override readonly renderMenu = (item: ListDataItem, first: boolean): VNode | undefined => {
    return this.components?.renderOne(
      'listMenu',
      {
        divider: this.props.divider,
        axis: first ? (this.props.axis === 'x' ? 'y' : 'x') : 'x',
        disabled: Boolean(this.props.disabled || item.disabled)
      },
      {
        head: (props: WindowControlItem) => this.renderItemMenu(item, props),
        list: () => this.renderDataByItem('menu', this.item.getList(item))
      }
    )
  }
}
