// md5:333aed1ea1ee4c3a2f4e1b8d84a64910 true
/** Manages and synchronizes the list of selected frames in Figma plugin. @keywords figma frames selection sync */
export declare class FigmaFramesSelected {
    /** Checks if a frame with the given ID is selected. @keywords figma frame selected check */
    static has(id: string): boolean;
    /** Retrieves the current list of selected frame IDs, using cache if available. @keywords figma get selected frames */
    static get(): string[];
    /** Adds a frame ID to the selection list. @keywords figma add frame selection */
    static add(id: string): void;
    /** Removes a frame ID from the selection list. @keywords figma remove frame selection */
    static remove(id: string): void;
    /** Toggles the selection state of a frame. @keywords figma toggle frame selection */
    static toggle(id: string, selected: boolean): void;
    /** Synchronizes selection state via plugin messenger. @keywords figma sync selection messenger */
    static send(): void;
}