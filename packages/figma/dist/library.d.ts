/**
 * Fetches the selected frames from the Figma plugin.
 *
 * Получает выбранные фреймы из плагина Figma.
 * @param callback The function to call once the frames are received / Функция, вызываемая после получения выбранных фреймов
 */
export declare function fetchFramesSelected(callback: (selected: string[]) => void): void;

/**
 * Fetches the top-level frames from the Figma plugin.
 *
 * Получает фреймы верхнего уровня из плагина Figma.
 * @param callback The function to call once the frames are received / Функция, вызываемая после получения фреймов
 */
export declare function fetchTopLevelFrames(callback: (frames: UiFigmaFramesList) => void): void;

/**
 * Base abstract class for managing messaging between the Figma plugin and UI.
 *
 * Базовый абстрактный класс для управления обменом сообщениями между плагином Figma и UI.
 */
export declare abstract class FigmaPostAbstract {
    protected isMake: boolean;
    protected readonly posts: UiFigmaMessengerList;
    /**
     * Sends a message to the other side.
     *
     * Отправляет сообщение на другую сторону.
     * @param type The type of the message / Тип сообщения
     * @param message The message data / Данные сообщения
     */
    abstract post<Message>(type: string, message?: Message): void;
    /**
     * Adds a callback listener for a specific message type.
     *
     * Добавляет колбэк-слушатель для определенного типа сообщения.
     * @param type The type of the message / Тип сообщения
     * @param callback The function to call when the message is received / Функция, вызываемая при получении сообщения
     * @param once Whether the callback should only be called once / Вызывать ли колбэк только один раз
     */
    add<Message>(type: string, callback: UiFigmaMessengerCallback<Message>, once?: boolean): this;
    /**
     * Removes a callback listener for a specific message type.
     *
     * Удаляет колбэк-слушатель для определенного типа сообщения.
     * @param type The type of the message / Тип сообщения
     * @param callback The function to remove / Функция для удаления
     */
    remove<Message>(type: string, callback: UiFigmaMessengerCallback<Message>): this;
    /**
     * Initializes the message listener.
     *
     * Инициализирует слушатель сообщений.
     */
    make(): this;
    /**
     * Sets up the actual environment-specific message listener.
     *
     * Настраивает фактический слушатель сообщений, зависящий от среды.
     */
    protected abstract prepare(): void;
    /**
     * Notifies all registered listeners for a specific message type.
     *
     * Уведомляет всех зарегистрированных слушателей для определенного типа сообщения.
     * @param type The type of the message / Тип сообщения
     * @param message The message data / Данные сообщения
     */
    protected notify<Message>(type: string, message: Message): void;
    /**
     * Internal message handler that filters by post code and notifies listeners.
     *
     * Внутренний обработчик сообщений, который фильтрует по коду сообщения и уведомляет слушателей.
     * @param data The received message data / Данные полученного сообщения
     */
    protected onMessage: (data?: UiFigmaMessengerData) => void;
}

/**
 * Class for managing the unique code used for verifying messages between the Figma plugin and UI.
 *
 * Класс для управления уникальным кодом, используемым для проверки сообщений между плагином Figma и UI.
 */
export declare class FigmaPostCode {
    private static code;
    private static isEditable;
    /**
     * Checks if the provided code matches the current post code.
     *
     * Проверяет, совпадает ли предоставленный код с текущим кодом сообщения.
     * @param code The code to check / Проверяемый код
     */
    static is(code: string): boolean;
    /**
     * Returns the current post code.
     *
     * Возвращает текущий код сообщения.
     */
    static get(): string;
    /**
     * Sets a new post code. Can only be called once.
     *
     * Устанавливает новый код сообщения. Можно вызвать только один раз.
     * @param code The new code to set / Новый код для установки
     */
    static set(code: string): void;
}

/**
 * Messenger for the Figma UI side (frontend).
 *
 * Мессенджер для стороны UI Figma (frontend).
 */
