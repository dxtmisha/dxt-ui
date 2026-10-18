// md5:935f5e1d6958ccc14ce415c6c43c90a3 true
import { type UiFigmaFramesList } from '@dxtmisha/figma';
/** Composable for managing and observing top-level Figma frames. @keywords figma, frames, ui, composable, state */
export declare function useFigmaUiFrames(): {
    /** List of top-level frames. */
    frames: import("vue").ComputedRef<UiFigmaFramesList>;
    /** Indicates if a fetch operation is currently in progress. */
    loading: import("vue").ComputedRef<boolean>;
};