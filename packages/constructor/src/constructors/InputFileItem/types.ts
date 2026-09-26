import type { ConstrClass } from '@dxtmisha/functional'
import type { ButtonComponentInclude } from '../Button'
import type { IconComponentInclude } from '../Icon'
import type { ImageComponentInclude } from '../Image'
import type { ProgressComponentInclude } from '../Progress'
import type { RippleComponentInclude } from '../Ripple'
import type { SkeletonComponentInclude } from '../Skeleton'

import type { InputFileItemData, InputFileItemStatusType } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputFileItemComponents
  = ButtonComponentInclude
    & IconComponentInclude
    & ImageComponentInclude
    & ProgressComponentInclude
    & RippleComponentInclude
    & SkeletonComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type InputFileItemEmits = {
  /** Click event / Событие клика */
  click: [event: MouseEvent]
  /** Delete event / Событие удаления */
  delete: [file?: File | InputFileItemData]
  /** Retry event / Событие повтора */
  retry: [file?: File | InputFileItemData]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface InputFileItemExpose {
  /** File instance / Экземпляр файла */
  file?: File
  /** Current status / Текущий статус */
  status: InputFileItemStatusType
  /** Trigger delete action / Вызов действия удаления */
  delete: () => void
  /** Trigger retry action / Вызов действия повтора */
  retry: () => void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface InputFileItemSlots {
  /** Default slot / Слот по умолчанию */
  default?(props: any): any
  /** Thumbnail slot / Слот миниатюры */
  thumbnail?(props: any): any
  /** Label slot / Слот метки */
  label?(props: any): any
  /** Caption slot / Слот подписи */
  caption?(props: any): any
  /** Status indicator slot / Слот индикатора статуса */
  status?(props: any): any
  /** Actions slot / Слот действий */
  actions?(props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type InputFileItemClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  thumbnail: string
  thumbnailImage: string
  thumbnailPlaceholder: string
  body: string
  label: string
  caption: string
  message: string
  progress: string
  status: string
  actions: string
  buttonDelete: string
  buttonRetry: string
  // :classes [!] System label / Системная метка
}
