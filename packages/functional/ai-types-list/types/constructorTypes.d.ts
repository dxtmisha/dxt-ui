// md5:52328cc26563212c0aef74f2c3e41a2e true
import type { Ref, PropType, ComputedRef } from 'vue';
import type { Undefined } from '@dxtmisha/functional-basic';

/** Named constructor dependency mapping. @keywords constructors, di, dependencies */
export type ConstrConstructors<T extends object> = Partial<Record<keyof T & string, new (...parameters: never[]) => unknown>>;
/** Constructor parameters for a named dependency. @keywords parameters, constructor_args */
export type ConstrParameters<T extends ConstrConstructors<T>, K extends keyof T & string> = ConstructorParameters<NonNullable<T[K]>>;
/** Instance type for a named dependency. @keywords instance, dependency */
export type ConstrInstance<T extends ConstrConstructors<T>, K extends keyof T & string> = InstanceType<NonNullable<T[K]>>;
/** Constructor function signature for a named dependency. @keywords constructor, factory */
export type ConstrConstructor<T extends ConstrConstructors<T>, K extends keyof T & string> = new (...parameters: ConstrParameters<T, K>) => ConstrInstance<T, K>;
/** Configuration for a single constructor dependency item. @keywords di_item, lazy_init */
export type ConstrItemsItem<T extends ConstrConstructors<T>, K extends keyof T & string> = {
  item?: T[K];
  conditions?: () => boolean;
  parameters?: () => ConstrParameters<T, K>;
};
/** Constructor items configuration map indexed by dependency name. @keywords di_map, dependencies */
export type ConstrItems<T extends ConstrConstructors<T>> = {
  [K in keyof T & string]-?: ConstrItemsItem<T, K>;
};
export type ConstrItem = Record<string, any>;
export type ConstrValue<T = any> = {
  value?: T;
};
export type ConstrComponent = Record<string, any>;
/** Component modifications allowing reactive or raw values. @keywords component_mod, reactive_props */
export type ConstrComponentMod<P extends ConstrItem> = ConstrItem | {
  [K in keyof P]?: RefOrNormal<P[K]>;
};
/** Component exposed API contract including root element reference. @keywords expose, root_element */
export type ConstrExpose<E extends Element, EXPOSE extends ConstrItem> = EXPOSE & {
  elementHtml?: ComputedRef<E | undefined>;
};
/** Converts union type to intersection type. @keywords union_to_intersection, utility */
export type UnionToIntersection<U> = (U extends unknown ? (value: U) => void : never) extends (value: infer I) => void ? I : never;
export type ConstrEmitItem<T extends ConstrItem> = T[keyof T];
/** Strongly-typed event emitter function signature map. @keywords emit, events, dispatcher */
export type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
  [K in keyof T]: (event: K, ...args: T[K]) => void;
}>>;
export type ConstrClassObject = Record<string, boolean | undefined>;
/** Normalized class binding supporting strings, nested arrays, and boolean maps. @keywords class_name, styling */
export type ConstrClass = string | (string | ConstrClass | Undefined)[] | ConstrClassObject;
export type ConstrClassList = Record<string, ConstrClass>;
/** Component classes containing mandatory main class and optional sub-element classes. @keywords classes, styling */
export type ConstrClasses = {
  main: ConstrClass;
} & ConstrClassList;
export type ConstrStylesItem = string | number | null | Undefined;
/** CSS style definitions supporting nested objects and arrays. @keywords styles, css */
export type ConstrStyles = Record<string, ConstrStylesItem> | ConstrStyles[];
/** Component constructor configuration options. @keywords options, config */
export type ConstrOptions<COMP extends ConstrComponent, EMITS extends ConstrItem, P extends ConstrItem> = {
  components?: COMP;
  compMod?: ConstrComponentMod<P>;
  emits?: ConstrEmit<EMITS>;
  classes?: RefType<ConstrClasses>;
  styles?: RefType<ConstrStyles>;
};
/** Component setup execution context and state contract. @keywords setup, component_state */
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
/** Dynamic component attribute binding supporting classes and styles. @keywords v_bind, props_binding */
export type ConstrBind<T = ConstrItem> = T & Record<string, any> & {
  key?: string;
  class?: ConstrClass;
  style?: ConstrStyles;
};
/** Vue prop option definition configuration. @keywords prop_options, vue_props */
export type ConstrPropItemOptions<T = any> = {
  type?: PropType<T>;
  required?: boolean;
  default?: any;
  validator?(value: any, props: any): boolean;
};
export type ConstrPropItem<T = any> = ConstrPropItemOptions<T> | PropType<T>;
/** Vue props map definition. @keywords vue_props, prop_types */
export type ConstrProps<P = Record<string, any>> = {
  [K in keyof P]: ConstrPropItem<P[K]>;
};
export type ConstrHrefProps = {
  href?: string;
};