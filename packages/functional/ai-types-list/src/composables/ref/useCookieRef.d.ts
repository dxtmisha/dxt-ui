// md5:668c8f565a2728ea402d6876886295f4 true
import { type Ref } from 'vue';
import { type CookieOptions } from '@dxtmisha/functional-basic';

/** Creates a reactive ref synchronized with browser cookies. @keywords cookie, reactive, ref, vue, storage */
export declare function useCookieRef<T>(name: string, defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): Ref<T | string | undefined>;