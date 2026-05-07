import { UiFigmaFramesItem, UiFigmaFrameStylesData, UiFigmaFrameStylesItem, UiFigmaFrameStylesJson } from '@dxtmisha/figma';
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
     * @returns true if the node is a document / true, если узел является документом
     */
    isDocument(): this is {
        item: DocumentNode;
    };
    /**
     * Checks if the node is a frame.
     *
     * Проверяет, является ли узел фреймом.
     * @returns true if the node is a frame / true, если узел является фреймом
     */
    isFrame(): this is {
        item: FrameNode;
    };
    /**
     * Checks if the node is a section.
     *
     * Проверяет, является ли узел секцией.
     * @returns true if the node is a section / true, если узел является секцией
     */
    isSection(): this is {
        item: SectionNode;
    };
    /**
     * Checks if the node is a text node.
     *
     * Проверяет, является ли узел текстовым узлом.
     * @returns true if the node is a text node / true, если узел является текстовым узлом
     */
    isText(): this is {
        item: TextNode;
    };
    /**
     * Checks if the node is a text node with a meaningful value.
     *
     * Проверяет, является ли узел текстовым узлом с осмысленным значением.
     * @returns true if it is a text node with a value / true, если это текстовый узел со значением
     */
    isTextNoValue(): this is {
        item: TextNode;
    };
    /**
     * Checks if the node is in the current page.
     *
     * Проверяет, находится ли узел на текущей странице.
     * @returns true if the node is in the current page / true, если узел находится на текущей странице
     */
    inCurrentPage(): boolean;
    /**
     * Returns the Figma node.
     *
     * Возвращает узел Figma.
     * @returns Figma node / узел Figma
     */
    get(): T;
    /**
     * Returns the type of the node.
     *
     * Возвращает тип узла.
     * @returns node type / тип узла
     */
    getType(): "SLICE" | "FRAME" | "GROUP" | "COMPONENT_SET" | "COMPONENT" | "INSTANCE" | "BOOLEAN_OPERATION" | "VECTOR" | "STAR" | "LINE" | "ELLIPSE" | "POLYGON" | "RECTANGLE" | "TEXT" | "TEXT_PATH" | "TRANSFORM_GROUP" | "STICKY" | "CONNECTOR" | "SHAPE_WITH_TEXT" | "CODE_BLOCK" | "STAMP" | "WIDGET" | "EMBED" | "LINK_UNFURL" | "MEDIA" | "SECTION" | "HIGHLIGHT" | "WASHI_TAPE" | "TABLE" | "SLIDE" | "SLIDE_ROW" | "SLIDE_GRID" | "SLOT" | "INTERACTIVE_SLIDE_ELEMENT" | "DOCUMENT" | "PAGE" | undefined;
    /**
     * Returns the parent node.
     *
     * Возвращает родительский узел.
     * @returns parent node / родительский узел
     */
    getParent(): (BaseNode & ChildrenMixin) | undefined;
    /**
     * Returns the parent node wrapped in FigmaItem.
     *
     * Возвращает родительский узел, обернутый в FigmaItem.
     * @returns parent FigmaItem / родительский FigmaItem
     */
    getParentItem(): FigmaItem | undefined;
    /**
     * Returns the parent page.
     *
     * Возвращает родительскую страницу.
     * @returns parent page / родительская страница
     */
    getParentPage(): PageNode | undefined;
    /**
     * Returns the parent page wrapped in FigmaItem.
     *
     * Возвращает родительскую страницу, обернутую в FigmaItem.
     * @returns parent page FigmaItem / родительская страница FigmaItem
     */
    getParentPageItem(): FigmaItem | undefined;
    /**
     * Returns the child nodes.
     *
     * Возвращает дочерние узлы.
     * @returns list of child nodes / список дочерних узлов
     */
    getChildren(): UiFigmaNode[];
    /**
     * Returns the child nodes wrapped in FigmaItem.
     *
     * Возвращает дочерние узлы, обернутые в FigmaItem.
     * @returns list of child FigmaItems / список дочерних FigmaItems
     */
    getChildrenItems(): FigmaItem[];
    /**
     * Returns the node ID.
     *
     * Возвращает идентификатор узла.
     * @returns node ID / идентификатор узла
     */
    getId(): string;
    /**
     * Returns the node name.
     *
     * Возвращает имя узла.
     * @returns node name / имя узла
     */
    getName(): string;
    /**
     * Returns the text content of the node.
     *
     * Возвращает текстовое содержимое узла.
     * @returns text content / текстовое содержимое
     */
    getText(): string;
    /**
     * Returns the CSS styles of the node.
     *
     * Возвращает CSS-стили узла.
     * @returns promise with CSS styles / промис с CSS-стилями
     */
    getCss(): Promise<Record<string, string>>;
    /**
     * Returns information about the node.
     *
     * Возвращает информацию об узле.
     * @returns promise with node information / промис с информацией об узле
     */
    getInfo(): Promise<UiFigmaFramesItem>;
    /**
     * Returns the styles of the node.
     *
     * Возвращает стили узла.
     * @returns promise with node styles / промис со стилями узла
     */
    getStyles(): Promise<UiFigmaFrameStylesItem>;
    /**
     * Exports the node as JPG.
     *
     * Экспортирует узел в формате JPG.
     * @returns promise with image data as Uint8Array / промис с данными изображения в формате Uint8Array
     */
    exportJpg(): Promise<Uint8Array<ArrayBufferLike> | "">;
    /**
     * Exports the node as JSON.
     *
     * Экспортирует узел в формате JSON.
     * @returns promise with node data in JSON format / промис с данными узла в формате JSON
     */
    exportJson(): Promise<Uint8Array<ArrayBufferLike> | "">;
    /**
     * Exports the node as compact JSON.
     *
     * Экспортирует узел в формате компактного JSON.
     * @returns promise with compact JSON data / промис с компактными данными JSON
     */
    exportJsonCompact(): Promise<UiFigmaFrameStylesData | undefined>;
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
     * @param formatSettings format settings / настройки формата
     * @returns export settings / настройки экспорта
     */
    protected getExportSettings(formatSettings: UiFigmaExportFormat | ExportSettings): ExportSettings;
    /**
     * Exports the node in the specified format.
     *
     * Экспортирует узел в указанном формате.
     * @param formatSettings format settings / настройки формата
     * @returns promise with exported data / промис с экспортированными данными
     */
    protected exportItem(formatSettings: UiFigmaExportFormat | ExportSettings): Promise<Uint8Array<ArrayBufferLike> | "">;
    /**
     * Converts node data to compact JSON format.
     *
     * Преобразует данные узла в компактный формат JSON.
     * @param data node data / данные узла
     * @returns compact JSON data / компактные данные JSON
     */
    protected toJsonCompact(data: Record<string, any>): UiFigmaFrameStylesJson;
}
