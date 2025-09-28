import { computed } from 'vue'
import { isFilled, type NumberOrString } from '@dxtmisha/functional'

import { ImageData } from './ImageData'
import { ImageCoordinator } from './ImageCoordinator'
import { ImageAdaptiveItem } from './ImageAdaptiveItem'

import { type ImageProps } from './props'

/**
 * A class for getting the value of background.
 *
 * Класс для получения значения background.
 */
export class ImageBackground {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param data image data/ данные изображения
   * @param coordinator object for working with coordinates/ объект для работы с координатами
   * @param adaptive an object for working with adapted scaling/ объект для работы с адаптированным масштабированием
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly data: ImageData,
    protected readonly coordinator: ImageCoordinator,
    protected readonly adaptive: ImageAdaptiveItem
  ) {
  }

  /**
   * Returns values for the background-image property.
   *
   * Возвращает значения для свойства background-image.
   */
  readonly image = computed<string | null>(() => {
    const image = this.data.image.value

    switch (typeof image) {
      case 'string':
        return `url("${image}")`
      case 'object':
        return `url("${image.src}")`
      default:
        return null
    }
  })

  /**
   * Returns values for the background property.
   *
   * Возвращает значения для свойства background.
   */
  readonly size = computed<string | null>(() => {
    if (this.coordinator.is()) {
      return this.getSizeByCoordinator()
    }

    if (this.adaptive.is()) {
      const size = this.adaptive.getBackgroundSize()

      if (size) {
        return size
      }
    }

    return this.getSizeForItem()
  })

  /**
   * Checks if the object is an image.
   *
   * Проверяет, является ли объект изображением.
   */
  isImage() {
    return Boolean(this.image.value)
  }

  /**
   * Returns the value for the background-size property.
   *
   * Возвращает значение для свойства background-size.
   * @param width width value/ значение ширины
   * @param height height value/ значение высоты
   */
  protected getSize(
    width: NumberOrString,
    height: NumberOrString
  ): string | null {
    const image = this.data.image.value

    if (typeof image === 'object') {
      return image.height < image.width ? `auto ${height}` : `${width} auto`
    }

    return null
  }

  /**
   * Returns sizes according to the coordinator property.
   *
   * Возвращает размеры по свойству координатора.
   */
  protected getSizeByCoordinator(): string | null {
    const {
      width,
      height
    } = this.coordinator.getSize()

    return this.getSize(width, height)
  }

  /**
   * Returns the scaling sizes.
   *
   * Возвращает размеры масштабирования.
   */
  protected getSizeForItem(): string | null {
    const size = this.props.size

    if (isFilled(size)) {
      return size.toString().match(/%$/) ? this.getSize(size, size) : size.toString()
    }

    return null
  }
}
