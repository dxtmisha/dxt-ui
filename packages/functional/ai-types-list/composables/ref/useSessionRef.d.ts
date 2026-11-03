// md5:36ae2db67eee4f933da97e0a4dc6599b true
import { type Ref } from 'vue';
/** Creates a reactive ref synchronized with sessionStorage, persisting nested mutations on next Vue tick. @keywords session storage, reactive ref, state persistence, vue */
export declare function useSessionRef<T>(name: string, defaultValue?: T | (() => T)): Ref<T | undefined>;