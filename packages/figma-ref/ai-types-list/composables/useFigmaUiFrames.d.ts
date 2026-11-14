// md5:19592c862674fb63d72b2e7da67f7906 true
import { type ComputedRef } from 'vue';
import { type UiFigmaFramesList } from '@dxtmisha/figma';
export type UseFigmaUiFramesReturn = {
    frames: ComputedRef<UiFigmaFramesList>;
    loading: ComputedRef<boolean>;
};
/** Composable for managing and observing top-level Figma frames. @keywords figma, frames, list, loading, composable */
export declare function useFigmaUiFrames(): UseFigmaUiFramesReturn;