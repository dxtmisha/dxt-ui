// md5:c3e520f95023dbe4cb58cc5df7366aa2 true
import { type VNode } from 'vue';

/** Class for managing and rendering connected Vue components. @keywords vue component manager renderer */
export declare class DesignComponents<COMP extends ConstrComponent, P extends ConstrItem> {
    /** Initializes the component registry and modification configurations. @keywords constructor init */
    constructor(components?: COMP, modification?: ConstrComponentMod<P> | undefined);
    /** Checks whether a component is registered. @keywords check presence exists */
    is<K extends keyof COMP>(name: K): name is K;
    /** Retrieves a registered component by name. @keywords get component lookup */
    get<K extends keyof COMP>(name: K): COMP[K];
    /** Returns modified input props for connected components. @keywords modification props override */
    getModification<K extends keyof P>(index?: K & string | string, props?: P[K] | ConstrItem): ConstrItem | undefined;
    /** Renders a component by name and returns an array containing the VNode. @keywords render component vnode */
    render<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode[];
    /** Renders a single component VNode by name. @keywords render single vnode */
    renderOne<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode | undefined;
    /** Renders a component by name and appends it to the target array. @keywords render add append array */
    renderAdd<K extends keyof COMP, PK extends keyof P>(item: unknown[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): this;
}