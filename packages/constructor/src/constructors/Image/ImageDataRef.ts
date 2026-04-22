import { computedAsync } from '@dxtmisha/functional'
import {
  ImageData,
  type ImageEventItem
} from '@dxtmisha/constructor-basic'

import { ImageTypeRef } from './ImageTypeRef'

import { type ImageProps } from './props'

/**
 * A class for obtaining image or icon data.
 *
 * Класс для получения данных изображения или иконки.
 */
export class ImageDataRef extends ImageData {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type image type/ тип изображения
   */
  constructor(
    protected readonly props: ImageProps,
    type: ImageTypeRef
  ) {
    super(type)
  }

  /**
   * Asynchronously calculates and returns the image data/
   * Асинхронно вычисляет и возвращает данные изображения
   */
  readonly image = computedAsync(async () => this.initData())

  /**
   * Returns the image data.
   *
   * Возвращает данные изображения.
   */
  getImage(): ImageEventItem {
    return this.image.value
  }

  /**
   * Returns the value of the image.
   *
   * Возвращает значение изображения.
   */
  protected getValue(): any {
    return this.props.value
  }

  /**
   * Returns whether lazy loading is enabled.
   *
   * Возвращает, включена ли отложенная загрузка.
   */
  protected getLazy(): boolean | undefined {
    return this.props.lazy
  }

  /**
   * Returns the URL of the image.
   *
   * Возвращает URL изображения.
   */
  protected getUrl(): string | undefined {
    return this.props.url
  }
}
