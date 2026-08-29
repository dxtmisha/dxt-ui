// md5:2ab8a7528da7eccfe81db5b6aea80250 true
import { type FormattersListProp, type FormattersOptionsList, type FormattersReturn } from '@dxtmisha/functional-basic';
/** Reactively formats data lists based on specified property rules. @keywords reactive, formatters, list, computed, table */
export declare function useFormattersRef<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp>(list: import("vue").Ref<List | undefined> | import("vue").ComputedRef<List | undefined>, options: Options): {
    /** Formatted data list. @keywords formatted, list, data */
    listFormat: import("vue").ComputedRef<FormattersReturn<List, Options>>;
    /** Total number of records in the list. @keywords length, count, size */
    length: import("vue").ComputedRef<number>;
};