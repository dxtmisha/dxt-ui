// md5:a3920195ae4da2d228562da1c48d4ca7 true
import { type Ref } from 'vue';
import { DesignLifecycleAbstract } from './DesignLifecycleAbstract';
import type { DesignComponents } from './DesignComponents';
import type { DesignName } from './DesignName';
import type { ConstrComponent, ConstrConstructor, ConstrConstructors, ConstrEmit, ConstrInstance, ConstrItem, ConstrItems } from '../../types/constructorTypes';

/** Abstract orchestrator for component logic dependencies, managing lazy initialization and caching in Vue effect scope. @keywords orchestrator, dependency, logic, cache */
export declare abstract class DesignLogicAbstract<E extends Element = Element, COMP extends ConstrComponent = ConstrComponent, EMITS extends ConstrItem = ConstrItem, SLOTS extends ConstrItem = ConstrItem, P extends ConstrItem = ConstrItem, CONSTRUCTORS extends ConstrConstructors<CONSTRUCTORS> = object> {
    /** Initializes DesignLogicAbstract with props, element, naming, and dependency configuration. @keywords constructor, init, lifecycle */
    constructor(props: Readonly<P>, element: Ref<E | undefined>, naming: DesignName, components?: DesignComponents<COMP, P> | undefined, slots?: SLOTS | undefined, emits?: ConstrEmit<EMITS> | undefined, constructors?: Partial<CONSTRUCTORS> | undefined, hasLifecycle?: boolean);
    /** Indicates whether the component mount lifecycle hook has executed. @keywords mounted, lifecycle, state */
    readonly isMounted: Ref<boolean, boolean>;
    /** Checks whether a dependency instance has been created and cached. @keywords hasInstance, check, dependency, cache */
    hasInstance<K extends keyof CONSTRUCTORS & string>(name: K): boolean;
    /** Returns or lazily creates a cached dependency instance inside the active effect scope. @keywords getInstance, dependency, factory, lazy */
    getInstance<K extends keyof CONSTRUCTORS & string>(name: K): ConstrInstance<CONSTRUCTORS, K>;
    /** Executes a callback with the dependency instance if available or allowed by canCreate guard. @keywords callInstance, execute, callback, guard */
    callInstance<K extends keyof CONSTRUCTORS & string, R = void, D = undefined>(name: K, callback: (instance: ConstrInstance<CONSTRUCTORS, K>) => R, defaultValue?: D | (() => D)): R | D;
    /** Executes a callback returning an array with the dependency instance, or returns an empty array. @keywords callInstanceArray, array, fallback */
    callInstanceArray<K extends keyof CONSTRUCTORS & string, T = unknown>(name: K, callback: (instance: ConstrInstance<CONSTRUCTORS, K>) => T[]): T[];
    /** Executes a callback returning a boolean with the dependency instance, or returns false. @keywords callInstanceBoolean, boolean, condition */
    callInstanceBoolean<K extends keyof CONSTRUCTORS & string>(name: K, callback: (instance: ConstrInstance<CONSTRUCTORS, K>) => boolean): boolean;
    /** Shorthand alias delegating directly to getInstance. @keywords i, alias, getInstance */
    i<K extends keyof CONSTRUCTORS & string>(name: K): ConstrInstance<CONSTRUCTORS, K>;
}