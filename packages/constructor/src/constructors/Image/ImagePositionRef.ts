import { computed } from 'vue'
import { ImagePosition } from '@dxtmisha/constructor-basic'

import { ImageCoordinatorRef } from './ImageCoordinatorRef'

import type { ImageProps } from './props'

/**
 * A class for collecting data for the background-position property.
 *
 * Класс для получения данных для свойства background-position.
 */
export class ImagePositionRef extends ImagePosition {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param coordinator coordinates for margins/ координаты для отступов
   */
  constructor(
    protected readonly props: ImageProps,
    coordinator: ImageCoordinatorRef
  ) {
    super(coordinator)
  }

  /** Returns the position on the left/ Возвращает позицию слева */
  readonly x = computed<string>(() => this.initX())

  /** Returns the position on the top/ Возвращает позицию сверху */
  readonly y = computed<string>(() => this.initY())

  /**
   * Returns the position on the left.
   *
   * Возвращает позицию слева.
   */
  getX(): string {
    return this.x.value
  }

  /**
   * Returns the position on the top.
   *
   * Возвращает позицию сверху.
   */
  getY(): string {
    return this.y.value
  }

  /**
   * Returns the position on the left.
   *
   * Возвращает позицию по горизонтали.
   */
  protected getPropX(): string | number | undefined {
    return this.props.x
  }

  /**
   * Returns the position on the top.
   *
   * Возвращает позицию по вертикали.
   */
  protected getPropY(): string | number | undefined {
    return this.props.y
  }
}
