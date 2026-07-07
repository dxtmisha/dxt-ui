# @dxtmisha/functional-basic Reference

Framework-agnostic utility library. **Vue developers MUST search `@dxtmisha/functional` first**; use this ONLY if no reactive/Vue-specific analog exists.

---

## Coding Standards & Class Structure

### 1. Class Member Order
1. **Properties/Variables**: Top of class, ordered by visibility (`public` -> `protected` -> `private`). Initialize inline if possible.
2. **Constructor**: Follows properties. Parameter properties (e.g. `protected url: string`) allowed.
3. **Public Methods**:
   1. Getters, checkers, status methods (`is*`, `get*`).
   2. Setters & configuration (`set*`).
   3. Core executors & actions (`request()`, `fetch()`, `show()`).
4. **Protected Methods**: Internal helpers for subclasses.
5. **Private Methods**: Internal helper logic at the very bottom.

### 2. Style & Type Conventions
- **Naming**: Classes = `PascalCase`, Methods/Properties = `camelCase`, Constants = `UPPER_SNAKE_CASE`.
- **TypeScript**: No `any` (use `unknown`/generics). Explicit return types on ALL methods (including `void`). Export all types/interfaces. Suffix type files with `Types` (e.g., `*Types.ts`). Use `@effect/schema` for API schemas if present.
- **SSR Safety**: Isomorphic code. Do not store request-specific state in static/global variables. Use `isDomRuntime()` before accessing `window`/`document`/`location`. Use `ServerStorage.get(key, () => new Instance())` for request-isolated singletons.

---

## API Reference & Examples

### 1. HTTP Client (`Api`, `ApiInstance`, `ApiCache`)
```typescript
import { Api, ApiCache } from '@dxtmisha/functional-basic';

// Config
Api.setOrigin('https://api.example.com');
Api.setUrl('/api/v1');
Api.setRequestDefault({ client: 'web' });
Api.setHeaders(() => ({ Authorization: `Bearer ${localStorage.getItem('token') || ''}` }));

// Interceptors
Api.setPreparation(async (fetchOpts) => { if (fetchOpts.auth) fetchOpts.headers['X-Auth'] = '1'; });
Api.setEnd(async (res, fetchOpts) => res.status === 401 ? { reset: true } : {});

// Requests
const users = await Api.request<User[]>('users'); // default GET
const profile = await Api.get<User>({ path: 'profile' });
const updated = await Api.post<User>({ path: 'profile', request: { name: 'New' } });

// Cache
await ApiCache.set('key', { data: 1 }, 60000); // ms age
const cached = await ApiCache.get<{ data: number }>('key');
```

### 2. State & Storage Management
```typescript
import { DataStorage, CookieStorage, Cookie, ServerStorage } from '@dxtmisha/functional-basic';

// DataStorage (localStorage/sessionStorage)
DataStorage.setPrefix('my_app_');
const userStorage = new DataStorage<{ id: string }>('user_session', false); // true for sessionStorage
userStorage.set({ id: '123' });
const user = userStorage.get({ id: 'guest' }); // fallback default
userStorage.remove();

// Cookies
CookieStorage.set('theme', 'dark', { age: 31536000, secure: true, sameSite: 'lax' });
const theme = CookieStorage.get<string>('theme', 'light');
CookieStorage.remove('theme');

const tokenCookie = new Cookie<string>('auth_token');
tokenCookie.set('xyz123', { secure: true });
const token = tokenCookie.get();

// SSR Request-Isolated Storage
const myService = ServerStorage.get('myService', () => new MyService());
```

### 3. Geolocation & Localization
```typescript
import { Geo, GeoIntl, GeoFlag, GeoPhone } from '@dxtmisha/functional-basic';

// Geo state
const country = Geo.getCountry(); // e.g., 'VN'
const lang = Geo.getLanguage();   // e.g., 'vi'
Geo.set('en-US');

// Formatters (Intl)
const intl = new GeoIntl('en-US');
intl.number(123456.78);          // '123,456.78'
intl.currency(99.99, 'USD');      // '$99.99'
intl.sizeFile(1024 * 1024 * 5);  // '5.00 MB'
intl.date(new Date(), 'date');    // 'Jun 18, 2026'
intl.date(new Date(), 'time');    // '10:48 PM'
intl.relative(new Date(Date.now() - 3600000)); // '1 hour ago'
intl.plural(3, 'apple|apples');   // '3 apples' ('one|other' or 'one|few|many|other')

// Flags & Phones
const flag = new GeoFlag().getFlag('VN');
const phoneInfo = GeoPhone.getByPhone('+84900000000'); // .phone = cleaned string
const mask = GeoPhone.toMask('84900000000');
```

### 4. DOM, Safe Events & Helpers
```typescript
import { EventItem, goScrollSmooth, writeClipboardData, getClipboardData } from '@dxtmisha/functional-basic';

// Leak-proof Event management
const clickListener = new EventItem(window, 'click', (e) => console.log(e), { passive: true });
clickListener.start();
clickListener.stop(); // Call on destroy/cleanup!

// DOM / Clipboard
goScrollSmooth(document.getElementById('target'));
await writeClipboardData('text');
const text = await getClipboardData();
```

### 5. Search & Formatting Utilities
```typescript
import { SearchList, Formatters, FormattersType } from '@dxtmisha/functional-basic';

// Search List with highlights
const searcher = new SearchList([{ name: 'John Doe' }], ['name'], 'john');
const results = searcher.to(); // returns matching items with highlighted markup in matching keys

// Object Formatter
const formatter = new Formatters({
  price: { type: FormattersType.currency, options: 'USD' },
  date: { type: FormattersType.date, options: { month: 'long', year: 'numeric' } }
}, { price: 12000, date: '2026-06-18' });
const formatted = formatter.to(); // { price: '$12,000.00', date: 'June 2026' }
```

### 6. General Helpers
```typescript
import { isFilled, isDomRuntime, copyObject, anyToString, sleep } from '@dxtmisha/functional-basic';

isFilled([]); // false (works for strings, arrays, objects, numbers, booleans)
isDomRuntime(); // true if in browser
const cloned = copyObject({ a: 1 });
const str = anyToString(123);
await sleep(500);
```
