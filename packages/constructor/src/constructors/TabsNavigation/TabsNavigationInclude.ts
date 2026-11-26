import {
  type ConstrBind,
  getBind,
  getObjectNoUndefined
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type {
  TabsNavigationIdsList,
  TabsNavigationPropsInclude
} from './basicTypes'
import type { TabsNavigationExpose, TabsNavigationSlots } from './types'
import type { TabsNavigationProps } from './props'

/**
 * The class returns data for working with the TabsNavigation component.
 * It extends ComponentIncludeAbstract to manage state, binding, and rendering logic for tab navigation.
 *
 * Класс возвращает данные для работы с компонентом TabsNavigation.
 * Расширяет ComponentIncludeAbstract для управления состоянием, привязками и логикой рендеринга навигации вкладок.
 *
 * @template Props input parameters / входные параметры
 * @template PropsExtra additional parameters / дополнительные параметры
 */
export class TabsNavigationInclude<
  Props extends TabsNavigationPropsInclude = TabsNavigationPropsInclude,
  PropsExtra extends ConstrBind<TabsNavigationProps> = ConstrBind<TabsNavigationProps>
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    TabsNavigationExpose,
    TabsNavigationSlots,
    Partial<ConstrBind<TabsNavigationProps>>
  > {
  /** Sub-component name / Название субкомпонента */
  protected override readonly name = 'tabsNavigation'
  /** Name of the property containing component attributes / Название свойства, содержащего атрибуты компонента */
  protected override readonly propsAttrsName = 'tabsNavigationAttrs'

  /**
   * Checks whether tabs navigation properties are provided.
   *
   * Проверяет, переданы ли свойства навигации вкладок.
   * @param props input properties / входные свойства
   * @returns true if tabs or tabsNavigationAttrs are present / true, если указаны tabs или tabsNavigationAttrs
   */
  static is(props?: Readonly<TabsNavigationPropsInclude>): boolean {
    return Boolean(props?.tabs || props?.tabsNavigationAttrs)
  }

  /**
   * Getter returning list of generated IDs.
   *
   * Геттер, возвращающий список сгенерированных идентификаторов.
   * @returns map of item values to unique DOM IDs / карта значений элементов к уникальным DOM ID
   */
  get ids(): TabsNavigationIdsList {
    return this.element.value?.ids() ?? {}
  }

  /**
   * Resolves and returns dynamic properties for tabs navigation.
   *
   * Разрешает и возвращает динамические свойства для навигации вкладок.
   * @returns resolved properties or undefined / разрешенные свойства или undefined
   */
  protected override getExtra(): Partial<ConstrBind<TabsNavigationProps>> | undefined {
    return getBind(
      this.getProps().tabs,
      super.getExtra(),
      'list'
    ) as Partial<ConstrBind<TabsNavigationProps>> | undefined
  }

  /**
   * Builds and resolves all HTML attributes and classes for binding.
   *
   * Создает и разрешает все HTML-атрибуты и классы для привязки.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds(): Partial<ConstrBind<TabsNavigationProps>> {
    return {
      ...super.toBinds(),
      ...getObjectNoUndefined({
        itemAttrs: this.getProps().tabItemAttrs
      })
    }
  }
}
