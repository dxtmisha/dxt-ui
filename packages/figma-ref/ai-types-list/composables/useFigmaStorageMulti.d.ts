// md5:5f184d986ea3946a8e6caa30d1a6be91 true
import { type Ref, type ShallowRef } from 'vue';
import { type RefOrNormal } from '@dxtmisha/functional';
export type UseFigmaStorageMultiReturn<T> = {
    item: ShallowRef<T | undefined>;
    isDocument: Ref<boolean>;
    isLocal: Ref<boolean>;
};
/** Composable for managing Figma storage across document and client storage levels. @keywords figma, storage, clientStorage, document, multi */
export declare function useFigmaStorageMulti<T = unknown>(name: string, inDocument?: RefOrNormal<boolean>, inLocal?: RefOrNormal<boolean>, defaultValue?: T): UseFigmaStorageMultiReturn<T>;