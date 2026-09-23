import type { ConstrClass } from '@dxtmisha/functional'

import type { LabelAlternativeSlots } from '../../types/labelTypes'

import type { DropzoneComponentInclude } from '../Dropzone'
import type { FieldLabelComponentInclude } from '../FieldLabel'
import type { FieldMessageComponentInclude } from '../FieldMessage'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputFileDropzoneComponents
  = DropzoneComponentInclude
    & FieldLabelComponentInclude
    & FieldMessageComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type InputFileDropzoneEmits = {
  /** Event triggered when files are added / Событие при добавлении файлов */
  add: [files: File[]]
}

/**
 * Type describing available properties for export.
 *
 * Тип, описывающий доступные свойства для экспорта.
 */
export interface InputFileDropzoneExpose {
  /** Open file picker dialog / Открыть диалог выбора файла */
  open: () => void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface InputFileDropzoneSlots extends LabelAlternativeSlots {
  /** Default slot / Слот по умолчанию */
  default?: (props: any) => any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type InputFileDropzoneClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  body: string
  dropzone: string
  // :classes [!] System label / Системная метка
}
