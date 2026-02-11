import { isInput } from './isInput'

/**
 * Checks if the pressed key is Enter or Space.
 *
 * Проверяет, является ли нажатая клавиша Enter или Space.
 * @param event event object/ объект события
 * @param isInputElement whether the element is an input element/ является ли элемент полем ввода
 */
export const isEnter = (
  event: KeyboardEvent,
  isInputElement?: boolean
): boolean => {
  const isEnter = event.code === 'Space'
    || event.code === 'Enter'
    || event.key === ' '
    || event.key === 'Spacebar'
    || event.key === 'Enter'
    || event.keyCode === 13
    || event.keyCode === 32

  if (!isEnter) {
    return false
  }

  if (isInputElement !== undefined) {
    return !isInputElement
  }

  return !isInput(event.target)
}
