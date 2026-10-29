# Coding Guidelines

- Type files must have the `Types` suffix in their name (e.g. `*Types.ts` or `*Types.d.ts`).
- `ApiCache` (and `ApiFetch.cache`) is intentionally a global, shared cache across SSR requests designed strictly for public, user-independent requests. Do not treat its shared cross-request storage as an SSR isolation bug.
- `temp.md` contains the list of package entities (functions, utilities) that have successfully passed code review and testing / `temp.md` содержит список сущностей пакета, которые успешно прошли код-ревью и тестирование.

