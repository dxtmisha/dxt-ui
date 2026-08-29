// md5:fe4514dcd03933b77d7927c45b59002c true
import { type ShallowRef } from 'vue';

/** Creates a reactive shallow reference synchronized with the URL hash. @keywords hash, url, reactive, router, state */
export declare function useHashRef<T>(name: string, defaultValue?: T | (() => T)): ShallowRef<T>;