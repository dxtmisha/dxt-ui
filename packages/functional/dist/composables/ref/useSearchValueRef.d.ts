import { Ref } from 'vue';
import { SearchList, SearchColumns, SearchItem } from '@dxtmisha/functional-basic';
/**
 * Composable for managing search value state and handling delays.
 *
 * Композабл для управления состоянием значения поиска и обработки задержек.
 * Он изолирует логику debounce, предоставляя `searchDelay` (строка с задержкой)
 * и `loading` (флаг ожидания), которые затем читаются классом `SearchList` или `useSearchRef`.
 * @param item search list instance / экземпляр поиска `SearchList`
 * @param value reactive search string / реактивная строка поиска (опционально)
 */
export declare function useSearchValueRef<T extends SearchItem, K extends SearchColumns<T>>(item: SearchList<T, K>, value?: Ref<string>): {
    /** Current search value / Текущее значение поиска */
    search: Ref<string, string>;
    /** Search value with applied delay / Значение поиска с примененной задержкой */
    searchDelay: Ref<string, string>;
    /** Loading status during delay / Статус загрузки во время задержки */
    loading: Ref<boolean, boolean>;
};
