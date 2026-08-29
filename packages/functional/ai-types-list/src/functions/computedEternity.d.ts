// md5:7b0e65a025d0bebf82e01d659c7e38c6 true
import { type Ref } from 'vue';
/** Creates a permanently active, on-demand cached computed ref supporting sync and async getters. @keywords computed eternity cache promise async ref vue */
export declare function computedEternity<T>(getter: () => Promise<T> | T, initialState?: (() => T) | T): Ref<T, T>;