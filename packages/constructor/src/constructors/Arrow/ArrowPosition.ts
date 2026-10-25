// ai-none

import { ref, watch } from 'vue'
import {
  DesignLifecycleAbstract,
  EventRef,
  isFilled
} from '@dxtmisha/functional'

import { ArrowElement } from './ArrowElement'
import { ArrowElementTarget } from './ArrowElementTarget'
import { ArrowParent } from './ArrowParent'

import { type ArrowBorder, ArrowDirection } from './basicTypes'
import type { ArrowProps } from './props'

/**
 * Class for calculating the position of the arrow element relative to the target element.
 *
 * Класс для вычисления позиции элемента стрелки относительно целевого элемента.
 */
export class ArrowPosition extends DesignLifecycleAbstract {
  /** Border between item and target elements / Граница между элементами item и target */
  readonly border = ref<ArrowBorder>()

  /** Direction of the arrow / Направление стрелки */
  readonly direction = ref<ArrowDirection>()

  /** Shift of the arrow / Смещение стрелки */
  readonly shift = ref<string>()

  /** Clip path for the arrow / Область обрезки для стрелки */
  readonly clipPath = ref<string>()

  /** Pending animation frame ID / Идентификатор ожидающего кадра анимации */
  protected frameId?: number

  /** Resize event for the arrow element / Событие изменения размера для элемента стрелки */
  protected eventResize?: EventRef<HTMLElement, Event>

  /**
   * Checks whether the arrow has a defined position.
   *
   * Проверяет, задана ли позиция стрелки.
   * @param props input properties / входные свойства
   * @returns true if position is filled / true, если позиция задана
   */
  static is(props?: ArrowProps): boolean {
    return isFilled(props?.position)
  }

  /**
   * Checks whether automatic positioning is enabled.
   *
   * Проверяет, включено ли автоматическое позиционирование.
   * @param props input properties / входные свойства
   * @returns true if position is auto / true, если позиция auto
   */
  static isAuto(props?: ArrowProps): boolean {
    return props?.position === 'auto'
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input properties / входные свойства
   * @param elementItem function returning arrow element / функция, возвращающая элемент стрелки
   * @param elementTarget function returning target element / функция, возвращающая целевой элемент
   * @param parent function returning parent element / функция, возвращающая родительский элемент
   */
  constructor(
    protected readonly props: ArrowProps,
    protected readonly elementItem: () => ArrowElement,
    protected readonly elementTarget: () => ArrowElementTarget,
    protected readonly parent: () => ArrowParent
  ) {
    super()
  }

  /**
   * Hook executed when component mounts.
   *
   * Хук, выполняемый при монтировании компонента.
   */
  override readonly onMounted = (): void => {
    this.update()

    watch(() => this.props.position, this.update)
    watch(
      () => this.parent()?.borderWidth,
      () => {
        if (this.parent()?.isBorder?.()) {
          this.update()
        }
      }
    )

    if (this.elementItem()?.element) {
      this.eventResize = new EventRef(this.elementItem().element, undefined, 'resize', this.update)
      this.eventResize.start()
    }
  }

  /**
   * Hook executed when component unmounts.
   *
   * Хук, выполняемый при размонтировании компонента.
   */
  override readonly onUnmounted = (): void => {
    if (this.frameId !== undefined) {
      cancelAnimationFrame(this.frameId)
      this.frameId = undefined
    }

    this.eventResize?.stop()
  }

  /**
   * Checks if the arrow is in the X direction.
   *
   * Проверяет, находится ли стрелка в направлении X.
   * @returns true if arrow direction is top or bottom / true, если направление стрелки сверху или снизу
   */
  isX(): boolean {
    return this.direction.value === ArrowDirection.TOP
      || this.direction.value === ArrowDirection.BOTTOM
  }

  /**
   * Updates the position of the arrow.
   *
   * Обновляет позицию стрелки.
   */
  readonly update = (): void => {
    const elementItemRect = this.elementItem().getRect()
    const elementTargetRect = this.elementTarget().getRect()

    this.border.value = this.initBorder(elementItemRect, elementTargetRect)
    this.direction.value = this.initDirection(elementItemRect, elementTargetRect)
    this.shift.value = this.initShift(elementItemRect)

    if (this.frameId !== undefined) {
      cancelAnimationFrame(this.frameId)
    }

    this.frameId = requestAnimationFrame(() => {
      this.frameId = undefined
      this.clipPath.value = this.initClipPath()
    })
  }

  /**
   * Gets the minimum value for the arrow position.
   *
   * Получает минимальное значение для позиции стрелки.
   * @returns minimum position value / минимальное значение позиции
   */
  protected getMinValue(): number {
    return this.parent().borderRadiusNumber + (this.elementItem().width / 2)
  }

  /**
   * Initializes the border between the item and target elements.
   *
   * Инициализирует границу между элементами item и target.
   * @param elementItemRect bounding rect of the arrow element / ограничивающий прямоугольник элемента стрелки
   * @param elementTargetRect bounding rect of the target element / ограничивающий прямоугольник целевого элемента
   * @returns border coordinates or undefined / координаты границы или undefined
   */
  protected initBorder(
    elementItemRect: DOMRect | undefined = this.elementItem().getRect(),
    elementTargetRect: DOMRect | undefined = this.elementTarget().getRect()
  ): ArrowBorder | undefined {
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
   * Initializes the clip path for the arrow.
   *
   * Инициализирует область обрезки для стрелки.
   * @returns CSS clip-path path string or undefined / строка пути CSS clip-path или undefined
   */
  protected initClipPath(): string | undefined {
    const rect = this.elementItem().getRectBorder()
    const rectArrow = this.elementItem().getRectArrowLine()

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

  /**
   * Initializes the direction of the arrow.
   *
   * Инициализирует направление стрелки.
   * @param elementItemRect bounding rect of the arrow element / ограничивающий прямоугольник элемента стрелки
   * @param elementTargetRect bounding rect of the target element / ограничивающий прямоугольник целевого элемента
   * @returns resolved direction or undefined / разрешенное направление или undefined
   */
  protected initDirection(
    elementItemRect: DOMRect | undefined = this.elementItem().getRect(),
    elementTargetRect: DOMRect | undefined = this.elementTarget().getRect()
  ): ArrowDirection | undefined {
    if (!ArrowPosition.isAuto(this.props)) {
      return this.props.position as ArrowDirection
    }

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
   * @param elementItemRect bounding rect of the arrow element / ограничивающий прямоугольник элемента стрелки
   * @returns shift value in pixels or undefined / значение смещения в пикселях или undefined
   */
  protected initShift(
    elementItemRect: DOMRect | undefined = this.elementItem().getRect()
  ): string | undefined {
    const border = this.border.value

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
}
