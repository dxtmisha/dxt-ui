// md5:fcc2c6b16e5c1036007338c7d8c70ad2 true
import { type ComputedRef, type VNode } from 'vue';
import { DesignComponentsAbstract } from '@dxtmisha/functional-basic';
/** Manages and renders connected Vue design components with prop modifications. @keywords vue design components renderer */
export declare class DesignComponents<COMP extends ConstrComponent, P extends ConstrItem> extends DesignComponentsAbstract<COMP, P, VNode, RawChildren | RawSlots> {
    /** Initializes connected components registry and modification mappings. @keywords constructor init components */
    constructor(components?: COMP, modification?: ConstrComponentMod<P>);
    /** Retrieves modified input properties for a connected component. @keywords get modification props override */
    getModification<K extends keyof P>(index?: K & string | string, props?: P[K] | ConstrItem): ConstrItem | undefined;
    /** Renders a single registered component by name into a VNode. @keywords render vnode component */
    renderOne<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode | undefined;
}