// md5:45bf25404a3d59c6336ac863ca7adb3a true
/** Retrieves all attribute names and values of an element as a key-value record. @keywords dom attributes, get attributes, element attributes */
export declare function getAttributes<E extends ElementOrWindow>(element?: ElementOrString<E>): Record<string, string | undefined>;