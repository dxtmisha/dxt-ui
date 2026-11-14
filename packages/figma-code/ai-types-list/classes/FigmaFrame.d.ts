// md5:42db5cb03ddbd5fedac73c2b9ec010fa true
import type { UiFigmaFramesList, UiFigmaFrameStylesCssList, UiFigmaFrameStylesList } from '@dxtmisha/figma';
import { FigmaItem } from './FigmaItem';
import type { UiFigmaItemText, UiFigmaNode } from '../types/figmaTypes';
/** Manages Figma frames and elements within a page or selection context. @keywords figma, frame, elements, manager */
export declare class FigmaFrame {
    /** Initializes Figma frame manager with a node and selection option. @keywords constructor, init, page, selection */
    constructor(page: UiFigmaNode, selection?: boolean);
    /** Checks whether the current context is a selection. @keywords isSelection, check, selection */
    isSelection(): this is {
        page: PageNode;
    };
    /** Retrieves CSS styles for all frame elements. @keywords getItemsCss, css, styles */
    getItemsCss(): Promise<UiFigmaFrameStylesCssList>;
    /** Retrieves all frame items. @keywords getItemsFrame, frame, items */
    getItemsFrame(): FigmaItem<FrameNode>[];
    /** Retrieves frame information including names, identifiers, and screenshots. @keywords getItemsInfo, frames, metadata, screenshots */
    getItemsInfo(): Promise<UiFigmaFramesList>;
    /** Retrieves all section items. @keywords getItemsSection, section, items */
    getItemsSection(): FigmaItem<SectionNode>[];
    /** Retrieves style definitions for all frames. @keywords getItemsStyles, frames, styles */
    getItemsStyles(): Promise<UiFigmaFrameStylesList>;
    /** Retrieves all text items. @keywords getItemsText, text, items */
    getItemsText(): FigmaItem<TextNode>[];
    /** Retrieves top-level main frame items from the root node. @keywords getMainFrames, main, frames, root */
    getMainFrames(): FigmaItem[];
    /** Retrieves metadata and screenshots for main frame items. @keywords getMainItemsInfo, main, frames, info, screenshots */
    getMainItemsStyles(): Promise<UiFigmaFrameStylesList>;
    /** Retrieves style definitions for main frames. @keywords getMainItemsStyles, main, styles, frames */
    getMainItemsInfo(): Promise<UiFigmaFramesList>;
    /** Retrieves text nodes grouped by text content. @keywords getTexts, text, nodes, grouped */
    getTexts(): UiFigmaItemText[];
    /** Captures screenshots of the main items. @keywords screenshot, capture, export, image */
    screenshot(): Promise<Uint8Array[]>;
}