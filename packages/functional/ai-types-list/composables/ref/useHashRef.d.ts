// md5:645c82800df7dacf80f4e56cf52adc76 true
import { ShallowRef } from 'vue';

/**
 * Creates a reactive variable to manage the hash.
 * @keywords useHashRef hash reactive variable state url
 * @param name value name
 * @param defaultValue default value
 */
export declare function useHashRef<T>(name: string, defaultValue?: T | (() => T)): ShallowRef<T>;