# Reactivity Helpers, Lists & DOM Utilities

Advanced async reactivity, list data models, search filters, and DOM observers.

## Available Composables & Classes
- **`computedAsync(evaluator, defaultVal)`**: Asynchronous computed reference for promise resolution.
- **`computedEternity(evaluator, defaultVal)`**: Cached asynchronous computed ref that preserves state across re-evaluations.
- **`ListDataRef(items, selectedId)`**: Reactive list structure supporting selection state management.
- **`useSearchRef(items, fields, queryRef)`**: Debounced multi-field search and highlighting composable.
- **`EventRef(target, element, event, callback)`**: Managed DOM event listener with automatic lifecycle cleanup.
- **`useLazyRef()`**: IntersectionObserver helper for lazy rendering and dynamic element loading.

Repeated lazy registrations of the same element share one native observation and retain independent status refs and cleanup. A new registration receives the latest intersection state. `useLazyRef().getItem(element, status)` selects the registration by the status ref returned from `addLazyItem`; without `status`, it returns the first active registration. `useLazyRef().removeLazyItem(element)` removes all registrations for that element. `useLazyItemByMarginRef` shares observers by `rootMargin`, exposes its own registration through `lazyItem`, and releases only that registration on `removeLazyItem()` or owning scope disposal. Native observation ends when the last registration leaves the element.

### Example
```typescript
import { ref } from 'vue';
import {
  computedAsync,
  computedEternity,
  ListDataRef,
  useSearchRef,
  EventRef,
  useLazyRef
} from '@dxtmisha/functional';

const asyncData = computedAsync(async () => fetch('/api/data').then(r => r.json()), 'loading...');
const cachedData = computedEternity(async () => fetch('/api/cached').then(r => r.json()), 'loading...');

const list = new ListDataRef(items, selectedId);
const query = ref('');
const { listSearch } = useSearchRef(items, ['name', 'description'], query);

const listener = new EventRef(window, window, 'keydown', (e) => console.log(e.key));
const lazy = useLazyRef();
```
