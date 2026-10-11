// md5:50a676fd46df3ab1cea7474101e12b4a true
import type { ItemList } from '@dxtmisha/functional-basic';

/** Merges multiple objects with properties, taking into account className and style. @keywords merge props, react binds, className, style */
export declare function toBindsReact<R extends ItemList = ItemList>(...values: (ItemList | undefined)[]): ConstrBindReact<R>;