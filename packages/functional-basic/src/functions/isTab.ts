/**
 * Checks if the pressed key is Tab.
 *
 * Проверяет, является ли нажатая клавиша Tab.
 * @param event - event object / объект события
 * @returns true if tab pressed / true, если нажат tab
 */
export const isTab = (event: KeyboardEvent): boolean => {
  return event.key === 'Tab'
    || event.code === 'Tab'
    || event.keyCode === 9
}
