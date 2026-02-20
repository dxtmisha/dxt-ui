import { computed, type VNode } from 'vue'
import {
  type ConstrBind,
  type DesignComponents,
  getBind,
  getRef,
  type RefOrNormal,
  toBinds
} from '@dxtmisha/functional'

import type {
  TabsNavigationComponentInclude,
  TabsNavigationPropsInclude
} from './basicTypes'
import type { TabsNavigationSlots } from './types'
import type { TabsNavigationProps } from './props'

/**
 * The class returns data for working with the TabsNavigation component
 *
 * Класс возвращает данные для работы с компонентом TabsNavigation
 */
export class TabsNavigationInclude<
  Props extends TabsNavigationPropsInclude = TabsNavigationPropsInclude,
  PropsExtra extends ConstrBind<TabsNavigationProps> = ConstrBind<TabsNavigationProps>
> {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<TabsNavigationComponentInclude, Props>,
    protected readonly extra?: RefOrNormal<PropsExtra>,
    protected readonly index?: string
  ) {
  }

  /** Computed bindings for the tabsNavigation/ Вычисляемые привязки для tabsNavigation */
  readonly binds = computed<PropsExtra>(() => {
    return toBinds<PropsExtra>(
      getRef(this.extra),
      {
        class: `${this.className}__tabsNavigation`,
        itemAttrs: this.props.tabItemAttrs
      },
      getBind(this.props.tabs, 'list'),
      this.props.tabsNavigationAttrs
    )
  })

  /**
   * Render the TabsNavigation component with slots/
   * Рендер компонента TabsNavigation со слотами
   * @param slotsChildren slots passed to the tabsNavigation/ слоты, передаваемые tabsNavigation
   * @param attrs additional attributes/ дополнительные атрибуты
   */
  readonly render = (
    slotsChildren?: TabsNavigationSlots,
    attrs?: Record<string, any>
  ): VNode[] => {
    if (this.components) {
      return this.components.render(
        'tabsNavigation',
        {
          ...toBinds(
            attrs,
            this.binds.value
          )
        },
        slotsChildren as unknown as Record<string, any>,
        this.index
      )
    }

    return []
  }
}
