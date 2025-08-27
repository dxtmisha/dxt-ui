import type { ConstrClass } from '@dxt-ui/functional'
import type { EventClickEmits } from '../../types/eventClickTypes'

import type { ListGroupComponentInclude } from '../ListGroup/basicTypes'
import type { ListItemComponentInclude } from '../ListItem'
import type { MenuComponentInclude } from '../Menu/basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ListComponents
  = ListGroupComponentInclude
    & ListItemComponentInclude
    & MenuComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ListEmits = EventClickEmits

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
  group: string
  menu: string
  menuGroup: string
  // :classes [!] System label / Системная метка
}
