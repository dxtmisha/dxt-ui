// ai-none

import { watch } from 'vue'
import {
  type ConstrEmit,
  DesignLifecycleAbstract,
  isObject
} from '@dxtmisha/functional'

import { ImageData } from './ImageData'
import type { ImageType } from './ImageType'

import type { ImageEmits } from './types'
import type { ImageTypeItem } from './basicTypes'

/**
 * Class for working with image events.
 *
 * Класс для работы с событиями изображения.
 */
export class ImageEvent extends DesignLifecycleAbstract {
  /**
   * Checks whether the image type can emit a decoded load event.
   *
   * Проверяет, может ли тип изображения испускать событие завершения декодирования.
   * @param type image source type / тип источника изображения
   * @returns true for decoded image types / true для декодируемых типов изображений
   */
  static is(type?: ImageTypeItem): boolean {
    return ImageData.isImage(type)
  }

  /**
   * Constructor for initializing image load event watching.
   *
   * Конструктор для инициализации отслеживания события загрузки изображения.
   * @param data function returning ImageData object / функция, возвращающая объект ImageData
   * @param type function returning ImageType object / функция, возвращающая объект ImageType
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly data: () => ImageData,
    protected readonly type: () => ImageType,
    protected readonly emits?: ConstrEmit<ImageEmits>
  ) {
    super()
  }

  /** Callback after component mounting / Обработчик после монтирования компонента */
  override readonly onMounted = (): void => {
    watch(this.data().image, this.onLoad, { immediate: true })
  }

  /**
   * Emits load event when image data is loaded.
   *
   * Вызывает событие load при загрузке данных изображения.
   */
  readonly onLoad = (): void => {
    const image = this.data().image.value

    if (isObject(image)) {
      this.emits?.('load', {
        type: this.type().get(),
        image
      })
    }
  }
}
