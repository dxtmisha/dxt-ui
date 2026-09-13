// md5:a39a70e8dffbd3b4232ed8d35a2477bc true
import { type UiFigmaFramesList } from '@dxtmisha/figma';

/** Manages and transmits top-level frames in the Figma plugin. @keywords figma, frames, top-level, plugin */
export declare class FigmaTopLevelFrames {
    /** Retrieves and caches the formatted list of top-level frames. @keywords get, frames, cache, top-level */
    static get(): Promise<UiFigmaFramesList>;
    /** Listens for frame requests and sends frame data via the plugin messenger. @keywords send, listener, frames, messenger */
    static send(): void;
}