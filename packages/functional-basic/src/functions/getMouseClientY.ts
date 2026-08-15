/**
 * Returns the position of the mouse cursor or the location of the click (Y).
 *
 * Возвращает позицию курсора мыши или место нажатия (Y).
 * @param event event object/ объект события
 * @returns Y coordinate / координата Y
 */
export function getMouseClientY(event: MouseEvent | TouchEvent): number {
  if ('clientY' in event) {
    return event.clientY
  }

  return event?.targetTouches?.[0]?.clientY
    || event?.touches?.[0]?.clientY
    || 0
}
