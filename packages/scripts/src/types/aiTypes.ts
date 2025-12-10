import type { Datetime } from '@dxtmisha/functional-basic'

export type AiImageItem = {
  mime: string
  base64: string
}
export type AiImageList = AiImageItem[]

export type AiDocFile = {
  content: string
  date: Datetime
}
