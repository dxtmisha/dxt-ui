import type { ConstrClass } from '@dxtmisha/functional'
import type { ButtonComponentInclude } from '../Button'
import type { CropAreaCoordinator } from '../CropArea'
import type { DialogComponentInclude } from '../Dialog'
import type { IconComponentInclude } from '../Icon'
import type { ImageComponentInclude } from '../Image'
import type { ImageCropComponentInclude } from '../ImageCrop'
import type { ProgressComponentInclude } from '../Progress'

import type { FieldFileValue } from '../../types/fieldTypes'
import type { InputFileItemStatusType } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputFileItemComponents
  = ButtonComponentInclude
    & DialogComponentInclude
    & IconComponentInclude
    & ImageComponentInclude
    & ImageCropComponentInclude
    & ProgressComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type InputFileItemEmits = {
  /** Crop event / Событие кадрирования */
  crop: [file?: FieldFileValue]
  /** Delete event / Событие удаления */
  delete: [file?: FieldFileValue]
  /** Retry event / Событие повтора */
  retry: [file?: FieldFileValue]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface InputFileItemExpose {
  /** File instance / Экземпляр файла */
  getFile: () => File | undefined
  /** Current status / Текущий статус */
  getStatus: () => InputFileItemStatusType
  /** Current crop coordinates / Текущие координаты кадрирования */
  getCrop: () => CropAreaCoordinator | undefined
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
  body: string
  label: string
  caption: string
  progress: string
  actions: string
  buttonCrop: string
  buttonDelete: string
  buttonRetry: string
  // :classes [!] System label / Системная метка
}
