// md5:d2595fb33c731ce6995e62f06e8c71f0 true
import type { VNode } from 'vue';
import type { ConstrClass, ConstrItem } from '@dxtmisha/functional';

export type ComponentOutletComponents = {};

export type ComponentOutletEmits = {};

export interface ComponentOutletExpose<ElementType = Element> {
    /** Returns the resolved component instance or DOM element. @keywords getElement, component, element */
    getElement<T = ElementType>(): T | undefined;
}

export interface ComponentOutletSlots {
    default?(props: ConstrItem): VNode[];
    [key: string]: ((props: ConstrItem) => VNode[]) | undefined;
}

export type ComponentOutletClasses = {
    main: ConstrClass;
};