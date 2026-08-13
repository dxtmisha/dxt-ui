// md5:069979b7d4d9cc143d34587b34fe086a true
import { ComputedRef } from 'vue';
import { ApiData, ApiErrorItem } from '@dxtmisha/functional-basic';

/**
 * Returns the error item for the Api ref.
 * @keywords api error ref reactive getApiErrorRef
 */
export declare function getApiErrorRef<R>(data: RefType<ApiData<R> | undefined>): ComputedRef<ApiErrorItem | undefined>;