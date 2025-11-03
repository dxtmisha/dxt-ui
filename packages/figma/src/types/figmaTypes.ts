import { FigmaFrame } from '../classes/FigmaFrame.ts'

export type UiFigmaNode
  = ChildrenMixin
    | SceneNode
    | DefaultShapeMixin
    | DocumentNode
    | PageNode
    | FrameNode
    | SectionNode
    | TextNode

export type UiFigmaItemText = {
  id: string[]
  text: string
}

export type UiFigmaExportFormat = 'PNG'
  | 'JPG'
  | 'SVG'
  | 'PDF'
  | 'JSON_REST_V1'

export type UiFigmaMessageData<T = any> = {
  code: string
  type: string
  message?: T
}
export type UiFigmaMessageCallback<T = any> = (message: T) => void
export type UiFigmaMessageItem = {
  type: string
  callbackList: UiFigmaMessageCallback[]
}
export type UiFigmaMessageList = UiFigmaMessageItem[]

export type UiFigmaMessageTexts = {
  frame: FigmaFrame
  texts: UiFigmaItemText[]
  screenshot: Uint8Array | null
}
