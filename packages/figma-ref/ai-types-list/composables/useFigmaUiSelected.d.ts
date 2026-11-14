// md5:1dbe6d87ff32d6921043f529dbe5ba8e true
import { type ComputedRef } from 'vue';

export type UseFigmaUiSelectedReturn = {
    selected: ComputedRef<string[]>;
    loading: ComputedRef<boolean>;
    /** Checks if a frame with the given ID is selected. @keywords frame, isSelected, check */
    isSelected(id: string): ComputedRef<boolean>;
    /** Toggles the selection state of a frame. @keywords toggle, selection, frame */
    toggleSelected(id: string, selected: boolean): void;
};

/** Manages and observes selected frames in the Figma UI. @keywords figma, ui, selected, frames, selection */
export declare function useFigmaUiSelected(): UseFigmaUiSelectedReturn;