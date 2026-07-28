import type { ConstrBind } from '@dxtmisha/functional'
import type { NavigationItemPropsBasic } from './props'

/**
 * Interface for describing which components need to be connected for NavigationItem work/
 * Интерфейс для описания, какие компоненты надо подключить для работы NavigationItem
 */
export type NavigationItemComponentInclude = {
  /** Navigation item component configuration/ Конфигурация компонента элемента навигации */
  navigationItem?: object
}

/**
 * Props used to include and configure the NavigationItem component/
 * Свойства для подключения и настройки компонента NavigationItem
 */
export type NavigationItemPropsInclude<
  NavigationItem extends NavigationItemPropsBasic = NavigationItemPropsBasic
> = {
  /** Additional attributes for the NavigationItem component/ Дополнительные атрибуты для компонента NavigationItem */
  navigationItemAttrs?: ConstrBind<NavigationItem>
}
