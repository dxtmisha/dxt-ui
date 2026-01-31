/**
 * Checks if the pressed key is Enter or Space.
 *
 * Проверяет, является ли нажатая клавиша Enter или Space.
 * @param event event object/ объект события
 */
export const isEnter = (event: KeyboardEvent): boolean => {
  return event.code === 'Space'
    || event.code === 'Enter'
    || event.key === ' '
    || event.key === 'Spacebar'
    || event.key === 'Enter'
    || event.keyCode === 13
    || event.keyCode === 32
}
