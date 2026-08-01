import type { Ref } from 'vue'

/**
 * Class for managing the main HTML element and class modifications for MotionFlip.
 *
 * Класс для работы с основным HTML-элементом и модификациями классов для MotionFlip.
 */
export class MotionFlipElement {
  /**
   * Constructor
   * @param element main HTML element container / главный контейнер HTML-элемента
   * @param className base CSS class name / базовое имя CSS-класса
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string
  ) { }

  /**
   * Checks if element is available.
   *
   * Проверяет, доступен ли элемент.
   * @returns true if element exists / true, если элемент существует
   */
  isEnable(): this is { element: Ref<HTMLElement> } {
    return Boolean(this.element.value)
  }

  /**
   * Returns base CSS class name.
   *
   * Возвращает базовое имя CSS-класса.
   * @returns class name string / строка названия класса
   */
  getClassName(): string {
    return this.className
  }

  /**
   * Returns target HTML element.
   *
   * Возвращает целевой HTML-элемент.
   * @returns DOM element value / значение DOM-элемента
   */
  getElement(): HTMLElement | undefined {
    return this.element.value
  }

  /**
   * Adds the freeze modifier class directly to the element.
   *
   * Добавляет модифицирующий класс заморозки непосредственно на элемент.
   */
  addClassFreeze(): void {
    this.element.value?.classList.add(`${this.className}--freeze`)
  }

  /**
   * Adds the go modifier class directly to the element.
   *
   * Добавляет модифицирующий класс анимации непосредственно на элемент.
   */
  addClassGo(): void {
    this.element.value?.classList.add(`${this.className}--go`)
  }

  /**
   * Clears freeze and go modifier classes directly from the element.
   *
   * Очищает модифицирующие классы заморозки и анимации непосредственно с элемента.
   */
  resetStatus(): void {
    this.element.value?.classList.remove(
      `${this.className}--freeze`,
      `${this.className}--go`
    )
  }
}
