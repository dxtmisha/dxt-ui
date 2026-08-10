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
