// ai-none

import { isArray, isNumber } from '@dxtmisha/functional'

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
   * Checks if there are coordinates for calculation.
   *
   * Проверяет, есть ли координаты для вычисления.
   * @param props input data / входные данные
   * @returns true if valid coordinates are present / true, если присутствуют валидные координаты
   */
  static is(props?: ImageProps): boolean {
    const coordinator = props?.coordinator

    return isArray<ImageCoordinatorItem | unknown[]>(coordinator)
      && coordinator.length > 0
      && coordinator.length < 5
  }

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
   * Returns coordinates normalized to four values between 0 and 100.
   *
   * Возвращает координаты, нормализованные до четырех значений в диапазоне от 0 до 100.
   * @returns full coordinates array / массив полных координат
   */
  get coordinator(): ImageCoordinatorItemFull {
    const coordinator = this.props.coordinator

    if (this.is() && coordinator) {
      const top = this.getValue(coordinator[0])
      const right = coordinator.length > 1 ? this.getValue(coordinator[1]) : top
      const bottom = coordinator.length > 2 ? this.getValue(coordinator[2]) : top
      const left = coordinator.length > 3 ? this.getValue(coordinator[3]) : right

      return [top, right, bottom, left]
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
  is(): boolean {
    return ImageCoordinator.is(this.props)
  }

  /**
   * Converts a numeric coordinate to the range from 0 to 100, returning 0 for invalid values.
   *
   * Приводит числовую координату к диапазону от 0 до 100, возвращая 0 для неподходящих значений.
   * @param value coordinate value / значение координаты
   * @returns normalized coordinate / нормализованная координата
   */
  protected getValue(value: unknown): number {
    return isNumber(value) ? Math.min(100, Math.max(0, Number(value))) : 0
  }
}
