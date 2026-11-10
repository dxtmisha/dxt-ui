// ai-none

import { isDomRuntime } from '@dxtmisha/functional'

import { WindowClient } from './WindowClient'
import { WindowElement } from './WindowElement'
import { WindowPosition } from './WindowPosition'

import { __WINDOW_TYPE_BODY_NAME } from './basicTypes'

/**
 * Class for defining the initial position for the animation.
 *
 * Класс для определения начального положения для анимации.
 */
export class WindowOrigin {
  protected x: number | null = null
  protected y: number | null = null

  /**
   * Constructor.
   *
   * Конструктор.
   * @param client function returning client coordinates manager / функция, возвращающая менеджер клиентских координат
   * @param element function returning element manager / функция, возвращающая менеджер элементов
   * @param position function returning position manager / функция, возвращающая менеджер позиции
   */
  constructor(
    protected readonly client: () => WindowClient,
    protected readonly element: () => WindowElement,
    protected readonly position: () => WindowPosition
  ) {
  }

  /**
   * Returns the initial X point for the start of the animation.
   *
   * Возвращает начальную точку X для начала анимации.
   * @returns initial X coordinate string with px or null / строка начальной координаты X с px или null
   */
  getStyleX(): string | null {
    return this.x !== null ? `${this.x}px` : null
  }

  /**
   * Returns the initial Y point for the start of the animation.
   *
   * Возвращает начальную точку Y для начала анимации.
   * @returns initial Y coordinate string with px or null / строка начальной координаты Y с px или null
   */
  getStyleY(): string | null {
    return this.y !== null ? `${this.y}px` : null
  }

  /**
   * Updating the initial position of the element for the animation.
   *
   * Обновление начального положения элемента для анимации.
   * @returns this instance / текущий экземпляр
   */
  update(): this {
    const element = this.element().getMain()

    this.client().update()

    if (!this.client().is()) {
      this.x = 0
      this.y = 0
    } else if (
      isDomRuntime()
      && element
      && getComputedStyle(element)
        .getPropertyValue(__WINDOW_TYPE_BODY_NAME)
        .includes('--MENU--')
    ) {
      const rect = this.element().getBodyRect()

      if (rect) {
        this.x = this.client().getShiftX(rect.left)
        this.y = this.client().getShiftY(rect.top)
      }
    } else {
      this.x = this.client().getShiftX(this.position().getX())
      this.y = this.client().getShiftY(this.position().getY())
    }

    return this
  }

  /**
   * Resets all data to initial values.
   *
   * Сбрасывает все данные к начальным значениям.
   * @returns this instance / текущий экземпляр
   */
  reset(): this {
    this.x = null
    this.y = null

    return this
  }
}
