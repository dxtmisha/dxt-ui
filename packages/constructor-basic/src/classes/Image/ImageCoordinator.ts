import { isArray, type Undefined } from '@dxtmisha/functional-basic'

import type {
  ImageCoordinatorItem,
  ImageCoordinatorItemFull,
  ImageSize
} from '../../types/imageTypes'

/**
 * A class for calculating the central part of the image by its coordinates.
 *
 * Класс для вычисления центральной части изображения по его командам.
 */
export abstract class ImageCoordinator {
  /**
   * Checks if there are coordinates for calculation.
   *
   * Проверяет, есть ли координаты для вычисления.
   */
  is(): this is { getCoordinator: () => Exclude<ImageCoordinatorItem, Undefined> } {
    const coordinator = this.getCoordinator()

    return isArray(coordinator)
      && coordinator.length > 0
      && coordinator.length < 5
  }

  /**
   * Returns the coordinates of the image's center.
   *
   * Возвращает координаты центра изображения.
   */
  abstract get(): ImageCoordinatorItemFull

  /**
   * Returns the size of the image.
   *
   * Возвращает размер изображения.
   */
  abstract getSize(): ImageSize

  /**
   * Returns the values for the background property.
   *
   * Возвращает значения для свойства background.
   */
  getBackgroundSize(): ImageSize<string> {
    const item = this.getSize()
    const width = item.width === 0 ? 100 : item.width
    const height = item.height === 0 ? 100 : item.height

    return {
      width: `${100 / width * 100}%`,
      height: `${100 / height * 100}%`
    }
  }

  /**
   * Returns the coordinates of the central part.
   *
   * Возвращает координаты центральной части.
   */
  protected abstract getCoordinator(): number[] | any | undefined

  /**
   * Normalizes the coordinate values.
   *
   * Нормализует значения координат.
   */
  protected initCoordinator(): ImageCoordinatorItemFull {
    if (this.is()) {
      const coordinator: number[] = this.getCoordinator()

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
  }

  /**
   * Initializes the image size based on the coordinates.
   *
   * Инициализирует размер изображения на основе координат.
   */
  protected initSize(): ImageSize {
    const coordinator = this.getCoordinator()

    return {
      width: 100 - coordinator[1] - coordinator[3],
      height: 100 - coordinator[2] - coordinator[0]
    }
  }
}
