import type { ConstrClass } from '@dxt-ui/functional'

import type { IconComponentInclude } from '../Icon'
import type { BadgeComponentInclude } from '../Badge'
import type { ProgressComponentInclude } from '../Progress'
import type { RippleComponentsInclude } from '../Ripple'

import type { LabelHighlightSlots } from '../../types/labelTypes'
import type { DescriptionSlots } from '../../types/descriptionTypes'
import type { PrefixSlots } from '../../types/prefixTypes'
import type { CaptionSlots } from '../../types/captionTypes'
import type { SuffixSlots } from '../../types/suffixTypes'
import type { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ListItemComponents
  = IconComponentInclude
    & BadgeComponentInclude
    & ProgressComponentInclude
    & RippleComponentsInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ListItemEmits = EventClickEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ListItemExpose extends EventClickExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ListItemSlots extends LabelHighlightSlots,
  DescriptionSlots,
  PrefixSlots,
  CaptionSlots,
  SuffixSlots {
  leading?(props: any): any

  trailing?(props: any): any

  body?(props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ListItemClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  body: string
  context: string
  label: string
  highlight: string
  prefix: string
  caption: string
  description: string
  icon: string
  trailing: string
  badge: string
  input: string
  // :classes [!] System label / Системная метка
}
