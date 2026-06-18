INFRASTRUCTURE LIBRARY (SSR/NITRO):
This package serves as the foundation for building Server-Side Rendering (SSR) applications using Nitro and Vue 3. It handles low-level operations for headers, storage, cookies, and server-side routing.

1. PURPOSE: The library is used exclusively for initializing and configuring the application's server infrastructure. it includes server bootstrap mechanisms (`uiBootstrapServer`), SSR application creation (`uiCreateSsrApp`), and Nitro plugins.
2. USAGE RESTRICTION: Functions and mixins from this package ARE NOT intended for use within regular Vue components or application business logic. All tools required for daily development should be imported from the corresponding high-level packages (e.g., `@dxtmisha/functional` or `@dxtmisha/d1`).
3. DO NOT CONNECT: Avoid direct inclusion of this package in the user interface. It is responsible for the server's "skeleton" and its configuration, which should remain hidden from the application developer.

Study this package only if you need to modify the server lifecycle logic, server request handling, or state synchronization mechanisms between the server and the client (hydration).

=============================================================================
DEVELOPER GUIDE: USING `@dxtmisha/nitro-basic` AS A LIBRARY
=============================================================================

This section contains instructions and code guidelines for AI models on how to import and use the server-side rendering (SSR), bootstrapping, and server request lifecycle APIs provided by this library in backend entry points or server-side plugins.

---

### 1. Application Initialization & Bootstrapping

These functions set up Vue 3 application instances and manage their execution flow across client and server runtimes.

#### `uiCreateApp`
Sets up the base Vue application instance, Vue Router, and global options.
```typescript
import { uiCreateApp } from '@dxtmisha/nitro-basic';
import AppRoot from './App.vue';

const { app, router, options } = uiCreateApp(AppRoot, {
  appRouter: { routes: myRoutes },
});
```

#### `uiCreateClientApp`
Hydrates the Vue application on the client-side.
```typescript
import { uiCreateClientApp } from '@dxtmisha/nitro-basic';

// Initialized inside browser entry point (e.g., main.ts / client.ts)
await uiCreateClientApp(app, '#app', router, options, async (appInstance) => {
  // Pre-mount operations (e.g., register client-only plugins)
});
```

#### `uiCreateServerApp`
Sets up the server render context, executes routing parameters, extracts headers, lang properties, meta configurations, and executes server pre-render actions.
```typescript
import { uiCreateServerApp } from '@dxtmisha/nitro-basic';

// Executes inside server handler / Nitro request lifecycle
const ssrResult = await uiCreateServerApp(
  app,
  nodeRequest, // Incoming Request
  router,
  options,
  async (appInstance) => {
    // Pre-render operations (e.g., seed stores, register plugins)
  },
  ssrContext,
  htmlTemplateBody
);

console.log(ssrResult.appHtml);        // Rendered Vue HTML string
console.log(ssrResult.scriptsJson);    // Hydration data script tags
console.log(ssrResult.teleportsHtml);  // Teleport block targets
```

---

### 2. Request Metadata & Headers

Utilities to extract and evaluate incoming headers and request properties.

#### `useHeaders`
A server-side helper composable to reactively obtain headers of the active incoming request.
```typescript
import { useHeaders } from '@dxtmisha/nitro-basic';

// Extract a specific header property
const userAgent = useHeaders('user-agent');

// Get the entire Headers object
const allHeaders = useHeaders();
```

#### Request URL parsers
```typescript
import { getRequestHref, getRequestOrigin, getRequestUrl } from '@dxtmisha/nitro-basic';

// Returns the full href from request metadata
const href = getRequestHref(request);

// Returns origin domain
const origin = getRequestOrigin(request);
```

---

### 3. Server Storage & Lifecycle Initializers

These initializers seed isomorphic singletons and dependency injection containers with details resolved from the incoming server request.

```typescript
import { initApi, initCookieStorage, initServerStorage, initHeaders } from '@dxtmisha/nitro-basic';

// Initialized inside server entry points before rendering
initApi(request);            // Configures base fetch url and request details
initCookieStorage(app, request); // Extracts cookies and seeds CookieStorage
initServerStorage(app);       // Connects ServerStorage request-isolated singletons
initHeaders(app);            // Attaches incoming request headers to context
```

---

### 4. Identity & Bootstrap Helpers

```typescript
import { uiBootstrapClient, uiBootstrapServer, uiId } from '@dxtmisha/nitro-basic';

// Bootstraps element ID generator and settings
uiId();

// Server-side initialization
uiBootstrapServer();

// Client-side initialization
uiBootstrapClient();
```
