// md5:4a0533a287f53e000a0910d2bdbc767b true
import { type Ref } from 'vue';

/** Base orchestrator for component logic, managing shared dependencies and lifecycle callbacks in an effect scope. @keywords orchestrator, component, logic, dependencies, effect_scope, lifecycle */
export declare abstract class DesignLogicAbstract<E extends Element, COMP extends ConstrComponent, EMITS extends ConstrItem, SLOTS extends ConstrItem, P extends ConstrItem, CONSTRUCTORS extends ConstrConstructors<CONSTRUCTORS> = object> {
    /** Initializes shared dependencies and registers component lifecycle callbacks. @keywords constructor, init, dependencies, lifecycle */
    protected constructor(props: Readonly<P>, element: Ref<E | undefined>, naming: DesignName, components?: DesignComponents<COMP, P> | undefined, slots?: SLOTS | undefined, emits?: ConstrEmit<EMITS> | undefined, constructors?: Partial<CONSTRUCTORS>);
    /** Retrieves or lazily creates a dependency instance within the active effect scope. @keywords getInstance, dependency, lazy, effect_scope */
    getInstance<K extends keyof CONSTRUCTORS & string>(name: K): ConstrInstance<CONSTRUCTORS, K> | undefined;
}