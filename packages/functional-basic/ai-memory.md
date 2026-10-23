# Coding Guidelines

- Type files must have the `Types` suffix in their name (e.g. `*Types.ts` or `*Types.d.ts`).
- `ApiCache` (and `ApiFetch.cache`) is intentionally a global, shared cache across SSR requests designed strictly for public, user-independent requests. Do not treat its shared cross-request storage as an SSR isolation bug.

