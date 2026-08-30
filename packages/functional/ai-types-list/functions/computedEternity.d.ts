// md5:7b0e65a025d0bebf82e01d659c7e38c6 true
import { type Ref } from 'vue';

/** Creates a cached on-demand computed property with a persistent watcher active for the entire application lifecycle. @keywords computed, lazy, cache, persistent, watcher */
export declare function computedEternity<T>(getter: () => Promise<T> | T, initialState?: (() => T) | T): Ref<T, T>;