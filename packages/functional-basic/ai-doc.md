This is the basic functional library (@dxtmisha/functional-basic). It contains framework-agnostic algorithms, utilities, and classes.

ATTENTION FOR VUE ENVIRONMENT:
If you are developing in Vue, ALWAYS look for the required functionality (composables, reactive wrappers) inside the `@dxtmisha/functional` library FIRST.
And ONLY if there is no reactive or Vue-specific analog there, you may use the functionality directly from this library (@dxtmisha/functional-basic).

=============================================================================
CLASS STRUCTURE & CODING STANDARDS (RULES FOR AI)
=============================================================================

To maintain consistency and high industrial quality across the dxt-ui codebase, all TypeScript classes inside `@dxtmisha/functional-basic` must strictly adhere to the following rules regarding structure, member ordering, and styles.

1. ORDER OF MEMBERS WITHIN A CLASS
Members in every class MUST be ordered in the following sequence:

   A. Class Properties / Member Variables:
      - Placed at the very top of the class body.
      - Ordered by visibility: Public first, then Protected, and Private last.
      - Within each visibility level, group by logical connection or alphabetically.
      - Initialize default values directly on declaration when possible.

   B. Constructor:
      - Placed immediately after all property declarations.
      - Parameter properties (e.g., `protected url: string`) are allowed to simplify declaration.

   C. Public Methods:
      - Placed after the constructor.
      - Grouped logically:
        1. Getters, checkers, and status-check methods (e.g., `is*`, `get*`).
        2. Setters and configuration methods (e.g., `set*`).
        3. Core executors and action methods (e.g., `request()`, `fetch()`, `show()`).

   D. Protected Methods:
      - Placed after all public methods.
      - Contain internal utility and helper logic accessible to subclasses.

   E. Private Methods:
      - Placed at the very end of the class.
      - Strict encapsulation of internal logic.

2. CODING & STYLE CONVENTIONS
   - Naming:
     * Classes: PascalCase (e.g., `LoadingInstance`).
     * Methods & Properties: camelCase (e.g., `registrationEvent`, `registrationList`).
     * Constants inside files: UPPER_SNAKE_CASE (e.g., `LOADING_EVENT_NAME`).
   - TypeScript Safety:
     * Never use `any`. Use generic parameters or `unknown` if the type is dynamic/undefined.
     * Explicitly declare return types for ALL public, protected, and private methods (including `void`).
     * Use interfaces/types to define structural contracts for complex inputs and outputs.
   - SSR Isolation (Server-Side Rendering):
     * The library must be fully isomorphic and safe for SSR.
     * Avoid storing request-specific state in global/static class properties directly.
     * Use `ServerStorage.get('key', () => new Instance())` for request-isolated singletons.
     * Use `isDomRuntime()` checks before accessing browser-only APIs like `window`, `document`, or `location`.

=============================================================================
DEVELOPER GUIDE: USING `@dxtmisha/functional-basic` AS A LIBRARY
=============================================================================

This section contains instructions and code guidelines for AI models on how to import and use the framework-agnostic utilities, classes, and helper functions provided by this library in client packages or applications.

---

### 1. HTTP Client (`Api` and `ApiInstance`)

The library provides both a static global class `Api` and an instantiable `ApiInstance` wrapper around the native `fetch` API. They support cancellation, caching, interceptors, error handling, and loading states.

#### Configuration
```typescript
import { Api } from '@dxtmisha/functional-basic';

// Set base origin and API path
Api.setOrigin('https://api.example.com');
Api.setUrl('/api/v1');

// Setup global request defaults (e.g., query params sent with every request)
Api.setRequestDefault({ client: 'web' });

// Setup global headers (can pass a callback for dynamic values)
Api.setHeaders(() => ({
  Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
}));
```

#### Making Requests
```typescript
// Simple request: defaults to GET
const users = await Api.request<User[]>('users');

// Explicit methods
const profile = await Api.get<User>({ path: 'profile' });
const updated = await Api.post<User>({
  path: 'profile',
  request: { name: 'New Name' }, // Request payload
});
```

#### Interceptors (Preparation and End Lifecycle Hooks)
```typescript
// Preparation hook: runs before fetch executes
Api.setPreparation(async (apiFetch) => {
  // Can mutate apiFetch settings or inject headers
  if (apiFetch.auth) {
    apiFetch.headers = { ...apiFetch.headers, 'X-Auth-Required': 'true' };
  }
});

// End hook: runs after response is received
Api.setEnd(async (response, apiFetch) => {
  if (response.status === 401) {
    // Perform token refresh or trigger sign-out
    return { reset: true }; // Resets request/attempts or signals failure
  }
  return {};
});
```

#### Local caching with `ApiCache`
```typescript
import { ApiCache } from '@dxtmisha/functional-basic';

// Cache responses client-side
await ApiCache.set('custom-cache-key', data, 60000); // age in ms
const cached = await ApiCache.get<MyDataType>('custom-cache-key');
```

---

### 2. State & Storage Management

The library features SSR-safe classes to manipulate `localStorage`/`sessionStorage`, cookies, and server-side contexts.

#### `DataStorage` (localStorage / sessionStorage)
Safely wraps storage with optional namespace prefixes, fallback defaults, and expiration cache.
```typescript
import { DataStorage } from '@dxtmisha/functional-basic';

// Set global namespace prefix to avoid storage collisions
DataStorage.setPrefix('my_app_');

// Instantiate a persistent storage item (sessionStorage if 2nd arg is true)
const userStorage = new DataStorage<{ id: string }>('user_session', false);

// Save value
userStorage.set({ id: '123' });

// Get value (with default value fallback and optional cache limit in ms)
const user = userStorage.get({ id: 'guest' });

// Remove item
userStorage.remove();
```

