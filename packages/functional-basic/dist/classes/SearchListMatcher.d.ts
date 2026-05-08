import { SearchListItem } from './SearchListItem';
import { SearchListOptions } from './SearchListOptions';
import { SearchCacheItem } from '../types/searchTypes';
/**
 * Class responsible for matching search values against the search list data using regular expressions.
 *
 * Класс, отвечающий за сопоставление значений поиска с данными списка поиска с использованием регулярных выражений.
 */
export declare class SearchListMatcher {
    protected item: SearchListItem;
    protected options: SearchListOptions;
    protected matcher: RegExp | undefined;
    /**
     * Constructor for SearchListMatcher.
     *
     * Конструктор для SearchListMatcher.
     * @param item search item containing the current value/ элемент поиска, содержащий текущее значение
     * @param options search options/ опции поиска
     */
    constructor(item: SearchListItem, options: SearchListOptions);
    /**
     * Checks if the matcher is initialized.
     *
     * Проверяет, инициализирован ли сопоставитель.
     * @returns boolean/ логическое значение
     */
    is(): boolean;
    /**
     * Checks if the given value matches the current search expression.
     *
     * Проверяет, соответствует ли данное значение текущему поисковому выражению.
     * @param value value to check/ проверяемое значение
     * @returns boolean indicating a match/ логическое значение, указывающее на совпадение
     */
    isSelection(value: SearchCacheItem<any>['value']): boolean;
    /**
     * Returns the current regular expression matcher.
     *
     * Возвращает текущий сопоставитель регулярных выражений.
     * @returns RegExp or undefined/ RegExp или undefined
     */
    get(): RegExp | undefined;
    /**
     * Updates the matcher based on the current item value and options.
     *
     * Обновляет сопоставитель на основе текущего значения элемента и опций.
     * @returns void
     */
    update(): void;
    /**
     * Initializes or resets the regular expression matcher.
     *
     * Инициализирует или сбрасывает сопоставитель регулярных выражений.
     * @returns void
     */
    protected initMatcher(): void;
}
