import { computed, ref, watch, type ComputedRef, type Ref, type ToRefs } from 'vue'
import { toNumber, type ConstrEmit } from '@dxtmisha/functional'

import type { CarouselPaginationEmits } from './types'
import type { CarouselPaginationProps } from './props'

/**
 * Class for managing slide selection, total count, state synchronization, and navigation transitions.
 *
 * Класс для управления выбором слайда, общим количеством элементов, синхронизацией состояния и навигационными переходами.
 */
export class CarouselPaginationSelected {
  /** Total item count / Общее количество элементов */
  readonly total: ComputedRef<number> = computed(() => {
    return Math.max(0, Math.floor(toNumber(this.props.count) || 0))
  })

  /** Internal active slide ref synchronized with v-model / Внутренняя ссылка на активный слайд, синхронизированная с v-model */
  readonly item: Ref<number> = ref<number>(1)

  /**
   * Constructor
   * @param props input configuration properties / входные конфигурационные свойства
   * @param refs reactive references of properties / реактивные ссылки свойств
   * @param emits event emitter callback / функция обратного вызова для генерации событий
   */
  constructor(
    protected readonly props: CarouselPaginationProps,
    protected readonly refs: ToRefs<CarouselPaginationProps>,
    protected readonly emits?: ConstrEmit<CarouselPaginationEmits>
  ) {
    watch(
      () => [
        this.props.selected,
        this.props.modelSelected,
        this.props.count
      ],
      this.update,
      { immediate: true, flush: 'sync' }
    )
  }

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
   * Converts and clamps the slide index to a valid range.
   *
   * Преобразует и ограничивает индекс слайда допустимым диапазоном.
   * @param index slide index / индекс слайда
   * @returns normalized slide index / нормализованный индекс слайда
   */
  protected toIndex(index?: number | string): number {
    const totalCount = this.total.value

    if (totalCount > 0) {
      const rawValue = toNumber(index ?? 1) || 1

      return Math.max(1, Math.min(totalCount, Math.floor(rawValue)))
    }

    return 1
  }

  /**
   * Updates the internal selected item from props and clamps to total.
   *
   * Обновляет внутренний выбранный элемент из свойств с ограничением по total.
   */
  protected update = (): void => {
    this.setItem(
      this.toIndex(this.props.selected ?? this.props.modelSelected)
    )
  }
}
