import type { FigmaItem } from '../classes/FigmaItem'
import type { UiFigmaNode } from './figmaTypes'

export type UiFigmaFramesItem<T extends UiFigmaNode = UiFigmaNode> = {
  name: string
  id: string
  image?: Uint8Array<ArrayBufferLike> | string
  item?: FigmaItem<T>
}

export type UiFigmaFramesList = UiFigmaFramesItem[]

export const UI_FIGMA_FRAMES_POST_NAME = 'ui-figma-frames-list'

export const UI_FIGMA_FRAMES_SELECTED_POST_NAME = 'ui-figma-frames-selected'
export const UI_FIGMA_FRAMES_SELECTED_ADD_NAME = 'ui-figma-frames-selected-add'
