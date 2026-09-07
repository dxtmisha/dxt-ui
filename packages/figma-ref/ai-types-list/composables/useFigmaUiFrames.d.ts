// md5:935f5e1d6958ccc14ce415c6c43c90a3 true
import { type UiFigmaFramesList } from '@dxtmisha/figma';
import type { ComputedRef } from 'vue';

/** Composable for managing and observing top-level Figma frames and fetch state. @keywords figma, frames, ui, composable, vue */
export declare function useFigmaUiFrames(): {
    /** Top-level Figma frames list. */
    frames: ComputedRef<UiFigmaFramesList>;
    /** Indicates if a fetch operation is currently in progress. */
    loading: ComputedRef<boolean>;
};