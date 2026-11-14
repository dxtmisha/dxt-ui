// md5:75c45590fb603e7a7365afd50d7ca953 true
import { type ShallowRef } from 'vue';

export type UseFigmaStorageReturn<T> = {
    item: ShallowRef<T | undefined>;
    loading: ShallowRef<boolean>;
};

/** Composable for working with Figma storage. @keywords figma, storage, clientStorage, state, vue */
export declare function useFigmaStorage<T = unknown>(name: string, defaultValue?: T, id?: string): UseFigmaStorageReturn<T>;