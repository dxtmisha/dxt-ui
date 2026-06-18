This is the main functional library for the Vue environment (@dxtmisha/functional). It contains Vue-specific utilities, composables, and reactive classes.

USAGE RULES:
1. When developing in Vue, always use this library for functionality, logic, and composables instead of `@dxtmisha/functional-basic` whenever possible.
2. It wraps basic non-reactive logic into Vue's reactivity system. If the required function or composable exists here, it has absolute priority.
3. Import utilities from `@dxtmisha/functional` for reactive UI behavior, composables, and state management.

WORKING WITH API AND STATE (useApi / executeUse):
A set of composables is provided for network requests: `useApiGet`, `useApiPost`, `useApiPut`, `useApiDelete`, `useApiRequest`, `useApiRef`, `useApiAsyncRef`, `useApiManagementRef`, `useApiManagementAsyncRef`.
Strictly follow these rules for their application:

1. DO NOT call these composables directly in the Vue components (SFC).
2. Move all API configurations and `useApi*` calls into SEPARATE FILES (services/stores).
3. Wrap the API configurations inside the `executeUse` factory (specifically: `executeUseGlobal`, `executeUseProvide`, or `executeUseLocal` from `src/functions/executeUse.ts`). This guarantees the creation of managed singletons (single access point) and prevents duplicated requests and reactive states.
4. Perform any additional request processing (e.g., data mapping, preparing structures for skeletons before loading a form) in the same file, inside the `executeUse` callback, and return a fully prepared set of data and methods.
   *Example of correct usage:*
   ```ts
   import { executeUseGlobal } from '@dxtmisha/functional';
   import { useApiManagementRef } from '@dxtmisha/functional';

   export const useUserManagement = executeUseGlobal(() => {
     return useApiManagementRef(
       { path: '/api/users' },                 // GET setup
       { date: (v) => new Date(v).toLocaleString() }, // Formatters
       { columns: ['name', 'email'] },         // Search
       { path: '/api/users' },                 // POST
       { path: (o) => `/api/users/${o.id}` },  // PUT
       { path: (o) => `/api/users/${o.id}` }   // DELETE
     );
     // Logic for skeletons, additional formatting, etc., should be added here,
     // and then return the extended object.
   });
   ```
5. Within the Vue component itself, simply import and call your custom singleton composable: `const { list, loading, sendPost } = useUserManagement();`

CHOOSING THE executeUse STRATEGY:
1. `executeUseLocal` (PREFERRED):
   - When to use: For most API requests and services.
   - Key Features: Works "lazily" (lazy initialization) — initializes only when first called. The instance persists until the end of the session. This prevents overloading the application start with unnecessary requests.
2. `executeUseGlobal`:
   - When to use: When data or a service must be loaded/initialized IMMEDIATELY at application start (e.g., critical settings, SDKs).
   - Key Features: Creates a single instance for the entire application. All global singletons are forcibly initialized via `executeUseGlobalInit()`.
3. `executeUseProvide`:
   - When to use: For state shared between a parent and a group of child components (e.g., tabs, complex forms with sub-components).
   - Key Features: Uses provide/inject. The first component in the tree that calls the hook becomes the "provider", others become consumers.

=============================================================================
DEVELOPER GUIDE: USING `@dxtmisha/functional` AS A LIBRARY
=============================================================================

This section contains instructions and code guidelines for AI models on how to import and use the Vue-specific reactive classes, composables, and utility functions provided by this library in Vue 3 / Nuxt applications.

---

### 1. Reactive Storage & State Composables

These composables bind browser storages reactively to Vue `Ref` objects, keeping them in sync.

#### `useStorageRef` (localStorage)
Reactively binds a key from `localStorage`.
```typescript
import { useStorageRef } from '@dxtmisha/functional';

// Bind to key with optional initial default value
const theme = useStorageRef<'light' | 'dark'>('theme_key', 'light');

// Setting the value triggers an immediate update to localStorage reactively
theme.value = 'dark';
```

#### `useSessionRef` (sessionStorage) & `useCookieRef` (Cookies)
```typescript
import { useSessionRef, useCookieRef } from '@dxtmisha/functional';

// sessionStorage
const step = useSessionRef<number>('form_step', 1);

// CookieStorage
const token = useCookieRef<string>('auth_token', '', { secure: true });
```

