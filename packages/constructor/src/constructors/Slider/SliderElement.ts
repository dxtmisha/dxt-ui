import type { Ref } from 'vue'

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
   * Constructor
   * @param props input properties / входящие свойства
   * @param element container element reference / ссылка на элемент контейнера
   * @param maxElement max thumb handle manager / менеджер максимального ползунка
   * @param minElement min thumb handle manager / менеджер минимального ползунка
   */
  constructor(
    protected readonly props: SliderPropsBasic,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly maxElement: SliderThumbMax,
    protected readonly minElement: SliderThumbMin
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
    isVertical: boolean = Boolean(this.props.vertical)
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
    const minRectangle = this.minElement.rectangle
    const maxRectangle = this.maxElement.rectangle

    if (
      this.props.multiple
      && minRectangle
      && maxRectangle
    ) {
      const positionProperty = isVertical ? 'top' : 'left'
      const distanceMin = Math.abs(minRectangle[positionProperty] - coordinate)
      const distanceMax = Math.abs(maxRectangle[positionProperty] - coordinate)

      return distanceMin < distanceMax ? SliderFocusType.min : SliderFocusType.max
    }

    return SliderFocusType.max
  }
}
