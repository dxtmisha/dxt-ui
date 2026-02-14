import { EventItem, isDomRuntime, ListDataRef } from '@dxtmisha/functional'

import { TabsNavigationSelected } from './TabsNavigationSelected'

export class TabsNavigationControl {
  protected event?: EventItem<HTMLElement, any>

  constructor(
    protected readonly data: ListDataRef,
    protected readonly selected: TabsNavigationSelected
  ) {
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

  /**
   * Starts the event.
   *
   * Запускает событие.
   */
  protected start() {
    if (isDomRuntime()) {
      if (!this.event) {
        this.event = new EventItem<HTMLElement, any>(
          document.body,
          ['keydown'],
          this.on
        )
      }

      this.go.reset()
      this.event.start()
    }
  }

  /**
   * Method for tracking keys when a window is open.
   *
   * Метод для отслеживания нажатий при открытом окне.
   * @param event event object/ объект события
   */
  protected readonly on = (event: KeyboardEvent) => {
    if (this.data.getLength()) {
      const key = event.code || event.key || (event as any).keyCode

      switch (key) {
        case 'ArrowLeft':
        case 'Left':
        case 37:
          event.preventDefault()
          this.selected.prev()
          break
        case 'ArrowRight':
        case 'Right':
        case 39:
          event.preventDefault()
          this.selected.next()
          break
        case 'Enter':
        case 13:
        case 'Space':
        case 'Spacebar':
        case ' ':
        case 32:
          event.preventDefault()
          this.selected.enter()
          break
      }
    }
  }
}
