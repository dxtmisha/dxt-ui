// md5:01540b122064816bac0571e9f126515d true
import { type UiFigmaFramesList } from '@dxtmisha/figma';

/** Manages and observes the list of selected frames in Figma. @keywords figma frame selection composable */
export declare function useFigmaFrameSelection(): {
    selection: import("vue").ComputedRef<UiFigmaFramesList>;
    /** Sets the current selection in Figma. @keywords figma set selection frame */
    setSelection(id: string): void;
    loading: import("vue").ComputedRef<boolean>;
};