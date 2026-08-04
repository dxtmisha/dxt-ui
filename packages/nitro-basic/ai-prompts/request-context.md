# Request Context & Server Lifecycle

## 1. Server Lifecycle Initializers

```typescript
import { initApi, initCookieStorage, initHeaders, initServerStorage } from '@dxtmisha/nitro-basic';

// Initialized inside server entry points before rendering:
initApi(request);
initCookieStorage(app, request);
initServerStorage(app);
initHeaders(app);
```

## 2. Request Context & Metadata

```typescript
import { getContextValue, getRequestHref, getRequestOrigin, getRequestUrl, useHeaders } from '@dxtmisha/nitro-basic';

// Access headers on the server:
const userAgent = useHeaders('user-agent');
const allHeaders = useHeaders();

// Request URLs & origin helpers:
const href = getRequestHref(request);
const origin = getRequestOrigin(request);
const url = getRequestUrl(request);

// Nitro execution context value:
const val = getContextValue('key');
```
