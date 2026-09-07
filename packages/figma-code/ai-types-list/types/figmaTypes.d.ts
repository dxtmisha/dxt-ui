// md5:cc3a682760dc42e277098ec1a7f1bb5f true
/** Figma node types union. @keywords figma, node */
export type UiFigmaNode = ChildrenMixin | SceneNode | DefaultShapeMixin | DocumentNode | PageNode | FrameNode | SectionNode | TextNode | BaseNode;
/** Text node content and associated node identifiers. @keywords figma, text, node */
export type UiFigmaItemText = {
    id: string[];
    text: string;
};
/** Supported export formats for Figma nodes. @keywords figma, export, format */
export type UiFigmaExportFormat = 'PNG' | 'JPG' | 'SVG' | 'PDF' | 'JSON_REST_V1';
/** Message payload containing frame data, extracted text items, and screenshots. @keywords figma, frame, screenshot */
export type UiFigmaMessageTexts = {
    frame: FigmaFrame;
    texts: UiFigmaItemText[];
    screenshot: Uint8Array[];
};