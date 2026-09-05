import type { ConstrClass } from '@dxtmisha/functional'

import type { ModelEmits } from '../../types/modelTypes'
import type { FormElementsData, FormElementsValues } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type FormComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type FormEmits = ModelEmits & {
  /** Form input event / Событие ввода формы */
  input: [
    event: InputEvent,
    data: FormElementsData,
    values: FormElementsValues
  ]
  /** Form input event (lite version) / Событие ввода формы (упрощенная версия) */
  inputLite: [
    data: FormElementsData,
    values: FormElementsValues
  ]
  /** Form input values event / Событие значений ввода формы */
  inputValues: [
    values: FormElementsValues
  ]
  /** Form change event / Событие изменения формы */
  change: [
    event: InputEvent,
    data: FormElementsData,
    values: FormElementsValues
  ]
  /** Form change event (lite version) / Событие изменения формы (упрощенная версия) */
  changeLite: [
    data: FormElementsData,
    values: FormElementsValues
  ]
  /** Form change values event / Событие значений изменения формы */
  changeValues: [
    values: FormElementsValues
  ]
  /** Form reset event / Событие сброса формы */
  reset: [event: Event]
  /** Form submission event / Событие отправки формы */
  submit: [event: SubmitEvent]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface FormExpose {
  /** Checks whether the form satisfies validation constraints / Проверяет, удовлетворяет ли форма ограничениям валидации */
  checkValidity(): boolean

  /** Returns the current form values / Возвращает текущие значения формы */
  getValues(): FormElementsValues

  /** Resets the form / Сбрасывает форму */
  reset(): void

  /** Sets the value of a form field / Устанавливает значение поля формы */
  set(name: string, value: any): void

  /** Sets multiple values of form fields / Устанавливает несколько значений полей формы */
  setValues(values: FormElementsValues): void

  /** Sets values for all form fields and clears omitted fields / Устанавливает значения для всех полей формы и очищает неуказанные */
  setValuesAll(values: FormElementsValues): void

  /** Submits the form / Отправляет форму */
  submit(): void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface FormSlots {
  /**
   * Header slot for form title or top controls /
   * Слот заголовка для названия формы или верхних элементов управления
   */
  header?(props: any): any

  /**
   * Default slot for form content and input elements /
   * Основной слот для содержимого формы и элементов ввода
   */
  default?(props: any): any

  /**
   * Footer slot for form actions and buttons /
   * Слот подвала для действий и кнопок формы
   */
  footer?(props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type FormClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
