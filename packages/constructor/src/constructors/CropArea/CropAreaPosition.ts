// ai-none

import { ref, watch, type Ref, type WatchStopHandle } from 'vue'
import { DesignLifecycleAbstract, isArray } from '@dxtmisha/functional'

import type { ModelInclude } from '../../classes/ModelInclude'
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
export class CropAreaPosition extends DesignLifecycleAbstract {
  /** Map of coordinate index and opposite coordinate index / Карта индексов координат и противоположных координат */
  protected static readonly indexMap: CropAreaPositionMap = {
    top: { index: 0, opposite: 2 },
    right: { index: 1, opposite: 3 },
    bottom: { index: 2, opposite: 0 },
    left: { index: 3, opposite: 1 }
  }

  /**
   * Checks whether position synchronization should be activated for the component.
   *
   * Проверяет, должна ли активироваться синхронизация позиции для компонента.
   * @param props component properties / свойства компонента
   * @returns true if component is not readonly / true, если компонент не в режиме только для чтения
   */
  static is(props?: Readonly<CropAreaProps>): boolean {
    return !props?.readonly
  }

  /** Stop handle for the root element ref watcher / Функция остановки наблюдателя ссылки на корневой элемент */
  protected watchStopElement?: WatchStopHandle

  /** Stop handle for the reactive value prop watcher / Функция остановки реактивного наблюдателя свойства value */
  protected watchStopValue?: WatchStopHandle

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props component properties / свойства компонента
   * @param model getter returning model synchronization manager / функция, возвращающая менеджер синхронизации модели
   * @param style getter returning style manager / функция, возвращающая менеджер стилей
   */
  constructor(
    protected readonly props: Readonly<CropAreaProps>,
    protected readonly model: () => ModelInclude<CropAreaCoordinator>,
    protected readonly style: () => CropAreaStyle
  ) {
    super()

    const value = this.props.modelValue ?? this.props.value

    if (value) {
      this.item.value = this.normalize(value)
    }
  }

  /** Reactive coordinator ref [top, right, bottom, left] / Реактивная ссылка на координаты [сверху, справа, снизу, слева] */
  readonly item: Ref<CropAreaCoordinator> = ref<CropAreaCoordinator>([0, 0, 0, 0])

  /**
   * Returns minimum size constraint.
   *
   * Возвращает ограничение минимального размера.
   * @returns minimum size in percentage / минимальный размер в процентах
   */
  get min(): number {
    const value = Number(this.props.min ?? 8)

    return Number.isFinite(value) && value >= 0 ? value : 8
  }

