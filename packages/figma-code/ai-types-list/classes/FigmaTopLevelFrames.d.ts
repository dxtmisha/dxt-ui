// md5:dfecf70f901c20631981cc390cb81d2c true
import { type UiFigmaFramesList } from '@dxtmisha/figma';
/** Manages and sends the list of top-level frames in the Figma plugin. @keywords figma frames top-level plugin */
export declare class FigmaTopLevelFrames {
    /** Retrieves and caches the formatted list of top-level frames. @keywords get frames cache list */
    static get(): Promise<UiFigmaFramesList>;
    /** Sets up a listener for frame requests and sends the data back using the plugin messenger. @keywords send listener messenger frames */
    static send(): void;
}