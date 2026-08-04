1) All these methods are in the @dxtmisha/figma-ref library.
2) Everything that is exported can be used.
3) Use what is in this library if it exists; do not use other libraries if there is an analogue here. Do not create new ones if an analogue already exists here.

The following is the content of "exports" from package.json:
{
  ".": {
    "import": "./dist/library.js",
    "types": "./dist/library.d.ts"
  }
}

import { ShallowRef, ComputedRef } from 'vue';
import { UiFigmaFramesList, UiFigmaFrameStylesMessengerAttributes, UiFigmaFrameStylesMessengerResponse } from '@dxtmisha/figma';
/**
 * Composable for working with Figma client storage.
 * @param name Storage name
 * @param defaultValue Default value
 * @returns An object containing the storage value and a loading state
 */
export declare function useFigmaClientStorage<T = any>(name: string, defaultValue?: T): {
    item: ShallowRef<T | undefined, T | undefined>;
    loading: ShallowRef<boolean, boolean>;
};
/**
 * Composable for managing and observing the list of selected frames in Figma.
 * @returns An object containing the list of selected frames and a loading state
 */
export declare function useFigmaFrameSelection(): {
    /** List of selected frames */
    selection: ComputedRef<UiFigmaFramesList>;
    /**
     * Set the current selection in Figma
     * @param id Frame ID
     */
    setSelection(id: string): void;
    /** Indicates if a fetch operation is currently in progress */
    loading: ComputedRef<boolean>;
};
/**
 * Composable for managing and observing frame styles from Figma.
 * @returns An object containing the frame styles and methods for updating
 */
export declare function useFigmaFrameStyles(): {
    /** Frame styles */
    styles: ComputedRef<UiFigmaFrameStylesMessengerResponse>;
    /**
     * Send style update request.
     * @param attributes Attributes
     */
    send(attributes: UiFigmaFrameStylesMessengerAttributes): void;
};
/**
 * Composable for working with Figma storage.
 * @param name Storage name
 * @param defaultValue Default value
 * @param id Object ID
 * @returns An object containing the storage value and a loading state
 */
export declare function useFigmaStorage<T = any>(name: string, defaultValue?: T, id?: string): {
    item: ShallowRef<T | undefined, T | undefined>;
    loading: ShallowRef<boolean, boolean>;
};
/**
 * Composable for managing and observing the list of top-level frames.
 * @returns An object containing the list of top-level frames and a loading state
 */
export declare function useFigmaUiFrames(): {
    /** List of top-level frames */
    frames: ComputedRef<UiFigmaFramesList>;
    /** Indicates if a fetch operation is currently in progress */
    loading: ComputedRef<boolean>;
};
/**
 * Composable for managing and observing the list of selected frames in the Figma UI.
 * @returns An object containing the list of selected frame IDs, a loading state, and utility functions
 */
export declare function useFigmaUiSelected(): {
    /** List of selected frame IDs */
    selected: ComputedRef<string[]>;
    /** Indicates if a fetch operation is currently in progress */
    loading: ComputedRef<boolean>;
    /**
     * Checks if a frame with the given ID is selected
     * @param id Frame ID
     * @returns Computed boolean value
     */
    isSelected(id: string): ComputedRef<boolean | undefined>;
    /**
     * Toggles the selection state of a frame
     * @param id Frame ID
     * @param selected Selection state
     */
    toggleSelected(id: string, selected: boolean): void;
};
export declare const FIGMA_IMAGE_TYPE = "image/jpeg";
/** Figma message type for texts */
export declare const FIGMA_MESSAGE_TEXTS = "texts";