import { FormattersListProp, FormattersOptionsList, FormattersReturn } from '@dxtmisha/functional-basic';
import { RefType } from '../../types/refTypes';
import { ComputedRef } from 'vue';
/**
 * Composable for reactive formatting of data lists based on specified rules for each property. /
 * Композабл для реактивного форматирования списков данных на основе заданных правил для каждого свойства.
 * @param list source data list (Ref or ComputedRef) / исходный список данных (Ref или ComputedRef)
 * @param options formatting settings for each property / настройки форматирования для каждого свойства
 */
export declare function useFormattersRef<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp>(list: RefType<List | undefined>, options: Options): {
    /**
     * Formatted data list (ComputedRef) /
     * Отформатированный список данных (ComputedRef)
     */
    listFormat: ComputedRef<FormattersReturn<List, Options>>;
    /**
     * Returns the count of records in the list (ComputedRef) /
     * Возвращает количество записей в списке (ComputedRef)
     */
    length: ComputedRef<number>;
};
