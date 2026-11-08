// md5:a402db9e8c671993aa157cf780998050 true
import { type Ref } from 'vue';
import { type CookieOptions } from '@dxtmisha/functional-basic';
/** Creates a reactive cookie ref with synchronous SSR persistence and batched browser writes. @keywords cookie, reactive, ref, vue, ssr, persistence */
export declare function useCookieRef<T>(name: string, defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): Ref<T | string | undefined>;