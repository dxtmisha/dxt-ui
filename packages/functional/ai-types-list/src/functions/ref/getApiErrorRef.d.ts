// md5:17dd23887013d42d4f36a1d9ac90976a true
import { type ComputedRef } from 'vue';
import { type ApiData, type ApiErrorItem } from '@dxtmisha/functional-basic';

/** Returns a computed ref for the API error item from the provided API data ref. @keywords api, error, ref, computed */
export declare function getApiErrorRef<R>(data: RefType<ApiData<R> | undefined>): ComputedRef<ApiErrorItem | undefined>;