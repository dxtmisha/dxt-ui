import { computed } from 'vue'
import type { ConstrBind } from '@dxtmisha/functional'

import { ImageType } from './ImageType'
import { ImagePosition } from './ImagePosition'
import { ImageBackground } from './ImageBackground'

import { type ImageAttrs, ImageTypeValue } from './basicTypes'
import type { ImageProps } from './props'

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
      // && this.isSize()
  })

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
      } else if (this.props.alt) {
        // asd
      }

      return attrs
    }
  )

  /**
   * Calculates styles for binding to the element.
   *
   * Вычисляет стили для привязки к элементу.
   */
  readonly styles = computed<Record<string, any>>(() => {
    const styles: any = {
      // 'object-position': `${this.position.x.value} ${this.position.y.value}`
    }

    if (this.position.x.value.match('%')) {
      styles['--sys-transform-translateX'] = `calc(${this.position.x.value} * -1)`
    }

    if (this.position.y.value.match('%')) {
      styles['--sys-transform-translateY'] = `calc(${this.position.y.value} * -1)`
    }

    if (this.isSize()) {
      styles['object-fit'] = 'cover'
      styles['height'] = '100%'
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

  protected getSize() {
    return this.background.size.value
      ?.replace('auto', '')
      ?.trim()
  }
}
