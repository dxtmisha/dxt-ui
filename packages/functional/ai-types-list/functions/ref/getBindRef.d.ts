// md5:7844635c1ab6a8d0a58db66ca2de0a9e true
import { ComputedRef } from 'vue';
import { ItemList } from '@dxtmisha/functional-basic';

/**
 * Generates a computed reference for subcomponent bindings.
 * @keywords get_bind_ref reactive properties computed binding
 */
export declare function getBindRef<T, R extends ItemList>(value: RefOrNormal<T | R> | undefined, nameExtra?: RefOrNormal<ItemList> | string, name?: string): ComputedRef<R>;