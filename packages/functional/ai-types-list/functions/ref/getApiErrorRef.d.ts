// md5:9a3f41cde084f8325149fa45c2d2f8c8 true
import { type ComputedRef } from 'vue';
import { type ApiData, type ApiErrorItem } from '@dxtmisha/functional-basic';

/** Returns computed reference to error item from reactive API response data. @keywords api error ref, computed error item */
export declare function getApiErrorRef<R = unknown>(data: RefType<ApiData<R> | undefined> | {
    readonly value: unknown;
}): ComputedRef<ApiErrorItem | undefined>;