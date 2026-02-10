import { ComputedRef, ShallowRef } from 'vue';
import { TextAllPropsInclude, TextIndex, TextList, TextValue } from '../types/textTypes';
/**
 * TextInclude class for managing text-related properties.
 *
 * Класс TextInclude для управления свойствами, связанными с текстом.
 */
export declare class TextInclude {
    protected readonly props: TextAllPropsInclude;
    /**
     * Global list of texts for all components/ Глобальный список текстов для всех компонентов
     */
    static readonly list: ShallowRef<TextList, TextList>;
    readonly texts: Record<string, ComputedRef<string | undefined>>;
    /**
     * Initialize global texts.
     *
     * Инициализация глобальных текстов.
     * @param texts List of texts/ Список текстов
     */
    static initText(texts: TextList): void;
    /**
     * Constructor
     * @param props Component properties/ Свойства компонента
     */
    constructor(props: TextAllPropsInclude);
    /** Cancel text/ Текст отмены */
    get cancel(): ComputedRef<string | undefined>;
    /** Character limit exceeded text/ Текст о превышении лимита символов */
    get characterLimit(): ComputedRef<string | undefined>;
    /** Remaining characters text/ Текст об оставшихся символах */
    get characterRemaining(): ComputedRef<string | undefined>;
    /** Close text/ Текст закрытия */
    get close(): ComputedRef<string | undefined>;
    /** Copied to the clipboard text/ Текст о копировании в буфер обмена */
    get copiedClipboard(): ComputedRef<string | undefined>;
    /** Text for decreasing value/ Текст для уменьшения значения */
    get decrement(): ComputedRef<string | undefined>;
    /** Entries match text/ Текст о несовпадении записей */
    get entriesMatch(): ComputedRef<string | undefined>;
    /** Hide text/ Текст скрытия */
    get hide(): ComputedRef<string | undefined>;
    /** Text for increasing value/ Текст для увеличения значения */
    get increment(): ComputedRef<string | undefined>;
    /** Loading text/ Текст загрузки */
    get loading(): ComputedRef<string | undefined>;
    /** Next text/ Текст следующего */
    get next(): ComputedRef<string | undefined>;
    /** OK text/ Текст подтверждения */
    get ok(): ComputedRef<string | undefined>;
    /** Previous text/ Текст предыдущего */
    get previous(): ComputedRef<string | undefined>;
    /** Show text/ Текст показа */
    get show(): ComputedRef<string | undefined>;
    /**
     * Get the text by its name.
     *
     * Получить текст по его названию.
     * @param name property name/ название свойства
     */
    get(name: keyof TextAllPropsInclude): ComputedRef<string | undefined>;
    /**
     * Get text by index, with priority to local value.
     *
     * Получение текста по индексу с приоритетом локального значения.
     * @param index Text index/ Индекс текста
     * @param value Local text value/ Локальное значение текста
     */
    protected getText(index: TextIndex, value: TextValue): string | undefined;
    /**
     * Get text from global list.
     *
     * Получение текста из глобального списка.
     * @param index Text index/ Индекс текста
     */
    protected getGlobalText(index: TextIndex): string | undefined;
}
