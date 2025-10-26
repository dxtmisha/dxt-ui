export type UiFigmaNode
  = ChildrenMixin
    | SceneNode
    | DefaultShapeMixin
    | DocumentNode
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
