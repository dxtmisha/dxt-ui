import type { ConstrClass } from '@dxtmisha/functional'

import type { ChipComponentInclude } from '../Chip'
import type {
  MenuComponentInclude,
  MenuControlItem,
  MenuExposeInclude,
  MenuSlotInclude
} from '../Menu'

import type { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MenuChipComponents = MenuComponentInclude
  & ChipComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type MenuChipEmits = FieldBasicEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface MenuChipExpose extends FieldBasicExpose, MenuExposeInclude {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface MenuChipSlots extends MenuSlotInclude {
  /** Custom trigger chip content slot / Пользовательский слот содержимого чипа-триггера */
  default?(props: MenuControlItem): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type MenuChipClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  label: string
  separator: string
  selected: string
  // :classes [!] System label / Системная метка
}
