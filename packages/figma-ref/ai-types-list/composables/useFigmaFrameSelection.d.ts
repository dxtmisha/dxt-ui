// md5:01540b122064816bac0571e9f126515d true
import { type UiFigmaFramesList } from '@dxtmisha/figma';

/** Manages and observes Figma frame selection and loading state. @keywords figma, frame, selection, composable */
export declare function useFigmaFrameSelection(): {
    /** Selected frames list. */
    selection: import("vue").ComputedRef<UiFigmaFramesList>;
    /** Sets the current Figma selection by frame ID. @keywords figma, set selection, frame id */
    setSelection(id: string): void;
    /** Indicates if a fetch operation is currently in progress. */
    loading: import("vue").ComputedRef<boolean>;
};