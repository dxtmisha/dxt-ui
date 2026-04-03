import type { ConstrEmit } from '@dxtmisha/functional'

import type { SnackbarValue } from './basicTypes'
import type { SnackbarEmits } from './types'

/**
 * Class for managing events for the snackbar.
 *
 * Класс для управления событиями для снекбара.
 */
export class SnackbarEvent {
  /**
   * Constructor
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly emits?: ConstrEmit<SnackbarEmits>
  ) {
  }

  /**
   * Event for showing the message.
   *
   * Событие для показа сообщения.
   * @param value element identification / идентификация элемента
   * @param item message element / элемент сообщения
   */
  show(value: string, item: SnackbarValue): void {
    this.emits?.('show', value, item)
  }

  /**
   * Event for hiding the message.
   *
   * Событие для скрытия сообщения.
   * @param value element identification / идентификация элемента
   * @param item message element / элемент сообщения
   */
  hide(value: string, item: SnackbarValue): void {
    this.emits?.('hide', value, item)
  }
}
