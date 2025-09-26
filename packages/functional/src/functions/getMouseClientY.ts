/**
 * Returns the position of the mouse cursor or the location of the click (Y).
 *
 * Возвращает позицию курсора мыши или место нажатия (Y).
 * @param event event object/ объект события
 */
export function getMouseClientY(event: MouseEvent & TouchEvent): number {
  return event?.clientY || event?.targetTouches?.[0]?.clientY || event?.touches?.[0]?.clientY || 0
}
