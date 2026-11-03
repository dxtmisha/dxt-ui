// md5:5abc6040880e71b4b1101ffcbb2f10ba true
import { type Ref } from 'vue';
/** Abstract orchestrator for component logic dependencies, managing scope and lazy instance caching. @keywords orchestrator logic dependency lazy cache */
export declare abstract class DesignLogicAbstract<E extends Element = Element, COMP extends ConstrComponent = ConstrComponent, EMITS extends ConstrItem = ConstrItem, SLOTS extends ConstrItem = ConstrItem, P extends ConstrItem = ConstrItem, CONSTRUCTORS extends ConstrConstructors<CONSTRUCTORS> = object> {
    /** Initializes component logic orchestrator with context dependencies and configuration. @keywords constructor init setup */
    constructor(props: Readonly<P>, element: Ref<E | undefined>, naming: DesignName, components?: DesignComponents<COMP, P> | undefined, slots?: SLOTS | undefined, emits?: ConstrEmit<EMITS> | undefined, constructors?: Partial<CONSTRUCTORS> | undefined, hasLifecycle?: boolean);
    /** Indicates whether the component mount lifecycle hook has run. @keywords mounted lifecycle status */
    readonly isMounted: Ref<boolean, boolean>;
    /** Retrieves or lazily creates and caches a dependency instance in the active scope. @keywords getInstance dependency lazy cache */
    getInstance<K extends keyof CONSTRUCTORS & string>(name: K): ConstrInstance<CONSTRUCTORS, K>;
    /** Alias for `getInstance` to retrieve or instantiate a dependency. @keywords i getInstance alias dependency */
    i<K extends keyof CONSTRUCTORS & string>(name: K): ConstrInstance<CONSTRUCTORS, K>;
}