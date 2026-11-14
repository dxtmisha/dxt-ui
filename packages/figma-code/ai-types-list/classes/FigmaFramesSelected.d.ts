// md5:402af2f89bf517c9e474b7d139a60c34 true
import { FigmaStorage } from './FigmaStorage';
/** Manages and synchronizes selected frame IDs in Figma plugin. @keywords figma frames selection state */
export declare class FigmaFramesSelected {
    /** Retrieves the list of selected frame IDs using cache if available. @keywords get frames selection cache */
    static get(): string[];
    /** Checks whether a frame with the specified ID is selected. @keywords check frame selected has */
    static has(id: string): boolean;
    /** Adds a frame ID to the selection list. @keywords add frame selection */
    static add(id: string): void;
    /** Removes a frame ID from the selection list. @keywords remove frame deselection */
    static remove(id: string): void;
    /** Resets the cached list of selected frame IDs. @keywords reset clear cache selection */
    static reset(): void;
    /** Sets up plugin messenger communication to sync selection state. @keywords send sync messenger selection */
    static toggle(id: string, selected: boolean): void;
}