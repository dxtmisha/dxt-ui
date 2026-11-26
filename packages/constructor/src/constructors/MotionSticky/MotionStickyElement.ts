// ai-none

import { type Ref } from 'vue'
import {
  type ConstrEmit,
  getElement,
  getElementOrWindow,
  isDomRuntime
} from '@dxtmisha/functional'

import type { MotionStickyPosition, MotionStickyStylePosition } from './basicTypes'
import type { MotionStickyProps } from './props'
import type { MotionStickyEmits } from './types'

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
    protected readonly props: Readonly<MotionStickyProps>,
    readonly element: Ref<HTMLElement | undefined>,
    protected readonly emits?: ConstrEmit<MotionStickyEmits>
  ) {}

  /**
   * Element for event management.
   *
   * Элемент для управления событием.
   */
  get eventElement(): HTMLElement | Window | undefined {
    if (isDomRuntime()) {
      if (this.props.elementScroll) {
        return getElementOrWindow(this.props.elementScroll)
      }

      return window
    }

    return undefined
  }

  /**
   * Element for control management.
   *
   * Элемент для контроля управления.
   */
  get focusElement(): HTMLElement | Element | undefined {
    if (isDomRuntime()) {
      return getElement(this.props.elementScroll)
        ?? document.scrollingElement
        ?? document.documentElement
    }

    return undefined
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
      && isDomRuntime()
    ) {
      const rectTarget = targetElement.getBoundingClientRect()
      const rectFocus = focusElement.getBoundingClientRect()
      const focusTop = rectFocus.top > 0 ? rectFocus.top + focusElement.clientTop : 0
      const focusBorderBottom = parseFloat(getComputedStyle(focusElement).borderBottomWidth) || 0
      const focusBottom = rectFocus.bottom > window.innerHeight
        ? window.innerHeight
        : rectFocus.bottom - focusBorderBottom
      const topOffset = Math.round(rectTarget.top - focusTop)

      return {
        top: topOffset <= -0.99 ? 0 : topOffset,
        bottom: Math.round(focusBottom - rectTarget.bottom)
      }
    }

    return undefined
  }

  /**
   * Returns the position of the styles.
   *
   * Возвращает позицию стилей.
   * @returns sticky positions / липкие позиции
   */
  getPositionStyle(): MotionStickyStylePosition | undefined {
    const targetElement = this.element.value

    if (
      targetElement
      && isDomRuntime()
    ) {
      const computedStyle = getComputedStyle(targetElement)

      if (computedStyle.position === 'sticky') {
        return {
          top: this.parsePositionOffset(computedStyle.top),
          bottom: this.parsePositionOffset(computedStyle.bottom)
        }
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
        const classes = this.props.classActivity
          .trim()
          .split(/\s+/)
          .filter(Boolean)

        for (const className of classes) {
          targetElement.classList.toggle(className, stickyStatus)
        }
      }

      if (this.updateSticky(stickyValue)) {
        this.emits?.('sticky', stickyStatus)
      }

      this.updateScrollState(scrollState)
    }
  }

  /**
   * Parses computed CSS offset value into finite pixels or undefined for auto/invalid values.
   *
   * Преобразует вычисленное CSS-значение смещения в число пикселей или undefined для auto/некорректных значений.
   * @param value computed style offset value / вычисленное CSS-значение смещения
   * @returns numeric offset in pixels or undefined / числовое смещение в пикселях или undefined
   */
  protected parsePositionOffset(value: string): number | undefined {
    const parsed = Number.parseFloat(value)

    if (Number.isFinite(parsed)) {
      return parsed
    }

    return undefined
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
}
