// md5:b6f51eb92789478b85a848b90c4fbc6f true
import type { Router } from 'vue-router';

/** Initializes the Vue router on the server for SSR navigation. @keywords server router, ssr, initServerRouter, vue-router */
export declare function initServerRouter(request: Request, router?: Router): Promise<void>;