  /**
   * Returns maximum size constraint.
   *
   * Возвращает ограничение максимального размера.
   * @returns maximum size in percentage / максимальный размер в процентах
   */
  get max(): number {
    const value = Number(this.props.max ?? 100)

    return Number.isFinite(value) && value >= 0 ? value : 100
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
   * Returns current coordinator array.
   *
   * Возвращает текущий массив координат.
   * @returns coordinator values / значения координат
   */
  readonly get = (): CropAreaCoordinator => {
    return [...this.item.value]
  }

  /**
   * Sets new coordinator values, updates styles, and emits model updates when changed.
   *
   * Устанавливает новые значения координат, обновляет стили и испускает обновления модели при изменении.
   * @param coordinator coordinator array / массив координат
   */
  readonly set = (coordinator: CropAreaCoordinator): void => {
    const next = this.normalize(coordinator)
    const changed = !this.isSame(this.item.value, next)

    this.item.value = next
    this.style().set(this.item.value)

    if (changed) {
      this.model().emit(this.get())
    }
  }

  /**
   * Resets coordinator to initial default values.
   *
   * Сбрасывает координаты к начальным значениям по умолчанию.
   */
  readonly reset = (): void => {
    const next = this.normalize(this.props.modelValue ?? this.props.value)
    const changed = !this.isSame(this.item.value, next)

    this.item.value = next
    this.style().set(this.item.value)

    if (changed) {
      this.model().emit(this.get())
    }
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
    if (
      this.props.disabled
      || !Number.isFinite(deltaX)
      || !Number.isFinite(deltaY)
    ) {
      return this.get()
    }

    const [startTop, startRight, startBottom, startLeft] = startCoordinator
    const boxWidth = this.round(100 - startLeft - startRight)
    const boxHeight = this.round(100 - startTop - startBottom)

    let newTop = this.round(startTop + deltaY)
    let newLeft = this.round(startLeft + deltaX)

    if (newTop < 0) {
      newTop = 0
    } else if (newTop + boxHeight > 100) {
      newTop = this.round(100 - boxHeight)
    }

    if (newLeft < 0) {
      newLeft = 0
    } else if (newLeft + boxWidth > 100) {
      newLeft = this.round(100 - boxWidth)
    }

    const newBottom = this.round(100 - newTop - boxHeight)
    const newRight = this.round(100 - newLeft - boxWidth)
    const next: CropAreaCoordinator = [newTop, newRight, newBottom, newLeft]

    if (!this.isSame(this.item.value, next)) {
      this.item.value = next
      this.style().set(this.item.value)
      this.model().emit(this.get())
    }

    return this.get()
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
    if (
      this.isDirectionDisabled(direction)
      || !Number.isFinite(startValue)
      || !Number.isFinite(delta)
    ) {
      return undefined
    }

    const { index, opposite } = CropAreaPosition.indexMap[direction]
    let candidate = this.round(startValue + delta)

    if (candidate < 0) {
      candidate = 0
    }

    const oppositeValue = this.item.value[opposite]
    const size = this.round(100 - candidate - oppositeValue)

    if (size < this.min || size > this.max) {
      return undefined
    }

    if (this.item.value[index] !== candidate) {
      const coordinator: CropAreaCoordinator = [...this.item.value]

      coordinator[index] = candidate
      this.item.value = coordinator
      this.style().set(this.item.value)
      this.model().emit(this.get())

      return candidate
    }

    return undefined
  }

  /**
   * Applies initial styles and registers reactive watchers on component mount.
   *
   * Применяет начальные стили и регистрирует реактивные наблюдатели при монтировании компонента.
   */
  override readonly onMounted = (): void => {
    this.stopWatch()
    this.style().set(this.item.value)

    this.watchStopValue = watch(
      () => this.props.modelValue ?? this.props.value,
      (value) => {
        if (value) {
          this.updateFromValue(value)
        }
      },
      { deep: true }
    )

    this.watchStopElement = watch(
      () => this.style().getElement(),
      (element) => {
        if (element) {
          this.style().set(this.item.value)
        }
      }
    )
  }

  /**
   * Stops all reactive watchers on component unmount.
   *
   * Останавливает все реактивные наблюдатели при размонтировании компонента.
   */
  override readonly onUnmounted = (): void => {
    this.stopWatch()
  }

  /**
   * Checks whether two coordinator tuples contain identical values.
   *
   * Проверяет, содержат ли два кортежа координат одинаковые значения.
   * @param first first coordinator tuple / первый кортеж координат
   * @param second second coordinator tuple / второй кортеж координат
   * @returns true if all four coordinates match / true, если все четыре координаты совпадают
   */
  protected isSame(
    first: CropAreaCoordinator,
    second: CropAreaCoordinator
  ): boolean {
    return first[0] === second[0]
      && first[1] === second[1]
      && first[2] === second[2]
      && first[3] === second[3]
  }

  /**
   * Synchronizes internal coordinator state from external prop changes without feedback model emits.
   *
   * Синхронизирует внутреннее состояние координат из внешних изменений свойств без обратного испускания модели.
   * @param value incoming coordinator values / входящие значения координат
   */
  protected updateFromValue(value: CropAreaCoordinator | number[]): void {
    const next = this.normalize(value)

    if (!this.isSame(this.item.value, next)) {
      this.item.value = next
    }

    this.style().set(this.item.value)
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
        this.toCoordinate(value[0]),
        this.toCoordinate(value[1]),
        this.toCoordinate(value[2]),
        this.toCoordinate(value[3])
      ]
    }

    return [0, 0, 0, 0]
  }

  /**
   * Rounds a coordinate value to 1 decimal place.
   *
   * Округляет значение координаты до 1 знака после запятой.
   * @param value numeric value / числовое значение
   * @returns rounded value / округленное значение
   */
  protected round(value: number): number {
    const result = Math.round(value * 10) / 10

    return Object.is(result, -0) ? 0 : result
  }

  /**
   * Stops active reactive watchers.
   *
   * Останавливает активные реактивные наблюдатели.
   */
  protected stopWatch(): void {
    this.watchStopValue?.()
    this.watchStopValue = undefined

    this.watchStopElement?.()
    this.watchStopElement = undefined
  }

  /**
   * Safely converts an arbitrary value to a finite rounded coordinate.
   *
   * Безопасно преобразует произвольное значение в конечную округленную координату.
   * @param value raw coordinate value / исходное значение координаты
   * @returns finite rounded coordinate / конечная округленная координата
   */
  protected toCoordinate(value: unknown): number {
    const numeric = Number(value)

    return Number.isFinite(numeric) ? this.round(numeric) : 0
  }
}
