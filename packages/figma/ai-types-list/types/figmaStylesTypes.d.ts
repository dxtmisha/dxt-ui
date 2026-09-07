// md5:97d269b9ca5e4a47a1e9db2dc8f35b93 true
export type UiFigmaFrameStylesCssItem = Record<string, string>;
export type UiFigmaFrameStylesCssList = Record<string, UiFigmaFrameStylesCssItem>;
/** JSON structure representing Figma node hierarchy and styles. @keywords figma, json, frame, node, styles */
export type UiFigmaFrameStylesJson = {
    id: string;
    name: string;
    type?: string;
    characters?: string;
    style?: Record<string, string | number | boolean>;
    styles?: Record<string, string>;
    children?: UiFigmaFrameStylesJson[];
};
/** Document tree and style dictionary for a Figma frame. @keywords figma, frame, styles, document */
export type UiFigmaFrameStylesData = {
    document: UiFigmaFrameStylesJson;
    styles: Record<string, any>;
};
/** Extended frame item containing parsed JSON, CSS styles, and text content. @keywords figma, frame, styles, css */
export type UiFigmaFrameStylesItem = UiFigmaFramesItem & {
    json?: UiFigmaFrameStylesData;
    text?: string;
    styles?: UiFigmaFrameStylesCssItem;
    childrenStyles?: UiFigmaFrameStylesCssList;
};
export type UiFigmaFrameStylesList = UiFigmaFrameStylesItem[];
/** Request attributes for querying frame style updates via messenger. @keywords messenger, request, attributes, figma, styles */
export type UiFigmaFrameStylesMessengerAttributes = {
    ids: string | string[];
    children?: boolean;
};
/** Response entry for frame styles update events. @keywords messenger, response, figma, styles */
export type UiFigmaFrameStylesMessengerResponseItem = {
    id: string;
    data: UiFigmaFrameStylesList;
};
export type UiFigmaFrameStylesMessengerResponse = UiFigmaFrameStylesMessengerResponseItem[];
/** Messenger event name for updating Figma frame styles. @keywords figma, event, messenger, styles */
export declare const FIGMA_FRAME_STYLES_MESSENGER_NAME = "ui-figma-styles-update";