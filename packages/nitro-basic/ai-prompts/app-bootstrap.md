# App Bootstrapping & Hydration

## 1. App Bootstrapping (Server & Client Entry Points)

```typescript
import { uiCreateApp, uiCreateClientApp, uiCreateServerApp } from '@dxtmisha/nitro-basic';
import AppRoot from './App.vue';

// 1. Base App Setup (common)
const { app, router, options } = uiCreateApp(AppRoot, { appRouter: { routes } });

// 2. Client Entry (client.ts)
await uiCreateClientApp(app, '#app', router, options, async (appInstance) => {
  // pre-mount setup
});

// 3. Server Entry / Nitro Request handler
const ssr = await uiCreateServerApp(
  app,
  request,
  router,
  options,
  async (appInstance) => {
    // pre-render setup
  },
  context,
  htmlTemplate
);
// ssr.appHtml, ssr.scriptsJson, ssr.teleportsHtml
```

## 2. Hydration & Identity Helpers

```typescript
import { uiBootstrapClient, uiBootstrapServer, uiIdClient, uiIdServer } from '@dxtmisha/nitro-basic';

// Element ID generators (prevents hydration mismatch)
uiIdServer(); // Setup server-side element ID generator
uiIdClient(); // Setup client-side element ID generator

// Environment bootstrapping
uiBootstrapServer(); // Server initialization
uiBootstrapClient(); // Client initialization
```
