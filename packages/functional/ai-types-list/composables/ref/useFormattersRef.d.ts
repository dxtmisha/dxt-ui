// md5:2ab8a7528da7eccfe81db5b6aea80250 true
import { type FormattersListProp, type FormattersOptionsList, type FormattersReturn } from '@dxtmisha/functional-basic';

/** Reactively formats data lists based on property rules. @keywords format, list, reactive, transform */
export declare function useFormattersRef<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp>(list: RefType<List | undefined>, options: Options): {
    /** Formatted reactive data list. @keywords formatted list */
    listFormat: import("vue").ComputedRef<FormattersReturn<List, Options>>;
    /** Total count of records in the list. @keywords length, count */
    length: import("vue").ComputedRef<number>;
};