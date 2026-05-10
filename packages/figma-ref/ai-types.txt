1) All these methods are in the @dxtmisha/figma-ref library.
2) Everything that is exported can be used.
3) Use what is in this library if it exists; do not use other libraries if there is an analogue here. Do not create new ones if an analogue already exists here.

The following is the content of "exports" from package.json:
{
  ".": {
    "import": "./dist/library.js",
    "types": "./dist/library.d.ts"
  },
  "./style.css": "./dist/style.css",
  "./types/*": "./dist/*",
  "./types/**/*.d.ts": "./dist/**/*.d.ts"
}

// File: composables/useFigmaClientStorage.d.ts
/**
 * Composable for Figma client storage.
 * @param name Storage name
 * @param defaultValue Default value
 * @returns Storage value and loading state
 */
export declare function useFigmaClientStorage<T = any>(name: string, defaultValue?: T): {
    item: ShallowRef<T | undefined, T | undefined>;
    loading: ShallowRef<boolean, boolean>;
};
// File: composables/useFigmaFrameSelection.d.ts
/**
 * Manage and observe selected frames in Figma.
 * @returns Selected frames and loading state
 */
export declare function useFigmaFrameSelection(): {
    /** Selected frames */
    selection: ComputedRef<UiFigmaFramesList>;
    /**
     * Set current selection in Figma.
     * @param id Frame ID
     */
    setSelection(id: string): void;
    /** Indicates if fetch is in progress */
    loading: ComputedRef<boolean>;
};
// File: composables/useFigmaFrameStyles.d.ts
/**
 * Manage and observe frame styles from Figma.
 * @returns Frame styles and update methods
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
// File: composables/useFigmaStorage.d.ts
/**
 * Composable for Figma storage.
 * @param name Storage name
 * @param defaultValue Default value
 * @param id Object ID
 * @returns Storage value and loading state
 */
export declare function useFigmaStorage<T = any>(name: string, defaultValue?: T, id?: string): {
    item: ShallowRef<T | undefined, T | undefined>;
    loading: ShallowRef<boolean, boolean>;
};
// File: composables/useFigmaUiFrames.d.ts
/**
 * Manage and observe top-level frames.
 * @returns Top-level frames and loading state
 */
export declare function useFigmaUiFrames(): {
    /** Top-level frames */
    frames: ComputedRef<UiFigmaFramesList>;
    /** Indicates if fetch is in progress */
    loading: ComputedRef<boolean>;
};
// File: composables/useFigmaUiSelected.d.ts
/**
 * Manage and observe selected frames in Figma UI.
 * @returns Selected frame IDs, loading state, and utilities
 */
export declare function useFigmaUiSelected(): {
    /** Selected frame IDs */
    selected: ComputedRef<string[]>;
    /** Indicates if fetch is in progress */
    loading: ComputedRef<boolean>;
    /**
     * Check if frame with ID is selected.
     * @param id Frame ID
     * @returns Computed boolean
     */
    isSelected(id: string): ComputedRef<boolean | undefined>;
    /**
     * Toggle frame selection state.
     * @param id Frame ID
     * @param selected Selection state
     */
    toggleSelected(id: string, selected: boolean): void;
};
// File: config.d.ts
export declare const FIGMA_IMAGE_TYPE = "image/jpeg";
/** Figma message type for texts */
export declare const FIGMA_MESSAGE_TEXTS = "texts";
// File: library.d.ts
export * from './composables/useFigmaClientStorage';
export * from './composables/useFigmaFrameSelection';
export * from './composables/useFigmaFrameStyles';
export * from './composables/useFigmaStorage';
export * from './composables/useFigmaUiFrames';
export * from './composables/useFigmaUiSelected';