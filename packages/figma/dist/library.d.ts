import { AiAbstract } from '@dxtmisha/scripts/ai';

/**
 * Ensures that an image does not exceed the maximum size by resizing it if needed.
 *
 * Гарантирует, что изображение не превышает максимальный размер, изменяя его размер при необходимости.
 * @param file image file as Uint8Array / файл изображения в виде Uint8Array
 * @param compress maximum size as a fraction of the original size (default is 0.7)/
 * максимальный размер в виде доли от оригинального размера (по умолчанию 0.7)
 */
export declare function ensureMaxSize(file: Uint8Array, compress?: number): Promise<string>;

export declare class FigmaAiText {
    protected readonly ai: AiAbstract;
    protected readonly data: UiFigmaMessageTexts;
    constructor(ai: AiAbstract, data: UiFigmaMessageTexts);
    make(): Promise<this>;
    protected makeImage(): this;
    protected initTexts(): string;
}

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
    protected toMain(item?: FigmaItem): FigmaItem<UiFigmaNode>;
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
    exportJpg(): Promise<"" | Uint8Array<ArrayBufferLike>>;
    /**
     * Exports the node as JSON.
     *
     * Экспортирует узел в формате JSON.
     */
    exportJson(): Promise<"" | Uint8Array<ArrayBufferLike>>;
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
    protected exportItem(formatSettings: UiFigmaExportFormat | ExportSettings): Promise<"" | Uint8Array<ArrayBufferLike>>;
}

/**
 * Class for working with messages between Figma plugin code and UI.
 *
 * Класс для работы с сообщениями между кодом плагина Figma и UI.
 */
export declare class FigmaMessage {
    /**
     * List of registered message handlers/
     * Список зарегистрированных обработчиков сообщений
     */
    protected static readonly messages: UiFigmaMessageList;
    /**
     * Unique code for message identification/
     * Уникальный код для идентификации сообщений
     */
    protected static readonly code: string;
    /**
     * Sends a message from plugin code to UI.
     *
     * Отправляет сообщение из кода плагина в UI.
     * @param type message type/ тип сообщения
     * @param message message data/ данные сообщения
     */
    static post<MESSAGE>(type: string, message?: MESSAGE): void;
    /**
     * Registers a callback handler for a specific message type.
     *
     * Регистрирует обработчик callback для определённого типа сообщения.
     * @param type message type/ тип сообщения
     * @param callback callback function/ функция обратного вызова
     */
    static add<T>(type: string, callback: UiFigmaMessageCallback<T>): void;
    /**
     * Checks if the message code matches the expected code.
     *
     * Проверяет, соответствует ли код сообщения ожидаемому коду.
     * @param code message code/ код сообщения
     */
    protected static isCode(code: string): boolean;
    /**
     * Executes all registered callbacks for a specific message type.
     *
     * Выполняет все зарегистрированные обработчики для определённого типа сообщения.
     * @param type message type/ тип сообщения
     * @param message message data/ данные сообщения
     */
    protected static go(type: string, message: any): void;
    /**
     * Message event handler from the plugin.
     *
     * Обработчик события сообщения от плагина.
     * @param event message event/ событие сообщения
     */
    protected static on: (event: MessageEvent) => void;
}

/**
 * Sets up a listener for selection changes in Figma and sends text elements to the UI.
 *
 * Настраивает слушатель изменений выделения в Figma и отправляет текстовые элементы в UI.
 */
export declare const makeFigmaTexts: () => void;

export declare type UiFigmaExportFormat = 'PNG' | 'JPG' | 'SVG' | 'PDF' | 'JSON_REST_V1';

export declare type UiFigmaItemText = {
    id: string[];
    text: string;
};

export declare type UiFigmaMessageCallback<T = any> = (message: T) => void;

export declare type UiFigmaMessageData<T = any> = {
    code: string;
    type: string;
    message?: T;
};

export declare type UiFigmaMessageItem = {
    type: string;
    callbackList: UiFigmaMessageCallback[];
};

export declare type UiFigmaMessageList = UiFigmaMessageItem[];

export declare type UiFigmaMessageTexts = {
    frame: FigmaFrame;
    texts: UiFigmaItemText[];
    screenshot: Uint8Array[];
};

export declare type UiFigmaNode = ChildrenMixin | SceneNode | DefaultShapeMixin | DocumentNode | PageNode | FrameNode | SectionNode | TextNode;

export { }
