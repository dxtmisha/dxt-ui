/**
 * Checks if a key event contains active modifier/meta keys.
 *
 * Проверяет, содержит ли событие клавиши активные клавиши-модификаторы.
 * @param event event object / объект события
 * @returns true if modifier key pressed / true, если нажата клавиша-модификатор
 */
export const isMetaKey = (event: KeyboardEvent): boolean => {
  return Boolean(event.metaKey || event.altKey || event.ctrlKey)
}
