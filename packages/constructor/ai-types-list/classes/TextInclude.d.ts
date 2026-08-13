// md5:3571743bb489a4bfdaee9a00503d2165
import { ShallowRef } from 'vue';
import { TextIncludeInstance } from './TextIncludeInstance';
import { TextAllPropsInclude, TextIndex, TextList, TextValue } from '../types/textTypes';
/**
 * TextInclude class for managing text-related properties.
 *
 * Класс TextInclude для управления свойствами, связанными с текстом.
 */
export declare class TextInclude {
    protected readonly props: TextAllPropsInclude;
    /**
     * Returns a request-isolated instance of TextIncludeInstance.
     *
     * Возвращает изолированный в рамках запроса экземпляр TextIncludeInstance.
     * @returns TextIncludeInstance instance / экземпляр TextIncludeInstance
     */
    static getObject(): TextIncludeInstance;
    /** Global list of texts for all components / Глобальный список текстов для всех компонентов */
    static get list(): ShallowRef<TextList>;
    /**
     * Initialize global texts.
     *
     * Инициализация глобальных текстов.
     * @param texts List of texts / Список текстов
     */
    static initText(texts: TextList): void;
    /** Cached text getter functions / Кэшированные функции-геттеры для текстов */
    readonly texts: Record<string, () => (string | undefined)>;
    /**
     * Constructor for TextInclude class.
     *
     * Конструктор для класса TextInclude.
     * @param props Component properties / Свойства компонента
     */
    constructor(props: TextAllPropsInclude);
    /** Breadcrumb navigation text / Текст навигации хлебных крошек */
    get breadcrumb(): string | undefined;
    /** Cancel text / Текст отмены */
    get cancel(): string | undefined;
    /** Character limit exceeded text / Текст о превышении лимита символов */
    get characterLimit(): string | undefined;
    /** Remaining characters text / Текст об оставшихся символах */
    get characterRemaining(): string | undefined;
    /** Close text / Текст закрытия */
    get close(): string | undefined;
    /** Copied to the clipboard text / Текст о копировании в буфер обмена */
    get copiedClipboard(): string | undefined;
    /** Text for decreasing value / Текст для уменьшения значения */
    get decrement(): string | undefined;
    /** Entries match text / Текст о несовпадении записей */
    get entriesMatch(): string | undefined;
    /** First page text / Текст первой страницы */
    get first(): string | undefined;
    /** Hide text / Текст скрытия */
    get hide(): string | undefined;
    /** Text for increasing value / Текст для увеличения значения */
    get increment(): string | undefined;
    /** Info text / Текст информации о диапазоне */
    get info(): string | undefined;
    /** Last page text / Текст последней страницы */
    get last(): string | undefined;
    /** Loading text / Текст загрузки */
    get loading(): string | undefined;
    /** More text / Текст "показать еще" */
    get more(): string | undefined;
    /** More previous text / Текст "показать предыдущие" */
    get morePrev(): string | undefined;
    /** Next text / Текст следующего */
    get next(): string | undefined;
    /** Nothing found text / Текст о том, что ничего не найдено */
    get notFound(): string | undefined;
    /** Notifications text / Текст уведомлений */
    get notifications(): string | undefined;
    /** OK text / Текст подтверждения */
    get ok(): string | undefined;
    /** Page text / Текст страницы */
    get page(): string | undefined;
    /** Previous text / Текст предыдущего */
    get previous(): string | undefined;
    /** Rows per page text / Текст "строк на странице" */
    get rowsPerPage(): string | undefined;
    /** Show text / Текст показа */
    get show(): string | undefined;
    /** Symbol text / Текст символа */
    get symbol(): string | undefined;
    /**
     * Get the text by its name.
     *
     * Получить текст по его названию.
     * @param name property name / название свойства
     * @returns resolved text value / полученное текстовое значение
     */
    get(name: keyof TextAllPropsInclude): string | undefined;
    /**
     * Get text by index, with priority to local value.
     *
     * Получение текста по индексу с приоритетом локального значения.
     * @param index Text index / Индекс текста
     * @param value Local text value / Локальное значение текста
     * @returns resolved text string / полученная строка текста
     */
    protected getText(index: TextIndex, value: TextValue): string | undefined;
}
