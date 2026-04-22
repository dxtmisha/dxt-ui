import { computed } from 'vue'

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
    protected readonly coordinator: ImageCoordinator
  ) {
  }

  /**
   * Returns the position on the left.
   *
   * Возвращает позицию слева.
   */
  readonly x = computed<string>(() => {
    if (this.coordinator.is()) {
      return `${this.coordinator.coordinator.value[3] + (this.coordinator.size.value.width / 2)}%`
    }

    return this.props.x?.toString() || 'center'
  })

  /**
   * Returns the position on the top.
   *
   * Возвращает позицию сверху.
   */
  readonly y = computed<string>(() => {
    if (this.coordinator.is()) {
      return `${this.coordinator.coordinator.value[0] + (this.coordinator.size.value.height / 2)}%`
    }

    return this.props.y?.toString() || 'center'
  })
}
