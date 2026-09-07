// md5:cf1f5c7e09092c57cc557a366c6419c9 true
import { type UiFigmaFrameStylesMessengerAttributes, type UiFigmaFrameStylesMessengerResponse } from '@dxtmisha/figma';

/** Manages and observes frame styles from Figma. @keywords figma, frame styles, composable, observer */
export declare function useFigmaFrameStyles(): {
    /** Reactive reference containing current Figma frame styles. */
    styles: import("vue").ComputedRef<UiFigmaFrameStylesMessengerResponse>;
    /** Sends a frame style update request. @keywords figma, frame styles, update, send */
    send(attributes: UiFigmaFrameStylesMessengerAttributes): void;
};