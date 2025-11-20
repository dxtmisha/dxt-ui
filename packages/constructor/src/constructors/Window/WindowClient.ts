import type { WindowElement } from './WindowElement'

/**
 * Sentinel value for an "unset" client coordinate.
 * Used to distinguish the absence of data from a valid point (including 0,0).
 * -1 is chosen as a value that cannot occur for clientX/clientY within the visible viewport.
 *
 * Маркерное значение для «не заданных» координат клика пользователя.
 * Используется, чтобы отличать отсутствие данных от валидной точки (включая 0,0).
 * -1 выбран как значение, невозможное для clientX/clientY в видимой области.
 */
const WINDOW_NULL_VALUE = -1

/**
 * The class stores the coordinates of the mouse click. It is used for the opening
 * animation, when the element appears from the point of click. And also for the contextmenu event.
 *
 * Класс хранит координаты нажатия мыши. Используется для анимации открытия,
 * когда элемент появляется от точки нажатия. А также для события contextmenu.
 */
export class WindowClient {
  protected x: number = WINDOW_NULL_VALUE
  protected y: number = WINDOW_NULL_VALUE

  constructor(
    protected readonly element: WindowElement
  ) {
  }

  /**
   * Checks if the button was pressed.
   *
   * Проверяет, было ли нажатие на кнопку.
   */
  is(): boolean {
    return this.x !== WINDOW_NULL_VALUE && this.y !== WINDOW_NULL_VALUE
  }

  /**
   * Checks if the coordinates are at the origin (0,0).
   *
   * Проверяет, находятся ли координаты в начале координат (0,0).
   */
  isZero(): boolean {
    return this.x === 0 && this.y === 0
  }

  /**
   * Returns the X coordinate.
   *
   * Возвращает координату X.
   */
  getX(): number {
    return this.x
  }

  /**
   * Returns the Y coordinate.
   *
   * Возвращает координату Y.
   */
  getY(): number {
    return this.y
  }

  /**
   * Returns the shift along the X coordinate.
   *
   * Возвращает сдвиг по координате X.
   */
  getShiftX(value: number): number {
    return this.x - value
  }

  /**
   * Returns the shift along the Y coordinate.
   *
   * Возвращает сдвиг по координате Y.
   */
  getShiftY(value: number): number {
    return this.y - value
  }

  /**
   * Changes the coordinates.
   *
   * Изменяет координаты.
   * @param x value of X/ значение X
   * @param y value of Y/ значение Y
   */
  set(x: number, y: number): this {
    this.x = x
    this.y = y

    return this
  }

  /**
   * Resets all data to initial values.
   *
   * Сбрасывает все данные к начальным значениям.
   */
  reset(): this {
    this.x = WINDOW_NULL_VALUE
    this.y = WINDOW_NULL_VALUE

    return this
  }

  /**
   * The method updates the current position.
   *
   * Метод обновляет текущее положение.
   */
  update(): this {
    if (
      this.is()
      && this.isZero()
    ) {
      const rect = this.element.getControlRect()

      if (rect) {
        this.set(
          rect.left + (rect.width / 2),
          rect.top + (rect.height / 2)
        )
      }
    }

    return this
  }
}
