import type { Undefined } from '@dxtmisha/functional-basic'

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

/** Image coordinator item type / Тип элемента координат изображения */
export type ImageCoordinatorItem
  = [number]
    | [number, number]
    | [number, number, number]
    | [number, number, number, number]
    | Undefined

export type ImageCoordinatorItemFull = [number, number, number, number]

/** Image size type / Тип размера изображения */
export type ImageSize<T = number> = {
  /** Width/ Ширина */
  width: T
  /** Height/ Высота */
  height: T
}

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

/** Image event data type / Тип данных события изображения */
export type ImageEventData
  = ImageEventType
    & {
      /** Image event data/ Данные события изображения */
      image: ImageEventItem
    }
/** Image event item type / Тип элемента события изображения */
export type ImageEventItem = ImageItem | string | undefined
/** Image event type / Тип события изображения */
export type ImageEventType = {
  /** Event type/ Тип события */
  type: ImageTypeItem
}

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
