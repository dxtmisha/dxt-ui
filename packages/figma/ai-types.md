1) All these methods are in the @dxtmisha/figma library.
2) Everything that is exported can be used.
3) Use what is in this library if it exists; do not use other libraries if there is an analogue here. Do not create new ones if an analogue already exists here.

The following is the content of "exports" from package.json:
{
  ".": {
    "import": "./dist/library.js",
    "types": "./dist/library.d.ts"
  },
  "./style.css": "./dist/style.css",
  "./types/*": "./dist/*",
  "./types/**/*.d.ts": "./dist/**/*.d.ts"
}

// File: classes/FigmaPostAbstract.d.ts
/** Base class for Figma plugin-UI messaging. */
export declare abstract class FigmaPostAbstract {
    /**
     * Sends message to the other side.
     * @param type Message type
     * @param message Message data
     */
    abstract post<Message>(type: string, message?: Message): void;
    /**
     * Adds listener for message type.
     * @param type Message type
     * @param callback Function called on receipt
     * @param once Execute only once
     */
    add<Message>(type: string, callback: UiFigmaMessengerCallback<Message>, once?: boolean): this;
    /**
     * Removes listener for message type.
     * @param type Message type
     * @param callback Function to remove
     */
    remove<Message>(type: string, callback: UiFigmaMessengerCallback<Message>): this;
    /** Initializes message listener. */
    make(): this;
}
// File: classes/FigmaPostCode.d.ts
/** Manages unique code for verifying Figma plugin-UI messages. */
export declare class FigmaPostCode {
    /**
     * Checks if code matches current post code.
     * @param code Code to check
     */
    static is(code: string): boolean;
    /** Returns current post code. */
    static get(): string;
    /**
     * Sets new post code. Callable once.
     * @param code New code
     */
    static set(code: string): void;
}
// File: classes/FigmaUiMessenger.d.ts
/** Messenger for Figma UI (frontend). */
export declare class FigmaUiMessenger extends FigmaPostAbstract {
    /**
     * Gets instance for Figma UI messenger.
     * @returns current instance
     */
    static getInstance(): FigmaUiMessenger;
    /**
     * Sends message to Figma plugin.
     * @param type Message type
     * @param message Message data
     */
    post<Message>(type: string, message?: Message): void;
}
// File: config.d.ts
export declare const FIGMA_IMAGE_TYPE = "image/jpeg";
/** Figma message type for texts */
export declare const FIGMA_MESSAGE_TEXTS = "texts";
// File: functions/fetchClientStorage.d.ts
/**
 * Fetch client storage data.
 * @param name Storage name
 * @param callback Callback function
 * @param defaultValue Default value
 * @param isOnce Call only once
 */
export declare function fetchClientStorage<T>(name: string, callback: (value: T) => void, defaultValue?: T, isOnce?: boolean): void;
// File: functions/fetchFrameSelection.d.ts
/**
 * Fetch list of selected frames.
 * @param callback Callback function
 */
export declare function fetchFrameSelection(callback: (value: UiFigmaFramesList) => void): void;
// File: functions/fetchFrameStyles.d.ts
/**
 * Fetch styles for specified frames.
 * @param callback Callback function
 */
export declare function fetchFrameStyles(callback: (value: UiFigmaFrameStylesMessengerResponse) => void): void;
// File: functions/fetchFramesSelected.d.ts
/**
 * Fetches selected frames from Figma plugin.
 * @param callback Function called on receipt
 */
export declare function fetchFramesSelected(callback: (selected: string[]) => void): void;
// File: functions/fetchStorage.d.ts
/**
 * Fetch storage data.
 * @param name Storage name
 * @param callback Callback function
 * @param id Storage id
 * @param defaultValue Default value
 * @param isOnce Call only once
 */
export declare function fetchStorage<T>(name: string, callback: (value: T) => void, id?: string, defaultValue?: T, isOnce?: boolean): void;
// File: functions/fetchTopLevelFrames.d.ts
/**
 * Fetches top-level frames from Figma plugin.
 * @param callback Function called on receipt
 */
export declare function fetchTopLevelFrames(callback: (frames: UiFigmaFramesList) => void): void;
// File: functions/sendClientStorage.d.ts
/**
 * Sends client storage data to Figma plugin.
 * @param name Storage name
 * @param value Value to store
 */
export declare function sendClientStorage<T>(name: string, value: T): void;
// File: functions/sendFrameSelection.d.ts
/**
 * Send selection frame to UI
 * @param id Frame ID
 */
export declare function sendFrameSelection(id?: string): void;
// File: functions/sendFrameStyles.d.ts
/**
 * Send request for frame styles.
 * @param attributes Attributes for fetching styles
 */
export declare function sendFrameStyles(attributes: UiFigmaFrameStylesMessengerAttributes): void;
// File: functions/sendFramesSelected.d.ts
/**
 * Sends selected frames to Figma plugin.
 * @param id Frame ID
 * @param selected Selection state
 */
export declare function sendFramesSelected(id: string, selected: boolean): void;
// File: functions/sendStorage.d.ts
/**
 * Sends storage data to Figma plugin.
 * @param name Storage name
 * @param value Value to store
 * @param id Object ID
 */
