import type { ConstrBind, ConstrItem } from '@dxtmisha/functional'

import type { IconPropsBasic } from './props'

/**
 * Data returned when an icon is loaded/ Данные, возвращаемые при загрузке иконки
 */
export type IconEventLoad = {
  /** Whether the icon is active/ Активна ли иконка */
  isActive: boolean
  /** Binds for the main icon/ Привязки для основной иконки */
  iconBind: ConstrItem | undefined
  /** Binds for the active icon/ Привязки для активной иконки */
  iconActiveBind: ConstrItem | undefined
}

/**
 * Possible values for the icon/ Возможные значения для иконки
 */
export type IconValue<
  Icon extends IconPropsBasic = IconPropsBasic
> = string | ConstrBind<Icon> | null

/**
 * Interface for including an icon component/ Интерфейс для включения компонента иконки
 */
export type IconComponentInclude = {
  /** Icon component/ Компонент иконки */
  icon?: object
}

/**
 * Interface for including basic icon properties/ Интерфейс для включения базовых свойств иконки
 */
export type IconLitePropsInclude<
  Icon extends IconPropsBasic = IconPropsBasic
> = {
  // Values
  /** Icon property/ Свойство иконки */
  icon?: IconValue<Icon>
}

/**
 * Interface for including full icon properties/ Интерфейс для включения полных свойств иконки
 */
export type IconPropsInclude<
  Icon extends IconPropsBasic = IconPropsBasic
> = IconLitePropsInclude<Icon> & {
  // Status
  /** Icon selection state/ Состояние выбора иконки */
  selected?: boolean
  /** Icon rotation state/ Состояние поворота иконки */
  iconTurn?: boolean
  /** Icon visibility state/ Состояние видимости иконки */
  iconHide?: boolean

  // Style
  /** Icon direction state/ Состояние направления иконки */
  iconDir?: boolean
  /** Icon palette state/ Состояние палитры иконки */
  iconPalette?: boolean
  /** Additional attributes for the icon/ Дополнительные атрибуты для иконки */
  iconAttrs?: ConstrBind<Icon>
}

/**
 * Interface for including properties for the main and trailing icons/ Интерфейс для включения свойств для основной и хвостовой иконок
 */
export type IconTrailingPropsInclude<
  Icon extends IconPropsBasic = IconPropsBasic
> = IconPropsInclude<Icon> & {
  // Values
  /** Trailing icon property/ Свойство хвостовой иконки */
  iconTrailing?: IconValue<Icon>

  // Style
  /** Rotation of the trailing icon only/ Поворот только хвостовой иконки */
  iconTrailingTurnOnly?: boolean
  /** Direction of the trailing icon only/ Направление только хвостовой иконки */
  iconTrailingDirOnly?: boolean
  /** Palette of the trailing icon only/ Палитра только хвостовой иконки */
  iconTrailingPalette?: boolean
}
