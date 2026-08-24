import type { ConstrClass } from '@dxtmisha/functional'

import type { ImageCropComponentInclude } from '../ImageCrop'
import type { FieldLabelComponentInclude } from '../FieldLabel'
import type { FieldMessageComponentInclude } from '../FieldMessage'

import type { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes'
import type { LabelSlots } from '../../types/labelTypes'

import type { InputImageValue } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputImageComponents = ImageCropComponentInclude
  & FieldLabelComponentInclude
  & FieldMessageComponentInclude

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
  /** Opens the file selector dialog / Открывает диалог выбора файла */
  open: () => void

  /** Clears the image and crop coordinates / Очищает изображение и координаты кадрирования */
  clear: () => void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface InputImageSlots extends LabelSlots {
  /** Dropzone placeholder slot / Слот области загрузки */
  dropzone?: (props: any) => any
  /** Preview and crop slot / Слот предпросмотра и кадрирования */
  crop?: (props: any) => any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type InputImageClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  input: string
  body: string
  crop: string
  dropzone: string
  // :classes [!] System label / Системная метка
}
