# Centralized Error Handling Guide (`ErrorCenter`)

Mandatory instructions for AI coding assistants on error management in `@dxtmisha/functional-basic`.

---

## 1. 🔴 Mandatory Rule: Zero Direct Console Logging

> **STRICT PROHIBITION**: Direct error logging via `console.error()`, `console.warn()`, or `console.log()` is **FORBIDDEN** across all library and application code.
> **MANDATORY**: Every caught exception, validation failure, network error, or unexpected state **MUST** be routed strictly through `ErrorCenter.on(...)`.

---

## 2. Core Architecture

`ErrorCenter` is a static facade (bridge) that delegates all operations to `ErrorCenterInstance`.

```typescript
import { ErrorCenter, type ErrorCenterInstance } from '@dxtmisha/functional-basic';

// 1. Static global access
ErrorCenter.on({ group: 'api', code: 'timeout' });

// 2. Class Dependency Injection (DI) pattern
export class MyService {
  constructor(
    private errorCenter: ErrorCenterInstance = ErrorCenter.getItem()
  ) {}

  doAction() {
    try {
      // logic
    } catch (e) {
      this.errorCenter.on({ group: 'storage', code: 'error', details: e });
    }
  }
}
```

---

## 3. Error Structure (`ErrorCenterCauseItem`)

| Property | Type | Required | Description |
|---|---|:---:|---|
| `group` | `string \| undefined` | No | Domain category (`'api'`, `'intl'`, `'storage'`, `'auth'`, etc.). |
| `code` | `string` | **Yes** | Unique error code identifier within the group. |
| `priority` | `number` | No | Merge priority (default `500`). Higher priority overrides lower. |
| `label` | `string` | No | Short human-readable title / header. |
| `message` | `string` | No | Descriptive error message. |
| `details` | `unknown` | No | Raw error payload (Error instance, response data, context). |

---

## 4. Triggering Errors (`ErrorCenter.on`)

Use `ErrorCenter.on(...)` whenever handling exceptions or error conditions:

```typescript
import { ErrorCenter } from '@dxtmisha/functional-basic';

// Try/Catch handling
try {
  JSON.parse(invalidJsonString);
} catch (error) {
  ErrorCenter.on({
    group: 'transformation',
    code: 'error',
    details: error
  });
}

// Custom domain error with payload
if (!isUserAuthorized) {
  ErrorCenter.on({
    group: 'auth',
    code: 'unauthorized',
    message: 'Session has expired.',
    details: { userId: '123' }
  });
}
```

---

## 5. Built-in Standard Error Groups & Codes

Pre-registered in `errorCauseList` (no manual registration needed):

| Group | Codes | Description |
|---|---|---|
| `api` | `forbidden` (403), `notFound` (404), `offline`, `server` (500), `timeout`, `unauthorized` (401), `unknown`, `cacheClear`, `cacheGet`, `cacheRemove`, `cacheSet` | HTTP requests & API cache failures |
| `intl` | `datetime`, `display`, `number`, `plural`, `relative`, `invalid` | Internationalization & date parsing errors |
| `storage` | `context`, `error` | `DataStorage`, `CookieStorage`, `ServerStorage` |
| `broadcast` | `error` | Cross-tab `BroadcastChannel` communication |
| `clipboard` | `error` | Clipboard read / write operations |
| `hydration` | `error` | Server / client state hydration mismatches |
| `share` | `error` | Web Share API errors |
| `transformation` | `error` | Data serialization / parsing errors |
| `translate` | `error` | Localization dictionary loading |

---

## 6. Registration & Handlers

### 6.1 Registering Custom Causes (`add` / `addList`)
Store error templates in advance to keep code clean and decoupled:
```typescript
ErrorCenter.add({
  group: 'payment',
  code: 'INSUFFICIENT_FUNDS',
  label: 'Payment Failed',
  message: 'You have insufficient funds to complete this transaction.'
});

ErrorCenter.addList([
  { group: 'upload', code: 'TOO_LARGE', label: 'File Too Large', message: 'Max size is 10MB.' }
]);
```

### 6.2 Group Handlers (`addHandler` / `addHandlerList`)
Subscribe to specific groups (e.g., to trigger UI toasts or alerts):
```typescript
ErrorCenter.addHandler('api', (cause) => {
  showToast(cause.label || 'Network Error', cause.message);
});

// Fallback handler for unassigned groups
ErrorCenter.addHandler(undefined, (cause) => {
  showToast('Error', cause.message);
});
```

### 6.3 Universal Telemetry Callback (`addCallback`)
Invoked on **every** error event (ideal for Sentry, Datadog, logging services):
```typescript
ErrorCenter.addCallback((cause) => {
  Sentry.captureException(cause.details || new Error(cause.message), {
    tags: { group: cause.group, code: cause.code },
    extra: cause
  });
});
```

### 6.4 Console Output Control (`setIsConsole`)
Control automatic console logging (supports boolean or filter callback):
```typescript
ErrorCenter.setIsConsole(false); // Disable console logging completely
ErrorCenter.setIsConsole((cause) => cause.group !== 'analytics'); // Conditional filter
```
