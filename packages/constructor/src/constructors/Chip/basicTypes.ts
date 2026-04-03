import type { ConstrBind } from '@dxtmisha/functional'
import type { ChipPropsBasic } from './props'

/**
 * Component map for including the Chip component/
 * Карта компонентов для подключения компонента Chip
 */
export type ChipComponentInclude = {
  /** Chip component configuration/ Конфигурация компонента чипа */
  chip?: object
}

/**
 * Props used to include and configure the Chip component/
 * Свойства для подключения и настройки компонента Chip
 */
export type ChipPropsInclude<
  Chip extends ChipPropsBasic = ChipPropsBasic
> = {
  /** Additional attributes for the Chip component/ Дополнительные атрибуты для компонента Chip */
  chipAttrs?: ConstrBind<Chip>
}
