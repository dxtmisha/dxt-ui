// md5:fc39669a6c2c55d92f4511f3404b516a true
import { type ComputedRef } from 'vue';
import type { ItemList } from '@dxtmisha/functional-basic';

/** Generates computed properties for a subcomponent binding. @keywords subcomponent, properties, bind, computed */
export declare function getBindRef<T = unknown, R extends ItemList = ItemList>(value?: RefOrNormal<T | R | undefined | null> | null, nameExtra?: RefOrNormal<ItemList | undefined> | string, name?: string, except?: boolean): ComputedRef<ConstrBind<R>>;