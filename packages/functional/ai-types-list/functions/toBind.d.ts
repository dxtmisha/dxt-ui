// md5:d9667880ce2cdeb30699554f447e5d5c true
import type { ItemList } from '@dxtmisha/functional-basic';

/** Merges two property objects, combining their classes and styles. @keywords merge objects, classes, styles, bind properties */
export declare function toBind<R extends ItemList = ItemList>(extra: ItemList, value: ItemList): ConstrBind<R>;