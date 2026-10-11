// md5:b35f1110b5977c1cd21cccf2ac683ee1 true
import type { CSSProperties, ElementType, ReactNode, RefObject } from 'react';
import type { ConstrClasses, ConstrEmit, ConstrItem, ConstrStyles } from '@dxtmisha/functional-basic';
export type { ConstrClass, ConstrClasses, ConstrClassList, ConstrClassObject, ConstrComponent, ConstrEmit, ConstrEmitItem, ConstrHrefProps, ConstrItem, ConstrRegistration, ConstrStyles, ConstrStylesItem, ConstrValue, UnionToIntersection } from '@dxtmisha/functional-basic';
/** Map of constructor sub-components to React element types. @keywords react, component, map */
export type ConstrComponentReact = Record<string, ElementType | undefined>;
/** Component modifications mapping with plain property values for React. @keywords react, component, modification */
export type ConstrComponentModReact<P extends ConstrItem> = ConstrItem | {
  [K in keyof P]?: P[K];
};
/** Component exposed API with root DOM element reference for React. @keywords react, expose, ref, element */
export type ConstrExposeReact<E extends Element, EXPOSE extends ConstrItem> = EXPOSE & {
  elementHtml?: RefObject<E | null>;
};
/** Slot content accepting ReactNode or scoped slot render function. @keywords react, slot, render_prop */
export type ConstrSlotReact<T extends ConstrItem = ConstrItem> = ReactNode | ((props: T) => ReactNode);
/** Configuration options for constructor-based React components. @keywords react, options, configuration */
export type ConstrOptionsReact<COMP extends ConstrComponentReact, EMITS extends ConstrItem, P extends ConstrItem> = {
  components?: COMP;
  compMod?: ConstrComponentModReact<P>;
  emits?: ConstrEmit<EMITS>;
  classes?: ConstrClasses;
  styles?: ConstrStyles;
  attrs?: ConstrItem;
  slots?: Record<string, ConstrSlotReact | undefined>;
};
/** Binding attributes including key, className, and style for React elements. @keywords react, bind, props */
export type ConstrBindReact<T = ConstrItem> = T & Record<string, any> & {
  key?: string;
  className?: string;
  style?: CSSProperties;
};
/** Setup state interface for React component initialization. @keywords react, setup, state */
export type ConstrSetupReact<E extends Element, CLASSES extends ConstrClasses, SETUP extends ConstrItem> = {
  name: string;
  element: RefObject<E | null>;
  classes: CLASSES;
  styles: CSSProperties;
} & SETUP;