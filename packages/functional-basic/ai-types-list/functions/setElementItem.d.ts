// md5:987ee9fcd6fc642b1d6521b73bb6b037 true
/** Modifies the value of an element identified by its key. @keywords set element property value */
export declare function setElementItem<E extends ElementOrWindow, K extends keyof E, V extends E[K] = E[K]>(element: ElementOrString<E>, index: K, value: V | Record<string, V>): E | undefined;