import type { ConstrClass } from '@dxtmisha/functional'

import type { EventClickEmits } from '../../types/eventClickTypes'

import type { ListComponentInclude, ListSlots } from '../List'
import type { BarsComponentInclude, BarsEmitsInclude } from '../Bars'
import type { WindowComponentInclude, WindowEmitsInclude, WindowExposeInclude } from '../Window'
import type { ModelEmitsSelected } from '../../types/modelTypes'

import type { MenuControlBasic, MenuControlItem, MenuSlotInclude } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MenuComponents
  = ListComponentInclude
    & BarsComponentInclude
    & WindowComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type MenuEmits
  = BarsEmitsInclude
    & EventClickEmits
    & WindowEmitsInclude
    & ModelEmitsSelected
    & {
      clickSlot: [value?: string]
    }

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface MenuExpose extends WindowExposeInclude, MenuControlBasic {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export type MenuSlots
  = ListSlots
    & MenuSlotInclude
    & {
      /** Control slot for window management / Слот управления для управления окном */
      control?(props: MenuControlItem): any
    }

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type MenuClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  bars: string
  list: string
  // :classes [!] System label / Системная метка
}
