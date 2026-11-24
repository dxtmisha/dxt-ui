// ai-none

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
   * @param hide lazy getter returning object for working with hidden state / ленивый геттер, возвращающий объект для работы со скрытым состоянием
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly hide: () => AlertHide,
    protected readonly emits?: ConstrEmit<AlertEmits>
  ) {
  }

  /**
   * Events on close button click.
   *
   * События при нажатии на закрытие.
   */
  readonly onClose = (): void => {
    this.hide().setHide(true)
  }

  /**
   * Event of animation end when closing the alert.
   *
   * Событие окончания анимации при закрытии оповещения.
   * @param event native transition event / нативное событие перехода
   */
  readonly onTransition = (event: TransitionEvent): void => {
    const hide = this.hide()

    if (
      event.propertyName === 'opacity'
      && event.target === event.currentTarget
      && hide.isHide
      && !hide.destroy.value
    ) {
      hide.setDestroy(true)
      this.emits?.('close')
    }
  }
}
