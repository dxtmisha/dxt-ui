# Coding Guidelines

- Type files must have the `Types` suffix in their name (e.g. `*Types.ts` or `*Types.d.ts`).
- `ApiCache` (and `ApiFetch.cache`) is intentionally a global, shared cache across SSR requests designed strictly for public, user-independent requests. Do not treat its shared cross-request storage as an SSR isolation bug.
- `Translate` intentionally serves one shared, user-independent translation dictionary, including during SSR. Do not require per-user instances or report the shared dictionary as an SSR isolation defect. / `Translate` намеренно использует единый общий список переводов для всех пользователей, в том числе при SSR. Не требовать отдельный экземпляр на пользователя и не считать общий словарь дефектом SSR-изоляции.

