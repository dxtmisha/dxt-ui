// md5:668c8f565a2728ea402d6876886295f4 true
import { type Ref } from 'vue';
import { type CookieOptions } from '@dxtmisha/functional-basic';
/** Creates a reactive Vue ref synchronized with browser cookies. @param name Cookie name @param defaultValue Initial fallback value or getter function @param options Cookie configuration options @keywords cookie reactive state storage vue ref useCookieRef */
export declare function useCookieRef<T>(name: string, defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): Ref<T | string | undefined>;