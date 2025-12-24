import { computed, type Ref } from 'vue'

/**
 * Class for working with the arrow element.
 *
 * Класс для работы с элементом стрелки.
 */
export class ArrowElement {
  /**
   * Constructor
   * @param element input element/ элемент ввода
   * @param className class name/ название класса
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string
  ) {
  }

  /** Gets the width of the arrow/ Получает ширину стрелки */
  readonly width = computed<number>(() => {
    const size = this.getStyleArrowWidth()

    if (size) {
      return Number(
        size.replace(/[^0-9]+/ig, '')
      )
    }

    return 0
  })

  /** Gets the height of the arrow/ Получает высоту стрелки */
  readonly height = computed<number>(() => {
    const size = this.getStyleArrowHeight()

    if (size) {
      return Number(
        size.replace(/[^0-9]+/ig, '')
      )
    }

    return 0
  })

  /**
   * Checks that the element exists.
   *
   * Проверяет, что элемент существует.
   */
  is(): this is { element: Ref<HTMLElement> } {
    return Boolean(this.element.value)
  }

  /**
   * Gets the name of the arrow width variable.
   *
   * Получает имя переменной ширины стрелки.
   */
  protected getNameArrowWidth(): string {
    return `--${this.className}-arrowWidth`
  }

  /**
   * Gets the name of the arrow height variable.
   *
   * Получает имя переменной высоты стрелки.
   * @protected
   */
  protected getNameArrowHeight(): string {
    return `--${this.className}-arrowHeight`
  }

  /**
   * Gets the width of the arrow from styles.
   *
   * Получает ширину стрелки из стилей.
   */
  protected getStyleArrowWidth(): string | undefined {
    if (this.is()) {
      return getComputedStyle(this.element.value)
        .getPropertyValue(
          this.getNameArrowWidth()
        )
    }

    return undefined
  }

  /**
   * Gets the size of the arrow from styles.
   *
   * Получает размер стрелки из стилей.
   */
  protected getStyleArrowHeight(): string | undefined {
    if (this.is()) {
      return getComputedStyle(this.element.value)
        .getPropertyValue(
          this.getNameArrowHeight()
        )
    }

    return undefined
  }
}
