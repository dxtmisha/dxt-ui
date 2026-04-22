import { computed } from 'vue'
import {
  ImageType,
  type ImageTypeItem
} from '@dxtmisha/constructor-basic'

import type { ImageProps } from './props'

/**
 * Class for working with the image type.
 *
 * Класс для работы с типом изображения.
 */
export class ImageTypeRef extends ImageType {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(
    protected readonly props: ImageProps
  ) {
    super()
  }

  /** Get the image type/ Получения типа изображения */
  readonly item = computed<ImageTypeItem>(() => this.initType())

  /**
   * Returns the image type.
   *
   * Возвращает тип изображения.
   */
  getType(): ImageTypeItem {
    return this.item.value
  }

  /**
   * Returns the value of the image.
   *
   * Возвращает значение изображения.
   */
  protected getValue(): string | any | undefined {
    return this.props.value
  }
}
