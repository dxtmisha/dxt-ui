import { type Ref } from 'vue'
import { type ConstrEmit, getElement } from '@dxtmisha/functional'

import type { MotionStickyEmits } from './types'
import type { MotionStickyProps } from './props'
import type { MotionStickyPosition } from './basicTypes'

/**
 * Class for working with sticky element position calculations.
 *
 * Класс для работы с вычислениями положения липкого элемента.
 */
export class MotionStickyElement {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: MotionStickyProps,
    readonly element: Ref<HTMLElement | undefined>,
    protected readonly emits?: ConstrEmit<MotionStickyEmits>
  ) { }

  /**
   * Element for control management.
   *
   * Элемент для контроля управления.
   */
  get focusElement(): HTMLElement | Element | undefined {
    return getElement(this.props.elementScroll)
      ?? document.scrollingElement
      ?? document.documentElement
  }

  /**
   * Element for event management.
   *
   * Элемент для управления событием.
   */
  get eventElement(): HTMLElement | Window | undefined {
    if (this.props.elementScroll) {
      return getElement(this.props.elementScroll)
    }

    return window
  }

  /**
   * Returns target element.
   *
   * Возвращает целевой элемент.
   * @returns DOM element value / значение DOM-элемента
   */
  getElement(): HTMLElement | undefined {
    return this.element.value
  }

  /**
   * Returns the position of the styles.
   *
   * Возвращает позицию стилей.
   * @returns sticky positions / липкие позиции
   */
  getPositionStyle(): MotionStickyPosition | undefined {
    const targetElement = this.element.value

    if (targetElement) {
      const computedStyle = getComputedStyle(targetElement)

      if (computedStyle.position === 'sticky') {
        return {
          top: parseInt(computedStyle.top.replace(/[^0-9]/ig, '')) || 0,
          bottom: parseInt(computedStyle.bottom.replace(/[^0-9]/ig, '')) || 0
        }
      }
    }

    return undefined
  }

  /**
   * Returns the current position of the element.
   *
   * Возвращает текущую позицию элемента.
   * @returns sticky positions / липкие позиции
   */
  getPositionElement(): MotionStickyPosition | undefined {
    const targetElement = this.element.value
    const focusElement = this.focusElement

    if (
      targetElement
      && focusElement
    ) {
      const rectTarget = targetElement.getBoundingClientRect()
      const rectFocus = focusElement.getBoundingClientRect()
      const topOffset = Math.round(rectTarget.top - (rectFocus.top > 0 ? rectFocus.top : 0))

      return {
        top: topOffset <= -0.99 ? 0 : topOffset,
        bottom: Math.round((rectFocus.bottom > window.innerHeight ? window.innerHeight : rectFocus.bottom) - rectTarget.bottom)
      }
    }

    return undefined
  }

  /**
   * Change the attachment status.
   *
   * Изменить статус прикрепления.
   * @param stickyStatus status for change / статус для изменения
   */
  setStatus(stickyStatus: boolean): void {
    const targetElement = this.element.value

    if (targetElement) {
      const stickyValue = stickyStatus ? 'sticky' : 'none'
      const scrollState = this.getScrollState()

      if (this.props.classActivity) {
        targetElement.classList.toggle(this.props.classActivity, stickyStatus)
      }

      if (this.updateSticky(stickyValue)) {
        this.emits?.('sticky', stickyStatus)
      }

      this.updateScrollState(scrollState)
    }
  }

  /**
   * Returns the current scroll state value.
   *
   * Возвращает текущее значение состояния прокрутки.
   * @returns scroll state status / статус состояния прокрутки
   */
  protected getScrollState(): string {
    const eventElement = this.eventElement

    if (
      eventElement
      && (
        (
          'scrollTop' in eventElement
          && eventElement.scrollTop === 0
        )
        || (
          'scrollY' in eventElement
          && eventElement.scrollY === 0
        )
      )
    ) {
      return 'zero'
    }

    return 'active'
  }

  /**
   * Set target dataset if sticky state has changed.
   *
   * Установка dataset при изменении статуса прикрепления.
   * @param stickyValue value for change / значение для изменения
   * @returns true if sticky state has changed / true, если статус прикрепления изменился
   */
  protected updateSticky(stickyValue: string): boolean {
    const targetElement = this.element.value

    if (
      targetElement
      && stickyValue !== targetElement.dataset.sticky
    ) {
      targetElement.dataset.sticky = stickyValue
      return true
    }

    return false
  }

  /**
   * Set target dataset if scroll state has changed.
   *
   * Установка dataset при изменении статуса прокрутки.
   * @param scrollState value for change / значение для изменения
   * @returns true if scroll state has changed / true, если статус прокрутки изменился
   */
  protected updateScrollState(scrollState: string): boolean {
    const targetElement = this.element.value

    if (
      targetElement
      && scrollState !== targetElement.dataset.stickyScroll
    ) {
      targetElement.dataset.stickyScroll = scrollState
      return true
    }

    return false
  }
}
