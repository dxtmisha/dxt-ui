# CMS Translation Keys, Texts & Dictionary Rules

Complete guidelines for creating translation keys, writing localizable texts, and organizing translation dictionaries in `@dxtmisha/cms-api` based on `Translate`, `TranslateInstance`, `TranslateFile`, and `applyTemplate` from `@dxtmisha/functional-basic`.

---

## 1. How the Translation Engine Works (`Translate` / `TranslateFile`)

- **Flat key-value storage**: Dictionaries (`TranslateDataFileList`) are strictly flat `Record<string, string>` maps. Nested objects are not supported.
- **Locale resolution chain**: `TranslateFile` resolves dictionaries in order: `location` (e.g., `en-US`) → `language` (e.g., `en`) → `TRANSLATE_GLOBAL_PREFIX` (`'global'`, mapped to `translate-en.ts`).
- **Automatic prefixing**: `TranslateInstance` internally caches keys under `${location}-${name}`, `${language}-${name}`, and `global-${name}`. Dictionary files must **never** include locale prefixes in their keys.
- **Empty & missing values**:
  - `addSync` ignores empty strings (`isFilled(text)`), so every translation value must be a non-empty string.
  - When a key is missing, `Translate.get(name)` returns `name` itself, while `Translate.getSync(name, true)` returns `' '` (or `name` when `first = false`).
- **Reserved system tokens**: Never use `'__TRANSLATE_START__'` or `'__TRANSLATE_END__'` as translation keys (`TranslateInstance.getNamesNone` skips them).

---

## 2. File Organization (`src/media/translate/`)

All CMS translation dictionaries live inside `packages/cms-api/src/media/translate/`:

1. **Master loader (`translate.ts`)**:
   - Declares `export const translateList` mapping `[TRANSLATE_GLOBAL_PREFIX]` to `./translate-en` and each supported ISO 639-1 language code (`ar`, `de`, `es`, `fr`, `he`, `it`, `ja`, `ko`, `pl`, `pt`, `ru`, `tr`, `uk`, `vi`, `zh`) to its lazy dynamic import `async () => (await import('./translate-<lang>')).default`.
   - Registers loaders via `Translate.addSyncByFile(translateList)`.
2. **Language files (`translate-<lang>.ts`)**:
   - Export a flat default object: `export default { ... }`.
   - **1-to-1 key parity**: Every language file must contain the exact same set of keys as `translate-en.ts` (reference dictionary) in the same logical order.

---

## 3. Key Naming Rules

### Canonical Format
```text
cms-<domain>-<entity>[_<qualifier>]
```

- **Package namespace (`cms-`)**: Always start every key with `cms-` to prevent collisions in the global `Translate` registry when multiple packages share the same runtime.
- **Hierarchy separator (`-`)**: Use hyphens (`-`) to separate major hierarchy levels (package → domain → sub-entity).
- **Compound words & qualifiers (`_`)**: Use underscores (`_`) within a segment to join multi-word identifiers or append a semantic qualifier (`_description`, `_placeholder`, `_hint`, `_error`, `_title`).
- **Character set**: Strictly lowercase ASCII letters (`a-z`), digits (`0-9`), hyphens (`-`), and underscores (`_`).

### Mapping Domain Identifiers to Keys

| Domain | Source Identifier | Translation Key(s) |
| --- | --- | --- |
| **Permissions** | `code: 'admin:access'` | `cms-permission-admin_access`<br>`cms-permission-admin_access_description` |
| **Roles** | `code: 'super_admin'` | `cms-role-super_admin`<br>`cms-role-super_admin_description` |
| **User statuses** | `status: 'invited'` | `cms-user-status_invited` |
| **Validation / Errors** | `group: 'auth'`, `code: 'invalid_password'` | `cms-error-auth_invalid_password` |
| **Actions / Buttons** | `action: 'publish'` | `cms-action-publish` |
| **Fields / Labels** | `entity: 'user'`, `field: 'first_name'` | `cms-field-user_first_name`<br>`cms-field-user_first_name_placeholder` |

> **Rule for colon (`:`) codes**: When a database code uses `resource:action` (like `users:read`), replace `:` with `_` in the translation key (`cms-permission-users_read`).

### Prohibited Key Patterns
- **No locale prefixes**: Never write `en-cms-...`, `ru-cms-...`, or `global-cms-...`.
- **No dots or spaces**: Avoid `cms.permission.read` or `cms permission read` (dots break CSS/key consistency across `dxt-ui` packages).
- **No camelCase / PascalCase**: Write `cms-permission-admin_access`, not `cms-permission-adminAccess`.
- **No raw human text as keys**: Never use `'Access admin panel'` as a key; always use a stable semantic identifier so UI text can be edited without breaking database records.

---

## 4. Text & Placeholder Rules (`applyTemplate`)

`TranslateInstance` formats parameterized translations using `applyTemplate(text, replacement)`.

In `@dxtmisha/cms-api`, only **square-bracket syntax** (`[key]` and `[tag]...[/tag]` with `[content]`) is permitted. Alternative syntaxes (`{key}`, `{tag}...{/tag}`, `{content}`, and positional array macros `%d`–`%v`) are **forbidden**.

### 4.1. Named Placeholders (`[key]`)
Use square brackets `[key]` and pass an object (`Record<string, string | number>`):

