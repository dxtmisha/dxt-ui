// md5:bafef4e73c06222db5194cef9e14c73b true
import { type EffectScope } from 'vue';
export interface UseScopeItem {
    scope: EffectScope | undefined;
    /** Checks whether the effect scope is active or absent. @keywords is, scope, active */
    is: () => boolean;
    /** Executes a callback within the scope, returning undefined if stopped. @keywords run, execute, scope */
    run: <T>(callback: () => T) => T | undefined;
    /** Executes an async callback within the scope, discarding outdated runs. @keywords runAsync, async, race, scope */
    runAsync: <T>(callback: (isCurrent: () => boolean) => Promise<T> | T) => Promise<T | undefined>;
}
/** Returns the effect scope with execution and activity check helpers. @keywords useScope, effectScope, vue, runner */
export declare function useScope(targetScope?: EffectScope | undefined): UseScopeItem;