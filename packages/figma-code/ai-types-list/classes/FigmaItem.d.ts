// md5:28c335e20cecc0ecdc034ae37a675d69 true
import type { UiFigmaFramesItem, UiFigmaFrameStylesData, UiFigmaFrameStylesItem, UiFigmaFrameStylesJson } from '@dxtmisha/figma';
import type { UiFigmaExportFormat, UiFigmaNode } from '../types/figmaTypes';

/** Class for interacting with and inspecting Figma nodes. @keywords figma, item, node, wrapper */
export declare class FigmaItem<T extends UiFigmaNode = UiFigmaNode> {
    /** Initializes a new FigmaItem instance. @keywords constructor, init */
    constructor(item: T);
    /** Returns the underlying Figma node. @keywords get, node */
    get(): T;
    /** Checks if the node is a document. @keywords isDocument, document, typeguard */
    isDocument(): this is {
        item: DocumentNode;
    };
    /** Checks if the node is a frame. @keywords isFrame, frame, typeguard */
    isFrame(): this is {
        item: FrameNode;
    };
    /** Checks if the node is a section. @keywords isSection, section, typeguard */
    isSection(): this is {
        item: SectionNode;
    };
    /** Checks if the node is a text node. @keywords isText, text, typeguard */
    isText(): this is {
        item: TextNode;
    };
    /** Checks if the node is a text node with meaningful text content. @keywords isTextNoValue, text, validation */
    isTextNoValue(): this is {
        item: TextNode;
    };
    /** Checks if the node resides within the current active page. @keywords inCurrentPage, page, location */
    inCurrentPage(): boolean;
    /** Retrieves raw child nodes. @keywords getChildren, children, hierarchy */
    getChildren(): UiFigmaNode[];
    /** Retrieves child nodes wrapped in FigmaItem instances. @keywords getChildrenItems, children, wrap */
    getChildrenItems(): FigmaItem[];
    /** Generates CSS style declarations for the node. @keywords getCss, css, styles */
    getCss(): Promise<Record<string, string>>;
    /** Returns the unique identifier of the node. @keywords getId, id */
    getId(): string;
    /** Retrieves frame information and metadata for the node. @keywords getInfo, info, frame, metadata */
    getInfo(): Promise<UiFigmaFramesItem>;
    /** Returns the node name. @keywords getName, name, label */
    getName(): string;
    /** Retrieves the parent node if available. @keywords getParent, parent, hierarchy */
    getParent(): (BaseNode & ChildrenMixin) | undefined;
    /** Retrieves the parent node wrapped in a FigmaItem instance. @keywords getParentItem, parent, wrap */
    getParentItem(): FigmaItem | undefined;
    /** Retrieves the parent page containing the node. @keywords getParentPage, page, hierarchy */
    getParentPage(): PageNode | undefined;
    /** Retrieves the parent page wrapped in a FigmaItem instance. @keywords getParentPageItem, page, wrap */
    getParentPageItem(): FigmaItem | undefined;
    /** Extracts visual styles applied to the node. @keywords getStyles, styles, design */
    getStyles(): Promise<UiFigmaFrameStylesItem>;
    /** Returns the text content of the node. @keywords getText, text, characters */
    getText(): string;
    /** Returns the type identifier of the node. @keywords getType, type */
    getType(): string | undefined;
    /** Exports the node in JPG format. @keywords exportJpg, export, jpg, image */
    exportJpg(): Promise<string | Uint8Array>;
    /** Exports the node in JSON format. @keywords exportJson, export, json */
    exportJson(): Promise<string | Uint8Array | Record<string, any>>;
    /** Exports node styles as compact JSON. @keywords exportJsonCompact, export, json, styles */
    exportJsonCompact(): Promise<UiFigmaFrameStylesData | undefined>;
    /** Exports the node in SVG format. @keywords exportSvg, export, svg, vector */
    exportSvg(svgIdAttribute?: boolean): Promise<string | Uint8Array>;
    /** Navigates to the page containing the node and sets it as the active selection. @keywords toPageAndSelection, select, navigate */
    toPageAndSelection(): Promise<void>;
    /** Selects the node on the active page. @keywords toSelection, select, focus */
    toSelection(): void;
}