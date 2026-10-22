import type { HTMLAttributes, ImgHTMLAttributes, SourceHTMLAttributes, VNodeProps } from 'vue'
import type { ConstrBind, ConstrClass, ConstrStyles, Undefined } from '@dxtmisha/functional'
import type { AriaList } from '../../types/ariaTypes'
import type { ImageAdaptiveItem } from './ImageAdaptiveItem'
import type { ImageEmits } from './types'
import type { ImagePropsBasic } from './props'

// --- Values & Types / Типы значений и классификация источников ---

/** Enumeration of image types / Перечисление типов изображений */
export enum ImageTypeValue {
  /** PDF file / PDF файл */
  pdf = 'pdf',
  /** Generic file / Файл общего вида */
  file = 'file',
  /** Array of values / Массив значений */
  array = 'array',
  /** Direct link to an image / Прямая ссылка на изображение */
  image = 'image',
  /** Flag icon / Иконка флага */
  flag = 'flag',
  /** Compressed flag icon / Сжатая иконка флага */
  flagCompressed = 'flag-compressed',
  /** Solid color / Сплошной цвет */
  color = 'color',
  /** Publicly available link / Публично доступная ссылка */
  public = 'public',
  /** Filled style / Заполненный стиль */
  filled = 'filled',
  /** Outlined style / Контурный стиль */
  outlined = 'outlined',
  /** Rounded style / Закругленный стиль */
  round = 'round',
  /** Sharp style / Острый стиль */
  sharp = 'sharp',
  /** Two-tone style / Двухцветный стиль */
  twoTone = 'two-tone',
  /** Material design icon / Иконка Material Design */
  material = 'material',
  /** Generic icon / Иконка общего вида */
  icon = 'icon'
}

/** Image type item / Элемент типа изображения */
export type ImageTypeItem = ImageTypeValue | Undefined

/** Image value type / Тип значения изображения */
export type ImageValue<
  Image extends ImagePropsBasic = ImagePropsBasic
> = string | ConstrBind<Image> | null

// --- Dimensions & Coordinates / Размеры и координаты ---

/** Image coordinator item type / Тип элемента координат изображения */
export type ImageCoordinatorItem
  = readonly [number]
    | readonly [number, number]
    | readonly [number, number, number]
    | readonly [number, number, number, number]
    | Undefined

/** Image size type / Тип размера изображения */
export type ImageSize<T = number> = {
  /** Width / Ширина */
  width: T
  /** Height / Высота */
  height: T
}

// --- Adaptive Group / Адаптивная группа ---

/** Storage structure for adaptive group / Структура хранилища для адаптивной группы */
export type ImageAdaptiveGroupStorage = {
  /** List of all tracked adaptive items / Список всех отслеживаемых адаптивных элементов */
  objects: ImageAdaptiveItem[]
  /** List of currently calculated adaptive items / Список рассчитываемых в данный момент адаптивных элементов */
  objectsAdaptive: ImageAdaptiveItem[]
  /** Flag for tracking frame calculation time / Флаг отслеживания времени вычисления кадра */
  time?: boolean
}

// --- Image Items & Events / Элементы изображения и данные событий ---

/** Parameters for the uploaded image or the one available by a direct link / Параметры для загруженного изображения или доступного по прямой ссылке */
export type ImageItem
  = ImageSize
    & {
    /** Image element / Элемент изображения */
      image: HTMLImageElement
      /** Source URL / URL-источник */
      src: string
    }

/** Image event item type / Тип элемента события изображения */
export type ImageEventItem = ImageItem | string | undefined

/** Image event type / Тип события изображения */
export type ImageEventType = {
  /** Event type / Тип события */
  type: ImageTypeItem
}

/** Image event data type / Тип данных события изображения */
export type ImageEventData
  = ImageEventType
    & {
    /** Image event data / Данные события изображения */
      image: ImageEventItem
    }

// --- Binary Buffers / Буферы данных Uint8Array ---

/** Image Uint8Array type / Тип Image Uint8Array */
export type ImageUint8ArrayType = Uint8Array<ArrayBuffer> | ArrayBuffer

// --- Picture & Multi-source Elements / Элементы Picture и списки источников ---

/** Picture source attributes and virtual node key / Атрибуты источника picture и ключ виртуального узла */
export interface ImagePictureItem extends Pick<SourceHTMLAttributes, 'media' | 'sizes' | 'src' | 'srcset' | 'type'>, Pick<VNodeProps, 'key'> {
  /** Source image width / Ширина изображения источника */
  width?: ImgHTMLAttributes['width']
  /** Source image height / Высота изображения источника */
  height?: ImgHTMLAttributes['height']
}

/** List of image picture items / Список элементов изображения picture */
export type ImagePictureList = ImagePictureItem[]

/** Image picture type / Тип изображения picture */
export type ImagePicture = Record<string, string> | ImagePictureList

// --- Elements & DOM Bindings / Элементы разметки и привязки DOM ---

/** Image element type / Тип элемента изображения */
export type ImageElement = HTMLElement | undefined

/** Native image bindings / Привязки нативного изображения */
export interface ImageAttrs extends Omit<ImgHTMLAttributes, 'loading' | 'src'>, Pick<VNodeProps, 'key'> {
  /** Image URL or absent source / URL изображения или отсутствующий источник */
  src?: string | null
  /** Loading mode, including the existing automatic fallback / Режим загрузки, включая существующее автоматическое значение */
  loading?: ImgHTMLAttributes['loading'] | 'auto'
  /** Fetch priority bound through the DOM property / Приоритет загрузки, передаваемый через DOM-свойство */
  fetchPriority?: ImgHTMLAttributes['fetchpriority']
}

/** Root renderer bindings / Привязки корневого элемента рендерера */
export interface ImageRootAttrs extends Omit<HTMLAttributes, keyof AriaList | 'class' | 'style'>, AriaList, Pick<VNodeProps, 'key' | 'ref'> {
  /** Design system classes / Классы дизайн-системы */
  class?: ConstrClass
  /** Design system styles / Стили дизайн-системы */
  style?: ConstrStyles
}

/** Image root bindings / Привязки корневого элемента изображения */
export type ImageBinds = AriaList & {
  /** Automatic translation policy / Правило автоматического перевода */
  translate: 'no'
}

/** Image value element bindings / Привязки элемента значения изображения */
export type ImageValueBinds = {
  /** Value element key / Ключ элемента значения */
  key: 'value'
  /** Current image data / Текущие данные изображения */
  data: ImageEventItem
}

// --- Component Inclusion / Типы включения компонента ---

/** Image component inclusion type / Тип включения компонента изображения */
export type ImageComponentInclude = {
  /** Image component configuration / Конфигурация компонента изображения */
  image?: object
}

/** Image emits inclusion type / Тип включения событий изображения */
export type ImageEmitsInclude = ImageEmits

/** Image props inclusion type / Тип включения свойств изображения */
export type ImagePropsInclude<Image extends ImagePropsBasic = ImagePropsBasic> = {
  /** Image value or attributes / Значение или атрибуты изображения */
  image?: string | ConstrBind<Image>

  /** Additional image parameters / Дополнительные параметры изображения */
  imageAttrs?: ConstrBind<Image>
}
