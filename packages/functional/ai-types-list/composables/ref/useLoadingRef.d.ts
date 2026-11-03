// md5:187c95dab4af53a2b2083e08407c0b6b true
import { type ShallowRef } from 'vue';

/** Returns reactive loading status with automatic listener cleanup on scope disposal. @keywords loading, status, page load, lifecycle, shallow ref */
export declare function useLoadingRef(): ShallowRef<boolean>;