import type { Ref } from 'vue'
import {
  type ConstrClassObject,
  type DesignName,
  type ConstrEmit,
  type ConstrStyles,
  isFilled,
  isString
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude'
import type { AriaList } from '../../types/ariaTypes'

import { ImageType } from './ImageType'
import { ImageData } from './ImageData'

import { ImageCoordinator } from './ImageCoordinator'
import { ImagePosition } from './ImagePosition'
import { ImageAdaptiveItem } from './ImageAdaptiveItem'
import { ImageBackground } from './ImageBackground'
import { ImageImg } from './ImageImg'
import { ImageLazy } from './ImageLazy'

import { type ImageBinds, ImageTypeValue, type ImageValueBinds } from './basicTypes'
import type { ImageEmits } from './types'
import type { ImageProps } from './props'

/**
 * Base class for working with images and icons.
 *
 * Базовый класс для работы с изображениями и иконками.
 */
export class Image {
  /** Object for working with client-side rendering / Объект для работы с рендерингом на стороне клиента */
  readonly clientOnly: ClientOnlyInclude

  /** Image type manager / Менеджер типа изображения */
  readonly type: ImageType

  /** Image data manager / Менеджер данных изображения */
  readonly data: ImageData

  /** Image coordinates manager / Менеджер координат изображения */
  readonly coordinator: ImageCoordinator

  /** Image position manager / Менеджер позиции изображения */
  readonly position: ImagePosition

  /** Adaptive image item manager / Менеджер адаптивного элемента изображения */
  readonly adaptiveItem: ImageAdaptiveItem

  /** Image background manager / Менеджер фона изображения */
  readonly background: ImageBackground

  /** Image lazy loading manager / Менеджер ленивой загрузки изображения */
  readonly lazy: ImageLazy

  /** Image tag manager / Менеджер тега изображения */
  readonly img: ImageImg

  /**
   * Connects the image helpers in dependency order.
   *
   * Соединяет помощники изображения в порядке зависимостей.
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.ImageAdaptiveItemConstructor class for working with adaptive image item/ класс для работы с адаптивным элементом изображения
   * @param constructors.ImageBackgroundConstructor class for working with image background/ класс для работы с фоном изображения
   * @param constructors.ImageCoordinatorConstructor class for working with image coordinates/ класс для работы с координатами изображения
   * @param constructors.ImageDataConstructor class for working with image data/ класс для работы с данными изображения
   * @param constructors.ImageImgConstructor class for working with image tag/ класс для работы с тегом изображения
   * @param constructors.ImageLazyConstructor class for working with image lazy loading / класс для работы с ленивой загрузкой изображения
   * @param constructors.ImagePositionConstructor class for working with image position/ класс для работы с позицией изображения
   * @param constructors.ImageTypeConstructor class for working with image type/ класс для работы с типом изображения
   * @param constructors.ClientOnlyConstructor class for working with ClientOnly / класс для работы с ClientOnly
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly naming: DesignName,
    protected readonly emits?: ConstrEmit<ImageEmits>,
    constructors: {
      ImageAdaptiveItemConstructor?: typeof ImageAdaptiveItem
      ImageBackgroundConstructor?: typeof ImageBackground
      ImageCoordinatorConstructor?: typeof ImageCoordinator
      ImageDataConstructor?: typeof ImageData
      ImageImgConstructor?: typeof ImageImg
      ImageLazyConstructor?: typeof ImageLazy
      ImagePositionConstructor?: typeof ImagePosition
      ImageTypeConstructor?: typeof ImageType
      ClientOnlyConstructor?: typeof ClientOnlyInclude
    } = {}
  ) {
    const {
      ImageAdaptiveItemConstructor = ImageAdaptiveItem,
      ImageBackgroundConstructor = ImageBackground,
      ImageCoordinatorConstructor = ImageCoordinator,
      ImageDataConstructor = ImageData,
      ImageImgConstructor = ImageImg,
      ImageLazyConstructor = ImageLazy,
      ImagePositionConstructor = ImagePosition,
      ImageTypeConstructor = ImageType,
      ClientOnlyConstructor = ClientOnlyInclude
    } = constructors

    this.clientOnly = new ClientOnlyConstructor({ clientOnly: true })
    this.lazy = new ImageLazyConstructor(
      props,
      element
    )

    this.type = new ImageTypeConstructor(props, this.clientOnly)
    this.data = new ImageDataConstructor(
      props,
      this.clientOnly,
      this.type,
      this.lazy,
      this.emits
    )

    this.coordinator = new ImageCoordinatorConstructor(props)
    this.position = new ImagePositionConstructor(props, this.coordinator)

    this.adaptiveItem = new ImageAdaptiveItemConstructor(
      props,
      this.clientOnly,
      this.data,
      element
    )

    this.background = new ImageBackgroundConstructor(
      props,
      this.data,
      this.coordinator,
      this.adaptiveItem
    )

    this.img = new ImageImgConstructor(
      this.props,
      element,
      this.type,
      this.position,
      this.background,
      this.lazy
    )
  }

  /**
   * Returns the accessible name or decorative state of the image.
   *
   * Возвращает доступное имя или декоративное состояние изображения.
   * @returns image ARIA attributes / ARIA-атрибуты изображения
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.role('img'),
      ...(isFilled(this.props.alt)
        ? AriaStaticInclude.label(this.props.alt)
        : AriaStaticInclude.hidden())
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
    const type = this.type.item.value
    const data: ConstrClassObject = {
      [this.naming.getStatusClass(`type--${type}`)]: type !== undefined,
      [this.naming.getStatusClass('background')]: this.background.isImage(),
      notranslate: true
    }

    if (this.img.is()) {
      data[this.naming.getStatusClass('img')] = true
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
      switch (this.type.item.value) {
        case ImageTypeValue.file:
        case ImageTypeValue.image:
        case ImageTypeValue.array:
          return {
            'background-image': this.background.image,
            'background-size': this.background.size.value,
            'background-position-x': this.position.x,
            'background-position-y': this.position.y
          }
        case ImageTypeValue.icon:
          return {
            'background-image': this.background.image
          }
        case ImageTypeValue.flag:
          return {
            'background-image': this.background.image,
            'background-size': 'contain'
          }
        case ImageTypeValue.public:
          return { 'mask-image': this.background.image }
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
      data: this.data.image.value
    }
  }
}
