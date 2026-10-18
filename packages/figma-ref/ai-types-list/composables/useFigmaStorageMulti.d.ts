// md5:7eb22815f1fcf57b7c87adbe4a55c573 true
import { type RefOrNormal } from '@dxtmisha/functional';
/** Composable for working with multiple Figma storage types (document and client). @keywords figma, storage, document, client, multi, persist */
export declare function useFigmaStorageMulti<T = unknown>(name: string, inDocument?: RefOrNormal<boolean>, inLocal?: RefOrNormal<boolean>, defaultValue?: T): {
    item: import("vue").Ref<any, any> extends T | undefined ? import("vue").ShallowRef<undefined, undefined> | (T extends T & import("vue").Ref<any, any> ? import("@vue/shared").IfAny<T, import("vue").ShallowRef<T, T>, T> : import("vue").ShallowRef<T, T>) : import("vue").ShallowRef<T | undefined, T | undefined>;
    isDocument: import("vue").Ref<boolean, boolean>;
    isLocal: import("vue").Ref<boolean, boolean>;
};