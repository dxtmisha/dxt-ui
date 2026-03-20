/**
 * Class for working with Figma frames and their elements.
 *
 * Класс для работы с фреймами Figma и их элементами.
 */
export declare class FigmaFrame {
    protected readonly page: UiFigmaNode;
    protected readonly selection: boolean;
    /** List of main Figma items/ Список основных элементов Figma */
    protected mainItem: FigmaItem[];
    /**
     * List of all Figma items.
     *
     * Список всех элементов Figma.
     */
    protected items: FigmaItem[];
    /**
     * Constructor
     * @param page Figma page or node/ страница или узел Figma
     * @param selection whether to use the current selection or the entire page/ использовать текущее выделение или всю страницу
     */
    constructor(page: UiFigmaNode, selection?: boolean);
    /**
     * Checks if the current context is a selection.
     *
     * Проверяет, является ли текущий контекст выделением.
     */
    isSelection(): this is {
        page: PageNode;
    };
    /**
     * Returns all frame items.
     *
     * Возвращает все элементы-фреймы.
     */
    getItemsFrame(): FigmaItem<FrameNode>[];
    /**
     * Returns all section items.
     *
     * Возвращает все элементы-секции.
     */
    getItemsSection(): FigmaItem<SectionNode>[];
    /**
     * Returns all text items.
     *
     * Возвращает все текстовые элементы.
     */
    getItemsText(): FigmaItem<TextNode>[];
    /**
     * Returns main frames from the root node.
     *
     * Возвращает основные фреймы из корневого узла.
     */
    getMainFrames(): ((FigmaItem<UiFigmaNode> & {
        item: FrameNode;
    }) | (FigmaItem<UiFigmaNode> & {
        item: SectionNode;
    }))[];
    /**
     * Returns all text nodes with their IDs grouped by text content.
     *
     * Возвращает все текстовые узлы с их идентификаторами, сгруппированные по текстовому содержимому.
     */
    getTexts(): UiFigmaItemText[];
    /**
     * Takes screenshots of the main items.
     *
     * Делает скриншоты основных элементов.
     */
    screenshot(): Promise<Uint8Array<ArrayBufferLike>[]>;
    /**
     * Initializes main items based on selection or entire page.
     *
     * Инициализирует основные элементы на основе выделения или всей страницы.
     */
    protected initMain(): FigmaItem<UiFigmaNode>[];
    /**
     * Recursively initializes all items from the page.
     *
     * Рекурсивно инициализирует все элементы со страницы.
     * @param page Figma page or node/ страница или узел Figma
     */
    protected initItems(page: UiFigmaNode): FigmaItem[];
    /**
     * Initializes items based on the current selection or entire page.
     *
     * Инициализирует элементы на основе текущего выделения или всей страницы.
     */
    protected initBySelection(): FigmaItem<UiFigmaNode>[];
    /**
     * Filters items by the specified condition.
     *
     * Фильтрует элементы по указанному условию.
     * @param callback filter function/ функция фильтрации
     */
    protected filter<R extends UiFigmaNode>(callback: (item: FigmaItem) => boolean): FigmaItem<R>[];
    /**
     * Returns the main (root) item in the hierarchy.
     *
     * Возвращает главный (корневой) элемент в иерархии.
     * @param item starting item/ начальный элемент
     */
    protected toMain(item?: FigmaItem): FigmaItem;
}

/**
 * Class for working with Figma nodes.
 *
 * Класс для работы с узлами Figma.
 */
