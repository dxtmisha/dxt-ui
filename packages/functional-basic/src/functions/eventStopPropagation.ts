import { isObject } from './isObject'
import { eventStoppedList } from '../media/eventStoppedList'

/**
 * Stops event propagation, prevents its default action, and marks the event as stopped.
 *
 * Останавливает дальнейшее всплытие события, отменяет его действие по умолчанию и помечает событие как остановленное.
 * @param event event instance / экземпляр события
 */
export function eventStopPropagation(event?: Event | null): void {
  event?.preventDefault()
  event?.stopPropagation()

  if (isObject(event)) {
    eventStoppedList.add(event)
  }
}
