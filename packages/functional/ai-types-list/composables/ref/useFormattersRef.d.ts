// md5:63f5ff58aa7ab0d41cf280678b5374b7 true
import { FormattersListProp, FormattersOptionsList, FormattersReturn } from '@dxtmisha/functional-basic';
import { ComputedRef } from 'vue';

/**
 * Reactively formats a list of data based on provided formatting options.
 * @keywords useFormattersRef formatters list reactive
 */
export declare function useFormattersRef<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp>(list: RefType<List | undefined>, options: Options): {
    /** Formatted data list. @keywords list format computed */
    listFormat: ComputedRef<FormattersReturn<List, Options>>;
    /** Count of records in the formatted list. @keywords length count list */
    length: ComputedRef<number>;
};