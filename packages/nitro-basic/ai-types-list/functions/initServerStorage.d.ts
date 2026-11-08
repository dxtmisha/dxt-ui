// md5:e3df14ab3c6de0273fe26377a7312936 true
import type { App } from 'vue';
/** Initializes the server storage plugin for the Vue application. @keywords server storage, vue plugin, state initialization */
export declare function initServerStorage<T>(app: App<T>): {
    storage: {
        storage: Record<string, unknown>;
    };
};