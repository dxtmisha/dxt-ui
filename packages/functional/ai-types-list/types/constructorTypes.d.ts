// md5:5e9edc2feefec3cea042d18517c143ff true
import type { Ref, PropType, ComputedRef } from 'vue';
import type { Undefined } from '@dxtmisha/functional-basic';

/** Optional constructors with string names. @keywords constructors, dependency */
export type ConstrConstructors<T extends object> = Partial<Record<keyof T & string, new (...parameters: never[]) => object | DesignLifecycleAbstract>>;
export type ConstrParameters<T extends ConstrConstructors<T>, K extends keyof T & string> = ConstructorParameters<NonNullable<T[K]>>;
export type ConstrInstance<T extends ConstrConstructors<T>, K extends keyof T & string> = InstanceType<NonNullable<T[K]>>;
export type ConstrItem = Record<string, any>;
export type ConstrValue<T = any> = {
    value?: T;
};
export type ConstrComponent = Record<string, any>;
/** Component modifications with reactive or normal values. @keywords component, modification, reactive */
export type ConstrComponentMod<P extends ConstrItem> = ConstrItem | {
    [K in keyof P]?: RefOrNormal<P[K]>;
};
/** Constructor expose type with root element reference. @keywords expose, element */
export type ConstrExpose<E extends Element, EXPOSE extends ConstrItem> = EXPOSE & {
    elementHtml?: ComputedRef<E | undefined>;
};
/** Utility type converting union types to intersection types. @keywords union, intersection */
export type UnionToIntersection<U> = (U extends unknown ? (value: U) => void : never) extends (value: infer I) => void ? I : never;
export type ConstrEmitItem<T extends ConstrItem> = T[keyof T];
/** Constructor emit type with event handler signatures. @keywords emit, events */
export type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
    [K in keyof T]: (event: K, ...args: T[K]) => void;
}>>;
export type ConstrClassObject = Record<string, boolean | undefined>;
/** Constructor class type supporting strings, arrays, and objects. @keywords class, css, classes */
export type ConstrClass = string | (string | ConstrClass | Undefined)[] | ConstrClassObject;
export type ConstrClassList = Record<string, ConstrClass>;
/** Constructor classes with required main class and additional class list. @keywords classes, css */
export type ConstrClasses = {
    main: ConstrClass;
} & ConstrClassList;
export type ConstrStylesItem = string | number | null | Undefined;
/** Constructor styles supporting style objects and arrays. @keywords styles, css */
export type ConstrStyles = Record<string, ConstrStylesItem> | ConstrStyles[];
/** Constructor options interface for component configuration. @keywords options, config */
export type ConstrOptions<COMP extends ConstrComponent, EMITS extends ConstrItem, P extends ConstrItem> = {
    components?: COMP;
    compMod?: ConstrComponentMod<P>;
    emits?: ConstrEmit<EMITS>;
    classes?: RefType<ConstrClasses>;
    styles?: RefType<ConstrStyles>;
};
/** Constructor setup interface for component initialization. @keywords setup, init */
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
/** Constructor bind type with class and style support. @keywords bind, props */
export type ConstrBind<T = ConstrItem> = T & Record<string, any> & {
    key?: string;
    class?: ConstrClass;
    style?: ConstrStyles;
};
/** Prop item configuration options for Vue definitions. @keywords prop, options, validator */
export type ConstrPropItemOptions<T = any> = {
    type?: PropType<T>;
    required?: boolean;
    default?: any;
    validator?(value: any, props: any): boolean;
};
export type ConstrPropItem<T = any> = ConstrPropItemOptions<T> | PropType<T>;
/** Constructor props mapping for component prop definitions. @keywords props */
export type ConstrProps<P = Record<string, any>> = {
    [K in keyof P]: ConstrPropItem<P[K]>;
};
export type ConstrHrefProps = {
    href?: string;
};