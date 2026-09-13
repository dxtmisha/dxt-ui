// md5:26f8a808c74536e12193bc7ac7d2b23c true
/** Manages and observes the list of top-level Figma frames. @keywords figma, frames, ui, composable, loading */
export declare function useFigmaUiFrames(): {
    /** List of top-level frames. */
    frames: import("vue").ComputedRef<UiFigmaFramesList>;
    /** Indicates if a fetch operation is in progress. */
    loading: import("vue").ComputedRef<boolean>;
};