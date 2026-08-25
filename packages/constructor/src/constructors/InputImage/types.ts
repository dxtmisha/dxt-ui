import type { ConstrClass } from '@dxtmisha/functional'

import type { ActionsComponentInclude } from '../Actions'
import type { DropzoneComponentInclude } from '../Dropzone'
import type { FieldLabelComponentInclude } from '../FieldLabel'
import type { FieldMessageComponentInclude } from '../FieldMessage'
import type { ImageCropComponentInclude } from '../ImageCrop'

import type { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes'
import type { LabelAlternativeSlots } from '../../types/labelTypes'

import type { InputImageValue } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputImageComponents = ActionsComponentInclude
  & DropzoneComponentInclude
  & FieldLabelComponentInclude
  & FieldMessageComponentInclude
  & ImageCropComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type InputImageEmits = FieldBasicEmits<InputImageValue>

/**
 * Type describing available properties for export.
 *
 * Тип, описывающий доступные свойства для экспорта.
 */
export interface InputImageExpose extends FieldBasicExpose<InputImageValue> {
  /** Opens the file selection dialog / Открывает диалог выбора файла */
  open: () => void
  /** Clears the image and crop / Очищает изображение и кадрирование */
  clear: () => void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface InputImageSlots extends LabelAlternativeSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type InputImageClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  body: string
  crop: string
  dropzone: string
  actions: string
  // :classes [!] System label / Системная метка
}
