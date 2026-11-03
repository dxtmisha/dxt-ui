// md5:a047a4c858a4362725749b1c56e3cce0 true
import type { ItemList } from '@dxtmisha/functional-basic';

/** Merges multiple property objects, properly combining class and style attributes. @keywords merge binds, combine props, class merge, style merge */
export declare function toBinds<R extends ItemList = ItemList>(...values: (ItemList | null | undefined)[]): ConstrBind<R>;