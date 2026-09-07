// md5:dfecf70f901c20631981cc390cb81d2c true
import { type UiFigmaFramesList } from '@dxtmisha/figma';

/** Manages and dispatches top-level frames in the Figma plugin. @keywords figma top-level frames manager */
export declare class FigmaTopLevelFrames {
    /** Retrieves and caches the formatted list of top-level frames. @keywords get fetch frames cache */
    static get(): Promise<UiFigmaFramesList>;
    /** Sets up a listener for frame requests and sends data via the plugin messenger. @keywords send frames listener messenger */
    static send(): void;
}