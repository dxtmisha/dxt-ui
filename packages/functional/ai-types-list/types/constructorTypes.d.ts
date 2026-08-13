// md5:ae3492764fbdae9bb371fee7dc348e1d true
export type ConstrItem = Record<string, any>;
export type ConstrValue<T = any> = {
    value?: T;
};
export type ConstrComponent = Record<string, any>;
export type ConstrComponentMod<P extends ConstrItem> = ConstrItem | {
    [K in keyof P]?: RefOrNormal<P[K]>;
};
export type ConstrExpose<E extends Element, EXPOSE extends ConstrItem> = EXPOSE & {
    elementHtml?: ComputedRef<E | undefined>;
};
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type ConstrEmitItem<T extends ConstrItem> = T[keyof T];
export type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
    [K in keyof T]: (evt: K, ...args: T[K]) => void;
}>>;
export type ConstrClassObject = Record<string, boolean | undefined>;
export type ConstrClass = string | (string | ConstrClass | Undefined)[] | ConstrClassObject;
export type ConstrClassList = Record<string, ConstrClass>;
export type ConstrClasses = {
    main: ConstrClass;
} & ConstrClassList;
export type ConstrStylesItem = string | null;
export type ConstrStyles = Record<string, ConstrStylesItem> | ConstrStyles[];
/** Constructor options for component configuration @keywords options setup component */
export type ConstrOptions<COMP extends ConstrComponent, EMITS extends ConstrItem, P extends ConstrItem> = {
    components?: COMP;
    compMod?: ConstrComponentMod<P>;
    emits?: ConstrEmit<EMITS>;
    classes?: RefType<ConstrClasses>;
    styles?: RefType<ConstrStyles>;
};
/** Constructor setup structure for component initialization @keywords setup initialization */
export type ConstrSetup<E extends Element, CLASSES extends ConstrClasses, SETUP extends ConstrItem> = {
    name: string;
    element: Ref<E | undefined>;
    classes: RefType<CLASSES>;
    styles: RefType<ConstrStyles>;
} & SETUP;
export type ConstrRegistration = {
    flag?: boolean;
    translate?: Record<string, string>;
};
/** Constructor bind type with class and style support @keywords bind attributes */
export type ConstrBind<T> = T & Record<string, any> & {
    key?: string;
    class?: ConstrClass;
    style?: ConstrStyles;
};
export type ConstrPropItemOptions<T = any> = {
    type?: PropType<T>;
    required?: boolean;
    default?: any;
    validator?(value: any, props: any): boolean;
};
export type ConstrPropItem<T = any> = ConstrPropItemOptions<T> | PropType<T>;
export type ConstrProps<P = Record<string, any>> = {
    [K in keyof P]: ConstrPropItem<P[K]>;
};
/** Hyperlink props definition @keywords href link properties */
export type ConstrHrefProps = {
    href?: string;
};