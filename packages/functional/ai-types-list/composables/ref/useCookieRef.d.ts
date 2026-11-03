// md5:cbaf0a5e758022f18bec4477f4e02ffd true
import { type Ref } from 'vue';
import { type CookieOptions } from '@dxtmisha/functional-basic';
/** Creates a reactive ref synchronized with cookies, supporting SSR and batched browser writes. @keywords cookie, reactive cookie, useCookieRef, ssr cookie */
export declare function useCookieRef<T>(name: string, defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): Ref<T | string | undefined>;