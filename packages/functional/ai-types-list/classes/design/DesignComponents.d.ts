// md5:00b55440fd1805cf134f75cb85e1993e true
import { ComputedRef, VNode } from 'vue';

/** Manages and renders connected UI components with modifier support. @keywords design components modification render */
export declare class DesignComponents<COMP extends ConstrComponent, P extends ConstrItem> {
    /** Creates a component manager instance. @keywords constructor design components */
    constructor(components?: COMP, modification?: ConstrComponentMod<P> | undefined);
    /** Checks if a component exists by name. @keywords check component exists */
    is<K extends keyof COMP>(name: K): name is K;
    /** Retrieves a component by name. @keywords get component */
    get<K extends keyof COMP>(name: K): COMP[K];
    /** Computes and returns modified component properties. @keywords get modification props */
    getModification<K extends keyof P>(index?: K & string | string, props?: P[K] | Record<string, any>): Record<string, any> | undefined;
    /** Renders a component and returns an array containing the VNode. @keywords render component array */
    render<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode[];
    /** Renders a single component VNode. @keywords render one component */
    renderOne<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode | undefined;
    /** Renders a component and appends it to an array. @keywords render add component */
    renderAdd<K extends keyof COMP, PK extends keyof P>(item: any[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): this;
    /** Computes modifications for a specific component index. @keywords compute modification */
    protected computeModification<K extends keyof P>(index: K & string | string): Record<string, any>;
}