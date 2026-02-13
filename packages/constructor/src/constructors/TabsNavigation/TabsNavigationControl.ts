import { EventItem } from '@dxtmisha/functional'

export class TabsNavigationControl {
  protected event?: EventItem<HTMLElement, any>

  constructor() {
  }

  /**
   * Handler for the focus event.
   *
   * Обработчик события фокуса.
   */
  readonly onFocus = () => {
    this.start()
  }

  /**
   * Handler for the blur event.
   *
   * Обработчик события потери фокуса.
   */
  readonly onBlur = () => {
    this.stop()
  }
}
