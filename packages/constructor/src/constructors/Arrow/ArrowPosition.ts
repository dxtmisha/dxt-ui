import { ref } from 'vue'

import { ArrowElement } from './ArrowElement'
import { ArrowElementTarget } from './ArrowElementTarget'

import { type ArrowBorder, ArrowDirection } from './basicTypes'
import type { ArrowProps } from './props.ts'
import { ArrowParent } from './ArrowParent.ts'

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

  /** Clip path for the arrow / Область обрезки для стрелки */
  readonly clipPath = ref<string>()

  /**
   * Constructor
   * @param props input properties / входные свойства
   * @param elementItem arrow element / элемент стрелки
   * @param elementTarget target element / целевой элемент
   * @param parent parent element / родительский элемент
   */
  constructor(
    protected readonly props: ArrowProps,
    protected readonly elementItem: ArrowElement,
    protected readonly elementTarget: ArrowElementTarget,
    protected readonly parent: ArrowParent
  ) {
  }

  /**
   * Updates the position of the arrow.
   *
   * Обновляет позицию стрелки.
   */
  readonly update = (): void => {
    this.border.value = this.initBorder()
    this.direction.value = this.initDirection()
    this.shift.value = this.initShift()

    requestAnimationFrame(() => {
      this.clipPath.value = this.initClipPath()
    })
  }

  /**
   * Checks if the arrow is in the X direction.
   *
   * Проверяет, находится ли стрелка в направлении X.
   */
  isX() {
    return this.direction.value === ArrowDirection.TOP || this.direction.value === ArrowDirection.BOTTOM
  }

  /**
   * Gets the minimum value for the arrow position.
   *
   * Получает минимальное значение для позиции стрелки.
   */
  protected getMinValue(): number {
    return this.parent.getBorderRadius() + (this.elementItem.getWidth() / 2)
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
    if (this.props.position !== 'auto') {
      return this.props.position as ArrowDirection
    }

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
      const min = this.getMinValue()
      let size: number

      if (this.isX()) {
        size = Math.min(elementItemRect.width - min, (border.left - elementItemRect.left) + ((border.right - border.left) / 2))
      } else {
        size = Math.min(elementItemRect.height - min, (border.top - elementItemRect.top) + ((border.bottom - border.top) / 2))
      }

      return `${Math.max(min, size)}px`
    }

    return undefined
  }

  /**
   * Initializes the clip path for the arrow.
   *
   * Инициализирует область обрезки для стрелки.
   */
  protected initClipPath() {
    const rect = this.elementItem.getRectBorder()
    const rectArrow = this.elementItem.getRectArrowLine()

    if (rect && rectArrow) {
      const rectangleShow = `M0,0 L0,${rect.height} L${rect.width},${rect.height} L${rect.width},0 Z`
      let startX: number
      let startY: number
      let endX: number
      let endY: number

      switch (this.direction.value) {
        case ArrowDirection.TOP:
          startX = rectArrow.left - rect.left
          startY = 0
          endX = startX + rectArrow.width
          endY = rectArrow.height
          break
        case ArrowDirection.BOTTOM:
          startX = rectArrow.left - rect.left
          startY = rect.height - rectArrow.height
          endX = startX + rectArrow.width
          endY = rect.height
          break
        case ArrowDirection.LEFT:
          startX = 0
          startY = rectArrow.top - rect.top
          endX = rectArrow.width
          endY = startY + rectArrow.height
          break
        case ArrowDirection.RIGHT:
          startX = rect.width - rectArrow.width
          startY = rectArrow.top - rect.top
          endX = rect.width
          endY = startY + rectArrow.height
          break
        default:
          return undefined
      }

      const rectangleHide = `M${startX},${startY} L${endX},${startY} L${endX},${endY} L${startX},${endY} Z`

      return `path('${rectangleShow} ${rectangleHide}')`
    }

    return undefined
  }
}
