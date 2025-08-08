import { WindowClasses } from './WindowClasses'

import type { WindowProps } from './props'
import { WindowStatusItem } from './basicTypes.ts'

/**
 * The class for working with the flash parameter. The flash property is
 * responsible for disabling the animation when opening the window. Also,
 * the animation is disabled when there are already open windows.
 *
 * Класс для работы с параметром flash. Свойство flash отвечает за отключение
 * анимации при открытии окна. А также отключается анимация, когда уже есть
 * открытые окна.
 */
export class WindowFlash {
  protected control: boolean = false

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
   */

  constructor(
    protected readonly props: WindowProps,
    protected readonly classes: WindowClasses
  ) {
  }

  /**
   * Is the flash property active.
   *
   * Активно ли свойство flash.
   */
  is(): boolean {
    return Boolean(this.props.flash)
  }

  /**
   * Checks whether the animation needs to be disabled.
   *
   * Проверяет, надо ли отключить анимацию.
   */
  isOpen(): boolean {
    return this.is() || this.control
  }

  /**
   * Checks whether the animation needs to be disabled when closing.
   *
   * Проверяет, надо ли отключить анимацию при закрытии.
   */
  isClose(): boolean {
    return this.is()
      || Boolean(
        document.querySelector(`.${this.classes.getClassStatus(WindowStatusItem.hide)}`)
      )
  }

  /**
   * Change the value of the control parameter.
   *
   * Изменить значение параметра control.
   * @param target the element that gets focus on click/ элемент, который получает фокус при клике
   */
  setControl(target?: HTMLElement): this {
    this.control = target?.closest<HTMLElement>(`.${this.classes.list.control}`)?.dataset.window === this.classes.getId()
    return this
  }
}
