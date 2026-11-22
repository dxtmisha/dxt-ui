import { isAutofillElement } from './isAutofillElement'
import { isObject } from './isObject'
import { isString } from './isString'
import type { ElementOrString } from '../types/basicTypes'

/** Input event type dispatched on browser autofill replacement / Тип события ввода при автоподстановке браузера */
const AUTOFILL_INPUT_TYPE = 'insertReplacementText'

/**
 * Checks whether an input event represents browser autofill (`insertReplacementText`, missing `inputType`, or an autofilled element state).
 *
 * Проверяет, является ли событие ввода автозаполнением браузера (`insertReplacementText`, пустой `inputType` или состояние автозаполнения элемента).
 * @param event DOM event to inspect / проверяемое DOM-событие
 * @param elementSelectors optional element or selector; defaults to `event.target` / необязательный элемент или селектор; по умолчанию `event.target`
 * @returns true if event corresponds to browser autofill / true, если событие соответствует автозаполнению
 */
export function isAutofillEvent<E extends Element = HTMLElement>(
  event?: Event | null,
  elementSelectors?: ElementOrString<E> | null
): boolean {
  if (!isObject(event)) {
    return false
  }

  const inputType = 'inputType' in event && isString(event.inputType)
    ? event.inputType
    : ''

  if (
    inputType === AUTOFILL_INPUT_TYPE
    || !inputType
  ) {
    return true
  }

  return isAutofillElement(elementSelectors ?? (event.target as ElementOrString<E> | null))
}
