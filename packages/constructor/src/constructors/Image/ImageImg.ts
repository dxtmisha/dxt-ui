import {
  computed,
  type Ref,
  ref,
  toRefs,
  type WatchHandle,
  watch,
  onMounted
} from 'vue'
import {
  type ConstrBind,
  forEach,
  isArray,
  isNumber,
  useLazyItemByMarginRef
} from '@dxtmisha/functional'

import { ImageBackground } from './ImageBackground'
import { ImagePosition } from './ImagePosition'
import { ImageType } from './ImageType'

import { type ImageAttrs, type ImagePictureList, ImageTypeValue } from './basicTypes'
import type { ImageProps } from './props'

/**
 * A class for working with the img tag.
 * It manages attributes, styles, and lazy loading for the HTML img and picture elements.
 *
 * Класс для работы с тегом img.
 * Управляет атрибутами, стилями и ленивой загрузкой для элементов HTML img и picture.
 */
export class ImageImg {
  /** Lazy initialization status / Статус отложенной инициализации */
  protected lazyInit = ref<boolean>(false)

  /** Watch handle for lazy loading / Дескриптор наблюдения за ленивой загрузкой */
  protected lazyStatus?: WatchHandle

  /**
   * Constructor for creating a manager for the img tag.
   *
   * Конструктор для создания менеджера для тега img.
   * @param props input data / входные данные
   * @param element image element / элемент изображения
   * @param type class for working with types / класс для работы с типами
   * @param position class for working with position / класс для работы с позицией
   * @param background class for working with background / класс для работы с фоном
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly type: ImageType,
    protected readonly position: ImagePosition,
    protected readonly background: ImageBackground
  ) {
    const {
      lazy,
      preloadOffset
    } = toRefs(props)

    onMounted(() => {
      watch(
        [lazy, preloadOffset, element],
        () => {
          if (
            this.props.lazy
            && this.element.value
          ) {
            this.makeLazy()
          } else {
            this.lazyInit.value = false
            this.lazyStatus?.stop()
            this.lazyStatus = undefined
          }
        },
        { immediate: true }
      )
    })
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
   * Determines whether lazy loading is enabled.
   *
   * Определяет, включена ли ленивя загрузка.
   * @returns true if lazy loading is enabled / true, если ленивя загрузка включена
   */
  isLazy(): boolean {
    return Boolean(this.props.lazy) && !this.lazyInit.value
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

        if (this.props.lazy) {
          attrs.loading = this.isLazy() ? 'lazy' : 'auto'
          attrs.fetchPriority = this.props.fetchPriority
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
   * Checks if the type is file or image.
   *
   * Проверяет, является ли тип файлом или изображением.
   * @returns true if type matches / true, если тип совпадает
   */
  protected isType(): boolean {
    const type = this.type.item.value
    return type === ImageTypeValue.file || type === ImageTypeValue.image
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
  protected getSize() {
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

  /**
   * Initializes lazy loading.
   *
   * Инициализирует ленивую загрузку.
   */
  protected makeLazy(): void {
    const lazyStatus = useLazyItemByMarginRef(this.element, `${this.props.preloadOffset} 0px`)
      .lazyItemStatus

    this.lazyStatus = watch(lazyStatus, () => {
      this.lazyInit.value = lazyStatus.value
    }, { immediate: true })
  }
}
