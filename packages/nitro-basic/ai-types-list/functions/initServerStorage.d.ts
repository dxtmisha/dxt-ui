// md5:59a16a164bc9b3ebabaf869f50171fc9 true
import type { App } from 'vue';

/** Initializes the server storage plugin for a Vue application. @keywords server storage, plugin, init, vue */
export declare function initServerStorage<T>(app: App<T>): {
    storage: Record<string, any>;
};