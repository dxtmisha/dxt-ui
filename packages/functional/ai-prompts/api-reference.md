# API Management & Reactive Singletons

Guidance and usage patterns for REST API management and scope-isolated singleton factories in `@dxtmisha/functional`.

## 1. Scope Factory Initialization (`executeUse*`)
- **`executeUseGlobal`**: Initializes a global singleton instance at application startup (shared across the entire application).
- **`executeUseLocal`**: Lazily creates a session-scoped or closure-local instance upon first invocation.
- **`executeUseProvide`**: Scope-bound singleton bound to a specific component subtree via Vue `provide` / `inject`.

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
