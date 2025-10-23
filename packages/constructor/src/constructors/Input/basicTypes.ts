import type { ComputedRef, ShallowRef } from 'vue'
import type { ModelEmits } from '../../types/modelTypes'
import type { FieldValidationItem } from '../../types/fieldTypes'

export type InputType
  = 'text'
    | 'search'
    | 'number'
    | 'number-format'
    | 'currency'
    | 'email'
    | 'password'
    | 'datetime'
    | 'date'
    | 'year-month'
    | 'time'
    | 'hour-minute'
    | 'tel'
    | 'url'
    | 'checkbox'
    | 'radio'

export type InputMode
  = 'none'
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'email'
    | 'url'

export type InputEmitsInclude<T = string>
  = ModelEmits
    & {
      input: [
      event: InputEvent | Event,
      value: FieldValidationItem<T>
      ]
      inputLite: [value: FieldValidationItem<T>]
      change: [
      event: InputEvent | Event,
      value: FieldValidationItem<T>
      ]
      changeLite: [value: FieldValidationItem<T>]
    }

export type InputExposeInclude<T = string> = {
  value: ShallowRef<T | undefined>

  checkValidity: () => boolean
  validationMessage: ComputedRef<string>
}
