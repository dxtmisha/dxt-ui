import { isAutofillElement } from './isAutofillElement'
import type { ElementOrString } from '../types/basicTypes'

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
  if (!event) {
    return false
  }

  const inputType = 'inputType' in event && typeof event.inputType === 'string'
    ? event.inputType
    : ''

  if (
    inputType === 'insertReplacementText'
    || !inputType
  ) {
    return true
  }

  return isAutofillElement(elementSelectors ?? (event.target as ElementOrString<E> | null))
}
