// md5:4ddc4c5e5fe462f054efc0824f032b83 true
import type { Ref, PropType, ComputedRef } from 'vue';
import type { Undefined } from '@dxtmisha/functional-basic';
export type ConstrItem = Record<string, any>;
export type ConstrValue<T = any> = {
  value?: T;
};
export type ConstrComponent = Record<string, any>;
/** Component modification mapping with reactive or raw values. @keywords component, modification, reactive */
export type ConstrComponentMod<P extends ConstrItem> = ConstrItem | {
  [K in keyof P]?: RefOrNormal<P[K]>;
};
export type ConstrExpose<E extends Element, EXPOSE extends ConstrItem> = EXPOSE & {
  elementHtml?: ComputedRef<E | undefined>;
};
/** Converts union type to intersection type. @keywords union, intersection, utility */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type ConstrEmitItem<T extends ConstrItem> = T[keyof T];
/** Emitted event handlers mapped to a callable intersection. @keywords emit, events, handler */
export type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
  [K in keyof T]: (evt: K, ...args: T[K]) => void;
}>>;
export type ConstrClassObject = Record<string, boolean | undefined>;
/** CSS class definition supporting strings, arrays, and record objects. @keywords class, css, classname */
export type ConstrClass = string | (string | ConstrClass | Undefined)[] | ConstrClassObject;
export type ConstrClassList = Record<string, ConstrClass>;
export type ConstrClasses = {
  main: ConstrClass;
} & ConstrClassList;
export type ConstrStylesItem = string | null;
/** CSS style definitions supporting records and nested arrays. @keywords styles, css, inline */
export type ConstrStyles = Record<string, ConstrStylesItem> | ConstrStyles[];
/** Component configuration options. @keywords constructor, options, setup */
export type ConstrOptions<COMP extends ConstrComponent, EMITS extends ConstrItem, P extends ConstrItem> = {
  components?: COMP;
  compMod?: ConstrComponentMod<P>;
  emits?: ConstrEmit<EMITS>;
  classes?: RefType<ConstrClasses>;
  styles?: RefType<ConstrStyles>;
};
/** Component initialization setup context. @keywords setup, component, context */
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
/** Component attribute bindings including class and style. @keywords bind, attrs, props */
export type ConstrBind<T = ConstrItem> = T & Record<string, any> & {
  key?: string;
  class?: ConstrClass;
  style?: ConstrStyles;
};
/** Vue prop configuration options. @keywords prop, options, vue */
export type ConstrPropItemOptions<T = any> = {
  type?: PropType<T>;
  required?: boolean;
  default?: any;
  validator?(value: any, props: any): boolean;
};
export type ConstrPropItem<T = any> = ConstrPropItemOptions<T> | PropType<T>;
/** Component constructor props schema mapping. @keywords props, schema, definition */
export type ConstrProps<P = Record<string, any>> = {
  [K in keyof P]: ConstrPropItem<P[K]>;
};
export type ConstrHrefProps = {
  href?: string;
};