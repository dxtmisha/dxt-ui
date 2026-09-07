// md5:19bc7772da13bdf63bcffd9ff743f686 true
import type { Router } from 'vue-router';

/** Initializes the Vue router on the server using an incoming HTTP request. @keywords server router init SSR navigation */
export declare function initServerRouter(request: Request, router: Router | undefined): Promise<void>;