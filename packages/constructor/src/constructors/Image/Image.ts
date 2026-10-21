import { watch } from 'vue'
import {
  type ConstrClassObject,
  type ConstrItems,
  type ConstrStyles,
  DesignLogicAbstract,
  isFilled,
  isString
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import { ImageAdaptiveItem } from './ImageAdaptiveItem'
import { ImageBackground } from './ImageBackground'
import { ImageCoordinator } from './ImageCoordinator'
import { ImageData } from './ImageData'
import { ImageEvent } from './ImageEvent'
import { ImageImg } from './ImageImg'
import { ImageLazy } from './ImageLazy'
import { ImagePosition } from './ImagePosition'
import { ImageText } from './ImageText'
import { ImageType } from './ImageType'
import { ImageUint8Array } from './ImageUint8Array'

import type { AriaList } from '../../types/ariaTypes'
import { type ImageBinds, ImageTypeValue, type ImageValueBinds } from './basicTypes'
import type { ImageProps } from './props'
import type { ImageComponents, ImageEmits, ImageSlots } from './types'

/**
 * Image dependency constructors type.
 *
 * Тип конструкторов зависимостей изображения.
 */
export type ImageConstructors = {
  adaptiveItem: typeof ImageAdaptiveItem
  background: typeof ImageBackground
  coordinator: typeof ImageCoordinator
  data: typeof ImageData
  event: typeof ImageEvent
  img: typeof ImageImg
  lazy: typeof ImageLazy
  position: typeof ImagePosition
  text: typeof ImageText
  type: typeof ImageType
  uint8Array: typeof ImageUint8Array
}

/**
 * Base class for working with images and icons.
 *
 * Базовый класс для работы с изображениями и иконками.
 */
export class Image extends DesignLogicAbstract<
  HTMLElement,
  ImageComponents,
  ImageEmits,
  ImageSlots,
  ImageProps,
  ImageConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ImageConstructors> = {
    adaptiveItem: {
      item: ImageAdaptiveItem,
      parameters: () => [
        this.props,
        this.element,
        this.isMounted,
        () => this.i('data')
      ]
    },
    background: {
      item: ImageBackground,
      parameters: () => [
        this.props,
        () => this.i('data'),
        () => this.i('coordinator'),
        () => this.i('adaptiveItem')
      ]
    },
    coordinator: {
      item: ImageCoordinator,
      parameters: () => [this.props]
    },
    data: {
      item: ImageData,
      parameters: () => [
        this.props,
        this.isMounted,
        () => this.i('lazy'),
        () => this.i('type'),
        () => this.i('uint8Array')
      ]
    },
    event: {
      item: ImageEvent,
      parameters: () => [
        () => this.i('type'),
        () => this.i('data'),
        this.emits
      ]
    },
    img: {
      item: ImageImg,
      parameters: () => [
        this.props,
        this.element,
        this.i('type'),
        this.i('position'),
        this.i('background'),
        this.i('lazy')
      ]
    },
    lazy: {
      item: ImageLazy,
      parameters: () => [
        this.props,
        this.element
      ]
    },
    position: {
      item: ImagePosition,
      parameters: () => [
        this.props,
        () => this.i('coordinator')
      ]
    },
    text: {
      item: ImageText,
      parameters: () => [
        this.props,
        () => this.i('type'),
        () => this.i('data')
      ]
    },
    type: {
      item: ImageType,
      parameters: () => [this.props, this.isMounted]
    },
    uint8Array: {
      item: ImageUint8Array,
      parameters: () => [this.props]
    }
  }

  /** Callback after component mounting / Обработчик после монтирования компонента */
  protected override readonly onMounted = (): void => {
    watch(
      () => ImageAdaptiveItem.is(this.props),
      (isAdaptive) => {
        if (isAdaptive) {
          this.i('adaptiveItem')
        }
      },
      { immediate: true }
    )

    watch(
      () => this.i('data').isImage(),
      (isImage) => {
        if (isImage) {
          this.i('event')
        }
      },
      { immediate: true }
    )
  }

  /**
   * Returns the accessible name or decorative state of the image.
   *
   * Возвращает доступное имя или декоративное состояние изображения.
   * @returns image ARIA attributes / ARIA-атрибуты изображения
   */
  get aria(): AriaList {
    const data: AriaList = {
      ...AriaStaticInclude.role('img')
    }

    if (isFilled(this.props.alt)) {
      return {
        ...data,
        ...AriaStaticInclude.label(this.props.alt)
      }
    }

    return {
      ...data,
      ...AriaStaticInclude.hidden()
    }
  }

  /**
   * Returns the image root attributes, including accessibility bindings.
   *
   * Возвращает атрибуты корневого элемента изображения, включая привязки доступности.
   * @returns root element bindings / привязки корневого элемента
   */
  get binds(): ImageBinds {
    return {
      translate: 'no',
      ...this.aria
    }
  }

  /**
   * Values for the class.
   *
   * Значения для класса.
   * @returns image state and font classes / классы состояния и шрифта изображения
   */
  get classes(): ConstrClassObject {
    const type = this.i('type').get()
    const data: ConstrClassObject = {
      [this.naming.getStatusClass(['type', String(type)])]: Boolean(type),
      [this.naming.getStatusClass('background')]: this.i('background').isImage(),
      [this.naming.getStatusClass('img')]: this.i('img').is(),
      notranslate: true
    }

    switch (type) {
      case 'outlined':
        data['material-symbols-outlined'] = true
        break
      case 'round':
        data['material-symbols-rounded'] = true
        break
      case 'sharp':
        data['material-symbols-sharp'] = true
        break
      case 'material':
        data['material-icons'] = true
        break
    }

    return data
  }

  /**
   * Calculates all properties for the style of the element.
   *
   * Вычисляет все свойства для стиля элемента.
   * @returns image styles / стили изображения
   */
  get styles(): ConstrStyles {
    const value = this.props.value

    if (value) {
      switch (this.i('type').get()) {
        case ImageTypeValue.file:
        case ImageTypeValue.image:
        case ImageTypeValue.array:
          return {
            'background-image': this.i('background').image,
            'background-size': this.i('background').size.value,
            'background-position-x': this.i('position').x,
            'background-position-y': this.i('position').y
          }
        case ImageTypeValue.icon:
          return {
            'background-image': this.i('background').image
          }
        case ImageTypeValue.flag:
          return {
            'background-image': this.i('background').image,
            'background-size': 'contain'
          }
        case ImageTypeValue.public:
          return { 'mask-image': this.i('background').image }
        case ImageTypeValue.color:
          if (isString(value)) {
            return { 'background-color': value }
          }
      }
    }

    return {} as ConstrStyles
  }

  /**
   * Bindings for the image value.
   *
   * Привязки для значения изображения.
   * @returns value element bindings / привязки элемента значения
   */
  get valueBinds(): ImageValueBinds {
    return {
      key: 'value',
      data: this.i('data').image.value
    }
  }
}
