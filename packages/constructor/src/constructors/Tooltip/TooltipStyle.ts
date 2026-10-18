// ai-none

import { type Ref } from 'vue'
import type { DesignName } from '@dxtmisha/functional'

/**
 * Style management class.
 *
 * Класс управления стилями.
 */
export class TooltipStyle {
  /**
   * Constructor
   * @param element instance of the element itself / экземпляр самого элемента
   * @param naming component naming helper / помощник именования компонента
   */
  constructor(
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly naming: DesignName
  ) {
  }

  /**
   * Changing styles.
   *
   * Изменение стилей.
   * @param top should the element be placed on top / нужно ли поместить элемент сверху
   * @param x value of X / значение X
   * @param y value of Y / значение Y
   * @param shift value for shift / значение для сдвига
   */
  set(
    top: boolean,
    x: number,
    y: number,
    shift: number
  ) {
    const element = this.element.value

    if (element) {
      element.classList.toggle(this.naming.getStatusClass('top'), top)
      element.style.setProperty(this.naming.getStyle('x'), `${x}px`)
      element.style.setProperty(this.naming.getStyle('y'), `${y}px`)
      element.style.setProperty(this.naming.getStyle('shift'), `${shift}px`)
    }
  }

  /**
   * Changes the preparation status.
   *
   * Изменяет статус подготовки.
   * @param status the value of the current state / значение текущего состояния
   */
  setPreparation(status: boolean) {
    const element = this.element.value

    if (element) {
      element.classList.toggle(this.naming.getStatusClass('preparation'), status)
    }
  }

  /**
   * Changes the preparation status.
   *
   * Изменяет статус подготовки.
   * @param status the value of the current state / значение текущего состояния
   */
  setShow(status: boolean) {
    const element = this.element.value

    if (element) {
      element.classList.toggle(this.naming.getStatusClass('show'), status)

      if (!status) {
        this.setMove(status)
      }
    }
  }

  /**
   * Changes the move status.
   *
   * Изменяет статус перемещения.
   * @param status the value of the current state / значение текущего состояния
   */
  setMove(status: boolean) {
    const element = this.element.value

    if (element) {
      element.classList.toggle(this.naming.getStatusClass('move'), status)
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
      element.classList.remove(this.naming.getStatusClass('top'))
      element.classList.remove(this.naming.getStatusClass('preparation'))
      element.classList.remove(this.naming.getStatusClass('show'))

      element.style.removeProperty(this.naming.getStyle('x'))
      element.style.removeProperty(this.naming.getStyle('y'))
      element.style.removeProperty(this.naming.getStyle('shift'))
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
      element.classList.remove(this.naming.getStatusClass('preparation'))
      element.classList.remove(this.naming.getStatusClass('show'))
    }
  }
}
