// ai-none

import type { Ref } from 'vue'
import { isDomRuntime } from '@dxtmisha/functional'

import type { SliderThumbMax } from './SliderThumbMax'
import type { SliderThumbMin } from './SliderThumbMin'

import { SliderFocusType } from './basicTypes'
import type { SliderPropsBasic } from './props'

/**
 * Class for managing element coordinates, layout percentages, and interaction positions for slider.
 *
 * Класс для управления координатами элементов, процентами размещения и позициями взаимодействия для слайдера.
 */
export class SliderElement {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input properties / входящие свойства
   * @param element container element reference / ссылка на элемент контейнера
   * @param maxElement getter returning max thumb handle manager / функция, возвращающая менеджер максимального ползунка
   * @param minElement getter returning min thumb handle manager / функция, возвращающая менеджер минимального ползунка
   */
  constructor(
    protected readonly props: Readonly<SliderPropsBasic>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly maxElement: () => SliderThumbMax,
    protected readonly minElement: () => SliderThumbMin
  ) {}

  /**
   * Returns BoundingClientRect for slider root container.
   *
   * Возвращает BoundingClientRect для корневого контейнера слайдера.
   * @returns DOMRect or undefined / DOMRect или undefined
   */
  get rectangle(): DOMRect | undefined {
    return this.element.value?.getBoundingClientRect()
  }

  /**
   * Checks whether the slider container uses right-to-left (RTL) text direction.
   *
   * Проверяет, использует ли контейнер слайдера направление текста справа налево (RTL).
   * @returns true if RTL direction is active / true, если активно направление RTL
   */
  isRtl(): boolean {
    if (!isDomRuntime()) {
      return false
    }

    const element = this.element.value

    if (element) {
      const closestDirection = element.closest('[dir]')?.getAttribute('dir')?.toLowerCase()

      if (closestDirection === 'rtl') {
        return true
      }

      if (closestDirection === 'ltr') {
        return false
      }

      if (typeof getComputedStyle === 'function') {
        return getComputedStyle(element).direction === 'rtl'
      }
    }

    return document.documentElement?.dir?.toLowerCase() === 'rtl'
      || document.dir?.toLowerCase() === 'rtl'
  }

  /**
   * Checks whether the slider is in vertical orientation.
   *
   * Проверяет, находится ли слайдер в вертикальной ориентации.
   * @returns true if vertical / true, если вертикальный
   */
  isVertical(): boolean {
    return Boolean(this.props.vertical)
  }

  /**
   * Calculates position percentage from coordinate along container element.
   *
   * Вычисляет процент позиции по координате вдоль элемента контейнера.
   * @param coordinate pointer coordinate / координата указателя
   * @param rectangle container BoundingClientRect / BoundingClientRect контейнера
   * @param isVertical vertical layout flag / флаг вертикального размещения
   * @returns calculated position percentage / вычисленный процент позиции
   */
  getMovePercent(
    coordinate: number,
    rectangle: DOMRect,
    isVertical: boolean = this.isVertical()
  ): number {
    if (isVertical) {
      if (rectangle.height <= 0) {
        return 0
      }

      return (100 / rectangle.height) * (rectangle.bottom - coordinate)
    }

    if (rectangle.width <= 0) {
      return 0
    }

    if (this.isRtl()) {
      return (100 / rectangle.width) * (rectangle.right - coordinate)
    }

    return (100 / rectangle.width) * (coordinate - rectangle.left)
  }

  /**
   * Determines closest handle type ('min' or 'max') for interaction coordinate.
   *
   * Определяет ближайший тип ползунка ('min' или 'max') для координаты взаимодействия.
   * @param coordinate input coordinate / координата ввода
   * @param isVertical vertical layout flag / флаг вертикальной ориентации
   * @returns focus type / тип фокуса
   */
  getTypeByCoordinate(
    coordinate: number,
    isVertical: boolean = Boolean(this.props.vertical)
  ): SliderFocusType {
    if (this.props.multiple) {
      const minRectangle = this.minElement().rectangle
      const maxRectangle = this.maxElement().rectangle

      if (
        minRectangle
        && maxRectangle
      ) {
        const minCenter = isVertical
          ? minRectangle.top + (minRectangle.height || 0) / 2
          : minRectangle.left + (minRectangle.width || 0) / 2
        const maxCenter = isVertical
          ? maxRectangle.top + (maxRectangle.height || 0) / 2
          : maxRectangle.left + (maxRectangle.width || 0) / 2
        const distanceMin = Math.abs(minCenter - coordinate)
        const distanceMax = Math.abs(maxCenter - coordinate)

        return distanceMin < distanceMax ? SliderFocusType.min : SliderFocusType.max
      }
    }

    return SliderFocusType.max
  }
}
