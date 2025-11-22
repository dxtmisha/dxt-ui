import type { ConstrBind, Undefined } from '@dxtmisha/functional'
import type { ImageEmits } from './types'
import type { ImagePropsBasic } from './props'

export enum ImageTypeValue {
  pdf = 'pdf',
  file = 'file',
  image = 'image',
  flag = 'flag',
  color = 'color',
  public = 'public',
  filled = 'filled',
  outlined = 'outlined',
  round = 'round',
  sharp = 'sharp',
  twoTone = 'two-tone',
  material = 'material',
  icon = 'icon'
}

export type ImageElement = HTMLElement | undefined
export type ImageAttrs = Record<keyof HTMLImageElement, any>
export type ImagePicture = Record<string, string> | Record<keyof HTMLSourceElement, any>[]

export type ImageCoordinatorItem
  = [number]
    | [number, number]
    | [number, number, number]
    | [number, number, number, number]
    | Undefined

export type ImageSize<T = number> = {
  width: T
  height: T
}

/**
 * Parameters for the uploaded image or the one available by a direct link.
 *
 * Параметры для загруженного изображения или доступного по прямой ссылке.
 */
export type ImageItem
  = ImageSize
    & {
      image: HTMLImageElement
      src: string
    }

export type ImageTypeItem = ImageTypeValue | Undefined

export type ImageEventItem = ImageItem | string | undefined
export type ImageEventType = {
  type: ImageTypeItem
}
export type ImageEventData
  = ImageEventType
    & {
      image: ImageEventItem
    }

export type ImageValue<
  Image extends ImagePropsBasic = ImagePropsBasic
> = string | ConstrBind<Image> | null

export type ImageComponentsInclude = {
  image: object
}
export type ImageEmitsInclude = ImageEmits

export interface ImagePropsInclude<Image extends ImagePropsBasic = ImagePropsBasic> {
  image?: string | ConstrBind<Image>
}
