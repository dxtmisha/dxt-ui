import { FigmaItem } from './FigmaItem';
import { UiFigmaItemText, UiFigmaNode } from '../types/figmaTypes';
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
