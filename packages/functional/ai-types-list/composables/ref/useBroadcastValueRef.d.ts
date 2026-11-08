// md5:aa6947180a4cb4186df0c46e4201fc87 true
import { type Ref } from 'vue';

type BroadcastValueItem<T> = T | string | undefined;

/** Creates a reactive ref synchronized across browser tabs. @keywords broadcast, cross-tab, sync, reactive ref, state */
export declare function useBroadcastValueRef<T>(name: string, defaultValue?: T | string | (() => (T | string))): Ref<BroadcastValueItem<T>>;