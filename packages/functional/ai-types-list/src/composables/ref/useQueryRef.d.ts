// md5:ceca65f1af91c02ab580fcf5bfb822c4 true
import { type ShallowRef } from 'vue';

/** Creates a reactive ref synchronized with a URL query parameter. @keywords url query, query ref, search params, router query */
export declare function useQueryRef<T>(name: string, defaultValue?: T | (() => T)): ShallowRef<T>;