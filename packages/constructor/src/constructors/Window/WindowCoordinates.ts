import { WindowClasses } from './WindowClasses'
import { WindowElement } from './WindowElement'

/**
 * A class for working with coordinates.
 *
 * Класс для работы с координатами.
 */
export class WindowCoordinates {
  protected top: number = 0
  protected right: number = 0
  protected bottom: number = 0
  protected left: number = 0
  protected width: number = 0
  protected height: number = 0
  protected innerWidth: number = 0
  protected innerHeight: number = 0
  protected controlWidth: number = 0
  protected controlHeight: number = 0
  protected padding: number = 0
  protected location: string = ''

  /**
   * Constructor
   * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   */
  constructor(
    protected readonly classes: WindowClasses,
    protected readonly element: WindowElement
  ) {
  }

  /**
   * Returns the distance from the top point.
   *
   * Возвращает расстояние от верхней точки.
   */
  getTop(): number {
    return this.top
  }

  /**
   * Returns the distance from the right point.
   *
   * Возвращает расстояние от правой точки.
   */
  getRight(): number {
    return this.right
  }

  /**
   * Returns the distance from the lower point.
   *
   * Возвращает расстояние от нижней точки.
   */
  getBottom(): number {
    return this.bottom
  }

  /**
   * Returns the distance from the left point.
   *
   * Возвращает расстояние от левой точки.
   */
  getLeft(): number {
    return this.left
  }

  /**
   * Returns the width of the element.
   *
   * Возвращает ширину элемента.
   */
  getWidth(): number {
    return this.width
  }

  /**
   * Returns the height of the element.
   *
   * Возвращает высоту элемента.
   */
  getHeight(): number {
    return this.height
  }

  /**
   * Returns the width of the window.
   *
   * Возвращает ширину окна.
   */
  getInnerWidth(): number {
    return this.innerWidth
  }

  /**
   * Returns the height of the window.
   *
   * Возвращает высоту окна.
   */
  getInnerHeight(): number {
    return this.innerHeight
  }

  /**
   * Returns the width of the control element.
   *
   * Возвращает ширину элемента управления.
   */
  getControlWidth(): number {
    return this.controlWidth
  }

  /**
   * Returns the height of the control element.
   *
   * Возвращает высоту элемента управления.
   */
  getControlHeight(): number {
    return this.controlHeight
  }

  /**
   * Returns the margins of the element.
   *
   * Возвращает отступы у элемента.
   */
  getPadding(): number {
    return this.padding
  }

  /**
   * Returns the values of the element's position.
   *
   * Возвращает значения положения элемента.
   */
  getLocation(): string {
    return this.location
  }

  /**
   * Returns the maximum height of the body.
   *
   * Возвращает максимальную высоту у body.
   */
  getMaxHeight(): number {
    return window.innerHeight - (this.padding * 2)
  }

  /**
   * Data updates.
   *
   * Обновления данных.
   */
  update(): boolean {
    const element = this.element.getMain()
    const rect = this.element.getControlRect()

    if (
      element
      && rect
      && (
        this.top !== rect.top
        || this.right !== rect.right
        || this.bottom !== rect.bottom
        || this.left !== rect.left
        || this.width !== element.offsetWidth
        || this.height !== element.offsetHeight
        || this.innerWidth !== window.innerWidth
        || this.innerHeight !== window.innerHeight
      )
    ) {
      this.top = rect.top
      this.right = rect.right
      this.bottom = rect.bottom
      this.left = rect.left
      this.width = element.offsetWidth
      this.height = element.offsetHeight
      this.innerWidth = window.innerWidth
      this.innerHeight = window.innerHeight
      this.controlWidth = rect.width
      this.controlHeight = rect.height
      this.padding = this.initPadding()
      this.location = this.initLocation(rect.top + (rect.height / 2))

      return true
    }

    return false
  }

  /**
   * Resets all data to initial values.
   *
   * Сбрасывает все данные к начальным значениям.
   */
  reset(): this {
    this.top = 0
    this.right = 0
    this.bottom = 0
    this.left = 0
    this.width = 0
    this.height = 0
    this.innerWidth = 0
    this.innerHeight = 0

    return this
  }

  /**
   * Initializes padding value from computed styles.
   *
   * Инициализирует значение отступов из вычисленных стилей.
   */
  protected initPadding(): number {
    const element = this.element.getMain()
    let padding = 0

    if (element) {
      const style = getComputedStyle(element)
      const paddingTop = style.paddingTop.replace(/[^0-9]+/g, '')
      const paddingBottom = style.paddingBottom.replace(/[^0-9]+/g, '')

      padding = (parseInt(paddingTop) + parseInt(paddingBottom)) / 2
    }

    return padding > 0 ? padding : 16
  }

  /**
   * Calculates control position values.
   *
   * Вычисляет значения положения контроля.
   * @param top position of an element/ положение элемента
   */
  protected initLocation(
    top: number
  ): string {
    const height = this.element.getBody()?.offsetHeight ?? 0
    const half = height / 2
    const max = this.innerHeight - (this.padding * 2) - height
    const position = top - half - this.padding

    if (
      position < this.padding
    ) {
      return '0px'
    }

    if (top + half >= this.innerHeight - this.padding) {
      return `${max}px`
    }

    return `${position}px`
  }
}
