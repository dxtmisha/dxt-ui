import { computed } from 'vue'
import { isArray, type Undefined } from '@dxtmisha/functional'

import type { ImageCoordinatorItem, ImageSize } from './basicTypes'
import type { ImageProps } from './props'

type ImageCoordinatorItemFull = [number, number, number, number]

/**
 * A class for calculating the central part of the image by its coordinates.
 *
 * Класс для вычисления центральной части изображения по его координатам.
 */
export class ImageCoordinator {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(
    protected readonly props: ImageProps
  ) {
  }

  /**
   * Returns coordinates.
   *
   * Возвращает координаты.
   */
  readonly coordinator = computed<ImageCoordinatorItemFull>(() => {
    if (this.is()) {
      const coordinator: number[] = this.props.coordinator

      switch (coordinator.length) {
        case 1:
          return [
            coordinator[0] ?? 0,
            coordinator[0] ?? 0,
            coordinator[0] ?? 0,
            coordinator[0] ?? 0
          ]
        case 2:
          return [
            coordinator[0] ?? 0,
            coordinator[1] ?? 0,
            coordinator[0] ?? 0,
            coordinator[1] ?? 0
          ]

        case 3:
          return [
            coordinator[0] ?? 0,
            coordinator[1] ?? 0,
            coordinator[2] ?? 0,
            coordinator[1] ?? 0
          ]
        case 4:
          return coordinator as ImageCoordinatorItemFull
      }
    }

    return [0, 0, 0, 0]
  })

  /**
   * Returns the sizes for the background-position property by coordinates.
   *
   * Возвращает размеры для свойства background-position по координатам.
   */
  readonly size = computed<ImageSize>(() => {
    const coordinator = this.coordinator.value

    return {
      width: 100 - coordinator[1] - coordinator[3],
      height: 100 - coordinator[2] - coordinator[0]
    }
  })

  /**
   * Checks if there are coordinates for calculation.
   *
   * Проверяет, есть ли координаты для вычисления.
   */
  is(): this is { coordinator: Exclude<ImageCoordinatorItem, Undefined> } {
    const coordinator = this.props.coordinator

    return isArray(coordinator)
      && coordinator.length > 0
      && coordinator.length < 5
  }

  /**
   * Returns the values for the background property.
   *
   * Возвращает значения для свойства background.
   */
  getSize(): ImageSize<string> {
    const item = this.size.value
    const width = item.width === 0 ? 100 : item.width
    const height = item.height === 0 ? 100 : item.height

    return {
      width: `${100 / width * 100}%`,
      height: `${100 / height * 100}%`
    }
  }
}
