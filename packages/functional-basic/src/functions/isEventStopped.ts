import { isObject } from './isObject'
import { eventStoppedList } from '../media/eventStoppedList'

/**
 * Checks whether an event has already been stopped via `eventStopPropagation` or `defaultPrevented`.
 *
 * Проверяет, было ли событие уже остановлено через `eventStopPropagation` или `defaultPrevented`.
 * @param event event instance / экземпляр события
 * @returns true if the event is stopped / true, если событие остановлено
 */
export function isEventStopped(event?: Event | null): boolean {
  return Boolean(
    isObject(event)
    && (event.defaultPrevented || eventStoppedList.has(event))
  )
}
