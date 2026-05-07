import { UiFigmaFramesItem } from './framesTypes';
export type UiFigmaFrameStylesCssItem = Record<string, string>;
export type UiFigmaFrameStylesCssList = Record<string, UiFigmaFrameStylesCssItem>;
export type UiFigmaFrameStylesJson = {
    id: string;
    name: string;
    type?: string;
    characters?: string;
    style?: Record<string, string | number | boolean>;
    styles?: Record<string, string>;
    children?: UiFigmaFrameStylesJson[];
};
export type UiFigmaFrameStylesData = {
    document: UiFigmaFrameStylesJson;
    styles: Record<string, any>;
};
export type UiFigmaFrameStylesItem = UiFigmaFramesItem & {
    json?: UiFigmaFrameStylesData;
    text?: string;
    styles?: UiFigmaFrameStylesCssItem;
    childrenStyles?: UiFigmaFrameStylesCssList;
};
export type UiFigmaFrameStylesList = UiFigmaFrameStylesItem[];
export type UiFigmaFrameStylesMessengerAttributes = {
    ids: string | string[];
    children?: boolean;
};
export type UiFigmaFrameStylesMessengerResponseItem = {
    id: string;
    data: UiFigmaFrameStylesList;
};
export type UiFigmaFrameStylesMessengerResponse = UiFigmaFrameStylesMessengerResponseItem[];
export declare const FIGMA_FRAME_STYLES_MESSENGER_NAME = "ui-figma-styles-update";
