import { ListProps } from './props';
import { Ref, ComputedRef } from 'vue';
/**
 * Class for working with search.
 *
 * Класс для работы с поиском.
 */
export declare class ListSearch {
    protected readonly props: ListProps;
    readonly item: Ref<string | undefined, string | undefined>;
    protected timeout?: any;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: ListProps);
    /** Current search string/ Текущая строка поиска */
    readonly highlight: ComputedRef<string | undefined>;
    /**
     * Adds a new character to the search.
     *
     * Добавляет новый символ к поиску.
     * @param char new character/ новый символ
     */
    add(char: string): void;
    /**
     * Sets the search string.
     *
     * Устанавливает строку поиска.
     * @param value new value/ новое значение
     */
    set(value?: string): void;
    /**
     * Resets the search string.
     *
     * Сбрасывает строку поиска.
     */
    reset(): this;
    /**
     * Returns a processed value.
     *
     * Возвращает обработанное значение.
     * @param value source value/ исходное значение
     */
    protected getValue(value?: string): string | undefined;
    /**
     * Appends a character to the search string.
     *
     * Добавляет символ к строке поиска.
     * @param char new character/ новый символ
     */
    protected addChar(char: string): this;
    /**
     * Schedules reset to the initial state after a delay.
     *
     * Планирует сброс к исходному состоянию после задержки.
     */
    protected makeReset(): this;
}
