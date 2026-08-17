import { ref, watch } from 'vue'
import { isArray } from '@dxtmisha/functional'

import type { CropAreaStyle } from './CropAreaStyle'

import type {
  CropAreaCoordinator,
  CropAreaDirection,
  CropAreaDirectionSingle,
  CropAreaPositionMap
} from './basicTypes'
import type { CropAreaProps } from './props'

/**
 * Class managing CropArea coordinates and boundaries calculations.
 *
 * Класс, управляющий расчетом координат и границ CropArea.
 */
export class CropAreaPosition {
  /** Map of coordinate index and opposite coordinate index / Карта индексов координат и противоположных координат */
  protected static readonly indexMap: CropAreaPositionMap = {
    top: { index: 0, opposite: 2 },
    right: { index: 1, opposite: 3 },
    bottom: { index: 2, opposite: 0 },
    left: { index: 3, opposite: 1 }
  }

  /** Reactive coordinator ref [top, right, bottom, left] / Реактивная ссылка на координаты [сверху, справа, снизу, слева] */
  readonly item = ref<CropAreaCoordinator>([0, 0, 0, 0])

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props component properties / свойства компонента
   * @param style style manager / менеджер стилей
   */
  constructor(
    protected readonly props: CropAreaProps,
    protected readonly style: CropAreaStyle
  ) {
    this.item.value = this.normalize(props.value)

    watch(
      () => this.props.value,
      (value) => {
        if (value) {
          this.set(value)
        }
      },
      { deep: true }
    )
  }

  /**
   * Returns minimum size constraint.
   *
   * Возвращает ограничение минимального размера.
   * @returns minimum size in percentage / минимальный размер в процентах
   */
  get min(): number {
    return this.props.min ?? 8
  }

  /**
   * Returns current coordinator array.
   *
   * Возвращает текущий массив координат.
   * @returns coordinator values / значения координат
   */
  get(): CropAreaCoordinator {
    return [...this.item.value]
  }

  /**
   * Sets new coordinator values and updates styles.
   *
   * Устанавливает новые значения координат и обновляет стили.
   * @param coordinator coordinator array / массив координат
   */
  set(coordinator: CropAreaCoordinator): void {
    this.item.value = this.normalize(coordinator)
    this.style.set(this.item.value)
  }

  /**
   * Resets coordinator to initial default values.
   *
   * Сбрасывает координаты к начальным значениям по умолчанию.
   */
  reset(): void {
    this.item.value = this.normalize(this.props.value)
    this.style.set(this.item.value)
  }

  /**
   * Checks if specific direction resize is disabled.
   *
   * Проверяет, отключено ли изменение размера в указанном направлении.
   * @param direction direction identifier / идентификатор направления
   * @returns true if disabled / true, если отключено
   */
  isDirectionDisabled(direction: CropAreaDirection): boolean {
    if (this.props.disabled) {
      return true
    }

    if (
      (
        direction === 'top'
        || direction === 'left-top'
        || direction === 'right-top'
      )
      && this.props.disabledTop
    ) {
      return true
    }

    if (
      (
        direction === 'right'
        || direction === 'right-top'
        || direction === 'right-bottom'
      )
      && this.props.disabledRight
    ) {
      return true
    }

    if (
      (
        direction === 'bottom'
        || direction === 'left-bottom'
        || direction === 'right-bottom'
      )
      && this.props.disabledBottom
    ) {
      return true
    }

    if (
      (
        direction === 'left'
        || direction === 'left-top'
        || direction === 'left-bottom'
      )
      && this.props.disabledLeft
    ) {
      return true
    }

    return false
  }

  /**
   * Moves a single edge with boundary and minimum size validation.
   *
   * Перемещает отдельный край с валидацией границ и минимального размера.
   * @param direction edge direction / направление края
   * @param startValue start coordinate value / начальное значение координаты
   * @param delta pixel percentage delta / изменение в процентном выражении
   * @returns updated value or undefined if constrained / обновленное значение или undefined
   */
  moveSingle(
    direction: CropAreaDirectionSingle,
    startValue: number,
    delta: number
  ): number | undefined {
    if (this.isDirectionDisabled(direction)) {
      return undefined
    }

    const { index, opposite } = CropAreaPosition.indexMap[direction]
    let candidate = startValue + delta

    if (candidate < 0) {
      candidate = 0
    }

    const oppositeValue = this.item.value[opposite]

    if (100 - candidate - oppositeValue < this.min) {
      return undefined
    }

    if (this.item.value[index] !== candidate) {
      this.item.value[index] = candidate
      this.style.set(this.item.value)
      return candidate
    }

    return undefined
  }

  /**
   * Moves entire crop rectangle with boundary clamping.
   *
   * Перемещает весь прямоугольник кадрирования с удержанием в границах.
   * @param startCoordinator start coordinates / начальные координаты
   * @param deltaX horizontal percentage delta / горизонтальное изменение в процентах
   * @param deltaY vertical percentage delta / вертикальное изменение в процентах
   * @returns updated coordinator / обновленный массив координат
   */
  moveCenter(
    startCoordinator: CropAreaCoordinator,
    deltaX: number,
    deltaY: number
  ): CropAreaCoordinator {
    if (this.props.disabled) {
      return this.item.value
    }

    const [startTop, startRight, startBottom, startLeft] = startCoordinator
    const boxWidth = 100 - startLeft - startRight
    const boxHeight = 100 - startTop - startBottom

    let newTop = startTop + deltaY
    let newLeft = startLeft + deltaX

    if (newTop < 0) {
      newTop = 0
    } else if (newTop + boxHeight > 100) {
      newTop = 100 - boxHeight
    }

    if (newLeft < 0) {
      newLeft = 0
    } else if (newLeft + boxWidth > 100) {
      newLeft = 100 - boxWidth
    }

    const newBottom = 100 - newTop - boxHeight
    const newRight = 100 - newLeft - boxWidth

    this.item.value = [newTop, newRight, newBottom, newLeft]
    this.style.set(this.item.value)

    return this.item.value
  }

  /**
   * Normalizes input coordinator to 4-tuple.
   *
   * Нормализует входящие координаты к кортежу из 4 значений.
   * @param value raw coordinator input / исходные координаты
   * @returns normalized coordinates / нормализованные координаты
   */
  protected normalize(value?: CropAreaCoordinator | number[]): CropAreaCoordinator {
    if (isArray(value) && value.length === 4) {
      return [
        value[0] ?? 0,
        value[1] ?? 0,
        value[2] ?? 0,
        value[3] ?? 0
      ]
    }

    return [0, 0, 0, 0]
  }
}