#### `CookieStorage` & `Cookie`
Standard cookie manager.
```typescript
import { CookieStorage, Cookie } from '@dxtmisha/functional-basic';

// Global Cookie usage
CookieStorage.set('theme', 'dark', { age: 31536000, secure: true, sameSite: 'lax' });
const theme = CookieStorage.get<string>('theme', 'light');
CookieStorage.remove('theme');

// Instance-based Cookie manager
const tokenCookie = new Cookie<string>('auth_token');
tokenCookie.set('xyz123', { secure: true });
const token = tokenCookie.get();
```

#### `ServerStorage` (SSR Request-Isolated Storage)
Used to share and isolate singleton states safely across concurrent asynchronous server-side render requests.
```typescript
import { ServerStorage } from '@dxtmisha/functional-basic';

// Fetch or create a request-isolated instance singleton
const myServiceInstance = ServerStorage.get('myService', () => new MyService());
```

---

### 3. Geolocation & Localization (`GeoIntl`, `Geo`, `GeoFlag`, `GeoPhone`)

Standardizes localization using the native browser/Node `Intl` API.

#### `Geo`
Used to track and modify country, language, standard, and timezone information.
```typescript
import { Geo } from '@dxtmisha/functional-basic';

// Get current geo details
const currentCountry = Geo.getCountry(); // e.g., 'VN'
const currentLang = Geo.getLanguage();   // e.g., 'vi'

// Change locale configuration
Geo.set('en-US');
```

#### `GeoIntl`
Used for localized numbers, currencies, percentages, dates, relative times, and file sizes.
```typescript
import { GeoIntl } from '@dxtmisha/functional-basic';

const intl = new GeoIntl('en-US');

// Numbers
intl.number(123456.78); // '123,456.78'

// Currencies
intl.currency(99.99, 'USD'); // '$99.99'

// File Sizes
intl.sizeFile(1024 * 1024 * 5); // '5.00 MB'

// Dates & Time
intl.date(new Date(), 'date'); // 'Jun 18, 2026'
intl.date(new Date(), 'time'); // '10:48 PM'

// Relative time formatting
intl.relative(new Date(Date.now() - 3600000)); // '1 hour ago'

// Pluralization rules
// Words are passed as a string delimited by '|' (e.g. 'one|other' or 'one|few|many|other')
intl.plural(3, 'apple|apples'); // '3 apples'
```

#### Country Flags (`GeoFlag`) and Phone Masks (`GeoPhone`)
```typescript
import { GeoFlag, GeoPhone } from '@dxtmisha/functional-basic';

// Flags
const flagHelper = new GeoFlag();
const flagIcon = flagHelper.getFlag('VN'); // Vietnam flag emoji/svg code

// Phones
const phoneInfo = GeoPhone.getByPhone('+84900000000');
console.log(phoneInfo.phone); // Cleaned phone string
const mask = GeoPhone.toMask('84900000000'); // Returns formatted phone mask
```

---

### 4. DOM and Safe Event Management (`EventItem`)

`EventItem` provides memory-leak proof DOM event management by automating listener binding and unbinding.

```typescript
import { EventItem } from '@dxtmisha/functional-basic';

// Initialize the event listener (attached to element selector or Window)
const clickListener = new EventItem(
  window,
  'click',
  (event) => {
    console.log('Window clicked', event);
  },
  { passive: true }
);

// Start listening
clickListener.start();

// Stop listening (always call when cleaning up/destroying component contexts!)
clickListener.stop();
```

#### Scrolling & Clipboard Helpers
```typescript
import { goScrollSmooth, writeClipboardData, getClipboardData } from '@dxtmisha/functional-basic';

// Scroll element into view smoothly
goScrollSmooth(document.getElementById('target'));

// Copy text to clipboard
await writeClipboardData('Text to copy');

// Read from clipboard
const text = await getClipboardData();
```

---

### 5. Search & Formatting Utilities

#### `SearchList`
A highly-optimized client-side text searching class featuring search highlights.
```typescript
import { SearchList } from '@dxtmisha/functional-basic';

const users = [
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'Jane Smith', email: 'jane@example.com' },
];

// Instantiation: items, fields to search in, current search query, search options
const searcher = new SearchList(users, ['name', 'email'], 'john');

// Execute and retrieve filtered results with highlight match markup
const results = searcher.to();
// returns: Array of results with exact matching highlights in matching keys
```

#### `Formatters`
Automates schema-based transformations of structured lists or objects.
```typescript
import { Formatters, FormattersType } from '@dxtmisha/functional-basic';

const rawData = { price: 12000, date: '2026-06-18' };

const formatter = new Formatters({
  price: { type: FormattersType.currency, options: 'USD' },
  date: { type: FormattersType.date, options: { month: 'long', year: 'numeric' } }
}, rawData);

const formatted = formatter.to();
// { price: '$12,000.00', date: 'June 2026' }
```

---

### 6. General Utility Functions

Core lightweight utilities:
- `isFilled(value)`: Checks if string, array, object, boolean or number has filled content. Returns `false` for `[]`, `{}`, `''`, `null`, `undefined`.
- `isDomRuntime()`: Safe isomorphic environment check. Returns `true` if code is running in a browser runtime.
- `copyObject(value)`: Performs a quick, deep object clone.
- `anyToString(value)`: Converts any type to its clean string representation.
- `sleep(ms)`: Promisified setTimeout wrapper for async delay.

```typescript
import { isFilled, isDomRuntime, copyObject, sleep } from '@dxtmisha/functional-basic';

if (isDomRuntime()) {
  console.log('Running in browser');
}

if (isFilled(myArray)) {
  const cloned = copyObject(myArray);
}

await sleep(500);
```