export declare class FigmaItem<T extends UiFigmaNode = UiFigmaNode> {
    protected item: T;
    /**
     * Constructor
     * @param item Figma node/ узел Figma
     */
    constructor(item: T);
    /**
     * Checks if the node is a document.
     *
     * Проверяет, является ли узел документом.
     */
    isDocument(): this is {
        item: DocumentNode;
    };
    /**
     * Checks if the node is a frame.
     *
     * Проверяет, является ли узел фреймом.
     */
    isFrame(): this is {
        item: FrameNode;
    };
    /**
     * Checks if the node is a section.
     *
     * Проверяет, является ли узел секцией.
     */
    isSection(): this is {
        item: SectionNode;
    };
    /**
     * Checks if the node is a text node.
     *
     * Проверяет, является ли узел текстовым узлом.
     */
    isText(): this is {
        item: TextNode;
    };
    /**
     * Checks if the node is a text node with a meaningful value.
     *
     * Проверяет, является ли узел текстовым узлом с осмысленным значением.
     */
    isTextNoValue(): this is {
        item: TextNode;
    };
    /**
     * Returns the Figma node.
     *
     * Возвращает узел Figma.
     */
    get(): T;
    /**
     * Returns the type of the node.
     *
     * Возвращает тип узла.
     */
    getType(): "SLICE" | "FRAME" | "GROUP" | "COMPONENT_SET" | "COMPONENT" | "INSTANCE" | "BOOLEAN_OPERATION" | "VECTOR" | "STAR" | "LINE" | "ELLIPSE" | "POLYGON" | "RECTANGLE" | "TEXT" | "TEXT_PATH" | "TRANSFORM_GROUP" | "STICKY" | "CONNECTOR" | "SHAPE_WITH_TEXT" | "CODE_BLOCK" | "STAMP" | "WIDGET" | "EMBED" | "LINK_UNFURL" | "MEDIA" | "SECTION" | "HIGHLIGHT" | "WASHI_TAPE" | "TABLE" | "SLIDE" | "SLIDE_ROW" | "SLIDE_GRID" | "INTERACTIVE_SLIDE_ELEMENT" | "DOCUMENT" | "PAGE" | undefined;
    /**
     * Returns the parent node.
     *
     * Возвращает родительский узел.
     */
    getParent(): (BaseNode & ChildrenMixin) | undefined;
    /**
     * Returns the parent node wrapped in FigmaItem.
     *
     * Возвращает родительский узел, обернутый в FigmaItem.
     */
    getParentItem(): FigmaItem | undefined;
    /**
     * Returns the child nodes.
     *
     * Возвращает дочерние узлы.
     */
    getChildren(): UiFigmaNode[];
    /**
     * Returns the child nodes wrapped in FigmaItem.
     *
     * Возвращает дочерние узлы, обернутые в FigmaItem.
     */
    getChildrenItems(): FigmaItem[];
    /**
     * Returns the node ID.
     *
     * Возвращает идентификатор узла.
     */
    getId(): string;
    /**
     * Returns the node name.
     *
     * Возвращает имя узла.
     */
    getName(): string;
    /**
     * Exports the node as JPG.
     *
     * Экспортирует узел в формате JPG.
     */
    exportJpg(): Promise<Uint8Array<ArrayBufferLike> | "">;
    /**
     * Exports the node as JSON.
     *
     * Экспортирует узел в формате JSON.
     */
    exportJson(): Promise<Uint8Array<ArrayBufferLike> | "">;
    /**
     * Returns the text content of the node.
     *
     * Возвращает текстовое содержимое узла.
     */
    getText(): string;
    /**
     * Converts format settings to ExportSettings.
     *
     * Преобразует настройки формата в ExportSettings.
     * @param formatSettings format settings/ настройки формата
     */
    protected getExportSettings(formatSettings: UiFigmaExportFormat | ExportSettings): ExportSettings;
    /**
     * Exports the node in the specified format.
     *
     * Экспортирует узел в указанном формате.
     * @param formatSettings format settings/ настройки формата
     */
    protected exportItem(formatSettings: UiFigmaExportFormat | ExportSettings): Promise<Uint8Array<ArrayBufferLike> | "">;
}

/**
 * Messenger for the Figma plugin side (backend).
 *
 * Мессенджер для стороны плагина Figma (backend).
 */
export declare class FigmaPluginMessenger extends FigmaPostAbstract {
    /**
     * Sends a message to the Figma UI.
     *
     * Отправляет сообщение в UI Figma.
     * @param type The type of the message / Тип сообщения
     * @param message The message data / Данные сообщения
     */
    post<Message>(type: string, message?: Message): void;
    /**
     * Initializes the listener using the figma.ui.onmessage API.
     *
     * Инициализирует слушатель, используя API figma.ui.onmessage.
     */
    protected prepare(): void;
}

/**
 * Base abstract class for managing messaging between the Figma plugin and UI.
 *
 * Базовый абстрактный класс для управления обменом сообщениями между плагином Figma и UI.
 */
export declare abstract class FigmaPostAbstract {
    protected isMake: boolean;
    protected readonly posts: Record<string, UiFigmaMessengerCallback[]>;
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
     */
    add<Message>(type: string, callback: UiFigmaMessengerCallback<Message>): this;
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

export declare type UiFigmaExportFormat = 'PNG' | 'JPG' | 'SVG' | 'PDF' | 'JSON_REST_V1';

export declare type UiFigmaItemText = {
    id: string[];
    text: string;
};

export declare type UiFigmaMessageTexts = {
    frame: FigmaFrame;
    texts: UiFigmaItemText[];
    screenshot: Uint8Array[];
};

/**
 * Type for the message callback function.
 *
 * Тип для функции обратного вызова сообщения.
 */
export declare type UiFigmaMessengerCallback<Message = any> = (message: Message) => void;

/**
 * Data structure for a message sent between the plugin and UI.
 *
 * Структура данных для сообщения, передаваемого между плагином и UI.
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
 * Structure for storing a message type and its associated callbacks.
 *
 * Структура для хранения типа сообщения и связанных с ним обратных вызовов.
 */
export declare type UiFigmaMessengerItem = {
    type: string;
    callbackList: UiFigmaMessengerCallback[];
};

/**
 * List of message items.
 *
 * Список элементов сообщений.
 */
export declare type UiFigmaMessengerList = UiFigmaMessengerItem[];

export declare type UiFigmaNode = ChildrenMixin | SceneNode | DefaultShapeMixin | DocumentNode | PageNode | FrameNode | SectionNode | TextNode;

/**
 * Composable for accessing the FigmaPluginMessenger singleton.
 * Initializes the messenger on first call.
 *
 * Композиция для доступа к синглтону FigmaPluginMessenger.
 * Инициализирует мессенджер при первом вызове.
 * @returns FigmaPluginMessenger
 */
export declare function useFigmaPluginMessenger(): FigmaPluginMessenger;

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
