// md5:b79cc69c3f565d56c01ace83cb3343dd true
import { type ComputedRef } from 'vue';
import type { ItemList } from '@dxtmisha/functional-basic';

/** Generates a computed property object for binding to a subcomponent. @keywords bind, props, subcomponent, computed */
export declare function getBindRef<T, R extends ItemList>(value: RefOrNormal<T | R> | undefined, nameExtra?: RefOrNormal<ItemList> | string, name?: string): ComputedRef<R>;