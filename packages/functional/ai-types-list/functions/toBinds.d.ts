// md5:a3f3bef9dbad4904f819b743fa385b99 true
/** Merges multiple objects into a single bound object with combined classes and styles. @keywords toBinds merge bind styles classes */
export declare function toBinds<R extends ItemList = ItemList>(...values: (ItemList | undefined)[]): ConstrBind<R>;