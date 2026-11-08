// md5:5a5dceca1c1fd4c7641b4be259434458 true
import { type ComputedRef, type VNode } from 'vue';
/** Typed registry of connected Vue components that resolves components, caches prop modifications, and renders VNodes. @keywords vue component registry vnode */
export declare class DesignComponents<COMP extends ConstrComponent = ConstrComponent, P extends ConstrItem = ConstrItem> {
    /** Initializes DesignComponents with optional components registry and prop modifications. @keywords constructor init */
    constructor(components?: COMP, modification?: ConstrComponentMod<P> | undefined);
    /** Returns a registered component entry without creating a VNode. @keywords component get resolve */
    get<K extends keyof COMP>(name: K): COMP[K];
    /** Checks whether a registry entry contains a component. @keywords component check exists */
    is<K extends keyof COMP>(name: K): name is K;
    /** Caches computed defaults for an index and merges explicit props. @keywords props merge modification defaults */
    getModification<K extends keyof P>(index?: K & string | string, props?: P[K] | ConstrItem): ConstrItem | undefined;
    /** Wraps the rendered VNode in an array; returns an empty array when missing. @keywords render vnode array */
    render<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode[];
    /** Creates a single VNode with merged props and children, or undefined when missing. @keywords render vnode single */
    renderOne<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode | undefined;
    /** Appends rendered nodes to an existing array and returns this registry instance for chaining. @keywords render append chain */
    renderAdd<K extends keyof COMP, PK extends keyof P>(item: unknown[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): this;
}