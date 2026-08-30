// md5:45bf25404a3d59c6336ac863ca7adb3a true
/** Retrieves all attributes from the specified DOM element as a key-value map. @keywords get attributes, element attributes, dom attributes */
export declare function getAttributes<E extends ElementOrWindow>(element?: ElementOrString<E>): Record<string, string | undefined>;