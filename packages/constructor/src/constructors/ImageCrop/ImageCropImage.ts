import { ref, watch } from 'vue'
import {
  type ConstrEmit,
  type ConstrStyles,
  isObject
} from '@dxtmisha/functional'

import type { ImageEventData } from '../Image'
import type { ImageCropEmits } from './types'
import type { ImageCropProps } from './props'

/**
 * Class managing image loading state, aspect ratio calculation, and styles for ImageCrop.
 *
 * Класс для управления состоянием загрузки изображения, вычислением соотношения сторон и стилями для ImageCrop.
 */
export class ImageCropImage {
  /** Loading state of the image / Состояние загрузки изображения */
  protected readonly loading = ref<boolean>(false)

  /** Aspect ratio of the loaded image / Соотношение сторон загруженного изображения */
  protected readonly aspectRatio = ref<string | undefined>()

  /** Property names map / Карта имен свойств */
  protected readonly property: {
    /** CSS property for aspect ratio / Свойство CSS для соотношения сторон */
    aspectRatio: string
    /** CSS property for body width / Свойство CSS для ширины body */
    width: string
    /** CSS property for body height / Свойство CSS для высоты body */
    height: string
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param className class name / название класса
   * @param props input data / входные данные
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    className: string,
    protected readonly props: ImageCropProps,
    protected readonly emits?: ConstrEmit<ImageCropEmits>
  ) {
    this.property = {
      aspectRatio: `--${className}-sys-aspect-ratio`,
      width: `--${className}-sys-width`,
      height: `--${className}-sys-height`
    }

    watch(
      () => this.props.image,
      () => {
        this.aspectRatio.value = undefined
        this.loading.value = false
      }
    )
  }

  /**
   * Returns dynamic CSS variable styles for the root element.
   *
   * Возвращает динамические стили через CSS-переменные для корневого элемента.
   * @returns styles object / объект стилей
   */
  get styles(): ConstrStyles {
    if (this.aspectRatio.value) {
      return {
        [this.property.aspectRatio]: this.aspectRatio.value,
        [this.property.width]: 'auto',
        [this.property.height]: 'auto'
      }
    }

    return {}
  }

  /**
   * Returns whether the image is currently loading.
   *
   * Возвращает, загружается ли изображение в данный момент.
   * @returns true if the image is loading / true, если изображение загружается
   */
  isLoading(): boolean {
    return this.loading.value
  }

  /**
   * Handles image load event, updates aspect ratio and loading state.
   *
   * Обрабатывает событие загрузки изображения, обновляет соотношение сторон и состояние загрузки.
   * @param event image event payload data / данные события изображения
   */
  readonly onLoad = (event: ImageEventData): void => {
    this.loading.value = false

    const image = event.image
    if (isObject(image) && 'width' in image && 'height' in image) {
      const width = Number(image.width)
      const height = Number(image.height)

      if (width > 0 && height > 0) {
        this.aspectRatio.value = `${width} / ${height}`
      }
    }

    this.emits?.('load', event)
  }
}
