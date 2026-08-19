import { getMouseClient, type ImageCoordinator } from '@dxtmisha/functional-basic'

import type { CropAreaElement } from './CropAreaElement'
import type { CropAreaEmit } from './CropAreaEmit'
import type { CropAreaPosition } from './CropAreaPosition'

import type {
  CropAreaCoordinator,
  CropAreaDirection,
  CropAreaDirectionSingle
} from './basicTypes'

/**
 * Class managing interaction coordinates and drag calculations for CropArea.
 *
 * Класс, управляющий координатами взаимодействия и расчетами перетаскивания для CropArea.
 */
export class CropAreaCoordinates {
  /** Mouse start position / Начальная позиция мыши */
  protected startMouse: ImageCoordinator = { x: 0, y: 0 }

  /** Initial coordinator snapshot before drag / Снимок начальных координат перед перетаскиванием */
  protected startCoordinator: CropAreaCoordinator = [0, 0, 0, 0]

  /** Currently active drag direction / Текущее активное направление перетаскивания */
  protected activeDirection?: CropAreaDirection

  /** Bounding rectangle of the component / Ограничивающий прямоугольник компонента */
  protected rect?: DOMRect

  /**
   * Constructor.
   *
   * Конструктор.
   * @param element element manager / менеджер элемента
   * @param position position coordinator manager / менеджер координат позиции
   * @param emit emit manager / менеджер событий
   */
  constructor(
    protected readonly element: CropAreaElement,
    protected readonly position: CropAreaPosition,
    protected readonly emit: CropAreaEmit
  ) {
  }

  /**
   * Starts tracking coordinates on interaction start.
   *
   * Начинает отслеживание координат при начале взаимодействия.
   * @param event mouse or touch event / событие мыши или касания
   * @param direction interaction direction / направление взаимодействия
   * @returns true if interaction started / true, если взаимодействие начато
   */
  start(
    event: MouseEvent | TouchEvent,
    direction: CropAreaDirection
  ): boolean {
    if (this.position.isDirectionDisabled(direction)) {
      return false
    }

    this.activeDirection = direction
    this.rect = this.element.rect
    this.startCoordinator = [...this.position.get()]
    this.startMouse = getMouseClient(event)

    return true
  }

  /**
   * Updates coordinates on interaction movement.
   *
   * Обновляет координаты при перемещении взаимодействия.
   * @param event mouse or touch event / событие мыши или касания
   */
  move(event: MouseEvent | TouchEvent): void {
    if (
      !this.activeDirection
      || !this.rect
      || this.rect.width === 0
      || this.rect.height === 0
    ) {
      return
    }

    const currentMouse = getMouseClient(event)
    const deltaX = (100 / this.rect.width) * (currentMouse.x - this.startMouse.x)
    const deltaY = (100 / this.rect.height) * (currentMouse.y - this.startMouse.y)

    this.updatePosition(this.activeDirection, deltaX, deltaY)
  }

  /**
   * Moves the crop area by discrete percentage step (e.g. from keyboard navigation).
   *
   * Перемещает область кадрирования на дискретный процентный шаг (например, при навигации с клавиатуры).
   * @param deltaX horizontal percentage delta / горизонтальное процентное смещение
   * @param deltaY vertical percentage delta / вертикальное процентное смещение
   */
  moveByStep(deltaX: number, deltaY: number): void {
    this.position.moveCenter(this.position.get(), deltaX, deltaY)

    this.emit.resize('center')
  }

  /**
   * Resizes the crop area by discrete percentage step (e.g. from keyboard navigation).
   *
   * Изменяет размер области кадрирования на дискретный процентный шаг (например, при навигации с клавиатуры).
   * @param deltaX horizontal percentage delta / горизонтальное процентное смещение
   * @param deltaY vertical percentage delta / вертикальное процентное смещение
   * @param isOpposite whether to resize opposite edges (left/top) instead of primary (right/bottom) / изменять ли противоположные грани (left/top) вместо основных (right/bottom)
   */
  resizeByStep(
    deltaX: number,
    deltaY: number,
    isOpposite = false
  ): void {
    const current = this.position.get()

    if (deltaX !== 0) {
      if (isOpposite) {
        this.updateSingle('left', current[3], deltaX)
      } else {
        this.updateSingle('right', current[1], -deltaX)
      }
    }

    if (deltaY !== 0) {
      if (isOpposite) {
        this.updateSingle('top', current[0], deltaY)
      } else {
        this.updateSingle('bottom', current[2], -deltaY)
      }
    }
  }

  /**
   * Resets interaction coordinates state.
   *
   * Сбрасывает состояние координат взаимодействия.
   */
  reset(): void {
    this.activeDirection = undefined
    this.rect = undefined
  }

  /**
   * Updates position and emits resize events based on direction and deltas.
   *
   * Обновляет позицию и испускает события изменения размера на основе направления и смещений.
   * @param direction interaction direction / направление взаимодействия
   * @param deltaX horizontal percentage delta / горизонтальное процентное смещение
   * @param deltaY vertical percentage delta / вертикальное процентное смещение
   */
  protected updatePosition(
    direction: CropAreaDirection,
    deltaX: number,
    deltaY: number
  ): void {
    switch (direction) {
      case 'top':
        this.updateTop(deltaY)
        break
      case 'right':
        this.updateRight(deltaX)
        break
      case 'bottom':
        this.updateBottom(deltaY)
        break
      case 'left':
        this.updateLeft(deltaX)
        break
      case 'right-top':
        this.updateRightTop(deltaX, deltaY)
        break
      case 'right-bottom':
        this.updateRightBottom(deltaX, deltaY)
        break
      case 'left-top':
        this.updateLeftTop(deltaX, deltaY)
        break
      case 'left-bottom':
        this.updateLeftBottom(deltaX, deltaY)
        break
      case 'center':
        this.updateCenter(deltaX, deltaY)
        break
    }
  }

