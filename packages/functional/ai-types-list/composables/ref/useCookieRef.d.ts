// md5:1d7f03375f7ef28f539db299fd183f44 true
import { Ref } from 'vue';
import { CookieOptions } from '@dxtmisha/functional-basic';

/**
 * Creates a reactive variable to manage cookies.
 * @keywords cookie, ref, reactive, storage, useCookieRef
 */
export declare function useCookieRef<T>(name: string, defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): Ref<T | string | undefined>;