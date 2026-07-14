# @dxtmisha/nitro-basic Reference

Foundation for Nitro & Vue 3 Server-Side Rendering (SSR). Refer to [ai-types.md](file:///Volumes/T7/Code/dxt-ui/packages/nitro-basic/ai-types.md) for full signatures, types, and exported methods.

---

## Architectural Rules

1. **Purpose**: Used *only* in server bootstrap and Nitro configuration (`uiBootstrapServer`, `uiCreateServerApp`, Nitro plugins).
2. **Restriction**: **Never** import or use these functions/mixins within standard Vue components (SFC) or regular business logic. Use high-level wrappers from `@dxtmisha/functional` instead.
3. **Scope**: Do not connect directly to the UI; this package is responsible for the hidden server skeleton.

---

## Core Initialization Flow

### 1. App Bootstrapping (Server & Client Entry Points)

```typescript
import { uiCreateApp, uiCreateClientApp, uiCreateServerApp } from '@dxtmisha/nitro-basic';
import AppRoot from './App.vue';

// 1. Base App Setup (common)
const { app, router, options } = uiCreateApp(AppRoot, { appRouter: { routes } });

// 2. Client Entry (client.ts)
await uiCreateClientApp(app, '#app', router, options, async (appInstance) => { /* pre-mount setup */ });

// 3. Server Entry / Nitro Request handler
const ssr = await uiCreateServerApp(app, request, router, options, async (appInstance) => { /* pre-render setup */ }, context, htmlTemplate);
// ssr.appHtml, ssr.scriptsJson, ssr.teleportsHtml
```

### 2. Request Context & Server Lifecycle Initializers

```typescript
import { useHeaders, getRequestHref, getRequestOrigin, initApi, initCookieStorage, initServerStorage, initHeaders } from '@dxtmisha/nitro-basic';

// Initialized inside server entry points before rendering:
initApi(request);
initCookieStorage(app, request);
initServerStorage(app);
initHeaders(app);

// Accessing metadata on the server:
const userAgent = useHeaders('user-agent');
const allHeaders = useHeaders();
const href = getRequestHref(request);
const origin = getRequestOrigin(request);
```

### 3. Bootstrap & Identity Helpers

```typescript
import { uiBootstrapClient, uiBootstrapServer, uiIdClient, uiIdServer } from '@dxtmisha/nitro-basic';

uiIdClient(); // Setup client-side element ID generator
uiIdServer(); // Setup server-side element ID generator
uiBootstrapServer(); // Server initialization
uiBootstrapClient(); // Client initialization
```
