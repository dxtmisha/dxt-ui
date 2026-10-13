// md5:356573cfd80511c48ba2850718e62a82 true
export type ConstrItem = Record<string, any>;
export type ConstrValue<T = any> = {
    value?: T;
};
export type ConstrComponent = Record<string, any>;
/** Converts a union type to an intersection type @keywords union intersection */
export type UnionToIntersection<U> = (U extends unknown ? (value: U) => void : never) extends (value: infer I) => void ? I : never;
export type ConstrEmitItem<T extends ConstrItem> = T[keyof T];
/** Constructs overloaded event emitter signatures from an event map @keywords emit events dispatch */
export type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
    [K in keyof T]: (event: K, ...args: T[K]) => void;
}>>;
export type ConstrClassObject = Record<string, boolean | undefined>;
/** Class name definition supporting strings, nested arrays, and boolean maps @keywords css class classnames */
export type ConstrClass = string | (string | ConstrClass | Undefined)[] | ConstrClassObject;
export type ConstrClassList = Record<string, ConstrClass>;
export type ConstrClasses = {
    main: ConstrClass;
} & ConstrClassList;
export type ConstrStylesItem = string | number | Undefined;
/** CSS style definitions supporting style property maps and recursive arrays @keywords css styles inline-styles */
export type ConstrStyles = Record<string, ConstrStylesItem> | ConstrStyles[];
export type ConstrRegistration = {
    flag?: boolean;
    translate?: Record<string, string>;
};
export type ConstrHrefProps = {
    href?: string;
};