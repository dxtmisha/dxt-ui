// md5:4ddc4c5e5fe462f054efc0824f032b83 true
import type { Ref, PropType, ComputedRef } from 'vue';
import type { Undefined } from '@dxtmisha/functional-basic';

export type ConstrItem = Record<string, any>;

export type ConstrValue<T = any> = {
  value?: T;
};

export type ConstrComponent = Record<string, any>;

/** Constructor component modification type with reactive or normal values. @keywords component, modifier, reactive */
export type ConstrComponentMod<P extends ConstrItem> = ConstrItem | {
  [K in keyof P]?: RefOrNormal<P[K]>;
};

export type ConstrExpose<E extends Element, EXPOSE extends ConstrItem> = EXPOSE & {
  elementHtml?: ComputedRef<E | undefined>;
};

/** Converts union types to intersection types. @keywords union, intersection, utility */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

export type ConstrEmitItem<T extends ConstrItem> = T[keyof T];

/** Constructor emit type generating strongly-typed event handler signatures. @keywords emit, events, handler */
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

/** Constructor options interface for component configuration. @keywords options, configuration */
export type ConstrOptions<COMP extends ConstrComponent, EMITS extends ConstrItem, P extends ConstrItem> = {
  components?: COMP;
  compMod?: ConstrComponentMod<P>;
  emits?: ConstrEmit<EMITS>;
  classes?: RefType<ConstrClasses>;
  styles?: RefType<ConstrStyles>;
};

/** Constructor setup interface for component initialization. @keywords setup, initialize */
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

/** Constructor binding type supporting element attributes, classes, and styles. @keywords bind, template, attributes */
export type ConstrBind<T = ConstrItem> = T & Record<string, any> & {
  key?: string;
  class?: ConstrClass;
  style?: ConstrStyles;
};

/** Constructor prop item options for Vue prop definitions. @keywords prop, options, vue */
export type ConstrPropItemOptions<T = any> = {
  type?: PropType<T>;
  required?: boolean;
  default?: any;
  /** Validates the provided prop value. @keywords validator, prop */
  validator?(value: any, props: any): boolean;
};

export type ConstrPropItem<T = any> = ConstrPropItemOptions<T> | PropType<T>;

export type ConstrProps<P = Record<string, any>> = {
  [K in keyof P]: ConstrPropItem<P[K]>;
};

export type ConstrHrefProps = {
  href?: string;
};