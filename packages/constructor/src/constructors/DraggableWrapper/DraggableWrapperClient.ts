import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'

/**
 * Class for managing standard CSS coordinate variables /
 * Класс для управления стандартными переменными координат CSS
 */
export class DraggableWrapperClient {
  /** Coordinate x tracking / Отслеживание координаты x */
  protected x = 0

  /** Coordinate y tracking / Отслеживание координаты y */
  protected y = 0

  /** Drop status tracking / Отслеживание статуса сброса */
  protected drop = false

  protected readonly property: {
    x: string
    y: string
  }

  /**
   * Constructor
   * @param classes class data / данные классов
   */
  constructor(
    protected readonly classes: DraggableWrapperClassesData
  ) {
    const className = this.classes.getName()

    this.property = {
      x: `--${className}-sys-client-x`,
      y: `--${className}-sys-client-y`
    }
  }

  /**
   * Checks if the element was dropped /
   * Проверяет, был ли элемент сброшен
   * @returns true if the element was dropped / true, если элемент был сброшен
   */
  hasDrop(): boolean {
    return this.drop
  }

  setX(x: number): void {
    this.x = x
  }

  setY(y: number): void {
    this.y = y
  }

  setDrop(drop: boolean): void {
    this.drop = drop
  }

  /**
   * Updates CSS coordinate variables /
   * Обновляет переменные координат CSS
   * @param x coordinate x / координата x
   * @param y coordinate y / координата y
   */
  update(x: number, y: number): void {
    const element = this.classes.getElement()

    if (element) {
      element.style.setProperty(this.property.x, `${x - this.x}px`)
      element.style.setProperty(this.property.y, `${y - this.y}px`)
    }
  }

  /**
   * Resets CSS coordinate variables /
   * Сбрасывает переменные координат CSS
   */
  reset(): void {
    const element = this.classes.getElement()

    if (element) {
      element.style.removeProperty(this.property.x)
      element.style.removeProperty(this.property.y)
    }
  }
}
