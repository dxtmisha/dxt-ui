import type { ConstrEmit } from '@dxtmisha/functional'

import { WindowClasses } from './WindowClasses'
import { WindowElement } from './WindowElement'

import type { WindowEmits } from './types'
import type { WindowEmitOptions } from './basicTypes'

/**
 * Class triggering a click status change event.
 *
 * Класс, вызывающий событие изменения статуса клика.
 */
export class WindowEmit {
  /**
   * Constructor
   * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly classes: WindowClasses,
    protected readonly element: WindowElement,
    protected readonly emits?: ConstrEmit<WindowEmits>
  ) {
  }

  /**
   * Perform events.
   *
   * Выполнить события.
   * @param open current state of the window/ текущее состояние окна
   */
  on(open: boolean) {
    this.emits?.('window', this.getEmitOptions(open))
  }

  /**
   * Returns an object for calling the event handler.
   *
   * Возвращает объект для вызова обработчика события.
   * @param open current state of the window/ текущее состояние окна
   */
  protected getEmitOptions(open: boolean): WindowEmitOptions {
    return {
      id: this.classes.getId(),
      element: this.element.getMain() as HTMLDivElement,
      control: this.element.getControl() as HTMLElement,
      open
    }
  }
}
