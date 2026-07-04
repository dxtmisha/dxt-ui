import type { ConstrClass } from '@dxtmisha/functional'

import type { ModelEmits } from '../../types/modelTypes'

import type { FieldLabelComponentInclude } from '../FieldLabel'
import type { FieldMessageComponentInclude } from '../FieldMessage'
import type { InputCodeItemComponentInclude } from '../InputCodeItem'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputCodeComponents
  = InputCodeItemComponentInclude
    & FieldLabelComponentInclude
    & FieldMessageComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type InputCodeEmits
  = ModelEmits
    & {
      /** Event triggered on value change / Событие, вызываемое при изменении значения */
      input: [value: string]
    }

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface InputCodeExpose {
  /**
   * Returns the current value.
   *
   * Возвращает текущее значение.
   */
  getValue(): string
  /**
   * Set new value.
   *
   * Установить новое значение.
   * @param value new value / новое значение
   */
  set(value: string | number): void
  /**
   * Reset value.
   *
   * Сбросить значение.
   */
  reset(): void
  /**
   * Set focus.
   *
   * Установить фокус.
   */
  focus(): void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface InputCodeSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type InputCodeClasses = {
  /** Main class name / Основное имя класса */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  context: string
  // :classes [!] System label / Системная метка
}
