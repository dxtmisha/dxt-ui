import { UiFigmaExportFormat, UiFigmaNode } from '../types/figmaTypes';
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
    protected exportItem(formatSettings: UiFigmaExportFormat | ExportSettings): Promise<Uint8Array<ArrayBufferLike> | "">;
}
