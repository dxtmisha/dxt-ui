// md5:c3175887ae6baab96bc5d2eef097fa91 true
/**
 * Returns element property value or default value.
 * @keywords getElementItem, element property, value
 */
export declare function getElementItem<T extends ElementOrWindow, K extends keyof T, D>(element: ElementOrString<T>, index: K | string, defaultValue?: D): T[K] | D | undefined;