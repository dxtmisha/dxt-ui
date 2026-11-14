// md5:5479a18d5bb32efd000c33be956515a8 true
import type { Ref, PropType, ComputedRef } from 'vue';
import type { Undefined } from '@dxtmisha/functional-basic';
import type { RefOrNormal, RefType } from './refTypes';

/** Named constructor registry type. @keywords constructor, dependency */
export type ConstrConstructors<T extends object> = Partial<Record<keyof T & string, new (...parameters: never[]) => unknown>>;
/** Constructor parameters for a named dependency key. @keywords parameters, dependency */
export type ConstrParameters<T extends ConstrConstructors<T>, K extends keyof T & string> = ConstructorParameters<NonNullable<T[K]>>;
/** Instance type of a constructor for a named dependency key. @keywords instance, dependency */
export type ConstrInstance<T extends ConstrConstructors<T>, K extends keyof T & string> = InstanceType<NonNullable<T[K]>>;
/** Constructor function signature for a named dependency key. @keywords constructor, instantiate */
export type ConstrConstructor<T extends ConstrConstructors<T>, K extends keyof T & string> = new (...parameters: ConstrParameters<T, K>) => ConstrInstance<T, K>;
/** Dependency configuration item for lazy constructor instantiation. @keywords dependency, injection, lazy */
export type ConstrItemsItem<T extends ConstrConstructors<T>, K extends keyof T & string> = {
    /** Constructor class or element */
    item?: T[K];
    /** Condition for lazy instantiation */
    conditions?: () => boolean;
    /** Condition determining whether an instance can be created */
    canCreate?: boolean | (() => boolean);
    /** Constructor parameters factory */
    parameters?: () => ConstrParameters<T, K>;
};
/** Registry mapping dependency keys to constructor item configurations. @keywords dependencies, registry */
export type ConstrItems<T extends ConstrConstructors<T>> = {
    [K in keyof T & string]-?: ConstrItemsItem<T, K>;
};
export type ConstrItem = Record<string, any>;
export type ConstrValue<T = any> = {
    value?: T;
};
export type ConstrComponent = Record<string, any>;
/** Component modifier mapping prop definitions to reactive or normal values. @keywords component, modifier, reactive */
export type ConstrComponentMod<P extends ConstrItem> = ConstrItem | {
    [K in keyof P]?: RefOrNormal<P[K]>;
};
/** Exposed component interface augmented with a root HTML element ref. @keywords expose, elementHtml, vue */
export type ConstrExpose<E extends Element, EXPOSE extends ConstrItem> = EXPOSE & {
    /** Root HTML element reference */
    elementHtml?: ComputedRef<E | undefined>;
};
/** Converts a union type into an intersection type. @keywords union, intersection, utility */
export type UnionToIntersection<U> = (U extends unknown ? (value: U) => void : never) extends (value: infer I) => void ? I : never;
export type ConstrEmitItem<T extends ConstrItem> = T[keyof T];
/** Component emit handlers contract derived from an event definition map. @keywords emit, events, vue */
export type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
    [K in keyof T]: (event: K, ...args: T[K]) => void;
}>>;
export type ConstrClassObject = Record<string, boolean | undefined>;
/** CSS class definition supporting string literals, nested arrays, and condition objects. @keywords class, css, styling */
export type ConstrClass = string | (string | ConstrClass | Undefined)[] | ConstrClassObject;
export type ConstrClassList = Record<string, ConstrClass>;
/** Component class map with a required main class property. @keywords classes, styling */
export type ConstrClasses = {
    /** Main component class */
    main: ConstrClass;
} & ConstrClassList;
export type ConstrStylesItem = string | number | null | Undefined;
/** CSS style definition supporting style objects and arrays of styles. @keywords styles, css */
export type ConstrStyles = Record<string, ConstrStylesItem> | ConstrStyles[];
/** Component configuration options for sub-components, modifiers, emits, classes, and styles. @keywords options, configuration, vue */
export type ConstrOptions<COMP extends ConstrComponent, EMITS extends ConstrItem, P extends ConstrItem> = {
    /** Optional components configuration */
    components?: COMP;
    /** Optional component modifications */
    compMod?: ConstrComponentMod<P>;
    /** Optional emit handlers */
    emits?: ConstrEmit<EMITS>;
    /** Optional reactive classes */
    classes?: RefType<ConstrClasses>;
    /** Optional reactive styles */
    styles?: RefType<ConstrStyles>;
};
/** Component setup state containing root element, reactive classes, styles, and setup properties. @keywords setup, component, lifecycle */
export type ConstrSetup<E extends Element, CLASSES extends ConstrClasses, SETUP extends ConstrItem> = {
    /** Component name */
    name: string;
    /** Reactive element reference */
    element: Ref<E | undefined>;
    /** Reactive classes */
    classes: RefType<CLASSES>;
    /** Reactive styles */
    styles: RefType<ConstrStyles>;
} & SETUP;
/** Constructor registration settings and translation dictionary. @keywords registration, translate */
export type ConstrRegistration = {
    /** Optional flag for registration */
    flag?: boolean;
    /** Optional translation map */
    translate?: Record<string, string>;
};
/** Dynamic component binding attributes including key, class, and style. @keywords binding, attrs, vue */
export type ConstrBind<T = ConstrItem> = T & Record<string, any> & {
    /** Optional key */
    key?: string;
    /** Optional CSS classes */
    class?: ConstrClass;
    /** Optional styles */
    style?: ConstrStyles;
};
/** Vue prop definition descriptor with validator and default value. @keywords prop, options, vue */
export type ConstrPropItemOptions<T = any> = {
    /** Vue prop type */
    type?: PropType<T>;
    /** Required flag */
    required?: boolean;
    /** Default value */
    default?: any;
    /** Custom validator function */
    validator?(value: any, props: any): boolean;
};
/** Prop item configuration as an options descriptor or PropType directly. @keywords prop, prop-item, vue */
export type ConstrPropItem<T = any> = ConstrPropItemOptions<T> | PropType<T>;
/** Record mapping component property keys to their Vue prop configurations. @keywords props, prop-definitions, vue */
export type ConstrProps<P = Record<string, any>> = {
    [K in keyof P]: ConstrPropItem<P[K]>;
};
export type ConstrHrefProps = {
    /** Hyperlink reference */
    href?: string;
};