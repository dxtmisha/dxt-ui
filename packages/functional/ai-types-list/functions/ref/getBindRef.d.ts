// md5:4c1b0a4c899a2cb8c6b8ecf7b0a540f8 true
import { type ComputedRef } from 'vue';
import type { ItemList } from '@dxtmisha/functional-basic';

/** Generates a computed binding object of properties for a subcomponent. @keywords bind, subcomponent, props, computed */
export declare function getBindRef<T = unknown, R extends ItemList = ItemList>(value: RefOrNormal<T | R> | undefined, nameExtra?: RefOrNormal<ItemList> | string, name?: string, except?: boolean): ComputedRef<ConstrBind<R>>;