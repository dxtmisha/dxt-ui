// ai-none

import {
  computed,
  type Ref
} from 'vue'
import {
  type ConstrBind,
  forEach,
  isArray,
  isNumber
} from '@dxtmisha/functional'

import { ImageBackground } from './ImageBackground'
import type { ImageLazy } from './ImageLazy'
import { ImagePosition } from './ImagePosition'
import { ImageType } from './ImageType'

import { type ImageAttrs, type ImagePictureList, ImageTypeValue } from './basicTypes'
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
   * Constructor for creating a manager for the img tag.
   *
   * Конструктор для создания менеджера для тега img.
   * @param props input data / входные данные
   * @param element image element / элемент изображения
   * @param type class for working with types / класс для работы с типами
   * @param position class for working with position / класс для работы с позицией
   * @param background class for working with background / класс для работы с фоном
   * @param lazy class for working with lazy loading / класс для работы с ленивой загрузкой
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly type: ImageType,
    protected readonly position: ImagePosition,
    protected readonly background: ImageBackground,
    protected readonly lazy: ImageLazy
  ) {
  }

  /**
   * Calculates all properties for binding to the element.
   *
   * Вычисляет все свойства для привязки к элементу.
   * @returns attributes for binding / атрибуты для привязки
   */
  readonly binds = computed<ConstrBind<ImageAttrs>>(
    () => {
      const attrs: ConstrBind<any> = {
        key: 'img'
      }

      if (this.is()) {
        attrs.src = this.background.imageSrc
        attrs.alt = this.props.alt ?? ''
        attrs.width = '100%'
        attrs.height = '100%'
        attrs.style = this.styles

        if (this.props.fetchPriority) {
          attrs.fetchPriority = this.props.fetchPriority
        }

        if (this.props.lazy) {
          attrs.loading = this.lazy.isLazy() ? 'lazy' : 'auto'
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

    return forEach(
      this.props.picture,
      (value, media) => {
        return {
          key: media,
          srcset: value,
          media: `(width >= ${media})`
        }
      }
    ) as ImagePictureList
  })

  /**
   * Returns styles for binding to the element.
   *
   * Возвращает стили для привязки к элементу.
   * @returns styles object / объект стилей
   */
  get styles(): Record<string, any> {
    const styles: any = {
      'object-position': `${this.position.x} ${this.position.y}`,
      '--sys-transform-originX': this.position.x,
      '--sys-transform-originY': this.position.y
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
    return Boolean(this.props.tagImg)
      && this.isType()
  }

  /**
   * Determines whether to use the picture tag.
   *
   * Определяет, использовать ли тег picture.
   * @returns true if picture tag is used / true, если тег picture используется
   */
  isPicture(): boolean {
    return this.is() && Boolean(this.props.picture)
  }

  /**
   * Checks if the source is a file, image URL or binary buffer.
   *
   * Проверяет, является ли источник файлом, URL изображения или бинарным буфером.
   * @returns true if type matches / true, если тип совпадает
   */
  protected isType(): boolean {
    const type = this.type.item.value
    return type === ImageTypeValue.file
      || type === ImageTypeValue.image
      || type === ImageTypeValue.array
  }

  /**
   * Checks if the size is contained or cover.
   *
   * Проверяет, является ли размер contain или cover.
   * @returns true if size matches / true, если размер совпадает
   */
  protected isSize(): boolean {
    const size = this.background.size.value

    return Boolean(size && size.match('[% ]'))
  }

  /**
   * Returns the value for the transform scale.
   *
   * Возвращает значение для свойства transform scale.
   * @returns scale value / значение масштаба
   */
  protected getSize(): string | undefined {
    return this.background.size.value
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

    if (typeof this.props.srcset === 'string') {
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
