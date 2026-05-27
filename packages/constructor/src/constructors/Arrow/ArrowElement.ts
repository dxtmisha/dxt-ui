import { type Ref } from 'vue'

/**
 * Class for working with the arrow element.
 * It provides methods for obtaining the size, coordinates, and CSS variables of the arrow.
 *
 * Класс для работы с элементом стрелки.
 * Предоставляет методы для получения размеров, координат и CSS-переменных стрелки.
 */
export class ArrowElement {
  /**
   * Constructor
   * @param element input element / элемент ввода
   * @param className class name / название класса
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string
  ) {
  }

  /**
   * Gets the width of the arrow. / Получает ширину стрелки.
   */
  get width() {
    const size = this.getStyleArrowWidth()

    if (size) {
      return Number(
        size.replace(/[^0-9]+/ig, '')
      )
    }

    return 0
  }

  /**
   * Gets the height of the arrow. / Получает высоту стрелки.
   */
  get height() {
    const size = this.getStyleArrowHeight()

    if (size) {
      return Number(
        size.replace(/[^0-9]+/ig, '')
      )
    }

    return 0
  }

  /**
   * Checks that the element exists.
   *
   * Проверяет, что элемент существует.
   * @returns element existence status / статус существования элемента
   */
  is(): this is { element: Ref<HTMLElement> } {
    return Boolean(this.element.value)
  }

  /**
   * Gets the element's bounding rectangle.
   *
   * Получает ограничивающий прямоугольник элемента.
   * @returns bounding rectangle or undefined / ограничивающий прямоугольник или undefined
   */
  getRect(): DOMRect | undefined {
    return this.element.value?.getBoundingClientRect()
  }

  /**
   * Gets the bounding rectangle of the border element.
   *
   * Получает ограничивающий прямоугольник элемента границы.
   * @returns bounding rectangle or undefined / ограничивающий прямоугольник или undefined
   */
  getRectBorder(): DOMRect | undefined {
    return this.element.value?.querySelector(`.${this.className}__border`)?.getBoundingClientRect() ?? undefined
  }

  /**
   * Gets the bounding rectangle of the border element.
   *
   * Получает ограничивающий прямоугольник элемента границы.
   * @returns bounding rectangle or undefined / ограничивающий прямоугольник или undefined
   */
  getRectArrowLine(): DOMRect | undefined {
    return this.element.value?.querySelector(`.${this.className}__arrowLine`)?.getBoundingClientRect() ?? undefined
  }

  /** The name of the arrow width variable / Имя переменной ширины стрелки */
  protected get nameArrowWidth(): string {
    return `--${this.className}-arrowWidth`
  }

  /** The name of the arrow height variable / Имя переменной высоты стрелки */
  protected get nameArrowHeight(): string {
    return `--${this.className}-arrowHeight`
  }

  /**
   * Gets the width of the arrow from styles.
   *
   * Получает ширину стрелки из стилей.
   * @returns width value or undefined / значение ширины или undefined
   */
  protected getStyleArrowWidth(): string | undefined {
    if (this.is()) {
      return getComputedStyle(this.element.value)
        .getPropertyValue(
          this.nameArrowWidth
        )
    }

    return undefined
  }

  /**
   * Gets the size of the arrow from styles.
   *
   * Получает размер стрелки из стилей.
   * @returns height value or undefined / значение высоты или undefined
   */
  protected getStyleArrowHeight(): string | undefined {
    if (this.is()) {
      return getComputedStyle(this.element.value)
        .getPropertyValue(
          this.nameArrowHeight
        )
    }

    return undefined
  }
}
