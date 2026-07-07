# @dxtmisha/functional Reference

Vue 3 reactive utilities, composables, and classes built on `@dxtmisha/functional-basic`. Refer to [ai-types.md](file:///Volumes/T7/Code/dxt-ui/packages/functional/ai-types.md) for full signatures, types, and exported methods.

---

## Usage Rules & Strategies

1. **Priority**: Always prioritize `@dxtmisha/functional` over `@dxtmisha/functional-basic` in Vue environments.
2. **API & State (`useApi*` / `executeUse*`)**:
   - **Never** call `useApiGet`, `useApiPost`, `useApiPut`, `useApiDelete`, `useApiRequest`, `useApiRef`, `useApiAsyncRef`, `useApiManagementRef`, `useApiManagementAsyncRef` directly inside components (SFC).
   - Move all API configurations into separate files (services/stores).
   - Wrap setups in `executeUse` factories (`executeUseLocal`, `executeUseGlobal`, `executeUseProvide`) to ensure singletons, prevent duplicate requests, and process data (mappings, skeletons) in the callback.
   - Components only import/call the singleton hook.

```typescript
import { executeUseGlobal, useApiManagementRef } from '@dxtmisha/functional';

export const useUserManagement = executeUseGlobal(() => {
  return useApiManagementRef(
    { path: '/api/users' },                       // GET
    { date: (v) => new Date(v).toLocaleString() }, // Formatters
    { columns: ['name', 'email'] },               // Search
    { path: '/api/users' },                       // POST
    { path: (o) => `/api/users/${o.id}` },        // PUT
    { path: (o) => `/api/users/${o.id}` }         // DELETE
  );
});
```

### `executeUse` Strategies:
- `executeUseLocal` (Preferred): Lazy-loaded when first called. Persists until session end.
- `executeUseGlobal`: Eagerly loaded at application startup (useful for critical configs, SDKs). Must be initialized via `executeUseGlobalInit()`.
- `executeUseProvide`: Scoped via `provide/inject` to a component tree branch (useful for form/tab hierarchies).

---

## Key API Examples

### 1. Storage & State (Reactive)
Reactively syncs Vue refs with browser storages or cross-tab broadcast channels.

```typescript
import { useStorageRef, useSessionRef, useCookieRef, useBroadcastValueRef, useHashRef } from '@dxtmisha/functional';

const theme = useStorageRef<'light' | 'dark'>('theme_key', 'light');
const step = useSessionRef<number>('form_step', 1);
const token = useCookieRef<string>('auth_token', '', { secure: true });
const syncState = useBroadcastValueRef<string>('active_channel', 'idle');
const hashPage = useHashRef<string>('page', 'home');
```

### 2. Geolocation & Internationalization
Static helpers and reactive wrappers for localization and translation.

```typescript
import { GeoRef, useGeoIntlRef, useTranslateRef } from '@dxtmisha/functional';

const currentCountry = GeoRef.getCountry();
const intl = useGeoIntlRef();
const formattedPrice = intl.currency(150, 'EUR');
const translations = useTranslateRef(['global.save', 'global.cancel']); // Or alias `t(...)`
```

### 3. SEO & Layout Utilities
Metadata manager and reactive scrollbar tracker to solve layout shifts.

```typescript
import { useMeta, ScrollbarWidthRef } from '@dxtmisha/functional';

const meta = useMeta();
meta.setTitle('Product Page');

const scrollbar = new ScrollbarWidthRef();
const w = scrollbar.width;
const hasScroll = scrollbar.is;
```

### 4. Advanced Reactivity Helpers
Helpers for resolving async data reactively or caching computations.

```typescript
import { computedAsync, computedEternity } from '@dxtmisha/functional';

const asyncData = computedAsync(async () => await fetchSomeData(activeId.value), 'loading...');
const cachedData = computedEternity(async () => await fetchStaticData(), 'loading...');
```

### 5. List & Search Orchestration
Orchestrates list state (selection, pagination, highlights) and performs debounced list searches.

```typescript
import { ListDataRef, useSearchRef } from '@dxtmisha/functional';

const listData = new ListDataRef(items, selectedId);
const isSelected = listData.isSelected;
const nextItem = listData.getSelectedNext();

const query = ref('search_term');
const { listSearch, loading, length } = useSearchRef(items, ['label'], query);
```

### 6. DOM & Lazy Rendering
Lifecycle-aware event listeners and IntersectionObserver wrappers.

```typescript
import { EventRef, useLazyRef } from '@dxtmisha/functional';

const keyListener = new EventRef(window, window, 'keydown', (e) => console.log(e.key));
const lazyManager = useLazyRef();
const isVisible = lazyManager.addLazyItem(elementRef);
```
