// md5:a867f4e739c5990333a60d4f8ad47edb true
import { type VNode } from 'vue';

/** Class for managing and rendering connected design components. @keywords design, components, render, vnode */
export declare class DesignComponents<COMP extends ConstrComponent, P extends ConstrItem> {
    /** Initializes component manager with components and modification data. @keywords constructor, init */
    constructor(components?: COMP, modification?: ConstrComponentMod<P> | undefined);
    /** Checks whether a component is registered by name. @keywords is, check, exists */
    is<K extends keyof COMP>(name: K): name is K;
    /** Retrieves a component definition by name. @keywords get, component */
    get<K extends keyof COMP>(name: K): COMP[K];
    /** Gets modified input props for a component. @keywords modification, props */
    getModification<K extends keyof P>(index?: K & string | string, props?: P[K] | Record<string, any>): Record<string, any> | undefined;
    /** Renders a component and returns it within an array. @keywords render, array, vnode */
    render<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode[];
    /** Renders a single component VNode. @keywords renderOne, vnode */
    renderOne<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode | undefined;
    /** Renders a component and appends it to the target array. @keywords renderAdd, append, vnode */
    renderAdd<K extends keyof COMP, PK extends keyof P>(item: any[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): this;
}