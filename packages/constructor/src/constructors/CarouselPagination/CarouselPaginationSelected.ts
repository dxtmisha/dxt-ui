// ai-none

import { computed, ref, watch, type ComputedRef, type Ref, type WatchStopHandle } from 'vue'
import {
  type ConstrEmit,
  DesignLifecycleAbstract,
  toNumber
} from '@dxtmisha/functional'

import type { ModelInclude } from '../../classes/ModelInclude'

import type { CarouselPaginationProps } from './props'
import type { CarouselPaginationEmits } from './types'

/**
 * Class for managing slide selection, total count, state synchronization, and navigation transitions.
 *
 * Класс для управления выбором слайда, общим количеством элементов, синхронизацией состояния и навигационными переходами.
 */
export class CarouselPaginationSelected extends DesignLifecycleAbstract {
  /** Stop handle for the reactive props watcher / Функция остановки реактивного наблюдателя свойств */
  protected stopWatch?: WatchStopHandle

  /**
   * Constructor for CarouselPaginationSelected.
   *
   * Конструктор для CarouselPaginationSelected.
   * @param props input configuration properties / входные конфигурационные свойства
   * @param model getter returning model synchronization manager / функция, возвращающая менеджер синхронизации модели
   * @param emits event emitter callback / функция обратного вызова для генерации событий
   */
  constructor(
    protected readonly props: Readonly<CarouselPaginationProps>,
    protected readonly model?: () => ModelInclude<number>,
    protected readonly emits?: ConstrEmit<CarouselPaginationEmits>
  ) {
    super()

    this.update()
  }

  /** Internal active slide ref synchronized with v-model / Внутренняя ссылка на активный слайд, синхронизированная с v-model */
  readonly item: Ref<number> = ref<number>(1)

  /** Total item count / Общее количество элементов */
  readonly total: ComputedRef<number> = computed(() => {
    const count = toNumber(this.props.count)

    return Number.isFinite(count) ? Math.max(0, Math.floor(count)) : 0
  })

  /**
   * Returns the current active slide index.
   *
   * Возвращает текущий индекс активного слайда.
   * @returns active slide index / индекс активного слайда
   */
  readonly get = (): number => this.item.value

  /**
   * Sets the active slide index and emits relevant events.
   *
   * Устанавливает индекс активного слайда и испускает соответствующие события.
   * @param index slide index / индекс слайда
   */
  readonly set = (index: number): void => {
    const normalizedIndex = this.toIndex(index)

    if (this.setItem(normalizedIndex)) {
      this.emits?.('change', normalizedIndex)
      this.model?.().emit(normalizedIndex)
    }
  }

  /**
   * Advances to the next slide.
   *
   * Переходит к следующему слайду.
   */
  readonly next = (): void => {
    if (this.item.value < this.total.value) {
      this.set(this.item.value + 1)
    }
  }

  /**
   * Moves to the previous slide.
   *
   * Переходит к предыдущему слайду.
   */
  readonly previous = (): void => {
    if (this.item.value > 1) {
      this.set(this.item.value - 1)
    }
  }

  /**
   * Registers reactive watchers for selection and count props on mount.
   *
   * Регистрирует реактивные наблюдатели для свойств выбора и количества при монтировании.
   */
  override readonly onMounted = (): void => {
    this.stopWatch?.()
    this.update()
    this.stopWatch = watch(
      () => [
        this.props.selected,
        this.props.modelSelected,
        this.props.count
      ],
      this.update
    )
  }

  /**
   * Stops registered reactive watchers on unmount.
   *
   * Останавливает зарегистрированные реактивные наблюдатели при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = undefined
  }

  /**
   * Sets the internal slide index if it differs from current value.
   *
   * Устанавливает внутренний индекс слайда, если он отличается от текущего значения.
   * @param index new slide index / новый индекс слайда
   * @returns true if value was changed / true, если значение изменилось
   */
  protected setItem(index: number): boolean {
    if (this.item.value !== index) {
      this.item.value = index
      return true
    }

    return false
  }

  /**
   * Updates the internal selected item from props and clamps to total.
   *
   * Обновляет внутренний выбранный элемент из свойств с ограничением по total.
   */
  protected readonly update = (): void => {
    this.setItem(
      this.toIndex(this.props.selected ?? this.props.modelSelected ?? this.item.value)
    )
  }

  /**
   * Converts and clamps the slide index to a valid range.
   *
   * Преобразует и ограничивает индекс слайда допустимым диапазоном.
   * @param index slide index / индекс слайда
   * @returns normalized slide index / нормализованный индекс слайда
   */
  protected toIndex(index?: number | string): number {
    const totalCount = this.total.value

    if (totalCount > 0) {
      const rawValue = toNumber(index ?? 1)

      if (Number.isFinite(rawValue) && rawValue >= 1) {
        return Math.min(totalCount, Math.floor(rawValue))
      }
    }

    return 1
  }
}
