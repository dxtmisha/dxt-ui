import type { ConstrBind } from '@dxtmisha/functional'

import type { IconPropsBasic } from '../Icon'
import type { FieldMessagePropsBasic } from '../FieldMessage'
import type { FieldLabelPropsBasic } from '../FieldLabel'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { ProgressPropsBasic } from '../Progress'

import type { FieldPropsBasic } from './props'
import type { FieldSlots } from './types'

/**
 * Control data passed to slots and subcomponents/
 * Данные управления, передаваемые в слоты и под-компоненты
 */
export type FieldControl = {
  /**
   * Unique element identifier for binding label and input/
   * Уникальный идентификатор элемента для связывания label и input
   */
  id: string
  /**
   * CSS classes for the visible input area/
   * CSS-классы для видимой зоны ввода
   */
  className: string
  /**
   * CSS classes for the hidden native input element/
   * CSS-классы для скрытого нативного элемента ввода
   */
  classHidden: string
}

/**
 * Interface for describing which components need to be connected for Field work/
 * Интерфейс для описания, какие компоненты надо подключить для работы Field
 */
export type FieldComponentInclude = {
  field: object
}

/**
 * Type describing available slots for Field/
 * Тип, описывающий доступные слоты для Field
 */
export interface FieldSlotsInclude extends Omit<FieldSlots, 'default'> {
}

/**
 * Properties that can be passed to FieldInclude/
 * Свойства, которые можно передать в FieldInclude
 */
export interface FieldPropsInclude<
  Icon extends IconPropsBasic = IconPropsBasic,
  Field extends FieldPropsBasic = FieldPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> extends Omit<
    FieldPropsBasic<Icon, FieldLabel, FieldMessage, FieldCounter, Progress>,
    // Status
    'disabledPrevious'
    | 'disabledNext'

    // Value
    | 'to'
    | 'value'
    | 'maxlength'

    // Style
    | 'cancelShow'
    | 'counter'
    | 'counterTemplate'
    | 'counterTop'
    | 'iconArrowLeft'
    | 'iconArrowRight'
    | 'iconPlus'
    | 'iconMinus'
    | 'iconClose'
  > {
  // Status
  focus?: boolean
  selected?: boolean
  readonly?: boolean
  disabled?: boolean

  // Style
  cancel?: 'auto' | 'always' | 'none'
  align?: 'center' | 'right' | 'left'
  fieldAttrs?: ConstrBind<Field>
}
