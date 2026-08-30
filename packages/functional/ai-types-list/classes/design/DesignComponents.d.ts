// md5:a867f4e739c5990333a60d4f8ad47edb true
import { type VNode } from 'vue';
/** Manages connected components, prop modifications, and dynamic rendering. @keywords design components, component registry, dynamic renderer */
export declare class DesignComponents<COMP extends ConstrComponent, P extends ConstrItem> {
    /** Initializes component registry and modification definitions. @keywords constructor, init components */
    constructor(components?: COMP, modification?: ConstrComponentMod<P> | undefined);
    /** Checks whether a component exists in the registry. @keywords check component, has component, component exists */
    is<K extends keyof COMP>(name: K): name is K;
    /** Retrieves a component definition by name. @keywords get component, component lookup */
    get<K extends keyof COMP>(name: K): COMP[K];
    /** Returns modified input properties for connected components. @keywords component modification, props override */
    getModification<K extends keyof P>(index?: K & string | string, props?: P[K] | Record<string, any>): Record<string, any> | undefined;
    /** Renders a component by name and returns an array containing the VNode. @keywords render component, vnode array */
    render<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode[];
    /** Renders a single component VNode by name. @keywords render single component, render vnode */
    renderOne<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode | undefined;
    /** Renders a component and appends the resulting VNode to the target array. @keywords render add, append vnode */
    renderAdd<K extends keyof COMP, PK extends keyof P>(item: any[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): this;
}