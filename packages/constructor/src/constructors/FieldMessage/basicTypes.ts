import type { ConstrBind } from '@dxtmisha/functional'

import type { FieldMessagePropsBasic } from './props'
import type {
  FieldCounterPropsBasic,
  FieldCounterPropsInclude
} from '../FieldCounter'

/**
 * Type describing available slots/ Тип, описывающий доступные слоты
 */
export type FieldMessageSlot = {
  /** Current message/ Текущее сообщение */
  message?: string
  /** Helper message/ Вспомогательное сообщение */
  helperMessage?: string
  /** Validation message/ Сообщение валидации */
  validationMessage?: string
}

/**
 * Interface for describing which components need to be connected for FieldMessage work/
 * Интерфейс для описания, какие компоненты надо подключить для работы FieldMessage
 */
export type FieldMessageComponentInclude = {
  /** FieldMessage component configuration/ Конфигурация компонента сообщения поля */
  fieldMessage?: object
}

/**
 * Properties that can be passed to FieldMessageInclude/
 * Свойства, которые можно передать в FieldMessageInclude
 */
export interface FieldMessagePropsInclude<
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic
> extends FieldCounterPropsInclude<FieldCounter> {
  /** Whether to force show the message/ Принудительно ли показывать сообщение */
  forceShowMessage?: boolean
  /** Whether the field is disabled/ Отключено ли поле */
  disabled?: boolean
  /** Helper message text/ Текст вспомогательного сообщения */
  helperMessage?: string
  /** Validation message text/ Текст сообщения валидации */
  validationMessage?: string
  /** Additional attributes for the FieldMessage component/ Дополнительные атрибуты для компонента сообщения поля */
  fieldMessageAttrs?: ConstrBind<FieldMessage>
  /** Unique ID for the helper message/ Уникальный идентификатор вспомогательного сообщения */
  helperId?: string
  /** Unique ID for the validation message/ Уникальный идентификатор сообщения валидации */
  validationId?: string
}
