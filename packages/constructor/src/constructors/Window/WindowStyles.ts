import { watch } from 'vue'

import { WindowElement } from './WindowElement'
import { WindowCoordinates } from './WindowCoordinates'
import { WindowPosition } from './WindowPosition'
import { WindowOrigin } from './WindowOrigin'

/**
 * Style management class.
 *
 * Класс управления стилями.
 */
export class WindowStyles {
  /**
   * Constructor
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   * @param coordinates object for working with coordinates/ объект для работы с координатами
   * @param position object for working with the position of the element/ объект для работы с положением элемента
   * @param origin the object for work is in the initial position upon opening/ объект для работы в начальной позиции при открытии
   * @param className class name/ название класса
   */
  constructor(
    protected readonly element: WindowElement,
    protected readonly coordinates: WindowCoordinates,
    protected readonly position: WindowPosition,
    protected readonly origin: WindowOrigin,
    protected readonly className: string
  ) {
    watch(this.element.element, () => this.update())
  }

  /**
   * Data update.
   *
   * Обновление данных.
   */
  update(): void {
    const element = this.element.getMain()

    if (element) {
      element.style.setProperty(`--${this.className}-sys-inset-x`, this.position.getStyleX())
      element.style.setProperty(`--${this.className}-sys-inset-y`, this.position.getStyleY())
      element.style.setProperty(`--${this.className}-origin-x`, this.origin.getStyleX())
      element.style.setProperty(`--${this.className}-origin-y`, this.origin.getStyleY())
      element.style.setProperty(`--${this.className}-sys-control-width`, `${this.coordinates.getControlWidth()}px`)
      element.style.setProperty(`--${this.className}-sys-control-height`, `${this.coordinates.getControlHeight()}px`)
      element.style.setProperty(`--${this.className}-sys-location`, this.coordinates.getLocation())
    }
  }

  /**
   * Updates the window type (menu or modal).
   *
   * Обновляет тип окна (меню или модальное).
   * @param isMenu whether the window is a menu/ является ли окно меню
   */
  updateType(isMenu: boolean): void {
    const element = this.element.getMain()

    if (
      element && (
        (isMenu && (element.dataset.windowMenu !== 'menu'))
        || (!isMenu && (element.dataset.windowMenu === 'menu'))
      )
    ) {
      const teleportElement = element.parentElement

      element.dataset.windowMenu = isMenu ? 'menu' : 'modal'

      if (
        teleportElement
        && teleportElement.dataset.windowTeleport
      ) {
        teleportElement.dataset.windowMenu = element.dataset.windowMenu
      }
    }
  }
}
