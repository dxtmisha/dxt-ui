// md5:eece1d85ce7eedaf8bd63c859e95701b true
import { type InjectionKey } from 'vue';
/** Inferred return type for getInject resolving provided value or default fallback. */
export type InjectedValue<T, D = undefined> = [D] extends [undefined] ? (T | undefined) : unknown extends T ? (D extends () => infer R ? R : D) : (T | (D extends () => infer R ? R : D));
/**
 * Reads a provided value by key in a Vue injection context, treating only nullish values as absent.
 * @remarks A missing key inside an injection context retains Vue's standard warning.
 * @keywords vue inject provide dependency injection context fallback getInject
 */
export declare function getInject<T = unknown, D = undefined>(key: InjectionKey<T> | string, defaultValue?: D | (() => D)): InjectedValue<T, D>;