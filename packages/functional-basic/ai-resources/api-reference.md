# API Reference & Examples

## HTTP Client & Caching
```typescript
import { Api, ApiCache } from '@dxtmisha/functional-basic';
Api.setOrigin('https://api.example.com'); Api.setUrl('/api/v1'); Api.setRequestDefault({ client: 'web' });
Api.setHeaders(() => ({ Authorization: `Bearer ${localStorage.getItem('token') || ''}` }));
Api.setPreparation(async (opts) => { if (opts.auth) opts.headers['X-Auth'] = '1'; });
Api.setEnd(async (res) => res.status === 401 ? { reset: true } : {});
const users = await Api.request<User[]>('users'); // GET
const updated = await Api.post<User>({ path: 'profile', request: { name: 'New' } });
await ApiCache.set('k', { a: 1 }, 60000); const cache = await ApiCache.get<{a: number}>('k');
```

### Error Responses & Return Types (`ApiData<T>`)

When an error occurs during an API call, `Api` behaves differently depending on whether it is an HTTP response error or a network/runtime failure:

#### 1. HTTP Errors (HTTP status >= 400)
`Api.request`, `Api.get`, `Api.post`, etc. do **NOT** throw an exception on HTTP errors (e.g. 400, 401, 403, 404, 500). Instead, they return the parsed response wrapped as `ApiData<T>` (`ApiDataItem<T>`), enriched with status and error metadata:

```typescript
import { Api, ApiError, ApiMethodItem } from '@dxtmisha/functional-basic';

// Optional: register known error patterns in advance
ApiError.add({
  url: 'users/login',
  method: ApiMethodItem.post,
  code: 'INVALID_CREDENTIALS',
  message: 'Invalid email or password'
});

// Response returns ApiDataItem<T> with error metadata attached:
const response = await Api.get<User>({ path: 'users/999' });

// 1. Response status metadata: `statusObject` (ApiStatusItem)
response.statusObject?.status;       // number - HTTP status code (e.g. 404, 500)
response.statusObject?.statusText;   // string - HTTP status text (e.g. "Not Found")
response.statusObject?.lastStatus;   // ApiStatusType ('error' | 'warning' | 'info' | 'success')
response.statusObject?.lastCode;     // string | undefined - Server error code
response.statusObject?.lastMessage;  // string | undefined - Error message or status text
response.statusObject?.error;        // string | undefined - Error string if exception occurred

// 2. Structured error helper: `errorObject` (ApiErrorItem)
// Available when `initError: true` (default) and matching error found or response evaluated
response.errorObject?.getCode();     // string | undefined - Matched error code (e.g. 'INVALID_CREDENTIALS')
response.errorObject?.getMessage();  // string | undefined - Evaluated error message
response.errorObject?.getStatus();   // number - HTTP status code (e.g. 404)
response.errorObject?.getResponse(); // Response - Raw Fetch Response object
response.errorObject?.getMethod();   // ApiMethodItem - Request HTTP method

// 3. Extracted metadata fields (automatically merged if returned by backend):
response.success;                    // boolean - false on error
response.code;                       // string | number - Error code from backend
response.message;                    // string - Backend error message
response.error;                      // { code?: string | number, message?: string }

// 4. Global status inspection for the last executed request:
const status = Api.getStatus();      // ApiStatus instance
status.getStatus();                  // number (e.g. 404)
status.getStatusType();              // 'error'
status.getMessage();                 // Error message string
```

#### 2. Network & Runtime Errors (Throws Exception)
Network failures (connection refused, DNS failure, offline mode, timeout via `AbortController`) throw an exception and must be handled with `try / catch`:

```typescript
try {
  await Api.get({ path: 'users', timeout: 5000 });
} catch (error) {
  // Network failures, TimeoutError, or Offline
  const lastError = Api.getStatus().getError(); // String error recorded in ApiStatus
}
```

#### 3. Error Routing & Options
- **`ErrorCenter` Integration**: HTTP errors (status >= 400) and network exceptions are automatically dispatched to `ErrorCenter.on(...)` (groups: `'api'`, `'api-server'`).
- **`hideError?: boolean`**: Set to `true` in `apiFetch` configuration to suppress dispatching errors to `ErrorCenter`.
- **`initError?: boolean`**: Set to `false` in `apiFetch` configuration to disable extracting `ApiErrorItem` (`errorObject`).


## Storage & State
```typescript
import { DataStorage, CookieStorage, Cookie, ServerStorage } from '@dxtmisha/functional-basic';
DataStorage.setPrefix('app_');
const ls = new DataStorage<{ id: string }>('user', false); ls.set({ id: '1' }); ls.get({ id: '0' }); ls.remove();
CookieStorage.set('t', 'dark', { age: 31536000, secure: true }); CookieStorage.get<string>('t', 'light');
const c = new Cookie<string>('auth'); c.set('xyz', { secure: true }); c.get();
const srv = ServerStorage.get('svc', () => new Svc()); // SSR isolated
```

## Geolocation, Formatting & Localization
```typescript
import { Geo, GeoIntl, GeoFlag, GeoPhone } from '@dxtmisha/functional-basic';
const country = Geo.getCountry(); const lang = Geo.getLanguage(); Geo.set('en-US');
const intl = new GeoIntl('en-US');
intl.number(1234.5); intl.currency(99, 'USD'); intl.sizeFile(1024*1024); intl.date(new Date(), 'date');
intl.relative(new Date(Date.now() - 3600000)); intl.plural(3, 'apple|apples');
const flag = new GeoFlag().getFlag('VN');
const phone = GeoPhone.getByPhone('+84900000000'); const mask = GeoPhone.toMask('84900000000');
```

## DOM, Events & Helpers
```typescript
import { EventItem, goScrollSmooth, writeClipboardData, getClipboardData, SearchList, Formatters, FormattersType, isFilled, isFunction, executeFunction, isDomRuntime, copyObject, anyToString, sleep } from '@dxtmisha/functional-basic';

// Safe Events (leak-proof)
const listener = new EventItem(window, 'click', console.log, { passive: true }); listener.start(); listener.stop();

// DOM / Clipboard
goScrollSmooth(document.getElementById('t')); await writeClipboardData('txt'); await getClipboardData();

// Search & Formatters
const res = new SearchList([{ n: 'John' }], ['n'], 'jo').to(); // Highlights matches
const fmt = new Formatters({ p: { type: FormattersType.currency, options: 'USD' } }, { p: 12 }).to();

// General
isFilled([]); // false (strings, arrays, objects, numbers, booleans)
executeFunction(callbackOrValue, arg1); // Executes callback if function, or returns value as is
isFunction(val); // Type-guard for functions
isDomRuntime(); const cloned = copyObject({ a: 1 }); const str = anyToString(123); await sleep(500);
```
