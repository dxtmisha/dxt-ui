// md5:0c4110d01ab73176caf5ce083398bd16 true
import { type ComputedRef } from 'vue';
import { type UiFigmaFrameStylesMessengerAttributes, type UiFigmaFrameStylesMessengerResponse } from '@dxtmisha/figma';

export type UseFigmaFrameStylesReturn = {
    styles: ComputedRef<UiFigmaFrameStylesMessengerResponse>;
    /** Sends a style update request to Figma. @keywords figma, frame, styles, update, send */
    send(attributes: UiFigmaFrameStylesMessengerAttributes): void;
};

/** Manages and observes Figma frame styles. @keywords figma, frame, styles, composable */
export declare function useFigmaFrameStyles(): UseFigmaFrameStylesReturn;