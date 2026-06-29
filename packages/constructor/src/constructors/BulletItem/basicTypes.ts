import type { ConstrBind } from '@dxtmisha/functional'
import type { BulletItemPropsBasic } from './props'

/** Type describing components for nested bullet items / Тип, описывающий компоненты для вложенных элементов списка */
export type BulletItemComponentInclude = {
  bulletItem?: object
}

/** Type describing properties for nested bullet items / Тип, описывающий свойства для вложенных элементов списка */
export type BulletItemPropsInclude<
  BulletItemProps extends BulletItemPropsBasic = BulletItemPropsBasic
> = {
  /** List of items / Список настроек элементов */
  list?: string[]

  /** Additional attributes for item component / Дополнительные атрибуты для компонента элемента */
  itemAttrs?: ConstrBind<BulletItemProps>
}
