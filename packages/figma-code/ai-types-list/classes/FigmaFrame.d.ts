// md5:d56d3d8555483e4aac3264adf257c63a true
import type { UiFigmaFramesList, UiFigmaFrameStylesCssList, UiFigmaFrameStylesList } from '@dxtmisha/figma';
/** Handles extraction, inspection, and rendering of Figma frames, sections, styles, and text nodes. @keywords figma, frame, layout, inspector */
export declare class FigmaFrame {
    /** Initializes FigmaFrame instance for a given page, node, or active selection. @keywords constructor, init, context */
    constructor(page: UiFigmaNode, selection?: boolean);
    /** Checks if the current context represents an active selection. @keywords isSelection, selection guard, pageNode */
    isSelection(): this is {
        page: PageNode;
    };
    /** Retrieves all frame items from the context. @keywords frames, getItemsFrame, FrameNode */
    getItemsFrame(): FigmaItem<FrameNode>[];
    /** Retrieves all section items from the context. @keywords sections, getItemsSection, SectionNode */
    getItemsSection(): FigmaItem<SectionNode>[];
    /** Retrieves all text items from the context. @keywords text, getItemsText, TextNode */
    getItemsText(): FigmaItem<TextNode>[];
    /** Retrieves metadata, identifiers, and screenshot previews for all frames. @keywords frame info, metadata, screenshots */
    getItemsInfo(): Promise<UiFigmaFramesList>;
    /** Generates CSS style definitions for all elements in the context. @keywords css, styles, getItemsCss */
    getItemsCss(): Promise<UiFigmaFrameStylesCssList>;
    /** Retrieves style configurations for all frames in the context. @keywords styles, getItemsStyles, figma styles */
    getItemsStyles(): Promise<UiFigmaFrameStylesList>;
    /** Retrieves root-level main frames from the target context. @keywords main frames, root nodes, getMainFrames */
    getMainFrames(): FigmaItem[];
    /** Retrieves metadata and screenshot previews for main root frames. @keywords main frames info, root info, metadata */
    getMainItemsInfo(): Promise<UiFigmaFramesList>;
    /** Retrieves style configurations for main root frames. @keywords main frames styles, root styles */
    getMainItemsStyles(): Promise<UiFigmaFrameStylesList>;
    /** Retrieves all text nodes with their IDs grouped by string content. @keywords text grouped, strings, getTexts */
    getTexts(): UiFigmaItemText[];
    /** Captures screenshots of main items as binary byte arrays. @keywords screenshot, render, export, image buffer */
    screenshot(): Promise<Uint8Array<ArrayBufferLike>[]>;
}