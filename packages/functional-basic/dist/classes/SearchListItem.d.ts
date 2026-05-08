import { SearchListOptions } from './SearchListOptions';
/**
 * Class representing a single search item's value and its search-related state.
 *
 * Класс, представляющий значение одного элемента поиска и его состояние, связанное с поиском.
 */
export declare class SearchListItem {
    protected value: string | undefined;
    protected options: SearchListOptions;
    /**
     * Constructor for SearchListItem.
     *
     * Конструктор для SearchListItem.
     * @param value current search value/ текущее значение поиска
     * @param options search options/ опции поиска
     */
    constructor(value: string | undefined, options: SearchListOptions);
    /**
     * Checks if the value is filled.
     *
     * Проверяет, заполнено ли значение.
     * @returns boolean indicating if value exists/ логическое значение, указывающее на наличие значения
     */
    is(): this is this & {
        value: string;
    };
    /**
     * Checks if the value is filled and the length is greater than or equal to the limit.
     *
     * Проверяет, заполнено ли значение и длина больше или равна лимиту.
     * @returns boolean/ логическое значение
     */
    isSearch(): boolean;
    /**
     * Returns the current search value as a string.
     *
     * Возвращает текущее значение поиска в виде строки.
     * @returns search value/ значение поиска
     */
    get(): string;
    /**
     * Sets a new search value.
     *
     * Устанавливает новое значение поиска.
     * @param value new search value/ новое значение поиска
     * @returns this instance/ данный экземпляр
     */
    set(value?: string): this;
}
