// md5:eb7bcc3c4ff99df5fd88c64eab2e34cc true
import type { UiFigmaFramesItem, UiFigmaFrameStylesData, UiFigmaFrameStylesItem, UiFigmaFrameStylesJson } from '@dxtmisha/figma';
/** Wrapper for inspecting, traversing, styling, and exporting Figma nodes. @keywords figma node wrapper item */
export declare class FigmaItem<T extends UiFigmaNode = UiFigmaNode> {
    /** Creates a new FigmaItem instance wrapping a Figma node. @keywords constructor init */
    constructor(item: T);
    /** Checks if the node is a DocumentNode. @keywords isDocument document type guard */
    isDocument(): this is {
        item: DocumentNode;
    };
    /** Checks if the node is a FrameNode. @keywords isFrame frame type guard */
    isFrame(): this is {
        item: FrameNode;
    };
    /** Checks if the node is a SectionNode. @keywords isSection section type guard */
    isSection(): this is {
        item: SectionNode;
    };
    /** Checks if the node is a TextNode. @keywords isText text type guard */
    isText(): this is {
        item: TextNode;
    };
    /** Checks if the node is a text node with an empty or non-meaningful value. @keywords isTextNoValue empty text */
    isTextNoValue(): this is {
        item: TextNode;
    };
    /** Checks if the node belongs to the currently active page. @keywords inCurrentPage active page */
    inCurrentPage(): boolean;
    /** Returns the underlying wrapped Figma node. @keywords get node */
    get(): T;
    /** Returns the Figma node type. @keywords getType node type */
    getType(): "SLICE" | "FRAME" | "GROUP" | "COMPONENT_SET" | "COMPONENT" | "INSTANCE" | "BOOLEAN_OPERATION" | "VECTOR" | "STAR" | "LINE" | "ELLIPSE" | "POLYGON" | "RECTANGLE" | "TEXT" | "TEXT_PATH" | "TRANSFORM_GROUP" | "STICKY" | "CONNECTOR" | "SHAPE_WITH_TEXT" | "CODE_BLOCK" | "STAMP" | "WIDGET" | "EMBED" | "LINK_UNFURL" | "MEDIA" | "SECTION" | "HIGHLIGHT" | "WASHI_TAPE" | "TABLE" | "SLIDE" | "SLIDE_ROW" | "SLIDE_GRID" | "SLOT" | "INTERACTIVE_SLIDE_ELEMENT" | "DOCUMENT" | "PAGE" | undefined;
    /** Returns the parent node if present. @keywords getParent parent */
    getParent(): (BaseNode & ChildrenMixin) | undefined;
    /** Returns the parent node wrapped in a FigmaItem instance. @keywords getParentItem parent wrapper */
    getParentItem(): FigmaItem | undefined;
    /** Returns the parent PageNode containing this node. @keywords getParentPage parent page */
    getParentPage(): PageNode | undefined;
    /** Returns the parent PageNode wrapped in a FigmaItem instance. @keywords getParentPageItem parent page wrapper */
    getParentPageItem(): FigmaItem | undefined;
    /** Returns the child nodes of this node. @keywords getChildren children */
    getChildren(): UiFigmaNode[];
    /** Returns the child nodes wrapped as FigmaItem instances. @keywords getChildrenItems children items */
    getChildrenItems(): FigmaItem[];
    /** Returns the unique identifier of the node. @keywords getId id */
    getId(): string;
    /** Returns the name of the node. @keywords getName name */
    getName(): string;
    /** Returns the text content of the node. @keywords getText text characters */
    getText(): string;
    /** Retrieves computed CSS style properties for the node. @keywords getCss css styles */
    getCss(): Promise<Record<string, string>>;
    /** Retrieves structural metadata and hierarchy information about the node. @keywords getInfo metadata frames info */
    getInfo(): Promise<UiFigmaFramesItem>;
    /** Retrieves applied Figma styles for the node. @keywords getStyles styles */
    getStyles(): Promise<UiFigmaFrameStylesItem>;
    /** Exports the node as a JPG image buffer. @keywords exportJpg export image jpg */
    exportJpg(): Promise<Uint8Array<ArrayBufferLike> | "">;
    /** Exports the node representation as JSON bytes. @keywords exportJson export json bytes */
    exportJson(): Promise<Uint8Array<ArrayBufferLike> | "">;
    /** Exports compact JSON style and structure data for the node. @keywords exportJsonCompact compact json */
    exportJsonCompact(): Promise<UiFigmaFrameStylesData | undefined>;
    /** Exports the node as an SVG image buffer. @keywords exportSvg export vector svg */
    exportSvg(svgIdAttribute?: boolean): Promise<Uint8Array<ArrayBufferLike> | "">;
    /** Sets the current Figma document selection to this node. @keywords toSelection select */
    toSelection(): void;
    /** Navigates to the node's page and selects the node. @keywords toPageAndSelection navigate select */
    toPageAndSelection(): Promise<void>;
}