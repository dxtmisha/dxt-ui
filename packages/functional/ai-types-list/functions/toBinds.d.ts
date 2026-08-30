// md5:cc6a8a947ca4cfea0d165e09f1295e09 true
import type { ItemList } from '@dxtmisha/functional-basic';
/** Merges multiple objects with properties, intelligently combining their classes and styles. @keywords merge binds classes styles */
export declare function toBinds<R extends ItemList = ItemList>(...values: (ItemList | undefined)[]): ConstrBind<R>;