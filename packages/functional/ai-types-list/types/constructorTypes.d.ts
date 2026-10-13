// md5:869848ca2e9f49bd4422e4a8e60b9c0e true
import type { Ref, PropType, ComputedRef } from 'vue';
import type { ConstrClass, ConstrClasses, ConstrComponent, ConstrEmit, ConstrItem, ConstrStyles } from '@dxtmisha/functional-basic';
export type { ConstrClass, ConstrClasses, ConstrClassList, ConstrClassObject, ConstrComponent, ConstrEmit, ConstrEmitItem, ConstrHrefProps, ConstrItem, ConstrRegistration, ConstrStyles, ConstrStylesItem, ConstrValue, UnionToIntersection } from '@dxtmisha/functional-basic';

/** Component modification type with reactive or standard values. @keywords constructor, component, modification */
export type ConstrComponentMod<P extends ConstrItem> = ConstrItem | {
    [K in keyof P]?: RefOrNormal<P[K]>;
};

/** Component exposed instance properties contract with HTML element ref. @keywords expose, component, element */
export type ConstrExpose<E extends Element, EXPOSE extends ConstrItem> = EXPOSE & {
    elementHtml?: ComputedRef<E | undefined>;
};

/** Constructor options interface for component configuration. @keywords constructor, options, configuration */
export type ConstrOptions<COMP extends ConstrComponent, EMITS extends ConstrItem, P extends ConstrItem> = {
    components?: COMP;
    compMod?: ConstrComponentMod<P>;
    emits?: ConstrEmit<EMITS>;
    classes?: RefType<ConstrClasses>;
    styles?: RefType<ConstrStyles>;
};

/** Constructor setup contract for component initialization. @keywords constructor, setup, initialization */
export type ConstrSetup<E extends Element, CLASSES extends ConstrClasses, SETUP extends ConstrItem> = {
    name: string;
    element: Ref<E | undefined>;
    classes: RefType<CLASSES>;
    styles: RefType<ConstrStyles>;
} & SETUP;

/** Component binding contract supporting attributes, class, and style. @keywords constructor, bind, props */
export type ConstrBind<T = ConstrItem> = T & Record<string, any> & {
    key?: string;
    class?: ConstrClass;
    style?: ConstrStyles;
};

/** Vue prop definition options contract. @keywords prop, options, vue */
export type ConstrPropItemOptions<T = any> = {
    type?: PropType<T>;
    required?: boolean;
    default?: any;
    /** Custom validator function for prop values. @keywords validator, validation */
    validator?(value: any, props: any): boolean;
};

export type ConstrPropItem<T = any> = ConstrPropItemOptions<T> | PropType<T>;

/** Component props map for Vue prop definitions. @keywords props, constructor, vue */
export type ConstrProps<P = Record<string, any>> = {
    [K in keyof P]: ConstrPropItem<P[K]>;
};