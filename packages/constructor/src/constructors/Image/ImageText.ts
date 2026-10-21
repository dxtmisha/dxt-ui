// ai-none

import { computed } from 'vue'
import { isString } from '@dxtmisha/functional'

import type { ImageData } from './ImageData'
import type { ImageType } from './ImageType'

import { ImageTypeValue } from './basicTypes'
import type { ImageProps } from './props'

/** Regular expression for removing the font icon prefix / Регулярное выражение для удаления префикса шрифтовой иконки */
const REGEX_ICON_PREFIX = /^(?:(?:filled|outlined|round|sharp|two-tone|material)-|\$)/

/**
 * Class for obtaining the text representation of an image, icon or PDF.
 *
 * Класс для получения текстового представления изображения, иконки или PDF.
 */
export class ImageText {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param type function returning ImageType object / функция, возвращающая объект ImageType
   * @param data function returning ImageData object / функция, возвращающая объект ImageData
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly type: () => ImageType,
    protected readonly data: () => ImageData
  ) {
  }

  /**
   * Text for font icons and compressed flags, or the loaded source for a PDF.
   *
   * Текст для шрифтовых иконок и сжатых флагов либо загруженный источник PDF.
   */
  protected readonly item = computed<string | undefined>(() => {
    return this.getIcon()
      || this.getFlag()
      || this.getPdf()
  })

  /**
   * Get the text value.
   *
   * Получение текстового значения.
   * @returns text value / текстовое значение
   */
  get(): string | undefined {
    return this.item.value
  }

  /**
   * Returns the code for a compressed flag.
   *
   * Возвращает код для сжатого флага.
   * @returns compressed flag code or undefined / код сжатого флага или undefined
   */
  protected getFlag(): string | undefined {
    const value = this.props.value

    if (
      this.type().get() === ImageTypeValue.flagCompressed
      && value
    ) {
      return String(value)
        .replace('f-', '')
        .toUpperCase()
    }

    return undefined
  }

  /**
   * Returns the icon name without prefix.
   *
   * Возвращает название иконки без префикса.
   * @returns icon name or undefined / название иконки или undefined
   */
  protected getIcon(): string | undefined {
    const type = this.type().get()
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
      return value.replace(REGEX_ICON_PREFIX, '')
    }

    return undefined
  }

  /**
   * Returns the loaded source for a PDF.
   *
   * Возвращает загруженный источник для PDF.
   * @returns PDF source or undefined / источник PDF или undefined
   */
  protected getPdf(): string | undefined {
    if (this.type().get() === ImageTypeValue.pdf) {
      const image = this.data().image.value

      if (isString(image)) {
        return image
      }
    }

    return undefined
  }
}
