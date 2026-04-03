import type { ComputedRef } from 'vue'
import type { ConstrClass } from '@dxtmisha/functional'
import type { FieldValidationItem } from '../../types/fieldTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MaskComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type MaskEmits = {
  /** Event triggered on focus/ Событие при фокусе */
  focus: [event: FocusEvent]
  /** Event triggered on blur/ Событие при потере фокуса */
  blur: [event: FocusEvent]
  /** Event triggered on key down/ Событие при нажатии клавиши */
  keydown: [event: KeyboardEvent]
  /** Event triggered on key up/ Событие при отпускании клавиши */
  keyup: [event: KeyboardEvent]
  /** Event triggered before input/ Событие перед вводом */
  beforeinput: [event: InputEvent]
  /** Event triggered on input/ Событие при вводе */
  input: [
    event: InputEvent,
    value: FieldValidationItem
  ]
  /** Event triggered on simplified input/ Событие при упрощенном вводе */
  inputLite: [value: FieldValidationItem]
  /** Event triggered on change/ Событие при изменении */
  change: [
    event: InputEvent,
    value: FieldValidationItem
  ]
  /** Event triggered on simplified change/ Событие при упрощенном изменении */
  changeLite: [value: FieldValidationItem]
  /** Event triggered on paste/ Событие при вставке */
  paste: [event: ClipboardEvent]
  /** Event triggered on reset/ Событие при сбросе */
  reset: [event: Event]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface MaskExpose {
  /** The raw, unformatted value/ Неотформатированное («базовое») значение */
  valueBasic: ComputedRef<string>
  /** The current formatted value/ Текущее отформатированное значение */
  value: ComputedRef<string>

  /** Sets a new value/ Устанавливает новое значение */
  setValue(value: string): boolean

  /** Clears the current value/ Очищает текущее значение */
  clear(): boolean
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface MaskSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type MaskClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  input: string
  character: string
  characterItem: string
  // :classes [!] System label / Системная метка
}
