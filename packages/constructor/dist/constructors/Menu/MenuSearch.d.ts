import { MenuProps } from './props';
import { Ref, ComputedRef } from 'vue';
/**
 * Class for working with search.
 *
 * Класс для работы с поиском.
 */
export declare class MenuSearch {
    protected readonly props: MenuProps;
    readonly item: Ref<string | undefined, string | undefined>;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: MenuProps);
    /** Returns the search string/ Возвращает строку поиска */
    readonly value: ComputedRef<string | undefined>;
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
}
