import type { ConstrClass } from '@dxtmisha/functional'

import type { ButtonComponentInclude } from '../Button'
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
export type MenuButtonComponents = MenuComponentInclude
  & ButtonComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type MenuButtonEmits = FieldBasicEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface MenuButtonExpose extends FieldBasicExpose, MenuExposeInclude {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface MenuButtonSlots extends MenuSlotInclude {
  /** Custom trigger button content slot / Пользовательский слот содержимого кнопки-триггера */
  default?(props: MenuControlItem): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type MenuButtonClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  label: string
  separator: string
  selected: string
  // :classes [!] System label / Системная метка
}
