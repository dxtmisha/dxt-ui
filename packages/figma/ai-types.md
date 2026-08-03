1) All these methods are in the @dxtmisha/figma library.
2) Everything that is exported can be used.
3) Use what is in this library if it exists; do not use other libraries if there is an analogue here. Do not create new ones if an analogue already exists here.

The following is the content of "exports" from package.json:
{
  ".": {
    "import": "./dist/library.js",
    "types": "./dist/library.d.ts"
  }
}

export declare const FIGMA_IMAGE_TYPE = "image/jpeg";
export declare const FIGMA_MESSAGE_TEXTS = "texts";
export declare const FIGMA_FRAME_STYLES_MESSENGER_NAME = "ui-figma-styles-update";
export declare const UI_FIGMA_FRAMES_POST_NAME = "ui-figma-frames-list";
export declare const UI_FIGMA_FRAMES_SELECTED_POST_NAME = "ui-figma-frames-selected";
export declare const UI_FIGMA_FRAMES_SELECTED_ADD_NAME = "ui-figma-frames-selected-add";
export declare const UI_FIGMA_FRAME_GET_SELECTION = "ui-figma-frame-get-selection";
export declare const UI_FIGMA_FRAME_SET_SELECTION = "ui-figma-frame-set-selection";
export declare const UI_FIGMA_CLIENT_STORAGE_GET = "ui-figma-client-storage-get";
export declare const UI_FIGMA_CLIENT_STORAGE_SET = "ui-figma-client-storage-set";
export declare const UI_FIGMA_STORAGE_GET = "ui-figma-storage-get";
export declare const UI_FIGMA_STORAGE_SET = "ui-figma-storage-set";
export type UiFigmaMessengerCallback<Message = any> = (message: Message) => void;
export type UiFigmaMessengerCallbackItem<Message = any> = {
    callback: UiFigmaMessengerCallback<Message>;
    once: boolean;
};
export type UiFigmaMessengerItem = {
    type: string;
    callbackList: UiFigmaMessengerCallbackItem[];
};
export type UiFigmaMessengerList = Record<string, UiFigmaMessengerItem>;
export type UiFigmaMessengerData<Message = any> = {
    code: string;
    type: string;
    message?: Message;
};
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
export type UiFigmaFramesItem = {
    name: string;
    id: string;
    image?: Uint8Array<ArrayBufferLike> | string;
};
export type UiFigmaFramesList = UiFigmaFramesItem[];
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
export type ClientStorageMessengerData<T = any> = {
    name: string;
    value: T;
};
export type StorageMessengerData<T = any> = {
    id?: string;
    name: string;
    value: T;
};
/**
 * Base abstract class for managing messaging between the Figma plugin and UI.
 */
export declare abstract class FigmaPostAbstract {
    abstract post<Message>(type: string, message?: Message): void;
    add<Message>(type: string, callback: UiFigmaMessengerCallback<Message>, once?: boolean): this;
    remove<Message>(type: string, callback: UiFigmaMessengerCallback<Message>): this;
    /**
     * Initializes the message listener.
     */
    make(): this;
}
export declare class FigmaPostCode {
    static is(code: string): boolean;
    static get(): string;
    /**
     * Sets a new post code. Can only be called once.
     */
    static set(code: string): void;
}
export declare class FigmaUiMessenger extends FigmaPostAbstract {
    static getInstance(): FigmaUiMessenger;
    post<Message>(type: string, message?: Message): void;
}
export declare function fetchClientStorage<T>(name: string, callback: (value: T) => void, defaultValue?: T, isOnce?: boolean): void;
export declare function fetchFrameSelection(callback: (value: UiFigmaFramesList) => void): void;
export declare function fetchFrameStyles(callback: (value: UiFigmaFrameStylesMessengerResponse) => void): void;
export declare function fetchFramesSelected(callback: (selected: string[]) => void): void;
export declare function fetchStorage<T>(name: string, callback: (value: T) => void, id?: string, defaultValue?: T, isOnce?: boolean): void;
export declare function fetchTopLevelFrames(callback: (frames: UiFigmaFramesList) => void): void;
export declare function sendClientStorage<T>(name: string, value: T): void;
export declare function sendFrameSelection(id?: string): void;
export declare function sendFrameStyles(attributes: UiFigmaFrameStylesMessengerAttributes): void;
export declare function sendFramesSelected(id: string, selected: boolean): void;
export declare function sendStorage<T>(name: string, value: T, id?: string): void;