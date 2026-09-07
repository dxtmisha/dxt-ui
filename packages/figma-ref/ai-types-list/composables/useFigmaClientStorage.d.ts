// md5:0b76d18f7f43d2ddba1ae890333ad45a true
import type { ShallowRef } from 'vue';

/** Composable for managing Figma client storage with reactive state and loading tracking. @keywords figma, clientStorage, storage, composable, state */
export declare function useFigmaClientStorage<T = any>(name: string, defaultValue?: T): {
    item: ShallowRef<T | undefined>;
    loading: ShallowRef<boolean>;
};