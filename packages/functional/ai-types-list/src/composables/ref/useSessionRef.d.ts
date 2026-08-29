// md5:a23cbdd21082fb6a36a041a3a795e1bd true
import { type Ref } from 'vue';

/** Creates a reactive ref synchronized with sessionStorage. @keywords session storage, reactive, ref, state, vue */
export declare function useSessionRef<T>(name: string, defaultValue?: T | (() => T)): Ref<T | undefined>;