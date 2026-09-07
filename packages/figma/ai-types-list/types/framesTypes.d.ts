// md5:a2f5add7bc95827dd4ee7e397a230d74 true
/** Simplified Figma frame item representation for UI @keywords figma, frame, item, ui */
export type UiFigmaFramesItem = {
    name: string;
    id: string;
    image?: Uint8Array<ArrayBufferLike> | string;
    svg?: Uint8Array<ArrayBufferLike> | string;
};
export type UiFigmaFramesList = UiFigmaFramesItem[];
export declare const UI_FIGMA_FRAMES_POST_NAME = "ui-figma-frames-list";
export declare const UI_FIGMA_FRAMES_SELECTED_POST_NAME = "ui-figma-frames-selected";
export declare const UI_FIGMA_FRAMES_SELECTED_ADD_NAME = "ui-figma-frames-selected-add";
export declare const UI_FIGMA_FRAME_GET_SELECTION = "ui-figma-frame-get-selection";
export declare const UI_FIGMA_FRAME_SET_SELECTION = "ui-figma-frame-set-selection";
export declare const UI_FIGMA_CLIENT_STORAGE_GET = "ui-figma-client-storage-get";
export declare const UI_FIGMA_CLIENT_STORAGE_SET = "ui-figma-client-storage-set";
export declare const UI_FIGMA_STORAGE_GET = "ui-figma-storage-get";
export declare const UI_FIGMA_STORAGE_SET = "ui-figma-storage-set";