import { computed } from 'vue'
import { Icons, isFilled, isString } from '@dxtmisha/functional'

import { ImagePdf } from './ImagePdf'
import { ImageUint8Array } from './ImageUint8Array'
import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude'

import { type ImageTypeItem, ImageTypeValue } from './basicTypes'
import type { ImageProps } from './props'

/** Regular expression for checking the file path / Регулярное выражение для проверки пути к файлу */
const REGEX_IMAGE = /\//
/** Regular expression for checking the color / Регулярное выражение для проверки цвета */
const REGEX_COLOR = /^#/
/** Regular expression for checking the public icon / Регулярное выражение для проверки публичной иконки */
const REGEX_PUBLIC = /^@/
/** Regular expression for checking the material icon / Регулярное выражение для проверки material иконки */
const REGEX_MATERIAL = /^\$/
/** Regular expression for checking the flag / Регулярное выражение для проверки флага */
const REGEX_FLAG = /^flag-[a-z]{2}$/
/** Regular expression for checking the compressed flag / Регулярное выражение для проверки сжатого флага */
const REGEX_FLAG_COMPRESSED = /^f-[a-z]{2}$/
/** Regular expression for checking the icon type / Регулярное выражение для проверки типа иконки */
const REGEX_SUB = /^(outlined|round|sharp|material)-/

/**
 * Class for working with the image type.
 * It determines the type of the passed value (file, link, color, icon, etc.)
 * for correct rendering in the component.
 *
 * Класс для работы с типом изображения.
 * Определяет тип переданного значения (файл, ссылка, цвет, иконка и т. д.)
 * для корректного отображения в компоненте.
 */
export class ImageType {
  /**
   * Constructor for working with the image type.
   *
   * Конструктор для работы с типом изображения.
   * @param props input data / входные данные
   * @param clientOnly class for working with ClientOnly / класс для работы с ClientOnly
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly clientOnly: ClientOnlyInclude
  ) {
  }

  /**
   * Get the image type.
   *
   * Получение типа изображения.
   * @returns image type / тип изображения
   */
  readonly item = computed<ImageTypeItem>(() => {
    const image = this.props.value

    if (this.clientOnly.isRender) {
      if (image instanceof File) {
        return ImageTypeValue.file
      }

      if (ImageUint8Array.is(image)) {
        return ImageTypeValue.array
      }

      if (ImagePdf.isPdf(image)) {
        return ImageTypeValue.pdf
      }
    }

    if (
      isString(image)
      && isFilled(image)
    ) {
      if (REGEX_IMAGE.test(image)) {
        return ImageTypeValue.image
      }

      if (REGEX_COLOR.test(image)) {
        return ImageTypeValue.color
      }

      if (REGEX_PUBLIC.test(image)) {
        return ImageTypeValue.public
      }

      if (REGEX_MATERIAL.test(image)) {
        return ImageTypeValue.material
      }

      if (REGEX_FLAG.test(image)) {
        return ImageTypeValue.flag
      }

      if (REGEX_FLAG_COMPRESSED.test(image)) {
        return ImageTypeValue.flagCompressed
      }

      const sub = REGEX_SUB.exec(image)

      if (sub) {
        return sub[1] as ImageTypeItem
      }

      if (Icons.is(image)) {
        return ImageTypeValue.public
      }

      return ImageTypeValue.outlined
    }

    return undefined
  })
}
