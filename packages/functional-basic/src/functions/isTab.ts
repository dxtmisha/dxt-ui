/**
 * Checks if the pressed key is Tab.
 *
 * Проверяет, является ли нажатая клавиша Tab.
 * @param event event object / объект события
 * @returns true if tab pressed / true, если нажат tab
 */
export function isTab(event?: KeyboardEvent | Event | null): boolean {
  if (!event) {
    return false
  }

  const keyboardEvent = event as KeyboardEvent
  return keyboardEvent.key === 'Tab'
    || keyboardEvent.code === 'Tab'
    || keyboardEvent.keyCode === 9
}
