import type { ConstrClass } from '@dxt-ui/functional'
import type { EventClickEmits } from '../../types/eventClickTypes'

import type { ListItemComponentInclude } from '../ListItem'
import type { ListGroupComponentInclude } from '../ListGroup'
import type { ListMenuComponentInclude } from '../ListMenu'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ListComponents
  = ListItemComponentInclude
    & ListGroupComponentInclude
    & ListMenuComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ListEmits
  = EventClickEmits
    & {
      close: []
    }

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ListExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export type ListSlots = Record<string, (props: any) => any>

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ListClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  space: string
  line: string
  subtitle: string
  html: string
  management: string
  group: string
  menu: string
  menuGroup: string
  // :classes [!] System label / Системная метка
}
