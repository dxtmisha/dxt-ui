// ai-none

import {
  applyTemplate,
  type ConstrEmit,
  type ConstrStyles,
  toNumber
} from '@dxtmisha/functional'
import { computed, type ComputedRef, type ToRefs } from 'vue'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import type { AriaList } from '../../types/ariaTypes'
import type {
  CarouselPaginationItem,
  CarouselPaginationItemBinds
} from './basicTypes'
import type { CarouselPaginationSelected } from './CarouselPaginationSelected'
import type { CarouselPaginationProps } from './props'
import type { CarouselPaginationEmits } from './types'

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
   * @param selected slide selection manager instance / экземпляр менеджера выбора слайдов
   * @param emits event emitter callback / функция обратного вызова для генерации событий
   */
  constructor(
    protected readonly props: CarouselPaginationProps,
    protected readonly refs: ToRefs<CarouselPaginationProps>,
    protected readonly selected: CarouselPaginationSelected,
    protected readonly emits?: ConstrEmit<CarouselPaginationEmits>
  ) { }

  /** List of pagination items / Список элементов пагинации */
  readonly list: ComputedRef<CarouselPaginationItem[]> = computed(() => {
    const totalCount = this.selected.total.value

    if (totalCount <= 0) {
      return []
    }

    const activeIndex = this.selected.item.value
    const isDynamic = this.isDynamic()
    const { windowStart, windowEnd } = this.getWindow()

    const items: CarouselPaginationItem[] = []

    for (let current = 1; current <= totalCount; current += 1) {
      const isSelected = current === activeIndex
      const scale = this.getScale(current, windowStart, windowEnd)

      if (
        !isDynamic
        || scale > 0
      ) {
        items.push({
          index: current,
          selected: isSelected,
          scale,
          style: this.getStyle(scale),
          tabindex: this.getTabindex(isSelected),
          aria: this.getAria(current, isSelected),
          binds: this.getBinds(current, isSelected, scale)
        })
      }
    }

    return items
  })

  /**
   * Formatted fraction string (e.g. '1 / 5').
   *
   * Отформатированная строка дроби (например, '1 / 5').
   * @returns formatted fraction string / отформатированная строка дроби
   */
  get fractionText(): string {
    return applyTemplate(
      this.props.template || '[active] / [total]',
      {
        active: this.selected.item.value,
        total: this.selected.total.value,
        count: this.selected.total.value,
        current: this.selected.item.value,
        item: this.selected.item.value,
        index: this.selected.item.value,
        selected: this.selected.item.value
      }
    )
  }

  /**
   * Progress percentage between 0 and 100.
   *
   * Процент прогресса от 0 до 100.
   * @returns progress percentage between 0 and 100 / процент прогресса от 0 до 100
   */
  get percent(): number {
    const totalCount = this.selected.total.value

    if (totalCount <= 0) {
      return 0
    }

    return (this.selected.item.value / totalCount) * 100
  }

  /**
   * Checks whether dynamic bullet scaling is enabled.
   *
   * Проверяет, включено ли динамическое масштабирование буллетов.
   * @returns true if dynamic mode is enabled / true, если включен динамический режим
   */
  isDynamic(): boolean {
    return Boolean(this.props.dynamic)
  }

  /**
   * Checks whether the pagination should be hidden.
   *
   * Проверяет, должна ли пагинация быть скрыта.
   * @returns true if pagination should be hidden / true, если пагинация должна быть скрыта
   */
  isHide(): boolean {
    return Boolean(this.props.hideIfOne && this.selected.total.value <= 1)
  }

  /**
   * Returns styles for a pagination item based on its scale.
   *
   * Возвращает стили для элемента пагинации на основе его масштаба.
   * @param scale scale factor / коэффициент масштаба
   * @returns styles object or undefined / объект стилей или undefined
   */
  getStyle(scale?: number): ConstrStyles | undefined {
    if (scale !== undefined && scale !== 1) {
      return {
        transform: `scale(${scale})`
      }
    }

    return undefined
  }

  /**
   * Calculates tabindex for an item.
   *
   * Вычисляет tabindex для элемента.
   * @param selected whether item is active / активен ли элемент
   * @returns tabindex number / значение tabindex
   */
  getTabindex(selected?: boolean): number {
    if (
      this.props.control !== false
      && selected
    ) {
      return 0
    }

    return -1
  }

  /**
   * Returns ARIA attributes for a pagination item.
   *
   * Возвращает ARIA-атрибуты для элемента пагинации.
   * @param index item index / индекс элемента
   * @param selected whether item is active / активен ли элемент
   * @returns ARIA attributes / ARIA-атрибуты
   */
  getAria(index: number, selected: boolean): AriaList {
    return {
      ...AriaStaticInclude.role('tab'),
      ...AriaStaticInclude.selected(selected),
      ...AriaStaticInclude.label(`Slide ${index}`),
      tabindex: this.getTabindex(selected)
    }
  }

  /**
   * Handles click on an indicator/bullet.
   *
   * Обрабатывает клик по индикатору/буллету.
   * @param event native mouse event / нативное событие мыши
   * @param index slide index / индекс слайда
   */
  readonly onClick = (event: MouseEvent, index: number): void => {
    if (this.props.control !== false) {
      this.selected.set(index)
      this.emits?.('click', event, index)
      this.emits?.('clickLite', index)
    }
  }

  /**
   * Returns binds for a pagination item button.
   *
   * Возвращает привязки для кнопки элемента пагинации.
   * @param index item index / индекс элемента
   * @param selected whether item is active / активен ли элемент
   * @param scale scale factor / коэффициент масштаба
   * @returns binds object / объект привязок
   */
  getBinds(
    index: number,
    selected: boolean,
    scale?: number
  ): CarouselPaginationItemBinds {
    return {
      'key': index,
      'type': 'button',
      'data-index': index,
      'style': this.getStyle(scale),
      'tabindex': this.getTabindex(selected),
      ...this.getAria(index, selected),
      'onClick': (event: MouseEvent) => this.onClick(event, index)
    }
  }

  /**
   * Calculates the scale factor for an item in dynamic mode.
   *
   * Вычисляет коэффициент масштаба для элемента в динамическом режиме.
   * @param current current item index / текущий индекс элемента
   * @param windowStart start index of visible window / начальный индекс видимого окна
   * @param windowEnd end index of visible window / конечный индекс видимого окна
   * @returns scale factor between 0 and 1 / коэффициент масштаба от 0 до 1
   */
  protected getScale(
    current: number,
    windowStart: number,
    windowEnd: number
  ): number {
    if (!this.isDynamic()) {
      return 1
    }

    if (
      current < windowStart
      || current > windowEnd
    ) {
      return 0
    }

    const totalCount = this.selected.total.value

    if (current === windowStart && windowStart > 1) {
      return 0.5
    }

    if (current === windowEnd && windowEnd < totalCount) {
      return 0.5
    }

    if (current === windowStart + 1 && windowStart > 1) {
      return 0.75
    }

    if (current === windowEnd - 1 && windowEnd < totalCount) {
      return 0.75
    }

    return 1
  }

  /**
   * Calculates the number of visible dynamic bullets.
   *
   * Вычисляет количество видимых динамических буллетов.
   * @returns number of visible items (minimum 3, default 5) / количество видимых элементов (минимум 3, по умолчанию 5)
   */
  protected getVisible(): number {
    return Math.max(3, toNumber(this.props.visible) || 5)
  }

  /**
   * Calculates visible window boundaries for dynamic bullets.
   *
   * Вычисляет границы видимого окна для динамических буллетов.
   * @returns window start and end boundaries / границы начала и конца окна
   */
  protected getWindow(): { windowStart: number, windowEnd: number } {
    const totalCount = this.selected.total.value
    const visibleCount = this.getVisible()

    if (
      !this.isDynamic()
      || totalCount <= visibleCount
    ) {
      return {
        windowStart: 1,
        windowEnd: totalCount
      }
    }

    const half = Math.floor(visibleCount / 2)
    let windowStart = this.selected.item.value - half
    let windowEnd = this.selected.item.value + half

    if (windowStart < 1) {
      windowStart = 1
      windowEnd = visibleCount
    } else if (windowEnd > totalCount) {
      windowEnd = totalCount
      windowStart = totalCount - visibleCount + 1
    }

    return {
      windowStart,
      windowEnd
    }
  }
}