export declare function sendStorage<T>(name: string, value: T, id?: string): void;
// File: library.d.ts
export * from './classes/FigmaPostAbstract';
export * from './classes/FigmaPostCode';
export * from './classes/FigmaUiMessenger';
export * from './functions/fetchClientStorage';
export * from './functions/fetchFrameSelection';
export * from './functions/fetchFrameStyles';
export * from './functions/fetchFramesSelected';
export * from './functions/fetchStorage';
export * from './functions/fetchTopLevelFrames';
export * from './functions/sendClientStorage';
export * from './functions/sendFrameSelection';
export * from './functions/sendFrameStyles';
export * from './functions/sendFramesSelected';
export * from './functions/sendStorage';
export * from './types/figmaMessengerTypes';
export * from './types/figmaStylesTypes';
export * from './types/framesTypes';
export * from './types/storageTypes';
// File: types/figmaMessengerTypes.d.ts
/** Message callback function type */
export type UiFigmaMessengerCallback<Message = any> = (message: Message) => void;
/** Item with callback and execution rule */
export type UiFigmaMessengerCallbackItem<Message = any> = {
    /** Callback function */
    callback: UiFigmaMessengerCallback<Message>;
    /** Rule for single execution */
    once: boolean;
};
/** Stored message type and callbacks */
export type UiFigmaMessengerItem = {
    /** Message type */
    type: string;
    /** Registered callbacks */
    callbackList: UiFigmaMessengerCallbackItem[];
};
/** Message items list */
export type UiFigmaMessengerList = Record<string, UiFigmaMessengerItem>;
/** Message data structure */
export type UiFigmaMessengerData<Message = any> = {
    /** Verification code */
    code: string;
    /** Message type */
    type: string;
    /** Message content */
    message?: Message;
};
// File: types/figmaStylesTypes.d.ts
/** CSS styles for a Figma element */
export type UiFigmaFrameStylesCssItem = Record<string, string>;
/** CSS styles list indexed by ID */
export type UiFigmaFrameStylesCssList = Record<string, UiFigmaFrameStylesCssItem>;
/** JSON structure for Figma frame style */
export type UiFigmaFrameStylesJson = {
    /** Node ID */
    id: string;
    /** Node name */
    name: string;
    /** Node type */
    type?: string;
    /** Text content */
    characters?: string;
    /** Style properties */
    style?: Record<string, string | number | boolean>;
    /** Map of style IDs */
    styles?: Record<string, string>;
    /** Child nodes */
    children?: UiFigmaFrameStylesJson[];
};
/** Document tree and styles data */
export type UiFigmaFrameStylesData = {
    /** Document node tree */
    document: UiFigmaFrameStylesJson;
    /** Style definitions */
    styles: Record<string, any>;
};
/** Figma frame style item */
export type UiFigmaFrameStylesItem = UiFigmaFramesItem & {
    /** Compact JSON data */
    json?: UiFigmaFrameStylesData;
    /** Text content */
    text?: string;
    /** CSS styles */
    styles?: UiFigmaFrameStylesCssItem;
    /** Map of children's CSS styles */
    childrenStyles?: UiFigmaFrameStylesCssList;
};
/** Frame style items list */
export type UiFigmaFrameStylesList = UiFigmaFrameStylesItem[];
/** Messenger request attributes for frame styles */
export type UiFigmaFrameStylesMessengerAttributes = {
    /** List of IDs */
    ids: string | string[];
    /** Include child styles */
    children?: boolean;
};
/** Messenger response item for frame styles */
export type UiFigmaFrameStylesMessengerResponseItem = {
    /** Node ID */
    id: string;
    /** Style data */
    data: UiFigmaFrameStylesList;
};
/** Full messenger response for frame styles */
export type UiFigmaFrameStylesMessengerResponse = UiFigmaFrameStylesMessengerResponseItem[];
/** Event name for updating Figma frame styles */
export declare const FIGMA_FRAME_STYLES_MESSENGER_NAME = "ui-figma-styles-update";
// File: types/framesTypes.d.ts
/** Simplified Figma frame item */
export type UiFigmaFramesItem = {
    /** Frame name */
    name: string;
    /** Unique element ID */
    id: string;
    /** Image as byte array or Base64 */
    image?: Uint8Array<ArrayBufferLike> | string;
};
/** Frame items list */
export type UiFigmaFramesList = UiFigmaFramesItem[];
/** Message: send frame list */
export declare const UI_MA_FRAMES_POST_NAME = "ui-figma-frames-list";
/** Message: send selected frames */
export declare const UI_FIGMA_FRAMES_SELECTED_POST_NAME = "ui-figma-frames-selected";
/** Message: add frame to selection */
export declare const UI_FIGMA_FRAMES_SELECTED_ADD_NAME = "ui-figma-frames-selected-add";
/** Message: get frame selection */
export declare const UI_FIGMA_FRAME_GET_SELECTION = "ui-figma-frame-get-selection";
/** Message: set frame selection */
export declare const UI_FIGMA_FRAME_SET_SELECTION = "ui-figma-frame-set-selection";
/** Message: get client storage */
export declare const UI_FIGMA_CLIENT_STORAGE_GET = "ui-figma-client-storage-get";
/** Message: set client storage */
export declare const UI_FIGMA_CLIENT_STORAGE_SET = "ui-figma-client-storage-set";
/** Message: get storage */
export declare const UI_FIGMA_STORAGE_GET = "ui-figma-storage-get";
/** Message: set storage */
export declare const UI_FIGMA_STORAGE_SET = "ui-figma-storage-set";
// File: types/storageTypes.d.ts
/** Client storage messenger data */
export type ClientStorageMessengerData<T = any> = {
    name: string;
    value: T;
};
/** Storage messenger data */
export type StorageMessengerData<T = any> = {
    id?: string;
    name: string;
    value: T;
};