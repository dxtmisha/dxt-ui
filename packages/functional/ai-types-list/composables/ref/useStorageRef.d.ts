// md5:b82baafd56e59939cbcc58fcde1db9e8 true
import { type Ref } from 'vue';
/** Creates a reactive ref synchronized with localStorage, persisting nested mutations on the next tick. @keywords storage, localStorage, reactive, persistence, vue */
export declare function useStorageRef<T>(name: string, defaultValue?: T | (() => T), cache?: number): Ref<T | undefined>;