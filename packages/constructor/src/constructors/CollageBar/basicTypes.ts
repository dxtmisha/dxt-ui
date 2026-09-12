import type { ConstrBind } from '@dxtmisha/functional'
import type { DescriptionProps } from '../../types/descriptionTypes'
import type { EventClickProps } from '../../types/eventClickTypes'
import type { LabelProps } from '../../types/labelTypes'
import type { CollageBarProps, CollageBarPropsBasic } from './props'

/**
 * Type for including CollageBar component. /
 * Тип для подключения компонента CollageBar.
 */
export type CollageBarComponentInclude = {
  /** CollageBar component configuration / Конфигурация компонента CollageBar */
  collageBar?: object
}

/**
 * Type for embedding CollageBar properties in other components. /
 * Тип для внедрения свойств CollageBar в другие компоненты.
 */
export type CollageBarPropsInclude<
  CollageBar extends CollageBarPropsBasic = CollageBarPropsBasic
> = LabelProps
  & DescriptionProps
  & EventClickProps
  & {
    /** CollageBar position / Позиция панели */
    collageBarPosition?: CollageBarProps['position']

    /** Bound attributes passed directly to the CollageBar component / Атрибуты, передаваемые напрямую в компонент CollageBar */
    collageBarAttrs?: ConstrBind<CollageBar>
  }
