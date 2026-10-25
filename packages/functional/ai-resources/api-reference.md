# API Management & Reactive Singletons

Guidance and usage patterns for REST API management and scope-isolated singleton factories in `@dxtmisha/functional`.

## 1. Scope Factory Initialization (`executeUse*`)
- **`executeUseGlobal`**: Registers a runtime-wide singleton. Its registry and instance are shared by all SSR requests in the same server process. The first hook access or `executeUseGlobalInit()` initializes it; repeated initialization calls reuse the instance and discover later registrations.
- **`executeUseLocal`**: Lazily creates an instance in `ServerStorage`. With an initialized SSR request context, each request gets its own instance; browser calls reuse the cached instance.
- **`executeUseProvide`**: Scope-bound singleton bound to a specific component subtree via Vue `provide` / `inject`.

### Factory result contract

Return a plain object container with own enumerable properties, or `void` for initialization without a result. Put class instances inside the container: `executeUseLocal(() => ({ service: new Service() }))`. The shallowly frozen container preserves the nested service's identity, prototype methods, accessors, private fields and mutable state. Named interfaces are supported without requiring an index signature. TypeScript uses structural typing, so direct class results are rejected by runtime validation instead of silently losing prototype methods.

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

## 3. Request Callbacks

`useApiRequest` and its GET/POST/PUT/DELETE wrappers accept three callbacks:

- `action(data)` runs after response data is received and processed, whether successful or erroneous.
- `actionSuccess(data)` runs only for a response accepted by `isApiSuccess`.
- `actionError(data, error?)` runs for an error response or validation failure. A transport failure passes `undefined` as data and the exception as the second argument.

`send()` awaits `action` before the matching status callback. Failed request validation invokes only `actionError`, without sending a request. When the API returns no data, response callbacks are omitted. For management hooks, configure these callbacks in `postRequest`, `putRequest`, and `deleteRequest`; the common positional `action` also runs after any mutation response, regardless of success.

Management mutation sends await the mutation-specific `action`, then the common positional `action`, before the matching status callback. Mutation loading remains active throughout callback execution. After the common callback completes, successful responses start a background GET refresh; sends do not await that refresh. A thrown or rejected common callback follows `useApiRequest` callback error handling: `send` returns `undefined` and releases that call; mutation loading remains active while other sends are pending.

Parallel `send()` calls are supported. Each composable instance tracks its active calls, including request validation, network work, and awaited callbacks. `loading` stays true until all calls finish. Each call releases its count in `finally`, including early validation returns and exceptions.

## 4. Shared Reload Source

`setApiRefGlobalWatchSource(source)` registers one additional shared ref or computed before request initialization. Its changes trigger request reloads in the browser, even with `reactivity: false`. Its value is never an execution condition: falsy values do not block requests, synchronous cache recovery, or SSR prefetch. Local `conditions` and a non-empty path determine whether each request can run.

`setApiRefGlobalConditions` remains available as a deprecated compatibility alias for `setApiRefGlobalWatchSource`.
