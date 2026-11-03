// md5:8d8ce24e7fc2f2e3c3c52b808b58e4d8 true
import { type VNode } from 'vue';
/** Typed registry of connected Vue components that resolves components, caches modifications, and renders VNodes. @keywords registry, components, vnode, render */
export declare class DesignComponents<COMP extends ConstrComponent = ConstrComponent, P extends ConstrItem = ConstrItem> {
    /** Initializes DesignComponents with component registry and modification defaults. @keywords constructor, init, components */
    constructor(components?: COMP, modification?: ConstrComponentMod<P> | undefined);
    /** Checks whether a registry entry contains a component. @keywords check, hasComponent, is, registry */
    is<K extends keyof COMP>(name: K): name is K;
    /** Returns the component registry entry without creating a VNode. @keywords get, component, resolve */
    get<K extends keyof COMP>(name: K): COMP[K];
    /** Caches computed defaults for an index and merges explicit properties. @keywords modification, props, cache, defaults */
    getModification<K extends keyof P>(index?: K & string | string, props?: P[K] | ConstrItem): ConstrItem | undefined;
    /** Renders a component into an array of VNodes, returning an empty array if missing. @keywords render, vnode, array */
    render<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode[];
    /** Creates a single VNode with merged props and children, or undefined if missing. @keywords renderOne, vnode, createVNode */
    renderOne<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode | undefined;
    /** Appends rendered nodes to an existing array and returns the registry instance for chaining. @keywords renderAdd, append, chain */
    renderAdd<K extends keyof COMP, PK extends keyof P>(item: unknown[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): this;
}