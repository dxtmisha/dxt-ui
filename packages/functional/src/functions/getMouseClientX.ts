/**
 * Returns the position of the mouse cursor or the location of the click (X).
 *
 * Возвращает позицию курсора мыши или место нажатия (X).
 * @param event event object/ объект события
 */
export function getMouseClientX(event: MouseEvent & TouchEvent): number {
  return event?.clientX || event?.targetTouches?.[0].clientX || event?.touches?.[0].clientX || 0
}
