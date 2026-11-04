import { isInput } from './isInput'

/**
 * Checks if the pressed key is Enter or Space (WAI-ARIA action key) outside of text inputs.
 *
 * Проверяет, является ли нажатая клавиша Enter или Space (клавиша действия WAI-ARIA) вне полей ввода.
 * @param event keyboard event object / объект события клавиатуры
 * @param isInputElement whether the element is an input element / является ли элемент полем ввода
 * @returns true if Enter or Space is pressed / true, если нажат Enter или Space
 */
export function isEnter(
  event?: KeyboardEvent | Event | null,
  isInputElement?: boolean
): boolean {
  if (!event || (event as KeyboardEvent).isComposing) {
    return false
  }

  const keyboardEvent = event as KeyboardEvent
  const isEnterOrSpace = keyboardEvent.key === 'Enter'
    || keyboardEvent.key === ' '
    || keyboardEvent.key === 'Spacebar'
    || keyboardEvent.code === 'Enter'
    || keyboardEvent.code === 'NumpadEnter'
    || keyboardEvent.code === 'Space'
    || keyboardEvent.keyCode === 13
    || keyboardEvent.keyCode === 32

  if (!isEnterOrSpace) {
    return false
  }

  if (isInputElement !== undefined) {
    return !isInputElement
  }

  return !isInput(event.target)
}
