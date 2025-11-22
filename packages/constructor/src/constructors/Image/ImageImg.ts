import { computed } from 'vue'
import { type ConstrBind, forEach, isArray, isNumber } from '@dxtmisha/functional'

import { ImageType } from './ImageType'
import { ImagePosition } from './ImagePosition'
import { ImageBackground } from './ImageBackground'

import { type ImageAttrs, type ImagePictureList, ImageTypeValue } from './basicTypes'
import type { ImageProps } from './props'

/**
 * A class for working with the img tag.
 *
 * Класс для работы с тегом img.
 */
export class ImageImg {
  constructor(
    protected readonly props: ImageProps,
    protected readonly type: ImageType,
    protected readonly position: ImagePosition,
    protected readonly background: ImageBackground
  ) {
  }

  /**
   * Determines whether to use the img tag/ Определяет, использовать ли тег img
   */
  readonly is = computed<boolean>(() => {
    return Boolean(this.props.tagImg)
      && this.isType()
  })

  /**
   * Determines whether to use the picture tag/ Определяет, использовать ли тег picture
   */
  readonly isPicture = computed(() => this.is.value && Boolean(this.props.picture))

  /**
   * Calculates all properties for binding to the element/
   * Вычисляет все свойства для привязки к элементу
   */
  readonly binds = computed<ConstrBind<ImageAttrs>>(
    () => {
      const attrs = {} as ConstrBind<ImageAttrs>

      if (this.is.value) {
        attrs.src = this.background.imageSrc.value
        attrs.alt = this.props.alt
        attrs.style = this.styles.value

        if (this.props.lazy) {
          attrs.loading = 'lazy'
        }

        if (this.props.srcset) {
          attrs.srcset = this.getSrcset()
        }
      }

      return attrs
    }
  )

  /**
   * Calculates the picture sources for different resolutions/
   * Вычисляет источники picture для разных разрешений
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
          srcset: value,
          media: `(width >= ${media})`
        }
      }
    )
  })

  /**
   * Calculates styles for binding to the element.
   *
   * Вычисляет стили для привязки к элементу.
   */
  readonly styles = computed<Record<string, any>>(() => {
    const styles: any = {
      'object-position': `${this.position.x.value} ${this.position.y.value}`,
      '--sys-transform-originX': this.position.x.value,
      '--sys-transform-originY': this.position.y.value
    }

    if (this.isSize()) {
      styles['--sys-transform-scale'] = this.getSize()
    }

    return styles
  })

  /**
   * Checks if the type is file or image.
   *
   * Проверяет, является ли тип файлом или изображением.
   */
  protected isType(): boolean {
    const type = this.type.item.value
    return type === ImageTypeValue.file || type === ImageTypeValue.image
  }

  /**
   * Checks if the size is contained or cover.
   *
   * Проверяет, является ли размер contain или cover.
   */
  protected isSize(): boolean {
    const size = this.background.size.value

    return Boolean(size && size.match('[% ]'))
  }

  /**
   * Returns the value for the transform scale.
   *
   * Возвращает значение для свойства transform scale.
   */
  protected getSize() {
    return this.background.size.value
      ?.replace('auto', '')
      ?.trim()
  }

  /**
   * Returns the srcset attribute value.
   *
   * Возвращает значение атрибута srcset.
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
   * @param key key/ ключ
   */
  protected toSrcsetKey(key: string | number): string {
    return isNumber(key) ? `${key}w` : String(key)
  }
}
