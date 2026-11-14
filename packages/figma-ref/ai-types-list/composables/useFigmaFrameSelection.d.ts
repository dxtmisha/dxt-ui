// md5:78a17004857c5a14b480689489e1bd39 true
import { type ComputedRef } from 'vue';
import { type UiFigmaFramesList } from '@dxtmisha/figma';

export type UseFigmaFrameSelectionReturn = {
    /** List of selected frames. */
    selection: ComputedRef<UiFigmaFramesList>;
    /** Sets the current selection in Figma by frame ID. @keywords figma, selection, frame */
    setSelection(id: string): void;
    /** Indicates if a fetch operation is currently in progress. */
    loading: ComputedRef<boolean>;
};

/** Composable for managing and observing the list of selected frames in Figma. @keywords figma, frame selection, composable */
export declare function useFigmaFrameSelection(): UseFigmaFrameSelectionReturn;