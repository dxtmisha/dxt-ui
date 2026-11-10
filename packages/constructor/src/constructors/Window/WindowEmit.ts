// ai-none

import type { ConstrEmit } from '@dxtmisha/functional'

import type { WindowClassesData } from './WindowClassesData'
import type { WindowElement } from './WindowElement'

import type { WindowEmits } from './types'
import type { WindowEmitOptions } from './basicTypes'

/**
 * Class triggering a click status change event.
 *
 * Класс, вызывающий событие изменения статуса клика.
 */
export class WindowEmit {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param classes function returning class manager / функция, возвращающая менеджер классов
   * @param element function returning element manager / функция, возвращающая менеджер элементов
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly classes: () => WindowClassesData,
    protected readonly element: () => WindowElement,
    protected readonly emits?: ConstrEmit<WindowEmits>
  ) {
  }

  /**
   * Perform events.
   *
   * Выполнить события.
   * @param open current state of the window / текущее состояние окна
   */
  on(open: boolean): void {
    this.emits?.('window', this.getEmitOptions(open))
  }

  /**
   * Returns an object for calling the event handler.
   *
   * Возвращает объект для вызова обработчика события.
   * @param open current state of the window / текущее состояние окна
   */
  protected getEmitOptions(open: boolean): WindowEmitOptions {
    return {
      id: this.classes().getId(),
      element: this.element().getMain() as HTMLDivElement,
      control: this.element().getControl() as HTMLElement,
      open
    }
  }
}
