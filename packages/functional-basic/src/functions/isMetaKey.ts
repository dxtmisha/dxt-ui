/**
 * Checks if a key event contains active modifier/meta keys.
 *
 * Проверяет, содержит ли событие клавиши активные клавиши-модификаторы.
 * @param event event object / объект события
 * @returns true if modifier key pressed / true, если нажата клавиша-модификатор
 */
export function isMetaKey(
  event?: KeyboardEvent | MouseEvent | Event | null
): boolean {
  if (!event) {
    return false
  }

  const modifierEvent = event as KeyboardEvent
  return Boolean(modifierEvent.metaKey || modifierEvent.altKey || modifierEvent.ctrlKey)
}
