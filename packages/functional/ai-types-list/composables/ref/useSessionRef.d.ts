// md5:d104cb09982a79ac917b8d3cc83f35d1 true
import { type Ref } from 'vue';
/** Creates a reactive ref synchronized with sessionStorage, persisting nested mutations on the next update tick. @keywords session storage, sessionStorage, reactive ref, state persistence */
export declare function useSessionRef<T>(name: string, defaultValue?: T | (() => T)): Ref<T | undefined>;