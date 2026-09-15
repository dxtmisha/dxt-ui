import { computed, type ComputedRef, type ToRefs } from 'vue'
import { toNumber } from '@dxtmisha/functional'

import type { CarouselPaginationItem } from './basicTypes'
import type { CarouselPaginationProps } from './props'

/**
 * Helper class for managing calculations of items, dynamic bullets, fraction, and progress.
 *
 * Вспомогательный класс для управления расчетами элементов, динамических буллетов, дроби и прогресса.
 */
export class CarouselPaginationItems {
  /**
   * Constructor
   * @param props input reactive properties / входные реактивные свойства
   * @param refs raw properties wrapped as refs / исходные свойства в виде ссылок (refs)
   */
  constructor(
    protected readonly props: CarouselPaginationProps,
    protected readonly refs: ToRefs<CarouselPaginationProps>
  ) {}

  /** Total item count / Общее количество элементов */
  readonly total: ComputedRef<number> = computed(() => {
    return Math.max(0, Math.floor(toNumber(this.props.count) || 0))
  })

  /** Current active slide index (1-based, clamped between 1 and total) / Индекс активного слайда (начиная с 1, ограниченный между 1 и total) */
  readonly active: ComputedRef<number> = computed(() => {
    const rawValue = toNumber(this.props.selected ?? this.props.modelSelected ?? 1) || 1
    const totalCount = this.total.value

    if (totalCount <= 0) {
      return 1
    }

    return Math.max(1, Math.min(totalCount, Math.floor(rawValue)))
  })

  /**
   * Checks whether the pagination should be hidden.
   *
   * Проверяет, должна ли пагинация быть скрыта.
   * @returns true if pagination should be hidden / true, если пагинация должна быть скрыта
   */
  get isHide(): boolean {
    return Boolean(this.props.hideIfOne && this.total.value <= 1)
  }

  /**
   * Formatted fraction string (e.g. '1 / 5').
   *
   * Отформатированная строка дроби (например, '1 / 5').
   * @returns formatted fraction string / отформатированная строка дроби
   */
  get fractionText(): string {
    return `${this.active.value} / ${this.total.value}`
  }

  /**
   * Progress percentage between 0 and 100.
   *
   * Процент прогресса от 0 до 100.
   * @returns progress percentage between 0 and 100 / процент прогресса от 0 до 100
   */
  get percent(): number {
    const totalCount = this.total.value

    if (totalCount <= 0) {
      return 0
    }

    return (this.active.value / totalCount) * 100
  }

  /** List of pagination items / Список элементов пагинации */
  readonly list: ComputedRef<CarouselPaginationItem[]> = computed(() => {
    const totalCount = this.total.value

    if (totalCount <= 0) {
      return []
    }

    const activeIndex = this.active.value
    const isDynamic = Boolean(this.props.dynamic)
    const visibleCount = Math.max(3, toNumber(this.props.visible) || 5)

    const items: CarouselPaginationItem[] = []

    for (let current = 1; current <= totalCount; current += 1) {
      const isSelected = current === activeIndex
      let scale = 1

      if (isDynamic && totalCount > visibleCount) {
        const half = Math.floor(visibleCount / 2)
        let windowStart = activeIndex - half
        let windowEnd = activeIndex + half

        if (windowStart < 1) {
          windowStart = 1
          windowEnd = visibleCount
        } else if (windowEnd > totalCount) {
          windowEnd = totalCount
          windowStart = totalCount - visibleCount + 1
        }

        if (current < windowStart || current > windowEnd) {
          scale = 0
        } else if (current === windowStart && windowStart > 1) {
          scale = 0.5
        } else if (current === windowEnd && windowEnd < totalCount) {
          scale = 0.5
        } else if (current === windowStart + 1 && windowStart > 1) {
          scale = 0.75
        } else if (current === windowEnd - 1 && windowEnd < totalCount) {
          scale = 0.75
        }
      }

      if (!isDynamic || scale > 0) {
        items.push({
          index: current,
          selected: isSelected,
          scale
        })
      }
    }

    return items
  })
}
