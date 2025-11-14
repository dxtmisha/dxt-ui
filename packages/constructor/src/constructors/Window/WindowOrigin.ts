import { WindowClient } from './WindowClient'
import { WindowElement } from './WindowElement'
import { WindowPosition } from './WindowPosition'

/**
 * Class for defining the initial position for the animation.
 *
 * Класс для определения начального положения для анимации.
 */
export class WindowOrigin {
  protected x: number | null = null
  protected y: number | null = null

  /**
   * Constructor
   * @param client object for working with mouse pointer coordinates/ объект для работы с координатами указателя мыши
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   * @param position object for working with the position of the element/ объект для работы с положением элемента
   */
  constructor(
    protected readonly client: WindowClient,
    protected readonly element: WindowElement,
    protected readonly position: WindowPosition
  ) {
  }

  /**
   * Returns the initial X point for the start of the animation.
   *
   * Возвращает начальную точку X для начала анимации.
   */
  getStyleX(): string | null {
    return this.x !== null ? `${this.x}px` : null
  }

  /**
   * Returns the initial Y point for the start of the animation.
   *
   * Возвращает начальную точку Y для начала анимации.
   */
  getStyleY(): string | null {
    return this.y !== null ? `${this.y}px` : null
  }

  /**
   * Updating the initial position of the element for the animation.
   *
   * Обновление начального положения элемента для анимации.
   */
  update(): this {
    const element = this.element.getMain()

    this.client.update()

    if (!this.client.is()) {
      this.x = 0
      this.y = 0
    } else if (
      element
      && getComputedStyle(element).content !== '"--MENU--"'
    ) {
      const rect = this.element.getBodyRect()

      if (rect) {
        this.x = this.client.getShiftX(rect.left)
        this.y = this.client.getShiftY(rect.top)
      }
    } else {
      this.x = this.client.getShiftX(this.position.getX())
      this.y = this.client.getShiftY(this.position.getY())
    }

    return this
  }

  /**
   * Resets all data to initial values.
   *
   * Сбрасывает все данные к начальным значениям.
   */
  reset(): this {
    this.x = null
    this.y = null

    return this
  }
}
