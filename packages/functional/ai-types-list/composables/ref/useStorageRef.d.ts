// md5:fc1305ebe13219e9539ad00834b59637 true
import { Ref } from 'vue';

/**
 * Creates a reactive reference to manage browser local storage.
 * @keywords storage, local, reactive, ref
 */
export declare function useStorageRef<T>(name: string, defaultValue?: T | (() => T), cache?: number): Ref<T | undefined>;