#### `useBroadcastValueRef` (Cross-Tab Synchronization)
Synchronizes a state value reactively across multiple browser tabs under the same origin.
```typescript
import { useBroadcastValueRef } from '@dxtmisha/functional';

// Synchronizes the value of the ref across tabs using BroadcastChannel
const syncState = useBroadcastValueRef<string>('active_channel', 'idle');
```

#### `useHashRef` (URL Hash)
Reactively binds Vue state to the URL hash parameters.
```typescript
import { useHashRef } from '@dxtmisha/functional';

const hashPage = useHashRef<string>('page', 'home');
```

---

### 2. Reactive Geolocation & Internationalization (`GeoRef`, `GeoIntlRef`, `GeoFlagRef`, `useTranslateRef`)

Provides reactive integrations for internationalization APIs.

#### `GeoRef` & `GeoIntlRef`
```typescript
import { GeoRef, useGeoIntlRef } from '@dxtmisha/functional';

// Reactive tracking of user location details
const currentCountry = GeoRef.getCountry(); // ComputedRef<string>

// Reactive i18n formatter hook
const intl = useGeoIntlRef();
const formattedPrice = intl.currency(150, 'EUR'); // ComputedRef<string>
```

#### `useTranslateRef`
Reactively loads and gets translation tokens.
```typescript
import { useTranslateRef } from '@dxtmisha/functional';

const translations = useTranslateRef(['global.save', 'global.cancel']);
// returns: ShallowRef<Record<string, string>> containing loaded translations
```

---

### 3. SEO & Layout Utilities

#### `useMeta`
Manages page metadata reactively. Calling setters will update document headers and tags reactively.
```typescript
import { useMeta } from '@dxtmisha/functional';

const metaManager = useMeta();
metaManager.setTitle('My Product Page');
metaManager.setDescription('Product details and configurations.');
```

#### `ScrollbarWidthRef`
Tracks the scrollbar width reactively to solve layout shift issues.
```typescript
import { ScrollbarWidthRef } from '@dxtmisha/functional';

const scrollbar = new ScrollbarWidthRef();
const width = scrollbar.width; // Ref<number>
const hasScroll = scrollbar.is; // ComputedRef<boolean>
```

---

### 4. Advanced Reactivity Helpers

#### `computedAsync`
Creates a computed property that resolves its value asynchronously. Useful for async tasks inside computed getters.
```typescript
import { computedAsync } from '@dxtmisha/functional';

// Performs asynchronous data lookup and reactively returns the result
const asyncData = computedAsync(async () => {
  return await fetchSomeData(activeId.value);
}, 'initial_loading_value');
```

#### `computedEternity`
Computes an asynchronous value once and caches it indefinitely unless manually refreshed.
```typescript
import { computedEternity } from '@dxtmisha/functional';

const cachedData = computedEternity(async () => {
  return await fetchStaticData();
}, 'loading_state');
```

---

### 5. List & Search Orchestration

#### `ListDataRef`
A powerful reactive state orchestrator for managing lists, groups, items, pagination, highlight paths, and selections.
```typescript
import { ListDataRef } from '@dxtmisha/functional';

const items = ref([
  { value: 'id1', label: 'First Option' },
  { value: 'id2', label: 'Second Option' },
]);
const selectedId = ref('id1');

const listData = new ListDataRef(items, selectedId);
const isSelected = listData.isSelected; // ComputedRef<boolean>
const nextItem = listData.getSelectedNext(); // returns next select item
```

#### `useSearchRef`
Combines a source list, target fields, search query, and options to reactively search a list with built-in delay and highlight support.
```typescript
import { useSearchRef } from '@dxtmisha/functional';

const query = ref('second');
const { listSearch, loading, length } = useSearchRef(items, ['label'], query);
```

---

### 6. DOM & Lazy Rendering

#### `EventRef`
Reactive wrapper for DOM events. Starts and stops event binding cleanly inside Vue component lifecycles (runs setup and teardown hooks automatically).
```typescript
import { EventRef } from '@dxtmisha/functional';

// Listens reactively; auto-starts on setup and auto-stops on unmounted
const keyListener = new EventRef(window, window, 'keydown', (event) => {
  console.log('Key pressed', event.key);
});
```

#### `useLazyRef`
Reactive manager utilizing `IntersectionObserver` to defer rendering of off-screen components.
```typescript
import { useLazyRef } from '@dxtmisha/functional';

const lazyManager = useLazyRef();
const isVisible = lazyManager.addLazyItem(elementRef); // ShallowRef<boolean>
```
