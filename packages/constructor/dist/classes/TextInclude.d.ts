import { TextAllPropsInclude, TextIndex, TextList, TextValue } from '../types/textTypes';
import { ShallowRef, ComputedRef } from 'vue';
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
    /** Character limit exceeded text/ Текст о превышении лимита символов */
    readonly characterLimit: ComputedRef<string | undefined>;
    /** Remaining characters text/ Текст об оставшихся символах */
    readonly characterRemaining: ComputedRef<string | undefined>;
    /** Close text/ Текст закрытия */
    readonly close: ComputedRef<string | undefined>;
    /** Copied to the clipboard text/ Текст о копировании в буфер обмена */
    readonly copiedClipboard: ComputedRef<string | undefined>;
    /** Entries match text/ Текст о несовпадении записей */
    readonly entriesMatch: ComputedRef<string | undefined>;
    /** Loading text/ Текст загрузки */
    readonly loading: ComputedRef<string | undefined>;
    /** OK text/ Текст подтверждения */
    readonly ok: ComputedRef<string | undefined>;
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
