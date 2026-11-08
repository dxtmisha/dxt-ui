// md5:518c033653ed77c61790f579bc5a0a7b true
import { type ShallowRef } from 'vue';

/** Creates a reactive shallow reference synchronized with the URL hash. @keywords hash, url, state, router, shallowRef */
export declare function useHashRef<T>(name: string, defaultValue?: T | (() => T)): ShallowRef<T>;