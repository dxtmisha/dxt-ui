import type { ConstrBind, Undefined } from '@dxtmisha/functional'
import type { ImageEmits } from './types'
import type { ImagePropsBasic } from './props'

/** Enumeration of image types / Перечисление типов изображений */
export enum ImageTypeValue {
  /** PDF file/ PDF файл */
  pdf = 'pdf',
  /** Generic file/ Файл общего вида */
  file = 'file',
  /** Array of values/ Массив значений */
  array = 'array',
  /** Direct link to an image/ Прямая ссылка на изображение */
  image = 'image',
  /** Flag icon/ Иконка флага */
  flag = 'flag',
  /** Compressed flag icon/ Сжатая иконка флага */
  flagCompressed = 'flag-compressed',
  /** Solid color/ Сплошной цвет */
  color = 'color',
  /** Publicly available link/ Публично доступная ссылка */
  public = 'public',
  /** Filled style/ Заполненный стиль */
  filled = 'filled',
  /** Outlined style/ Контурный стиль */
  outlined = 'outlined',
  /** Rounded style/ Закругленный стиль */
  round = 'round',
  /** Sharp style/ Острый стиль */
  sharp = 'sharp',
  /** Two-tone style/ Двухцветный стиль */
  twoTone = 'two-tone',
  /** Material design icon/ Иконка Material Design */
  material = 'material',
  /** Generic icon/ Иконка общего вида */
  icon = 'icon'
}

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

/** Image size type / Тип размера изображения */
export type ImageSize<T = number> = {
  /** Width/ Ширина */
  width: T
  /** Height/ Высота */
  height: T
}

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

/** Parameters for the uploaded image or the one available by a direct link / Параметры для загруженного изображения или доступного по прямой ссылке */
export type ImageItem
  = ImageSize
    & {
      /** Image element/ Элемент изображения */
      image: HTMLImageElement
      /** Source URL/ URL-источник */
      src: string
    }

/** Image type item / Элемент типа изображения */
export type ImageTypeItem = ImageTypeValue | Undefined

/** Image event item type / Тип элемента события изображения */
export type ImageEventItem = ImageItem | string | undefined

/** Image event type / Тип события изображения */
export type ImageEventType = {
  /** Event type/ Тип события */
  type: ImageTypeItem
}

/** Image event data type / Тип данных события изображения */
export type ImageEventData
  = ImageEventType
    & {
      /** Image event data/ Данные события изображения */
      image: ImageEventItem
    }

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
