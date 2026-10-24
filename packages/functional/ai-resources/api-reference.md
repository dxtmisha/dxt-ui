# API Management & Reactive Singletons

Guidance and usage patterns for REST API management and scope-isolated singleton factories in `@dxtmisha/functional`.

## 1. Scope Factory Initialization (`executeUse*`)
- **`executeUseGlobal`**: Registers a runtime-wide singleton. Its registry and instance are shared by all SSR requests in the same server process. The first hook access or `executeUseGlobalInit()` initializes it; repeated initialization calls reuse the instance and discover later registrations.
- **`executeUseLocal`**: Lazily creates an instance in `ServerStorage`. With an initialized SSR request context, each request gets its own instance; browser calls reuse the cached instance.
- **`executeUseProvide`**: Scope-bound singleton bound to a specific component subtree via Vue `provide` / `inject`.

### SSR warnings for global singletons

- Define global factories once at module scope. Do not register them inside request handlers or components.
- Global state is shared between users. Never store authentication, tokens, cookies, user profiles, carts, or request-specific locale/tenant state in it.
- Do not capture request-scoped dependencies in a global factory, including headers, routers, or an `Api` instance from the current request. They would remain associated with the first initialization.
- Use global singletons for public configuration and request-independent services. Use `executeUseLocal` with a configured `ServerStorage` request context or `executeUseProvide` for request/user state; the unconfigured storage fallback does not isolate SSR requests.
- Resetting a global singleton with `destroyExecute()` affects the entire process and stops its effects. Later calls create a new shared instance; existing references still point to the old object.
- Separate server processes/workers/replicas and the browser have separate instances. The helper does not automatically hydrate shared server state into the browser.

## 2. API Management (`useApiManagementRef`)
Handles REST CRUD operations with built-in reactivity, client-side caching, filtering, and contract validation.

### Example
```typescript
import { executeUseLocal, useApiManagementRef } from '@dxtmisha/functional';

export const useUsers = executeUseLocal(() => useApiManagementRef(
  { path: '/api/users' },
  { date: (v: string) => new Date(v).toLocaleString() },
  { columns: ['name', 'email'] },
  { path: '/api/users' },
  { path: (o) => `/api/users/${o.id}` },
  { path: (o) => `/api/users/${o.id}` }
));
```
