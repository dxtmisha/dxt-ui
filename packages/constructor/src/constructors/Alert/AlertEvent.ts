import { type ConstrEmit } from '@dxtmisha/functional'

import type { AlertHide } from './AlertHide'
import type { AlertEmits } from './types'

/**
 * Class for working with events.
 *
 * Класс для работы с событиями.
 */
export class AlertEvent {
  /**
   * Constructor
   * @param hide object for working with hidden state / объект для работы со скрытым состоянием
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly hide: AlertHide,
    protected readonly emits?: ConstrEmit<AlertEmits>
  ) {
  }

  /**
   * Events on close button click.
   *
   * События при нажатии на закрытие.
   */
  readonly onClose = (): void => {
    this.hide.setHide(true)
  }

  /**
   * Event of animation end when closing the window.
   *
   * Событие окончания анимации при закрытии окна.
   * @param event native transition event / native событие перехода
   */
  readonly onTransition = (event: TransitionEvent): void => {
    if (
      event.propertyName === 'opacity'
      && this.hide.isHide
    ) {
      this.hide.setDestroy(true)
      this.emits?.('close')
    }
  }
}
