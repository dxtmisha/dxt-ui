// ai-none

import {
  computed,
  type CSSProperties
} from 'vue'
import {
  forEach,
  isArray,
  isNumber,
  isString
} from '@dxtmisha/functional'

import { ImageLazy } from './ImageLazy'
import type { ImageBackground } from './ImageBackground'
import type { ImagePosition } from './ImagePosition'
import type { ImageType } from './ImageType'

import { type ImageAttrs, type ImagePictureItem, type ImagePictureList, ImageTypeValue } from './basicTypes'
import type { ImageProps } from './props'

/**
 * A class for working with the img tag.
 * It manages attributes and styles for the HTML img and picture elements.
 *
 * Класс для работы с тегом img.
 * Управляет атрибутами и стилями для элементов HTML img и picture.
 */
export class ImageImg {
  /**
   * Determines whether to use the img tag based on properties.
   *
   * Определяет, использовать ли тег img на основе свойств.
   * @param props input data / входные данные
   * @returns true if tag is used / true, если тег используется
   */
  static is(props?: ImageProps): boolean {
    return Boolean(props?.tagImg)
  }

  /**
   * Determines whether to use the picture tag based on properties.
   *
   * Определяет, использовать ли тег picture на основе свойств.
   * @param props input data / входные данные
   * @returns true if picture tag is used / true, если тег picture используется
   */
  static isPicture(props?: ImageProps): boolean {
    return ImageImg.is(props)
      && Boolean(props?.picture)
  }

  /**
   * Constructor for creating a manager for the img tag.
   *
   * Конструктор для создания менеджера для тега img.
   * @param props input data / входные данные
   * @param type class for working with types / класс для работы с типами
   * @param position class for working with position / класс для работы с позицией
   * @param background class for working with background / класс для работы с фоном
   * @param lazy class for working with lazy loading / класс для работы с ленивой загрузкой
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly type: () => ImageType,
    protected readonly position: () => ImagePosition,
    protected readonly background: () => ImageBackground,
    protected readonly lazy: () => ImageLazy
  ) {
  }

  /**
   * Calculates all properties for binding to the element.
   *
   * Вычисляет все свойства для привязки к элементу.
   * @returns attributes for binding / атрибуты для привязки
   */
  readonly binds = computed<ImageAttrs>(
    () => {
      const attrs: ImageAttrs = {
        key: 'img'
      }

      if (this.is()) {
        attrs.src = this.background().imageSrc
        attrs.alt = this.props.alt ?? ''
        attrs.width = '100%'
        attrs.height = '100%'
        attrs.style = this.styles

        if (this.props.fetchPriority) {
          attrs.fetchPriority = this.props.fetchPriority
        }

        if (this.props.decoding) {
          attrs.decoding = this.props.decoding
        }

        if (ImageLazy.is(this.props)) {
          attrs.loading = this.lazy().isLazy() ? 'lazy' : 'auto'
        }

        if (this.props.srcset) {
          attrs.srcset = this.getSrcset()
        }
      }

      return attrs
    }
  )

  /**
   * Calculates the picture sources for different resolutions.
   *
   * Вычисляет источники picture для разных разрешений.
   * @returns list of picture sources / список источников изображений
   */
  readonly picture = computed<ImagePictureList | undefined>(() => {
    if (!this.props.picture) {
      return undefined
    }

    if (isArray(this.props.picture)) {
      return this.props.picture
    }

    return forEach<string, ImagePictureItem, Record<string, string>>(
      this.props.picture,
      (value, media) => {
        return {
          key: media,
          srcset: value,
          media: `(width >= ${isNumber(media) ? `${media}px` : media})`
        }
      }
    )
  })

  /**
   * Returns styles for binding to the element.
   *
   * Возвращает стили для привязки к элементу.
   * @returns styles object / объект стилей
   */
  get styles(): CSSProperties {
    const position = this.position()
    const styles: CSSProperties = {
      'object-position': `${position.x} ${position.y}`,
      '--sys-transform-originX': position.x,
      '--sys-transform-originY': position.y
    }

    if (this.isSize()) {
      styles['--sys-transform-scale'] = this.getSize()
    }

    return styles
  }

  /**
   * Determines whether to use the img tag.
   *
   * Определяет, использовать ли тег img.
   * @returns true if tag is used / true, если тег используется
   */
  is(): boolean {
    return ImageImg.is(this.props)
      && this.isType()
  }

  /**
   * Determines whether to use the picture tag.
   *
   * Определяет, использовать ли тег picture.
   * @returns true if picture tag is used / true, если тег picture используется
   */
  isPicture(): boolean {
    return this.is()
      && Boolean(this.props.picture)
  }

  /**
   * Checks if the background size is a custom percentage or compound scale value.
   *
   * Проверяет, является ли размер фона пользовательским процентным или составным значением масштаба.
   * @returns true if size contains a scale value / true, если размер содержит значение масштаба
   */
  protected isSize(): boolean {
    const size = this.background().size.value

    return Boolean(size && /[% ]/.test(size))
  }

  /**
   * Checks if the source is a file, image URL or binary buffer.
   *
   * Проверяет, является ли источник файлом, URL изображения или бинарным буфером.
   * @returns true if type matches / true, если тип совпадает
   */
  protected isType(): boolean {
    const type = this.type().get()

    return type === ImageTypeValue.file
      || type === ImageTypeValue.image
      || type === ImageTypeValue.array
  }

  /**
   * Returns the value for the transform scale.
   *
   * Возвращает значение для свойства transform scale.
   * @returns scale value / значение масштаба
   */
  protected getSize(): string | undefined {
    return this.background().size.value
      ?.replace('auto', '')
      ?.trim()
  }

  /**
   * Returns the srcset attribute value.
   *
   * Возвращает значение атрибута srcset.
   * @returns srcset string or undefined / строка srcset или undefined
   */
  protected getSrcset(): string | undefined {
    if (!this.props.srcset) {
      return undefined
    }

    if (isString(this.props.srcset)) {
      return this.props.srcset
    }

    return Object.entries(this.props.srcset)
      .map(([key, value]) => `${value} ${this.toSrcsetKey(key)}`)
      .join(', ')
  }

  /**
   * Converts the srcset key to a string.
   *
   * Преобразует ключ srcset в строку.
   * @param key key / ключ
   * @returns srcset key string / строка ключа srcset
   */
  protected toSrcsetKey(key: string | number): string {
    return isNumber(key) ? `${key}w` : String(key)
  }
}
