// md5:a0268429c8fb0cadda2b6f3aa2442432 true
import { Ref } from 'vue';

type BroadcastValueItem<T> = T | string | undefined;

/**
 * Creates a reactive variable to manage data between browser tabs.
 * @keywords broadcast value ref tabs reactive
 * @param name value name
 * @param defaultValue default value
 */
export declare function useBroadcastValueRef<T>(name: string, defaultValue?: T | string | (() => (T | string))): Ref<BroadcastValueItem<T>>;

export {};