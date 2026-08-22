// md5:db18cba663d4fa52de5d9563edaaacc5 true
import { Ref, PropType, ComputedRef } from 'vue';
import { Undefined } from '@dxtmisha/functional-basic';

/** @keywords ConstrItem record object */
export type ConstrItem = Record<string, any>;

/** @keywords ConstrValue wrapper optional */
export type ConstrValue<T = any> = {
    value?: T;
};

/** @keywords ConstrComponent record */
export type ConstrComponent = Record<string, any>;

/** @keywords ConstrComponentMod modification reactive */
export type ConstrComponentMod<P extends ConstrItem> = ConstrItem | {
    [K in keyof P]?: RefOrNormal<P[K]>;
};

export type ConstrExpose<E extends Element, EXPOSE extends ConstrItem> = EXPOSE & {
    elementHtml?: ComputedRef<E | undefined>;
};

/** @keywords UnionToIntersection type utility */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

/** @keywords ConstrEmitItem extract */
export type ConstrEmitItem<T extends ConstrItem> = T[keyof T];

/** @keywords ConstrEmit event handlers */
export type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
    [K in keyof T]: (evt: K, ...args: T[K]) => void;
}>>;

/** @keywords ConstrClassObject boolean css */
export type ConstrClassObject = Record<string, boolean | undefined>;

/** @keywords ConstrClass string array object */
export type ConstrClass = string | (string | ConstrClass | Undefined)[] | ConstrClassObject;

/** @keywords ConstrClassList mapping */
export type ConstrClassList = Record<string, ConstrClass>;

/** @keywords ConstrClasses main additional */
export type ConstrClasses = {
    main: ConstrClass;
} & ConstrClassList;

/** @keywords ConstrStylesItem property */
export type ConstrStylesItem = string | null;

/** @keywords ConstrStyles css object array */
export type ConstrStyles = Record<string, ConstrStylesItem> | ConstrStyles[];

/** @keywords ConstrOptions component configuration */
export type ConstrOptions<COMP extends ConstrComponent, EMITS extends ConstrItem, P extends ConstrItem> = {
    components?: COMP;
    compMod?: ConstrComponentMod<P>;
    emits?: ConstrEmit<EMITS>;
    classes?: RefType<ConstrClasses>;
    styles?: RefType<ConstrStyles>;
};

/** @keywords ConstrSetup initialization */
export type ConstrSetup<E extends Element, CLASSES extends ConstrClasses, SETUP extends ConstrItem> = {
    name: string;
    element: Ref<E | undefined>;
    classes: RefType<CLASSES>;
    styles: RefType<ConstrStyles>;
} & SETUP;

/** @keywords ConstrRegistration configuration */
export type ConstrRegistration = {
    flag?: boolean;
    translate?: Record<string, string>;
};

/** @keywords ConstrBind component binding */
export type ConstrBind<T = ConstrItem> = T & Record<string, any> & {
    key?: string;
    class?: ConstrClass;
    style?: ConstrStyles;
};

/** @keywords ConstrPropItemOptions vue prop */
export type ConstrPropItemOptions<T = any> = {
    type?: PropType<T>;
    required?: boolean;
    default?: any;
    validator?(value: any, props: any): boolean;
};

/** @keywords ConstrPropItem definition */
export type ConstrPropItem<T = any> = ConstrPropItemOptions<T> | PropType<T>;

/** @keywords ConstrProps component props */
export type ConstrProps<P = Record<string, any>> = {
    [K in keyof P]: ConstrPropItem<P[K]>;
};

/** @keywords ConstrHrefProps link handling */
export type ConstrHrefProps = {
    href?: string;
};