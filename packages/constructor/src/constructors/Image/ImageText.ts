// ai-none

import { computed } from 'vue'
import { inArray, isString } from '@dxtmisha/functional'

import type { ImageData } from './ImageData'
import type { ImageType } from './ImageType'

import { type ImageTypeItem, ImageTypeValue } from './basicTypes'
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
   * Checks if the image type has a text representation.
   *
   * Проверяет, имеет ли тип изображения текстовое представление.
   * @param type image type / тип изображения
   * @returns true if text representation is used / true, если используется текстовое представление
   */
  static is(type?: ImageTypeItem): boolean {
    return ImageText.isIcon(type)
      || type === ImageTypeValue.flagCompressed
      || type === ImageTypeValue.pdf
  }

  /**
   * Checks if the image type is a text-based font icon.
   *
   * Проверяет, является ли тип изображения текстовой шрифтовой иконкой.
   * @param type image type / тип изображения
   * @returns true if type is a font icon / true, если тип является шрифтовой иконкой
   */
  static isIcon(type?: ImageTypeItem): boolean {
    return Boolean(
      type
      && inArray(
        [
          ImageTypeValue.filled,
          ImageTypeValue.outlined,
          ImageTypeValue.round,
          ImageTypeValue.sharp,
          ImageTypeValue.twoTone,
          ImageTypeValue.material
        ],
        type
      )
    )
  }

  /**
   * Constructor for initializing text representation resolution.
   *
   * Конструктор для инициализации получения текстового представления.
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
      ImageText.isIcon(type)
      && isString(value)
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
