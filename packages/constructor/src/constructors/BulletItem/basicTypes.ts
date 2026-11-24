import type { ConstrBind, NumberOrString } from '@dxtmisha/functional'
import type { BulletItemPropsBasic } from './props'

/** Type describing components for nested bullet items / Тип, описывающий компоненты для вложенных элементов списка */
export type BulletItemComponentInclude = {
  /** BulletItem component / Компонент BulletItem */
  bulletItem?: object
}

/** Type describing properties for nested bullet items / Тип, описывающий свойства для вложенных элементов списка */
export type BulletItemPropsInclude<
  BulletItemProps extends BulletItemPropsBasic = BulletItemPropsBasic
> = {
  /** List of item descriptions / Список описаний элементов */
  list?: readonly NumberOrString[]

  /** Shared attributes for item component / Общие атрибуты для компонента элемента */
  itemAttrs?: ConstrBind<BulletItemProps>
}
