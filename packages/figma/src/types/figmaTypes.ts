export type UiFigmaNode
  = ChildrenMixin
    | SceneNode
    | DefaultShapeMixin
    | FrameNode
    | SectionNode
    | TextNode

export type UiFigmaItemText = {
  id: string[]
  text: string
}
