import { computed, onUnmounted, type Ref, watch } from 'vue'
import {
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrStyles,
  isString
} from '@dxt-ui/functional'

import { ImageType } from './ImageType'
import { ImageData } from './ImageData'

import { ImageCoordinator } from './ImageCoordinator'
import { ImagePosition } from './ImagePosition'
import { ImageAdaptiveItem } from './ImageAdaptiveItem'
import { ImageBackground } from './ImageBackground'

import { ImageTypeValue } from './imageTypes'
import type { ImageEmits } from './types'
import type { ImageProps } from './props'

/**
 * Base class for working with images and icons.
 *
 * Базовый класс для работы с изображениями и иконками.
 */
export class Image {
  readonly type: ImageType
  readonly data: ImageData

  readonly coordinator: ImageCoordinator
  readonly position: ImagePosition
  readonly adaptiveItem: ImageAdaptiveItem
  readonly background: ImageBackground

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param className class name/ название класса
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string,
    protected readonly emits?: ConstrEmit<ImageEmits>
  ) {
    this.type = new ImageType(props)
    this.data = new ImageData(props, this.type)

    this.coordinator = new ImageCoordinator(props)
    this.position = new ImagePosition(props, this.coordinator)

    this.adaptiveItem = new ImageAdaptiveItem(
      props,
      this.data,
      element
    )

    this.background = new ImageBackground(
      props,
      this.data,
      this.coordinator,
      this.adaptiveItem
    )

    if (emits) {
      watch(this.data.image, (image) => {
        emits('load', {
          type: this.type.item.value,
          image
        })
      })
    }

    onUnmounted(() => this.adaptiveItem.remove())
  }

  /**
   * Values for the text. Text is used for the type of icon that works as a background.
   *
   * Значения для текста. Текст используется для типа иконки, который работает как фон.
   */
  readonly text = computed<string | undefined>(() => {
    const type = this.type.item.value

    if (type === ImageTypeValue.pdf) {
      const image = this.data.image.value

      if (isString(image)) {
        return image
      }
    }

    const value = this.props.value

    if (
      type
      && isString(value)
      && [
        'filled',
        'outlined',
        'round',
        'sharp',
        'two-tone',
        'material'
      ].indexOf(type) !== -1
    ) {
      return value.replace(/^(filled|outlined|round|sharp|two-tone)-/, '')
    }

    return undefined
  })

  /**
   * Values for the class.
   *
   * Значения для класса.
   */
  readonly classes = computed<ConstrClassObject>(() => {
    const type = this.type.item.value
    const data = {
      [`${this.className}--type--${type}`]: type !== undefined,
      [`${this.className}--background`]: this.background.isImage(),
      notranslate: true
    }

    switch (type) {
      case 'filled':
      case 'outlined':
      case 'round':
      case 'sharp':
      case 'two-tone':
      case 'material':
        data['material-icons'] = true
        break
    }

    return data
  })

  /**
   * Calculates all properties for the style of the element.
   *
   * Вычисляет все свойства для стиля элемента.
   */
  readonly styles = computed<ConstrStyles>(() => {
    const value = this.props.value

    if (value) {
      switch (this.type.item.value) {
        case ImageTypeValue.file:
        case ImageTypeValue.image:
          return {
            'background-image': this.background.image.value,
            'background-size': this.background.size.value,
            'background-position-x': this.position.x.value,
            'background-position-y': this.position.y.value
          }
        case ImageTypeValue.icon:
          return {
            'background-image': this.background.image.value
          }
        case ImageTypeValue.flag:
          return {
            'background-image': this.background.image.value,
            'background-size': 'contain'
          }
        case ImageTypeValue.public:
          return { 'mask-image': this.background.image.value }
        case ImageTypeValue.color:
          if (isString(value)) {
            return { 'background-color': value }
          }
      }
    }

    return {} as ConstrStyles
  })
}
