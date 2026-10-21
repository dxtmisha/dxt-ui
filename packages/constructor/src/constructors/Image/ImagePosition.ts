// ai-none

import { ImageCoordinator } from './ImageCoordinator'

import type { ImageProps } from './props'

/**
 * A class for obtaining data for the background-position property.
 *
 * Класс для получения данных для свойства background-position.
 */
export class ImagePosition {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param coordinator coordinates for margins/ координаты для отступов
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly coordinator: () => ImageCoordinator
  ) {
  }

  /**
   * Returns the position on the left.
   *
   * Возвращает позицию слева.
   * @returns horizontal position / горизонтальная позиция
   */
  get x(): string {
    if (ImageCoordinator.is(this.props)) {
      const coordinator = this.coordinator()

      return `${coordinator.coordinator[3] + (coordinator.size.width / 2)}%`
    }

    return this.props.x?.toString() || 'center'
  }

  /**
   * Returns the position on the top.
   *
   * Возвращает позицию сверху.
   * @returns vertical position / вертикальная позиция
   */
  get y(): string {
    if (ImageCoordinator.is(this.props)) {
      const coordinator = this.coordinator()

      return `${coordinator.coordinator[0] + (coordinator.size.height / 2)}%`
    }

    return this.props.y?.toString() || 'center'
  }
}
