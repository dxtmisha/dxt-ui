// md5:99d71885265e32316728e3552eb50b92 true
import { type Ref } from 'vue';

/** Creates a reactive ref synchronized with local storage. @keywords storage ref reactive localStorage */
export declare function useStorageRef<T>(name: string, defaultValue?: T | (() => T), cache?: number): Ref<T | undefined>;