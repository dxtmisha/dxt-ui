/**
 * Stop listening to events in depth.
 *
 * Остановить прослушивания события в глубину.
 * @param event event instance/ экземпляр события
 */
export function eventStopPropagation(event: Event): void {
  event.preventDefault()
  event.stopPropagation()
}
