// md5:7c78dcba5e8b86f350050c869c3b55aa true
import { type WatchEffectOptions, type WatchStopHandle } from 'vue';
/** Async callback providing an isCurrent guard and an onCleanup registrar. */
export type WatchEffectAsyncCallback = (isCurrent: () => boolean, onCleanup: (cleanupFunction: () => void) => void) => Promise<void>;
/** Runs an async effect reactively with stale-execution guard isCurrent; skips execution in SSR. @keywords watchEffect, async, reactive, isCurrent, cleanup */
export declare function watchEffectAsync(effect: WatchEffectAsyncCallback, options?: WatchEffectOptions): WatchStopHandle;