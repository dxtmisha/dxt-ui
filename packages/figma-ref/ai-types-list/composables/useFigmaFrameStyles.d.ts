// md5:73125162fee115e0e45b146f00d2d95c true
import { type UiFigmaFrameStylesMessengerAttributes } from '@dxtmisha/figma';
/** Manages and observes Figma frame styles. @keywords figma, frame, styles, observer */
export declare function useFigmaFrameStyles(): {
    /** Frame styles reactive reference. */
    styles: import("vue").ComputedRef<UiFigmaFrameStylesMessengerResponse>;
    /** Sends a style update request. @keywords figma, update, styles, send */
    send(attributes: UiFigmaFrameStylesMessengerAttributes): void;
};