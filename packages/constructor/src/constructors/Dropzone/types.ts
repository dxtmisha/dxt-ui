import type { ConstrClass } from '@dxtmisha/functional'

import type { DescriptionSlots } from '../../types/descriptionTypes'
import type { LabelSlots } from '../../types/labelTypes'
import type { ModelEmitsFiles } from '../../types/modelTypes'

import type { IconComponentInclude } from '../Icon'

import type { DropzoneEventParameters } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type DropzoneComponents = IconComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type DropzoneEmits = ModelEmitsFiles & {
  /** Triggered when files are dropped or selected / Срабатывает при сбросе или выборе файлов */
  drop: [event: DropzoneEventParameters]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface DropzoneExpose {
  /** Open file picker dialog / Открыть диалог выбора файлов */
  open: () => void
  /** Clear selected files / Очистить выбранные файлы */
  clear: () => void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface DropzoneSlots extends LabelSlots, DescriptionSlots {
  /** Default slot / Слот по умолчанию */
  default?: (props: any) => any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type DropzoneClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  input: string
  // :classes [!] System label / Системная метка
}
