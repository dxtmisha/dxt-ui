import { AiAbstract } from '@dxtmisha/scripts/ai';
import { FigmaPostAbstract } from '@dxtmisha/figma';
import { UiFigmaFramesList } from '@dxtmisha/figma';

/** Client storage messenger data/ Данные сообщения клиентского хранилища */
export declare type ClientStorageMessengerData = {
    name: string;
    value: any;
};

export declare class FigmaAiText {
    protected readonly ai: AiAbstract;
    protected readonly data: UiFigmaMessageTexts;
    constructor(ai: AiAbstract, data: UiFigmaMessageTexts);
    make(): Promise<this>;
    protected makeImage(): this;
    protected initTexts(): string;
}

/**
 * Class for working with Figma client storage (clientStorage).
 *
 * Класс для работы с клиентским хранилищем Figma (clientStorage).
 */
export declare class FigmaClientStorage<T> {
    protected readonly name: string;
    protected readonly cache?: number | undefined;
    protected data: FigmaStorageData<T>;
    /**
     * Constructor
     * @param name value name/ название значения
     * @param cache cache time/ время кэширования
     */
    constructor(name: string, cache?: number | undefined);
    /**
     * Getting data from storage.
     *
     * Получение данных из хранилища.
     * @param defaultValue default value/ значение по умолчанию
     */
    get(defaultValue?: T | (() => T | Promise<T>)): Promise<T | undefined>;
    /**
     * Changing data in storage.
     *
     * Изменение данных в хранилище.
     * @param value new values/ новые значения
     * @returns current value/ текущее значение
     */
    set(value?: T | (() => T | Promise<T>)): Promise<T | undefined>;
    /**
     * Removing data from storage.
     *
     * Удаление данных из хранилища.
     * @returns current instance/ текущий экземпляр
     */
    remove(): Promise<this>;
    /**
     * Getting data from storage.
     *
     * Получение данных из хранилища.
     * @returns data from storage/ данные из хранилища
     */
    protected getValue(): Promise<FigmaStorageDataValue<T> | undefined>;
    /**
     * Making an instance from storage data.
     *
     * Создание экземпляра из данных хранилища.
     * @returns current instance/ текущий экземпляр
     */
    protected make(): Promise<this>;
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
    getMainFrames(): FigmaItem[];
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
 * Class for managing and synchronizing the list of selected frames in the Figma plugin.
 *
 * Класс для управления и синхронизации списка выбранных фреймов в плагине Figma.
 */
export declare class FigmaFramesSelected {
    /** Storage for persistent selected frames / Хранилище для постоянного списка выбранных фреймов */
    protected static storage: FigmaStorage<string[]>;
    /** Cached list of selected frame IDs / Кэшированный список идентификаторов выбранных фреймов */
    protected static selected: string[] | undefined;
    /**
     * Checks if a frame with the given ID is selected.
     *
     * Проверяет, выбран ли фрейм с указанным идентификатором.
     * @param id Frame ID / Идентификатор фрейма
     * @returns `true` if selected / `true`, если выбран
     */
    static has(id: string): boolean;
    /**
     * Retrieves the current list of selected frame IDs, using cache if available.
     *
     * Получает текущий список идентификаторов выбранных фреймов, используя кэш при его наличии.
     * @returns An array of selected frame IDs / Массив идентификаторов выбранных фреймов
     */
    static get(): string[];
    /**
     * Adds a frame ID to the selection list.
     *
     * Добавляет идентификатор фрейма в список выбора.
     * @param id Frame ID / Идентификатор фрейма
     */
    static add(id: string): void;
    /**
     * Removes a frame ID from the selection list.
     *
     * Удаляет идентификатор фрейма из списка выбора.
     * @param id Frame ID / Идентификатор фрейма
     */
    static remove(id: string): void;
    /**
     * Toggles the selection state of a frame.
     *
     * Переключает состояние выбора фрейма.
     * @param id Frame ID / Идентификатор фрейма
     * @param selected Whether to select or deselect / Выбрать или отменить выбор
     */
    static toggle(id: string, selected: boolean): void;
    /**
     * Sets up communication via the plugin messenger to handle selection state.
     *
     * Настраивает связь через мессенджер плагина для управления состоянием выбора.
     */
    static send(): void;
    /**
     * Retrieves the raw selection list from storage.
     *
     * Получает необработанный список выбора из хранилища.
     * @returns An array of frame IDs / Массив идентификаторов фреймов
     */
    protected static getList(): string[];
    /**
     * Updates the selection list in cache and storage.
     *
     * Обновляет список выбора в кэше и хранилище.
     * @param selected New selection list / Новый список выбора
     */
    protected static set(selected: string[]): void;
    /**
     * Posts the current selection list to the Figma UI.
     *
     * Публикует текущий список выбора в интерфейс Figma.
     */
    protected static post(): void;
}

/**
 * Class for working with Figma nodes.
 *
 * Класс для работы с узлами Figma.
 * @template T type of Figma node/ тип узла Figma
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
     * Checks if the node is in the current page.
     *
     * Проверяет, находится ли узел на текущей странице.
     */
    inCurrentPage(): boolean;
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
    getType(): "SLICE" | "FRAME" | "GROUP" | "COMPONENT_SET" | "COMPONENT" | "INSTANCE" | "BOOLEAN_OPERATION" | "VECTOR" | "STAR" | "LINE" | "ELLIPSE" | "POLYGON" | "RECTANGLE" | "TEXT" | "TEXT_PATH" | "TRANSFORM_GROUP" | "STICKY" | "CONNECTOR" | "SHAPE_WITH_TEXT" | "CODE_BLOCK" | "STAMP" | "WIDGET" | "EMBED" | "LINK_UNFURL" | "MEDIA" | "SECTION" | "HIGHLIGHT" | "WASHI_TAPE" | "TABLE" | "SLIDE" | "SLIDE_ROW" | "SLIDE_GRID" | "SLOT" | "INTERACTIVE_SLIDE_ELEMENT" | "DOCUMENT" | "PAGE" | undefined;
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
     * Returns the parent page.
     *
     * Возвращает родительскую страницу.
     */
    getParentPage(): PageNode | undefined;
    /**
     * Returns the parent page wrapped in FigmaItem.
     *
     * Возвращает родительскую страницу, обернутую в FigmaItem.
     */
    getParentPageItem(): FigmaItem | undefined;
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
     * Selects the node.
     *
     * Выделяет узел.
     */
    toSelection(): void;
    /**
     * Moves to the page containing the node and selects it.
     *
     * Перемещает на страницу, содержащую узел, и выделяет его.
     */
    toPageAndSelection(): Promise<void>;
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
 * Class for working with Figma storage (PluginData).
 *
 * Класс для работы с хранилищем Figma (PluginData).
 */
export declare class FigmaStorage<T> {
    protected readonly name: string;
    protected readonly item: PluginDataMixin;
    protected readonly cache?: number | undefined;
    protected data: FigmaStorageData<T>;
    /**
     * Constructor
     * @param name value name/ название значения
     * @param item object for storing data/ объект для хранения данных
     * @param cache cache time/ время кэширования
     */
    constructor(name: string, item?: PluginDataMixin, cache?: number | undefined);
    /**
     * Getting data from storage.
     *
     * Получение данных из хранилища.
     * @param defaultValue default value/ значение по умолчанию
     */
    get(defaultValue?: T | (() => T)): T | undefined;
    /**
     * Changing data in storage.
     *
     * Изменение данных в хранилище.
     * @param value new values/ новые значения
     * @returns current value/ текущее значение
     */
    set(value?: T | (() => T)): T | undefined;
    /**
     * Removing data from storage.
     *
     * Удаление данных из хранилища.
     * @returns current instance/ текущий экземпляр
     */
    remove(): this;
    /**
     * Getting data from storage.
     *
     * Получение данных из хранилища.
     * @returns data from storage/ данные из хранилища
     */
    protected getValue(): FigmaStorageDataValue<T> | undefined;
    /**
     * Making an instance from storage data.
     *
     * Создание экземпляра из данных хранилища.
     * @returns current instance/ текущий экземпляр
     */
    protected make(): this;
}

/**
 * Class for managing Figma storage data.
 *
 * Класс для управления данными хранилища Figma.
 * @template T type of data/ тип данных
 */
export declare class FigmaStorageData<T> {
    protected readonly name: string;
    protected readonly cache?: number | undefined;
    /** Current value in the instance/ Текущее значение в экземпляре */
    protected value?: T;
    /** Value update time/ Время обновления значения */
    protected age?: number;
    /**
     * Constructor
     * @param name value name/ название значения
     * @param cache cache time/ время кэширования
     */
    constructor(name: string, cache?: number | undefined);
    /**
     * Checks if the value is null or undefined.
     *
     * Проверяет, является ли значение null или undefined.
     */
    isNull(): boolean;
    /**
     * Checks for storage time limit.
     *
     * Проверяет на лимит времени хранения.
     */
    isCache(): boolean;
    /**
     * Checks if the value is defined and within the cache limit.
     *
     * Проверяет, определено ли значение и находится ли оно в пределах лимита кэша.
     */
    isValue(): boolean;
    /**
     * Returns the current value.
     *
     * Возвращает текущее значение.
     */
    get(): T | undefined;
    /**
     * Returns the update time of the value.
     *
     * Возвращает время обновления значения.
     */
    getAge(): number | undefined;
    /**
     * Returns the storage key name.
     *
     * Возвращает имя ключа в хранилище.
     */
    getName(): string;
    /**
     * Returns the cache time.
     *
     * Возвращает время кэширования.
     */
    getCache(): number | undefined;
    /**
     * Sets the value and age.
     *
     * Устанавливает значение и время.
     * @param value new value/ новое значение
     * @param age update time/ время обновления
     */
    set(value?: T, age?: number): this;
    /**
     * Sets data from a FigmaStorageDataValue object.
     *
     * Устанавливает данные из объекта FigmaStorageDataValue.
     * @param value data object/ объект данных
     */
    setByObject(value?: FigmaStorageDataValue<T>): this;
    /**
     * Sets the value.
     *
     * Устанавливает значение.
     * @param value new value/ новое значение
     */
    setValue(value?: T): this;
    /**
     * Sets the update time.
     *
     * Устанавливает время обновления.
     * @param age update time/ время обновления
     */
    setAge(age?: number): this;
    /**
     * Updates the value and sets the current time as age.
     *
     * Обновляет значение и устанавливает текущее время.
     * @param value new value/ новое значение
     */
    update(value?: T): this;
    /**
     * Removes the data.
     *
     * Удаляет данные.
     */
    remove(): this;
    /**
     * Converts data to a FigmaStorageDataValue object for storage.
     *
     * Преобразует данные в объект FigmaStorageDataValue для хранения.
     */
    toValue(): FigmaStorageDataValue<T>;
}

/** Type for storing data in Figma Storage/ Тип для хранения данных в Figma Storage */
export declare type FigmaStorageDataValue<T> = {
    /** Value/ Значение */
    value: T;
    /** Age/ Возраст */
    age: number;
};

/**
 * Class for managing and sending the list of top-level frames in the Figma plugin.
 *
 * Класс для управления и отправки списка фреймов верхнего уровня в плагине Figma.
 */
export declare class FigmaTopLevelFrames {
    /** Cached list of top-level frames / Кэшированный список фреймов верхнего уровня */
    protected static frames: UiFigmaFramesList | undefined;
    /**
     * Retrieves and caches the formatted list of top-level frames.
     *
     * Получает и кэширует отформатированный список фреймов верхнего уровня.
     * @returns A promise that resolves to the list of frames / Промис, который разрешается в список фреймов
     */
    static get(): Promise<UiFigmaFramesList>;
    /**
     * Sets up a listener for frame requests and sends the data back using the plugin messenger.
     *
     * Настраивает прослушиватель для запросов фреймов и отправляет данные обратно с помощью мессенджера плагина.
     */
    static send(): void;
    /**
     * Gets the list of main frames from the current Figma page.
     *
     * Получает список основных фреймов с текущей страницы Figma.
     * @returns An array of Figma items / Массив элементов Figma
     */
    protected static getList(): FigmaItem<UiFigmaNode>[];
}

/**
 * Returns the Figma item by ID.
 *
 * Возвращает узел Figma по идентификатору.
 * @param id node ID/ идентификатор узла
 */
export declare function getFigmaItemById<T extends UiFigmaNode = UiFigmaNode>(id: string): Promise<FigmaItem<T> | undefined>;

/**
 * Returns the Figma node used for storage by ID or figma.root.
 *
 * Возвращает узел Figma, используемый для хранения, по идентификатору или figma.root.
 * @param id node ID/ идентификатор узла
 */
export declare function getFigmaItemByIdOrRoot<T extends UiFigmaNode = UiFigmaNode>(id?: string): Promise<T>;

/**
 * Sets up a listener for selection changes in Figma and sends text elements to the UI.
 *
 * Настраивает слушатель изменений выделения в Figma и отправляет текстовые элементы в UI.
 */
export declare const makeFigmaTexts: () => void;

/**
 * Sets up the client storage by message.
 *
 * Устанавливает клиентское хранилище по сообщению.
 */
export declare function setupClientStorage(): void;

/**
 * Sets up the selection by message.
 *
 * Устанавливает выборку по сообщению.
 */
export declare function setupSelectionByMessage(): void;

/**
 * Sets up the storage by message.
 *
 * Устанавливает хранилище по сообщению.
 */
export declare function setupStorage(): void;

/** Storage messenger data/ Данные сообщения хранилища */
export declare type StorageMessengerData = {
    id?: string;
    name: string;
    value: any;
};

/**
 * Moves the view to the specified item and selects it.
 *
 * Перемещает вид на указанный элемент и выбирает его.
 */
export declare function toFrameSelection(id?: string): Promise<void>;

/**
 * Possible formats for exporting Figma nodes/
 * Возможные форматы для экспорта узлов Figma
 */
export declare type UiFigmaExportFormat = 'PNG' | 'JPG' | 'SVG' | 'PDF' | 'JSON_REST_V1';

/**
 * Type for representing a text node and its IDs/
 * Тип для представления текстового узла и его идентификаторов
 */
export declare type UiFigmaItemText = {
    /** Node IDs/ Идентификаторы узлов */
    id: string[];
    /** Text content/ Текстовое содержимое */
    text: string;
};

/**
 * Type for message data containing frame information, text items, and screenshots/
 * Тип для данных сообщения, содержащих информацию о фрейме, текстовые элементы и скриншоты
 */
export declare type UiFigmaMessageTexts = {
    /** Figma frame item/ Элемент фрейма Figma */
    frame: FigmaFrame;
    /** List of text items/ Список текстовых элементов */
    texts: UiFigmaItemText[];
    /** Screenshots in Uint8Array format/ Скриншоты в формате Uint8Array */
    screenshot: Uint8Array[];
};

/**
 * Type for Figma nodes/
 * Тип для узлов Figma
 */
export declare type UiFigmaNode = ChildrenMixin | SceneNode | DefaultShapeMixin | DocumentNode | PageNode | FrameNode | SectionNode | TextNode | BaseNode;

/**
 * Getting a class for working with Figma client storage (clientStorage).
 *
 * Получение класса для работы с клиентским хранилищем Figma (clientStorage).
 * @param name value name/ название значения
 * @param cache cache time/ время кэширования
 */
export declare function useFigmaClientStorage<T>(name: string, cache?: number): FigmaClientStorage<T>;

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
 * Getting a class for working with Figma storage (PluginData).
 *
 * Получение класса для работы с хранилищем Figma (PluginData).
 * @param name value name/ название значения
 * @param item object for storing data/ объект для хранения данных
 * @param cache cache time/ время кэширования
 */
export declare function useFigmaStorage<T>(name: string, item?: UiFigmaNode, cache?: number): FigmaStorage<T>;

export { }
