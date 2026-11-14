// md5:4252578e4fad8bce737c0aa62bcdb0ed true
import { type ShallowRef } from 'vue';
export type UseFigmaClientStorageReturn<T> = {
    item: ShallowRef<T | undefined>;
    loading: ShallowRef<boolean>;
};
/** Manages persistent Figma client storage state with reactive refs. @keywords figma, clientStorage, storage, composable, persistence */
export declare function useFigmaClientStorage<T = unknown>(name: string, defaultValue?: T): UseFigmaClientStorageReturn<T>;