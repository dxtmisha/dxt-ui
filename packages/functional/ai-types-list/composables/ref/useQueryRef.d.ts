// md5:4618d55bf14f751f44e0353e7422fc13 true
import { ShallowRef } from 'vue';

/**
 * Creates a reactive variable to manage URL query parameters.
 * @keywords query parameter url ref reactive
 * @param name Parameter name
 * @param defaultValue Default value
 */
export declare function useQueryRef<T>(name: string, defaultValue?: T | (() => T)): ShallowRef<T>;