```typescript
// Dictionary (translate-en.ts / translate-ru.ts)
'cms-user-roles_limit': 'User [name] cannot have more than [max] roles'
'cms-user-roles_limit': 'Пользователь [name] не может иметь более [max] ролей'

// Usage
await Translate.get('cms-user-roles_limit', { name: 'Alex', max: 5 })
```

- **Why required**: Word order varies across languages (especially German, Japanese, Korean, Vietnamese, and RTL languages like Arabic/Hebrew). Named `[key]` placeholders let translators reorder parameters freely.
- **Strict preservation**: Never translate placeholder names (`[name]`, `[max]`, `[count]`) into the target language — keep the exact English key inside square brackets.

### 4.2. Block Tags (`[tag]...[/tag]` with `[content]`)
When inline formatting or links are needed, wrap the translatable phrase inside `[tag]...[/tag]`. The replacement value must use `[content]`:

```typescript
// Dictionary
'cms-auth-terms_notice': 'By continuing, you accept the [link]Terms of Service[/link]'
'cms-auth-terms_notice': 'Продолжая, вы принимаете [link]Условия использования[/link]'

// Usage
await Translate.get('cms-auth-terms_notice', {
  link: '<a href="/terms">[content]</a>'
})
```

- Translate the inner phrase (`Terms of Service` → `Условия использования`), while keeping `[link]` and `[/link]` untouched.

### 4.3. Pluralized / Inflected Words (`GeoIntl.plural`)
Inflected words that depend on a count (`1 user`, `2 users`, `5 пользователей`) must use the pipe-separated format (`|`) consumed by `GeoIntl.plural` (`@dxtmisha/functional-basic`) / `useGeoIntlRef().plural` (`@dxtmisha/functional`):

- **Key naming**: Append the `_plural` suffix (e.g., `cms-user-items_plural`, `cms-role-items_plural`). Never split plural forms into separate keys (`_one`, `_few`, `_many`).
- **Dictionary value format (`one|two|few|many|other|zero`)**:
  - **1 form** (`word`): Languages without plural inflection (`ja`, `ko`, `tr`, `vi`, `zh`).
    - Example (`vi`): `'người dùng'`
  - **2 forms** (`one|other`): Germanic and Romance languages (`en`, `de`, `es`, `fr`, `it`, `pt`).
    - Example (`en`): `'user|users'`
  - **3 forms**:
    - Slavic languages (`ru`, `uk`, `pl`): `one|few|many` (`'пользователь|пользователя|пользователей'`). Because `GeoIntl.plural` checks `list[3] ? list[2] : list[1]` for `few` and `list[3] || list[2] || list[1]` for `many`, a 3-item list maps `one → [0]`, `few → [1]`, `many / other → [2]`.
    - Hebrew (`he`): `one|two|other` (`'משתמש|משתמשים|משתמשים'`, mapping `one → [0]`, `two → [1]`, `other → [2]`).
  - **6 forms** (`one|two|few|many|other|zero`): Required when all CLDR categories differ, such as Arabic (`ar`), or when `zero` has a distinct form (`other` resolves to `list[4]`, `zero` resolves to `list[5]`).
- **No manual numbers in plural keys**: `GeoIntl.plural(count, words)` automatically prepends the localized formatted number (`5 users`, `5 пользователей`), so the dictionary string must contain **only the word forms**, without `[count]` or digits.
- **Embedding inside a sentence**: Combine `GeoIntl.plural` with a named `[key]` placeholder:

```typescript
// Dictionary (translate-en.ts / translate-ru.ts)
'cms-user-items_plural': 'user|users'
'cms-user-total_found': 'Found [items] in total'

'cms-user-items_plural': 'пользователь|пользователя|пользователей'
'cms-user-total_found': 'Всего найдено: [items]'

// Usage
const items = geoIntl.plural(count, await Translate.get('cms-user-items_plural'))
const message = await Translate.get('cms-user-total_found', { items })
```

---

## 5. Text Writing & Localization Standards

1. **Source of truth (`translate-en.ts`)**: Always author new keys in `translate-en.ts` first using clear, concise US English.
2. **Consistency between title and `_description`**:
   - Primary key (`cms-permission-users_read`): Short noun/verb phrase without trailing period (`View users`, `Просмотр пользователей`).
   - Description key (`cms-permission-users_read_description`): Full explanatory sentence starting with `"Allows ..."` in English (or equivalent neutral phrasing in target languages), without trailing period if following existing table style.
3. **No HTML unless using block tags**: Avoid embedding raw HTML tags (`<b>`, `<br>`, `<a>`) directly inside dictionary strings; use `[tag]...[/tag]` block placeholders instead.
4. **No leading/trailing whitespace**: Keep strings trimmed (`'View users'`, not `' View users '`).
5. **RTL awareness (`ar`, `he`)**: Keep placeholders (`[name]`, `[count]`) in standard ASCII and avoid hardcoding directional arrows (`->`, `<-`) inside Arabic or Hebrew strings.
6. **Keep all 16 locales synchronized**: Whenever a key is added, renamed, or removed in `translate-en.ts`, update `translate.ts` (if adding a locale) and all 16 `translate-*.ts` files in the same change.
