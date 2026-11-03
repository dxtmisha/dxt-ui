// md5:f00dcc7c205662101adc1ffb2b4fe70a true
import { type Ref } from 'vue';
export type ComputedEternityValue<T, I = T | undefined> = [I] extends [undefined] ? (T | undefined) : (T | (I extends () => infer R ? R : I));
/** Creates an on-demand cached, asynchronously updated computed ref with race condition handling, error fallback, and app-lifecycle persistence. @keywords computed, async computed, cache, eternity, ref, reactivity */
export declare function computedEternity<T, I = T | undefined>(getter: (() => Promise<T> | T) | Promise<T> | T, initialState?: (() => I) | I): Ref<ComputedEternityValue<T, I>>;