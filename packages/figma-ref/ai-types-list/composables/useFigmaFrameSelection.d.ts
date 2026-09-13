// md5:9c627dc1cb34b7a4eb56ce423fd6cc22 true
/** Manages and observes the list of selected frames in Figma. @keywords figma, selection, frames, composable */
export declare function useFigmaFrameSelection(): {
    /** Reactive list of selected Figma frames. */
    selection: import("vue").ComputedRef<UiFigmaFramesList>;
    /** Sets the current selection in Figma. @keywords figma, set selection, frame id */
    setSelection(id: string): void;
    /** Indicates if a fetch operation is currently in progress. */
    loading: import("vue").ComputedRef<boolean>;
};