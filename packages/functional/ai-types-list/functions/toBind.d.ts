// md5:80aa74899b493606a1378fcdc8c624de true
/**
 * Merges two objects with properties, taking into account their classes and styles
 * @keywords toBind merge objects class style bind
 */
export declare function toBind<R extends ItemList = ItemList>(extra: ItemList, value: ItemList): ConstrBind<R>;