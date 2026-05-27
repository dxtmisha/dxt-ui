import { isArray, type Undefined } from '@dxtmisha/functional'

import type { ImageCoordinatorItem, ImageSize } from './basicTypes'
import type { ImageProps } from './props'

/**
 * Full coordinate array [top, right, bottom, left] /
 * Полный массив координат [сверху, справа, снизу, слева]
 */
type ImageCoordinatorItemFull = [number, number, number, number]

/**
 * A class for calculating the central part of the image by its coordinates.
 * It handles coordinate normalization (1 to 4 values) and calculates
 * background positioning/sizing based on the selected focus area.
 *
 * Класс для вычисления центральной части изображения по его координатам.
 * Обрабатывает нормализацию координат (от 1 до 4 значений) и вычисляет
 * позиционирование/размер фона на основе выбранной области фокуса.
 */
export class ImageCoordinator {
  /**
   * Constructor for creating a coordinate calculation manager.
   *
   * Конструктор для создания менеджера вычисления координат.
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props: ImageProps
  ) {
  }

  /**
   * Returns coordinates normalized to four values.
   *
   * Возвращает координаты, нормализованные до четырех значений.
   * @returns full coordinates array / массив полных координат
   */
  get coordinator(): ImageCoordinatorItemFull {
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
  }

  /**
   * Returns the sizes for the background-position property by coordinates.
   *
   * Возвращает размеры для свойства background-position по координатам.
   * @returns background position sizes / размеры позиционирования фона
   */
  get size(): ImageSize {
    const coordinator = this.coordinator

    return {
      width: 100 - coordinator[1] - coordinator[3],
      height: 100 - coordinator[2] - coordinator[0]
    }
  }

  /**
   * Returns the values for the background-size property.
   *
   * Возвращает значения для свойства background-size.
   * @returns background sizes as percentage strings / размеры фона в виде процентных строк
   */
  get backgroundSize(): ImageSize<string> {
    const item = this.size
    const width = item.width === 0 ? 100 : item.width
    const height = item.height === 0 ? 100 : item.height

    return {
      width: `${100 / width * 100}%`,
      height: `${100 / height * 100}%`
    }
  }

  /**
   * Checks if there are coordinates for calculation.
   *
   * Проверяет, есть ли координаты для вычисления.
   * @returns true if valid coordinates are present / true, если присутствуют валидные координаты
   */
  is(): this is { coordinator: Exclude<ImageCoordinatorItem, Undefined> } {
    const coordinator = this.props.coordinator

    return isArray(coordinator)
      && coordinator.length > 0
      && coordinator.length < 5
  }
}
