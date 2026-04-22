import { computed } from 'vue'
import {
  ImageCoordinator,
  type ImageCoordinatorItemFull,
  type ImageSize
} from '@dxtmisha/constructor-basic'

import type { ImageProps } from './props'

/**
 * A class for calculating the central part of the image by its coordinates.
 *
 * Класс для вычисления центральной части изображения по его координатам.
 */
export class ImageCoordinatorRef extends ImageCoordinator {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(
    protected readonly props: ImageProps
  ) {
    super()
  }

  /** Returns coordinates/ Возвращает координаты */
  readonly coordinator = computed<ImageCoordinatorItemFull>(
    () => this.initCoordinator()
  )

  /**
   * Returns the sizes for the background-position property by coordinates/
   * Возвращает размеры для свойства background-position по координатам
   */
  readonly size = computed<ImageSize>(() => this.initSize())

  /**
   * Returns the coordinates of the image's center.
   *
   * Возвращает координаты центра изображения.
   */
  get(): ImageCoordinatorItemFull {
    return this.coordinator.value
  }

  /**
   * Returns the size of the image.
   *
   * Возвращает размер изображения.
   */
  getSize(): ImageSize {
    return this.size.value
  }

  /**
   * Returns the coordinates of the central part.
   *
   * Возвращает координаты центральной части.
   */
  protected getCoordinator(): any {
    return this.props.coordinator
  }
}