  /**
   * Updates a single edge position and emits resize event if value changed.
   *
   * Обновляет позицию одной грани и испускает событие изменения размера при изменении значения.
   * @param direction edge direction / направление грани
   * @param startValue start coordinate value / начальное значение координаты
   * @param delta percentage delta / процентное смещение
   * @returns true if updated / true, если обновлено
   */
  protected updateSingle(
    direction: CropAreaDirectionSingle,
    startValue: number,
    delta: number
  ): boolean {
    const updated = this.position.moveSingle(direction, startValue, delta)

    if (updated !== undefined) {
      this.emit.resize(direction, updated)
      return true
    }

    return false
  }

  /**
   * Updates position for top handle drag.
   *
   * Обновляет позицию при перетаскивании верхней ручки.
   * @param deltaY vertical percentage delta / вертикальное процентное смещение
   */
  protected updateTop(deltaY: number): void {
    this.updateSingle('top', this.startCoordinator[0], deltaY)
  }

  /**
   * Updates position for right handle drag.
   *
   * Обновляет позицию при перетаскивании правой ручки.
   * @param deltaX horizontal percentage delta / горизонтальное процентное смещение
   */
  protected updateRight(deltaX: number): void {
    this.updateSingle('right', this.startCoordinator[1], -deltaX)
  }

  /**
   * Updates position for bottom handle drag.
   *
   * Обновляет позицию при перетаскивании нижней ручки.
   * @param deltaY vertical percentage delta / вертикальное процентное смещение
   */
  protected updateBottom(deltaY: number): void {
    this.updateSingle('bottom', this.startCoordinator[2], -deltaY)
  }

  /**
   * Updates position for left handle drag.
   *
   * Обновляет позицию при перетаскивании левой ручки.
   * @param deltaX horizontal percentage delta / горизонтальное процентное смещение
   */
  protected updateLeft(deltaX: number): void {
    this.updateSingle('left', this.startCoordinator[3], deltaX)
  }

  /**
   * Updates position for right-top corner handle drag.
   *
   * Обновляет позицию при перетаскивании правого верхнего угла.
   * @param deltaX horizontal percentage delta / горизонтальное процентное смещение
   * @param deltaY vertical percentage delta / вертикальное процентное смещение
   */
  protected updateRightTop(deltaX: number, deltaY: number): void {
    const updatedTop = this.position.moveSingle('top', this.startCoordinator[0], deltaY)
    const updatedRight = this.position.moveSingle('right', this.startCoordinator[1], -deltaX)

    this.emit.resize('right-top', updatedTop ?? updatedRight ?? 0)
  }

  /**
   * Updates position for right-bottom corner handle drag.
   *
   * Обновляет позицию при перетаскивании правого нижнего угла.
   * @param deltaX horizontal percentage delta / горизонтальное процентное смещение
   * @param deltaY vertical percentage delta / вертикальное процентное смещение
   */
  protected updateRightBottom(deltaX: number, deltaY: number): void {
    const updatedBottom = this.position.moveSingle('bottom', this.startCoordinator[2], -deltaY)
    const updatedRight = this.position.moveSingle('right', this.startCoordinator[1], -deltaX)

    this.emit.resize('right-bottom', updatedBottom ?? updatedRight ?? 0)
  }

  /**
   * Updates position for left-top corner handle drag.
   *
   * Обновляет позицию при перетаскивании левого верхнего угла.
   * @param deltaX horizontal percentage delta / горизонтальное процентное смещение
   * @param deltaY vertical percentage delta / вертикальное процентное смещение
   */
  protected updateLeftTop(deltaX: number, deltaY: number): void {
    const updatedTop = this.position.moveSingle('top', this.startCoordinator[0], deltaY)
    const updatedLeft = this.position.moveSingle('left', this.startCoordinator[3], deltaX)

    this.emit.resize('left-top', updatedTop ?? updatedLeft ?? 0)
  }

  /**
   * Updates position for left-bottom corner handle drag.
   *
   * Обновляет позицию при перетаскивании левого нижнего угла.
   * @param deltaX horizontal percentage delta / горизонтальное процентное смещение
   * @param deltaY vertical percentage delta / вертикальное процентное смещение
   */
  protected updateLeftBottom(deltaX: number, deltaY: number): void {
    const updatedBottom = this.position.moveSingle('bottom', this.startCoordinator[2], -deltaY)
    const updatedLeft = this.position.moveSingle('left', this.startCoordinator[3], deltaX)

    this.emit.resize('left-bottom', updatedBottom ?? updatedLeft ?? 0)
  }

  /**
   * Updates position for center area drag.
   *
   * Обновляет позицию при перетаскивании центральной области.
   * @param deltaX horizontal percentage delta / горизонтальное процентное смещение
   * @param deltaY vertical percentage delta / вертикальное процентное смещение
   */
  protected updateCenter(deltaX: number, deltaY: number): void {
    this.position.moveCenter(this.startCoordinator, deltaX, deltaY)

    this.emit.resize('center')
  }
}
