/**
 * Returns the pressed key.
 *
 * Возвращает нажатую клавишу.
 * @param event event object/ объект события
 */
export function getKey(event: KeyboardEvent): string {
  return event?.key ?? event?.code ?? event?.keyCode?.toString()
}
