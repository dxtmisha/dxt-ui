// md5:cf1f5c7e09092c57cc557a366c6419c9 true
import { type UiFigmaFrameStylesMessengerAttributes, type UiFigmaFrameStylesMessengerResponse } from '@dxtmisha/figma';

/** Composable for managing and observing frame styles from Figma. @keywords figma, frame styles, composable */
export declare function useFigmaFrameStyles(): {
    /** Reactive frame styles from Figma. */
    styles: import("vue").ComputedRef<UiFigmaFrameStylesMessengerResponse>;
    /** Sends a style update request to Figma. @keywords figma, update, styles, messenger */
    send(attributes: UiFigmaFrameStylesMessengerAttributes): void;
};