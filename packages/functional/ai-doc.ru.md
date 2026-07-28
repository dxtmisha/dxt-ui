# Справочник @dxtmisha/functional
Реактивные утилиты для Vue 3 поверх `@dxtmisha/functional-basic`. Типы и сигнатуры в `ai-types.md`.

## Правила использования
- **Приоритет**: Во Vue всегда используйте этот пакет вместо `@dxtmisha/functional-basic`.
- **API и Синглтоны**: **ЗАПРЕЩЕНО** вызывать хуки `useApi*` / `executeUse*` напрямую в компонентах (SFC). Выносите конфигурацию в сервисы и оборачивайте в фабрики: `executeUseLocal` (ленивый, на сессию), `executeUseGlobal` (при старте), `executeUseProvide` (для ветви дерева). Компоненты вызывают только готовый хук.

```typescript
import { executeUseLocal, useApiManagementRef, useStorageRef, useSessionRef, useCookieRef, useBroadcastValueRef, useHashRef, GeoRef, useGeoIntlRef, useTranslateRef, useMeta, ScrollbarWidthRef, computedAsync, computedEternity, ListDataRef, useSearchRef, EventRef, useLazyRef } from '@dxtmisha/functional';

// 1. Управление API
export const useUsers = executeUseLocal(() => useApiManagementRef(
  { path: '/api/users' }, { date: (v) => new Date(v).toLocaleString() }, { columns: ['name'] },
  { path: '/api/users' }, { path: (o) => `/api/users/${o.id}` }, { path: (o) => `/api/users/${o.id}` }
));

// 2. Реактивные Хранилища
const theme = useStorageRef<'light' | 'dark'>('theme', 'light');
const step = useSessionRef<number>('step', 1);
const token = useCookieRef<string>('auth', '', { secure: true });
const sync = useBroadcastValueRef<string>('ch', 'idle');
const page = useHashRef<string>('page', 'home');

// 3. Геологика и Переводы
const country = GeoRef.getCountry(); const intl = useGeoIntlRef(); intl.currency(150, 'EUR');
const t = useTranslateRef(['global.save']);

// 4. SEO и Скроллбар
useMeta().setTitle('Страница'); const scrollW = new ScrollbarWidthRef().width;

// 5. Асинхронность и Кэш
const asyncData = computedAsync(async () => fetch(), 'loading...');
const cached = computedEternity(async () => fetch(), 'loading...');

// 6. Списки и Поиск
const list = new ListDataRef(items, selectedId); list.isSelected;
const { listSearch } = useSearchRef(items, ['label'], ref('query'));

// 7. DOM События и Ленивый рендер
const listener = new EventRef(window, window, 'keydown', (e) => console.log(e.key));
const lazy = useLazyRef(); lazy.addLazyItem(elementRef);
```
