// md5:ea6575350c59788cd7fc0dda4c4f6b75 true
/** Base abstract class managing component registry, availability checks, and rendering in design constructors. @keywords design component, registry, renderer, constructor */
export declare abstract class DesignComponentsAbstract<COMP extends ConstrComponent, P extends ConstrItem, RENDER = unknown, CHILDREN = unknown> {
    /** Initializes component registry and modification data. @keywords init, constructor, setup */
    constructor(components?: COMP, modification?: ConstrItem | undefined);
    /** Checks whether a component is registered. @keywords check, exists, registered, component guard */
    is<K extends keyof COMP>(name: K): name is K;
    /** Retrieves a registered component by name. @keywords get, resolve, component */
    get<K extends keyof COMP>(name: K): COMP[K];
    /** Resolves modified input properties for a component. @keywords modification, props, transform */
    abstract getModification<K extends keyof P>(index?: K & string | string, props?: P[K] | ConstrItem): ConstrItem | undefined;
    /** Renders a component by name and returns it wrapped in an array. @keywords render, array, batch */
    render<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: CHILDREN, index?: PK & string | string): RENDER[];
    /** Renders a single component instance by name. @keywords render, component, render one */
    abstract renderOne<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: CHILDREN, index?: PK & string | string): RENDER | undefined;
    /** Renders a component by name and appends it to the target array. @keywords render, append, array, push */
    renderAdd<K extends keyof COMP, PK extends keyof P>(item: unknown[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: CHILDREN, index?: PK & string | string): this;
}