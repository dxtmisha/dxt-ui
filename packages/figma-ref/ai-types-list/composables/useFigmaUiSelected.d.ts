// md5:14faf186e068f03c8480f0edf7a70535 true
/** Manages and observes selected Figma UI frames. @keywords figma ui selected frames useFigmaUiSelected */
export declare function useFigmaUiSelected(): {
    /** List of selected frame IDs. @keywords selected frame ids */
    selected: import("vue").ComputedRef<string[]>;
    /** Indicates if a fetch operation is in progress. @keywords loading state */
    loading: import("vue").ComputedRef<boolean>;
    /** Checks if a frame with the given ID is selected. @keywords isSelected frame */
    isSelected(id: string): import("vue").ComputedRef<boolean | undefined>;
    /** Toggles the selection state of a frame. @keywords toggleSelected frame */
    toggleSelected(id: string, selected: boolean): void;
};