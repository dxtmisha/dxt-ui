// ai-none

import { watch } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import type { ImageData } from './ImageData'
import type { ImageType } from './ImageType'

import type { ImageEmits } from './types'

/**
 * Class for working with image events.
 *
 * Класс для работы с событиями изображения.
 */
export class ImageEvent {
  /**
   * Constructor
   * @param type function returning ImageType object / функция, возвращающая объект ImageType
   * @param data function returning ImageData object / функция, возвращающая объект ImageData
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly type: () => ImageType,
    protected readonly data: () => ImageData,
    protected readonly emits?: ConstrEmit<ImageEmits>
  ) {
    watch(this.data().image, this.onLoad, { immediate: true })
  }

  /**
   * Emits load event when image data is loaded.
   *
   * Вызывает событие load при загрузке данных изображения.
   */
  readonly onLoad = (): void => {
    const image = this.data().image.value

    if (typeof image === 'object') {
      this.emits?.('load', {
        type: this.type().get(),
        image
      })
    }
  }
}
