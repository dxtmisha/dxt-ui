import type { FigmaItem } from "../library"
import type { UiFigmaNode } from "./figmaTypes"

export type UiFigmaFramesItem<T extends UiFigmaNode = UiFigmaNode> = {
    name: string
    id: string
    image?: Uint8Array<ArrayBufferLike> | string
    item?: FigmaItem<T>
}

export type UiFigmaFramesList = UiFigmaFramesItem[]