export declare class FigmaUiMessenger extends FigmaPostAbstract {
    /**
     * Sends a message to the Figma plugin.
     *
     * Отправляет сообщение в плагин Figma.
     * @param type The type of the message / Тип сообщения
     * @param message The message data / Данные сообщения
     */
    post<Message>(type: string, message?: Message): void;
    /**
     * Initializes the listener using the window message event.
     *
     * Инициализирует слушатель, используя событие message объекта window.
     */
    protected prepare(): void;
}

/**
 * Send selection frame to UI
 *
 * Отправка выделенного фрейма в UI
 * @param id - Frame ID / ID фрейма
 */
export declare function sendFrameSelection(id?: string): void;

/**
 * Sends the selected frames to the Figma plugin.
 *
 * Отправляет выбранные фреймы в плагин Figma.
 * @param id The ID of the frame / Идентификатор фрейма
 * @param selected The selection state of the frame / Состояние выбора фрейма
 */
export declare function sendFramesSelected(id: string, selected: boolean): void;

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
 * Message name for setting the selection of frames/
 * Имя сообщения для установки выборки фреймов
 */
export declare const UI_FIGMA_FRAME_SET_SELECTION = "ui-figma-frame-set-selection";

/**
 * Message name for sending the list of frames/
 * Имя сообщения для отправки списка фреймов
 */
export declare const UI_FIGMA_FRAMES_POST_NAME = "ui-figma-frames-list";

/**
 * Message name for adding a frame to the selection/
 * Имя сообщения для добавления фрейма в выборку
 */
export declare const UI_FIGMA_FRAMES_SELECTED_ADD_NAME = "ui-figma-frames-selected-add";

/**
 * Message name for sending the selected frames/
 * Имя сообщения для отправки выбранных фреймов
 */
export declare const UI_FIGMA_FRAMES_SELECTED_POST_NAME = "ui-figma-frames-selected";

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

/**
 * Represents a simplified Figma frame item for the UI/
 * Представляет упрощенный элемент фрейма Figma для пользовательского интерфейса
 */
export declare type UiFigmaFramesItem = {
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
export declare type UiFigmaFramesList = UiFigmaFramesItem[];

/**
 * Type for the message callback function/
 * Тип для функции обратного вызова сообщения
 */
export declare type UiFigmaMessengerCallback<Message = any> = (message: Message) => void;

/**
 * Item containing a callback and its execution rule/
 * Элемент, содержащий функцию обратного вызова и правило её выполнения
 */
export declare type UiFigmaMessengerCallbackItem<Message = any> = {
    /** Callback function / Функция обратного вызова */
    callback: UiFigmaMessengerCallback<Message>;
    /** Rule for single execution / Правило однократного выполнения */
    once: boolean;
};

/**
 * Data structure for a message sent between the plugin and UI/
 * Структура данных для сообщения, передаваемого между плагином и UI
 */
export declare type UiFigmaMessengerData<Message = any> = {
    /** Verification code / Проверочный код */
    code: string;
    /** Message type / Тип сообщения */
    type: string;
    /** Message content / Содержимое сообщения */
    message?: Message;
};

/**
 * Structure for storing a message type and its associated callbacks/
 * Структура для хранения типа сообщения и связанных с ним обратных вызовов
 */
export declare type UiFigmaMessengerItem = {
    /** Message type / Тип сообщения */
    type: string;
    /** List of registered callbacks / Список зарегистрированных функций обратного вызова */
    callbackList: UiFigmaMessengerCallbackItem[];
};

/**
 * List of message items/
 * Список элементов сообщений
 */
export declare type UiFigmaMessengerList = Record<string, UiFigmaMessengerItem>;

/**
 * Composable for accessing the FigmaUiMessenger singleton.
 * Initializes the messenger on first call.
 *
 * Композиция для доступа к синглтону FigmaUiMessenger.
 * Инициализирует мессенджер при первом вызове.
 * @returns FigmaUiMessenger
 */
export declare function useFigmaUiMessenger(): FigmaUiMessenger;

export { }
