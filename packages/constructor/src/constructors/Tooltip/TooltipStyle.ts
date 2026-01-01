import { type Ref } from 'vue'

/**
 * Style management class.
 *
 * Класс управления стилями.
 */
export class TooltipStyle {
  /**
   * Constructor
   * @param element instance of the element itself/ экземпляр самого элемента
   * @param className class name/ название класса
   */
  constructor(
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly className: string
  ) {
  }

  /**
   * Changing styles.
   *
   * Изменение стилей.
   * @param top should the element be placed on top/ нужно ли поместить элемент сверху
   * @param x value of X/ значение X
   * @param y value of Y/ значение Y
   * @param shift value for shift/ значение для сдвига
   */
  set(
    top: boolean,
    x: number,
    y: number,
    shift: number
  ) {
    const element = this.element.value

    if (element) {
      element.classList.toggle(`${this.className}--top`, top)
      element.style.setProperty(`--${this.className}-sys-x`, `${x}px`)
      element.style.setProperty(`--${this.className}-sys-y`, `${y}px`)
      element.style.setProperty(`--${this.className}-sys-shift`, `${shift}px`)
    }
  }

  /**
   * Changes the preparation status.
   *
   * Изменяет статус подготовки.
   * @param status the value of the current state/ значение текущего состояния
   */
  setPreparation(status: boolean) {
    const element = this.element.value

    if (element) {
      element.classList.toggle(`${this.className}--preparation`, status)
    }
  }

  /**
   * Changes the preparation status.
   *
   * Изменяет статус подготовки.
   * @param status the value of the current state/ значение текущего состояния
   */
  setShow(status: boolean) {
    const element = this.element.value

    if (element) {
      element.classList.toggle(`${this.className}--show`, status)
    }
  }

  /**
   * Reset all records to the initial state.
   *
   * Сброс всех записей до начального состояния.
   */
  reset() {
    const element = this.element.value

    if (element) {
      element.classList.remove(`${this.className}--top`)
      element.classList.remove(`${this.className}--preparation`)
      element.classList.remove(`${this.className}--show`)

      element.style.removeProperty(`--${this.className}-sys-x`)
      element.style.removeProperty(`--${this.className}-sys-y`)
      element.style.removeProperty(`--${this.className}-sys-shift`)
    }
  }

  /**
   * Resets the display state.
   *
   * Сбрасывает состояние показа.
   */
  resetShow() {
    const element = this.element.value

    if (element) {
      element.classList.remove(`${this.className}--preparation`)
      element.classList.remove(`${this.className}--show`)
    }
  }
}
