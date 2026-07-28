# @dxtmisha/functional Reference
Vue 3 reactive utilities built on `@dxtmisha/functional-basic`. See `ai-types.md` for full signatures.

## Usage Rules & Strategies
- **Priority**: Always use this package over `@dxtmisha/functional-basic` in Vue.
- **API/State Singletons**: **NEVER** call `useApi*` / `executeUse*` hooks directly in Vue components. Wrap them in `executeUseGlobal` (startup), `executeUseLocal` (lazy, session scope), or `executeUseProvide` (scoped tree) inside external service files. Components only import and call the resulting hook.

```typescript
import { executeUseLocal, useApiManagementRef, useStorageRef, useSessionRef, useCookieRef, useBroadcastValueRef, useHashRef, GeoRef, useGeoIntlRef, useTranslateRef, useMeta, ScrollbarWidthRef, computedAsync, computedEternity, ListDataRef, useSearchRef, EventRef, useLazyRef } from '@dxtmisha/functional';

// 1. API Management
export const useUsers = executeUseLocal(() => useApiManagementRef(
  { path: '/api/users' }, { date: (v) => new Date(v).toLocaleString() }, { columns: ['name'] },
  { path: '/api/users' }, { path: (o) => `/api/users/${o.id}` }, { path: (o) => `/api/users/${o.id}` }
));

// 2. Storage & State
const theme = useStorageRef<'light' | 'dark'>('theme', 'light');
const step = useSessionRef<number>('step', 1);
const token = useCookieRef<string>('auth', '', { secure: true });
const sync = useBroadcastValueRef<string>('ch', 'idle');
const page = useHashRef<string>('page', 'home');

// 3. Geo & Formatting
const country = GeoRef.getCountry(); const intl = useGeoIntlRef(); intl.currency(150, 'EUR');
const t = useTranslateRef(['global.save']);

// 4. SEO & Layout
useMeta().setTitle('Page'); const scrollW = new ScrollbarWidthRef().width;

// 5. Reactivity Helpers
const asyncData = computedAsync(async () => fetch(), 'loading...');
const cached = computedEternity(async () => fetch(), 'loading...');

// 6. Lists & Search
const list = new ListDataRef(items, selectedId); list.isSelected;
const { listSearch } = useSearchRef(items, ['label'], ref('query'));

// 7. DOM Events & Lazy
const listener = new EventRef(window, window, 'keydown', (e) => console.log(e.key));
const lazy = useLazyRef(); lazy.addLazyItem(elementRef);
```
