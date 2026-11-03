// md5:662edefe6f5964f3aa042333fc211bdb true
import { type Ref } from 'vue';
/** Creates a reactive ref synchronized with localStorage, persisting nested changes on the next update cycle. @keywords storage, localStorage, reactive, ref, persistence, cache */
export declare function useStorageRef<T>(name: string, defaultValue?: T | (() => T), cache?: number): Ref<T | undefined>;