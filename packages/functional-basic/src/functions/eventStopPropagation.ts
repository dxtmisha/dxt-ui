/**
 * Stops event propagation and prevents its default action.
 *
 * Останавливает дальнейшее всплытие события и отменяет его действие по умолчанию.
 * @param event event instance / экземпляр события
 */
export function eventStopPropagation(event?: Event | null): void {
  event?.preventDefault()
  event?.stopPropagation()
}
