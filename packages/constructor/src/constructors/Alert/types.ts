import { type ConstrClass } from '@dxtmisha/functional'

import type { IconComponentInclude } from '../Icon'
import type { ButtonComponentInclude } from '../Button'
import type { AlertLinkComponentInclude, AlertLinkEmitsInclude } from '../AlertLink'
import type { ActionsComponentInclude, ActionsEmitsInclude } from '../Actions'
import type { EventClickEmits } from '../../types/eventClickTypes'
import type { LabelSlots } from '../../types/labelTypes'
import type { DescriptionSlots } from '../../types/descriptionTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type AlertComponents = IconComponentInclude
  & ButtonComponentInclude
  & ActionsComponentInclude
  & AlertLinkComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type AlertEmits = AlertLinkEmitsInclude
  & ActionsEmitsInclude
  & EventClickEmits
  & {
    /** Event triggered after the alert finishes its close transition / Событие, вызываемое после завершения анимации закрытия оповещения */
    close: []
  }

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface AlertExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface AlertSlots extends LabelSlots, DescriptionSlots {
  /** Trailing content slot / Слот содержимого правой (хвостовой) области */
  trailing?(props: any): any
  /** Body content slot / Слот основного содержимого тела оповещения */
  body?(props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type AlertClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  icon: string
  trailing: string
  context: string
  label: string
  description: string
  body: string
  button: string
  buttons: string
  buttonClose: string
  links: string
  linksItem: string
  actions: string
  // :classes [!] System label / Системная метка
}
