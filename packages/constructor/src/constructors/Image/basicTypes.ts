import type { ConstrBind, Undefined } from '@dxtmisha/functional'
import type { ImageEmits } from './types'
import type { ImagePropsBasic } from './props'

/** Image element type / Тип элемента изображения */
export type ImageElement = HTMLElement | undefined

/** Image attribute type / Тип атрибутов изображения */
export type ImageAttrs = Record<keyof HTMLImageElement, any>

/** Image coordinator item type / Тип элемента координат изображения */
export type ImageCoordinatorItem
  = [number]
    | [number, number]
    | [number, number, number]
    | [number, number, number, number]
    | Undefined

/** Image picture item type / Тип элемента изображения picture */
export type ImagePictureItem = Record<keyof HTMLSourceElement & 'key', any>

/** List of image picture items / Список элементов изображения picture */
export type ImagePictureList = ImagePictureItem[]

/** Image picture type / Тип изображения picture */
export type ImagePicture = Record<string, string> | ImagePictureList

/** Image Uint8Array type / Тип Image Uint8Array */
export type ImageUint8ArrayType = Uint8Array<ArrayBuffer> | ArrayBuffer
/** Image Uint8Array item / Элемент Image Uint8Array */
export type ImageUint8ArrayItem = {
  /** Data buffer/ Буфер данных */
  item: ImageUint8ArrayType
  /** MIME type/ MIME-тип */
  type: string
  /** Source URL/ URL-источник */
  src: string
}
/** Image Uint8Array cache / Кэш Image Uint8Array */
export type ImageUint8ArrayCache = ImageUint8ArrayItem[]

/** Image value type / Тип значения изображения */
export type ImageValue<
  Image extends ImagePropsBasic = ImagePropsBasic
> = string | ConstrBind<Image> | null

/** Image component inclusion type / Тип включения компонента изображения */
export type ImageComponentInclude = {
  /** Image component configuration/ Конфигурация компонента изображения */
  image?: object
}

/** Image emits inclusion type / Тип включения событий изображения */
export type ImageEmitsInclude = ImageEmits

/** Image props inclusion type / Тип включения свойств изображения */
export type ImagePropsInclude<Image extends ImagePropsBasic = ImagePropsBasic> = {
  /** Image value or attributes/ Значение или атрибуты изображения */
  image?: string | ConstrBind<Image>
}
