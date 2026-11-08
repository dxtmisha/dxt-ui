// md5:dcadff8ae15a6faa2966b1656723b1fa true
import { type ComputedRef } from 'vue';
import { type FormattersListProp, type FormattersOptionsList, type FormattersReturn } from '@dxtmisha/functional-basic';
export interface UseFormattersRef<List extends FormattersListProp = FormattersListProp, Options extends FormattersOptionsList = FormattersOptionsList> {
    listFormat: ComputedRef<FormattersReturn<List, Options>>;
    length: ComputedRef<number>;
}
/** Reactively formats data lists based on property rules. @keywords reactive, formatter, list, computed, composable */
export declare function useFormattersRef<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp>(list: RefType<List | undefined>, options: Options): UseFormattersRef<List, Options>;