// md5:da7ce260a55f93d69eaff2037d3ab18f true
import { type ShallowRef } from 'vue';
/** Creates a reactive shallow reference to synchronize state with URL query parameters. @keywords url query params search reactive vue */
export declare function useQueryRef<T>(name: string, defaultValue?: T | (() => T)): ShallowRef<T>;