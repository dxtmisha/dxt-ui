// md5:8184a2e455e2c15ecace18d9f4ae7805 true
import { type ShallowRef } from 'vue';

/** Returns reactive reference or wraps plain value in shallowRef. @keywords vue reactivity shallowRef ref */
export declare function toShallowRefItem<T>(item?: RefOrNormal<T>): ShallowRef<T>;