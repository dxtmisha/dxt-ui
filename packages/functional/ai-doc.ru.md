# Справочник @dxtmisha/functional

Реактивные утилиты, хуки (composables) и классы для Vue 3, построенные поверх библиотеки `@dxtmisha/functional-basic`. Полные сигнатуры, типы и экспортируемые методы смотрите в [ai-types.md](file:///Volumes/T7/Code/dxt-ui/packages/functional/ai-types.md).

---

## Правила использования и стратегии

1. **Приоритет**: При разработке под Vue всегда выбирайте `@dxtmisha/functional` вместо `@dxtmisha/functional-basic`.
2. **Запросы и состояние (`useApi*` / `executeUse*`)**:
   - **Запрещено** вызывать `useApiGet`, `useApiPost`, `useApiPut`, `useApiDelete`, `useApiRequest`, `useApiRef`, `useApiAsyncRef`, `useApiManagementRef`, `useApiManagementAsyncRef` напрямую в компонентах (SFC).
   - Выносите конфигурацию API в отдельные файлы (сервисы / хранилища).
   - Оборачивайте вызовы API в фабрики `executeUse` (`executeUseLocal`, `executeUseGlobal`, `executeUseProvide`). Это создает синглтоны, предотвращает дублирование запросов и позволяет готовить данные (маппинг, скелетоны) внутри коллбэка.
   - Компоненты импортируют и вызывают только готовый синглтон-хук.

```typescript
import { executeUseGlobal, useApiManagementRef } from '@dxtmisha/functional';

export const useUserManagement = executeUseGlobal(() => {
  return useApiManagementRef(
    { path: '/api/users' },                       // GET
    { date: (v) => new Date(v).toLocaleString() }, // Форматирование
    { columns: ['name', 'email'] },               // Поиск
    { path: '/api/users' },                       // POST
    { path: (o) => `/api/users/${o.id}` },        // PUT
    { path: (o) => `/api/users/${o.id}` }         // DELETE
  );
});
```

### Выбор стратегии `executeUse`:
- `executeUseLocal` (Рекомендуется): Ленивая инициализация (при первом вызове), сохраняется до конца сессии. Исключает лишнюю нагрузку при старте.
- `executeUseGlobal`: Инициализируется сразу при старте приложения (для критических настроек, SDK). Требует вызова `executeUseGlobalInit()`.
- `executeUseProvide`: Привязывается к ветке дерева компонентов через `provide/inject` (для связанных форм или групп табов).

---

## Справочник API и примеры

### 1. Хранилища и состояние (Реактивные)
Реактивно синхронизирует Vue-рефы с браузерными хранилищами и вкладками.

```typescript
import { useStorageRef, useSessionRef, useCookieRef, useBroadcastValueRef, useHashRef } from '@dxtmisha/functional';

const theme = useStorageRef<'light' | 'dark'>('theme_key', 'light');
const step = useSessionRef<number>('form_step', 1);
const token = useCookieRef<string>('auth_token', '', { secure: true });
const syncState = useBroadcastValueRef<string>('active_channel', 'idle');
const hashPage = useHashRef<string>('page', 'home');
```

### 2. Геологика и локализация
Статические хелперы и реактивные обертки для локализации и перевода.

```typescript
import { GeoRef, useGeoIntlRef, useTranslateRef } from '@dxtmisha/functional';

const currentCountry = GeoRef.getCountry();
const intl = useGeoIntlRef();
const formattedPrice = intl.currency(150, 'EUR');
const translations = useTranslateRef(['global.save', 'global.cancel']); // Или алиас `t(...)`
```

### 3. SEO и верстка
Реактивный менеджер метаданных и скроллбара для предотвращения сдвигов верстки.

```typescript
import { useMeta, ScrollbarWidthRef } from '@dxtmisha/functional';

const meta = useMeta();
meta.setTitle('Страница продукта');

const scrollbar = new ScrollbarWidthRef();
const w = scrollbar.width;
const hasScroll = scrollbar.is;
```

### 4. Помощники реактивности
Инструменты для асинхронных вычислений и постоянного кэширования реактивных данных.

```typescript
import { computedAsync, computedEternity } from '@dxtmisha/functional';

const asyncData = computedAsync(async () => await fetchSomeData(activeId.value), 'loading...');
const cachedData = computedEternity(async () => await fetchStaticData(), 'loading...');
```

### 5. Списки и поиск
Оркестрация состояния сложных списков (выделение, клавиатурная навигация) и поиск с дебаунсом.

```typescript
import { ListDataRef, useSearchRef } from '@dxtmisha/functional';

const listData = new ListDataRef(items, selectedId);
const isSelected = listData.isSelected;
const nextItem = listData.getSelectedNext();

const query = ref('search_term');
const { listSearch, loading, length } = useSearchRef(items, ['label'], query);
```

### 6. DOM и ленивая отрисовка
Подписки на DOM-события с привязкой к жизненному циклу компонента и отложенный рендеринг.

```typescript
import { EventRef, useLazyRef } from '@dxtmisha/functional';

const keyListener = new EventRef(window, window, 'keydown', (e) => console.log(e.key));
const lazyManager = useLazyRef();
const isVisible = lazyManager.addLazyItem(elementRef);
```
