// md5:43cd9fd20659ba12e98c7dfcb87cda4a true
import { type UiFigmaFramesList } from '@dxtmisha/figma';
import type { FigmaItem } from './FigmaItem';

/** Manages and dispatches top-level frames within the Figma plugin. @keywords figma, frames, top-level, manager */
export declare class FigmaTopLevelFrames {
    /** Retrieves and caches the formatted list of top-level frames. @keywords get, fetch, frames, cache */
    static get(): Promise<UiFigmaFramesList>;
    /** Resets the cached list of top-level frames. @keywords reset, clear, cache, frames */
    static reset(): void;
    /** Listens for frame requests and transmits frame data via plugin messenger. @keywords send, messenger, dispatch, listener */
    static send(): void;
}