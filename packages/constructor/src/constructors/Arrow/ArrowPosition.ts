import { ref } from 'vue'

import { ArrowElement } from './ArrowElement'
import { ArrowElementTarget } from './ArrowElementTarget'

import { type ArrowBorder, ArrowDirection } from './basicTypes'

/**
 * Class for calculating the position of the arrow element relative to the target element.
 *
 * Класс для вычисления позиции элемента стрелки относительно целевого элемента.
 */
export class ArrowPosition {
  /** Border between item and target elements / Граница между элементами item и target */
  readonly border = ref<ArrowBorder>()

  /** Direction of the arrow / Направление стрелки */
  readonly direction = ref<ArrowDirection>()

  /** Shift of the arrow / Смещение стрелки */
  readonly shift = ref<string>()

  /**
   * Constructor
   * @param elementItem arrow element / элемент стрелки
   * @param elementTarget target element / целевой элемент
   */
  constructor(
    protected readonly elementItem: ArrowElement,
    protected readonly elementTarget: ArrowElementTarget
  ) {
  }

  /**
   * Updates the position of the arrow.
   *
   * Обновляет позицию стрелки.
   */
  update() {
    if (this.elementTarget.is()) {
      this.border.value = this.initBorder()
      this.direction.value = this.initDirection()
      this.shift.value = this.initShift()
    }
  }

  /**
   * Initializes the border between the item and target elements.
   *
   * Инициализирует границу между элементами item и target.
   */
  protected initBorder(): ArrowBorder | undefined {
    const elementItemRect = this.elementItem.getRect()
    const elementTargetRect = this.elementTarget.getRect()

    if (
      elementItemRect
      && elementTargetRect
    ) {
      return {
        top: Math.max(elementItemRect.top, elementTargetRect.top),
        bottom: Math.min(elementItemRect.bottom, elementTargetRect.bottom),
        left: Math.max(elementItemRect.left, elementTargetRect.left),
        right: Math.min(elementItemRect.right, elementTargetRect.right)
      }
    }

    return undefined
  }

  /**
   * Initializes the direction of the arrow.
   *
   * Инициализирует направление стрелки.
   */
  protected initDirection(): ArrowDirection | undefined {
    const elementItemRect = this.elementItem.getRect()
    const elementTargetRect = this.elementTarget.getRect()

    if (
      this.border.value
      && elementItemRect
      && elementTargetRect
    ) {
      if (
        elementTargetRect.top <= elementItemRect.top
        && elementTargetRect.right > elementItemRect.left
        && elementTargetRect.left < elementItemRect.right
      ) {
        return ArrowDirection.TOP
      }

      if (
        elementTargetRect.bottom >= elementItemRect.bottom
        && elementTargetRect.right > elementItemRect.left
        && elementTargetRect.left < elementItemRect.right
      ) {
        return ArrowDirection.BOTTOM
      }

      if (
        elementTargetRect.left <= elementItemRect.left
        && elementTargetRect.bottom > elementItemRect.top
        && elementTargetRect.top < elementItemRect.bottom
      ) {
        return ArrowDirection.LEFT
      }

      if (
        elementTargetRect.right >= elementItemRect.right
        && elementTargetRect.bottom > elementItemRect.top
        && elementTargetRect.top < elementItemRect.bottom
      ) {
        return ArrowDirection.RIGHT
      }
    }

    return undefined
  }

  /**
   * Initializes the shift of the arrow.
   *
   * Инициализирует смещение стрелки.
   */
  protected initShift(): string | undefined {
    const border = this.border.value
    const elementItemRect = this.elementItem.getRect()

    if (border && elementItemRect) {
      switch (this.direction.value) {
        case ArrowDirection.TOP:
        case ArrowDirection.BOTTOM:
          return `${(border.left - elementItemRect.left) + ((border.right - border.left) / 2)}px`
        case ArrowDirection.LEFT:
        case ArrowDirection.RIGHT:
          return `${(border.top - elementItemRect.top) + ((border.bottom - border.top) / 2)}px`
      }
    }

    return undefined
  }
}
