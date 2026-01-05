import type { Datetime } from '@dxtmisha/functional-basic'
import type { GitFileItem } from './gitTypes'

export type AiImageItem = {
  mime: string
  base64: string
}
export type AiImageList = AiImageItem[]

export type AiDocFile = {
  content: string
  date: Datetime
}

export type AiDocTypeItem = {
  check: (item: GitFileItem) => boolean
  item: any
}
export type AiDocTypes = AiDocTypeItem[]
