// md5:e44b4db6ff0df613a45039c731ea47a7 true
import { type Ref } from 'vue';

type BroadcastValueItem<T> = T | string | undefined;

/** Creates a reactive ref synchronized across browser tabs. @keywords broadcast, cross-tab, sync, reactive, state */
export declare function useBroadcastValueRef<T>(name: string, defaultValue?: T | string | (() => (T | string))): Ref<BroadcastValueItem<T>>;