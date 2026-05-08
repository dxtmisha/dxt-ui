import { Ref, ComputedRef } from 'vue';
import { SearchColumns, SearchFormatList, SearchItem, SearchOptions } from '@dxtmisha/functional-basic';
import { SearchListInput } from '../../types/searchTypes';
/**
 * Composable for handling search logic with reactive data.
 *
 * Композабл для управления логикой поиска с реактивными данными.
 * @param list list of items to search / список элементов для поиска
 * @param columns columns to search in / колонки, по которым ведется поиск
 * @param value reactive search string / реактивная строка поиска
 * @param options search options / настройки поиска
 */
export declare function useSearchRef<T extends SearchItem, K extends SearchColumns<T>>(list: SearchListInput<T>, columns: K, value?: Ref<string>, options?: SearchOptions): {
    /**
     * Whether the search is currently active (minimum character limit reached)/
     * Активен ли поиск в данный момент (достигнут ли лимит символов)
     */
    isSearch: ComputedRef<boolean>;
    /** Search string ref/ Ссылка на строку поиска */
    search: Ref<string, string>;
    /**
     * Search loading status (if delay is used) /
     * Статус загрузки поиска (если используется задержка)
     */
    loading: Ref<boolean, boolean>;
    /**
     * Formatted list of search results with highlights /
     * Форматированный список результатов поиска с подсветкой совпадений
     */
    listSearch: ComputedRef<SearchFormatList<T, K>>;
    /**
     * Length of the search results /
     * Длина списка результатов поиска
     */
    length: ComputedRef<number>;
};
