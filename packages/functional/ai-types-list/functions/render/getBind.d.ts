// md5:2252822d23d2cc94ff21975e7e0739ec true
/**
 * Generates component binding properties.
 * @keywords getBind bind properties component attributes
 */
export declare function getBind<T, R extends ItemList>(value: T | R | undefined | null, nameExtra?: ItemList | string, name?: string, except?: boolean): ConstrBind<R>;