/**
 * Represents a simplified Figma frame item for the UI/
 * Представляет упрощенный элемент фрейма Figma для пользовательского интерфейса
 */
export type UiFigmaFramesItem = {
    /** Name of the frame / Название фрейма */
    name: string;
    /** Unique element ID / Уникальный идентификатор элемента */
    id: string;
    /** Image as a byte array or Base64 string / Изображение в виде байтового массива или строки Base64 */
    image?: Uint8Array<ArrayBufferLike> | string;
};
/**
 * List of frame items/
 * Список элементов фреймов
 */
export type UiFigmaFramesList = UiFigmaFramesItem[];
/**
 * Message name for sending the list of frames/
 * Имя сообщения для отправки списка фреймов
 */
export declare const UI_FIGMA_FRAMES_POST_NAME = "ui-figma-frames-list";
/**
 * Message name for sending the selected frames/
 * Имя сообщения для отправки выбранных фреймов
 */
export declare const UI_FIGMA_FRAMES_SELECTED_POST_NAME = "ui-figma-frames-selected";
/**
 * Message name for adding a frame to the selection/
 * Имя сообщения для добавления фрейма в выборку
 */
export declare const UI_FIGMA_FRAMES_SELECTED_ADD_NAME = "ui-figma-frames-selected-add";
/**
 * Message name for getting the selection of frames/
 * Имя сообщения для получения выборки фреймов
 */
export declare const UI_FIGMA_FRAME_GET_SELECTION = "ui-figma-frame-get-selection";
/**
 * Message name for setting the selection of frames/
 * Имя сообщения для установки выборки фреймов
 */
export declare const UI_FIGMA_FRAME_SET_SELECTION = "ui-figma-frame-set-selection";
/**
 * Message name for getting the client storage/
 * Имя сообщения для получения клиентского хранилища
 */
export declare const UI_FIGMA_CLIENT_STORAGE_GET = "ui-figma-client-storage-get";
/**
 * Message name for setting the client storage/
 * Имя сообщения для установки клиентского хранилища
 */
export declare const UI_FIGMA_CLIENT_STORAGE_SET = "ui-figma-client-storage-set";
/**
 * Message name for getting the storage/
 * Имя сообщения для получения хранилища
 */
export declare const UI_FIGMA_STORAGE_GET = "ui-figma-storage-get";
/**
 * Message name for setting the storage/
 * Имя сообщения для установки хранилища
 */
export declare const UI_FIGMA_STORAGE_SET = "ui-figma-storage-set";
