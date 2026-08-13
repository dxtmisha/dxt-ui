// md5:532ad41b100898ac6b9649a80297023e true
import { Ref } from 'vue';

/**
 * Creates a reactive variable for session storage.
 * @keywords session ref storage reactive
 */
export declare function useSessionRef<T>(name: string, defaultValue?: T | (() => T)): Ref<T | undefined>;