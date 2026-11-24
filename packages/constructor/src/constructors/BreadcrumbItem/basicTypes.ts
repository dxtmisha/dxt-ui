import type { ConstrBind } from '@dxtmisha/functional'

import type { EventClickEmits } from '../../types/eventClickTypes'
import type { BreadcrumbItemProps } from './props'

/**
 * Interface describing components required by BreadcrumbItemInclude /
 * Интерфейс, описывающий компоненты, необходимые для работы BreadcrumbItemInclude
 */
export type BreadcrumbItemComponentInclude = {
  /** BreadcrumbItem component / Компонент BreadcrumbItem */
  breadcrumbItem?: object
}

/**
 * Emits forwarded by BreadcrumbItemInclude /
 * События, перенаправляемые BreadcrumbItemInclude
 */
export type BreadcrumbItemEmitsInclude = EventClickEmits

/**
 * Properties for including a list of BreadcrumbItem components /
 * Свойства для подключения списка компонентов BreadcrumbItem
 */
export type BreadcrumbItemPropsInclude<
  BreadcrumbItem extends BreadcrumbItemProps = BreadcrumbItemProps
> = {
  /** List of breadcrumb items / Список элементов хлебных крошек */
  list?: readonly ConstrBind<BreadcrumbItem>[]

  /** Shared attributes applied to every breadcrumb item / Общие атрибуты для каждого элемента хлебных крошек */
  itemAttrs?: ConstrBind<BreadcrumbItem>
}
