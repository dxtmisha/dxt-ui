Это главная функциональная библиотека для среды Vue (@dxtmisha/functional). Здесь собраны утилиты, composables и реактивные классы, заточенные под Vue.

ПРАВИЛА ИСПОЛЬЗОВАНИЯ:
1. При разработке на Vue всегда отдавайте приоритет этой библиотеке для работы с логикой и composables, а не `@dxtmisha/functional-basic`.
2. Библиотека оборачивает базовую нереактивную логику в систему реактивности Vue. Если нужная функция или класс есть здесь, они имеют абсолютный приоритет.
3. Импортируйте утилиты из `@dxtmisha/functional` для реактивного поведения UI, composables и управления состоянием.

РАБОТА С API И СОСТОЯНИЕМ (useApi / executeUse):
Для работы с сетевыми запросами в библиотеке предусмотрен набор хуков: `useApiGet`, `useApiPost`, `useApiPut`, `useApiDelete`, `useApiRequest`, `useApiRef`, `useApiAsyncRef`, `useApiManagementRef`, `useApiManagementAsyncRef`.
Строго соблюдайте следующие правила их применения:

1. НЕ ВЫЗЫВАЙТЕ эти хуки напрямую в компонентах (SFC).
2. Выносите всю настройку и вызовы `useApi*` в ОТДЕЛЬНЫЕ ФАЙЛЫ (сервисы / хранилища).
3. Оборачивайте настройку API в фабрику `executeUse` (а именно: `executeUseGlobal`, `executeUseProvide` или `executeUseLocal` из `src/functions/executeUse.ts`). Это гарантирует создание синглтонов (одна точка доступа) и предотвращает создание дубликатов запросов и хранилищ состояния.
4. Выполняйте любую дополнительную обработку запросов (например: маппинг данных, подготовка структуры для отображения скелетона перед загрузкой формы) в этом же файле, внутри коллбэка `executeUse`, а наружу возвращайте уже полностью готовый набор данных и методов.
   *Пример правильного использования:*
   ```ts
   import { executeUseGlobal } from '@dxtmisha/functional';
   import { useApiManagementRef } from '@dxtmisha/functional';

   export const useUserManagement = executeUseGlobal(() => {
     return useApiManagementRef(
       { path: '/api/users' },                 // GET setup
       { date: (v) => new Date(v).toLocaleString() }, // Formatters
       { columns: ['name', 'email'] },         // Search
       { path: '/api/users' },                 // POST
       { path: (o) => `/api/users/${o.id}` },  // PUT
       { path: (o) => `/api/users/${o.id}` }   // DELETE
     );
     // Здесь же можно добавить логику подготовки скелетонов, форматирования и т.д.
     // и затем вернуть расширенный объект
   });
   ```
5. В самом Vue-компоненте просто импортируйте и вызывайте созданный синглтон-хук: `const { list, loading, sendPost } = useUserManagement();`

ВЫБОР СТРАТЕГИИ executeUse:
1. `executeUseLocal` (ПРЕДПОЧТИТЕЛЬНО):
   - Когда использовать: Для большинства API-запросов и сервисов.
   - Особенности: Работает «лениво» (lazy) — инициализируется только в момент первого вызова. Экземпляр сохраняется до конца сессии. Это позволяет не перегружать старт приложения лишними запросами.
2. `executeUseGlobal`:
   - Когда использовать: Когда данные или сервис должны быть загружены/инициализированы СРАЗУ при старте приложения (например: критические настройки, SDK).
   - Особенности: Создает один экземпляр на всё приложение. Все глобальные синглтоны инициализируются принудительно через `executeUseGlobalInit()`.
3. `executeUseProvide`:
   - Когда использовать: Для состояния, разделяемого между родителем и группой дочерних компонентов (например: табы, сложные формы с подкомпонентами).
   - Особенности: Использует provide/inject. Первый компонент в дереве, вызвавший хук, становится «провайдером», остальные — потребителями.

=============================================================================
РУКОВОДСТВО ДЛЯ РАЗРАБОТЧИКА: ИСПОЛЬЗОВАНИЕ `@dxtmisha/functional` В КАЧЕСТВЕ БИБЛИОТЕКИ
=============================================================================

Этот раздел содержит инструкции и примеры кода для AI-моделей о том, как импортировать и использовать Vue-специфичные реактивные классы, хуки (composables) и утилиты, предоставляемые этой библиотекой в приложениях Vue 3 / Nuxt.

---

### 1. Реактивная работа с хранилищами (Storage & State)

Данные хуки связывают браузерные хранилища с реактивными объектами `Ref` во Vue, обеспечивая мгновенную двустороннюю синхронизацию.

#### `useStorageRef` (localStorage)
Реактивно связывает ключ в `localStorage`.
```typescript
import { useStorageRef } from '@dxtmisha/functional';

// Связывание с ключом и указание значения по умолчанию
const theme = useStorageRef<'light' | 'dark'>('theme_key', 'light');

// Запись значения реактивно обновит localStorage
theme.value = 'dark';
```

#### `useSessionRef` (sessionStorage) & `useCookieRef` (Cookies)
```typescript
import { useSessionRef, useCookieRef } from '@dxtmisha/functional';

// sessionStorage
const step = useSessionRef<number>('form_step', 1);

// CookieStorage
const token = useCookieRef<string>('auth_token', '', { secure: true });
```

#### `useBroadcastValueRef` (Синхронизация между вкладками)
Позволяет реактивно синхронизировать состояние между разными вкладками браузера в рамках одного домена.
```typescript
import { useBroadcastValueRef } from '@dxtmisha/functional';

// Синхронизирует ref с другими вкладками через BroadcastChannel API
const syncState = useBroadcastValueRef<string>('active_channel', 'idle');
```

#### `useHashRef` (Связывание с URL Hash)
Связывает состояние с хеш-параметрами в адресной строке.
```typescript
import { useHashRef } from '@dxtmisha/functional';

const hashPage = useHashRef<string>('page', 'home');
```

---

### 2. Реактивная локализация и геологика (`GeoRef`, `GeoIntlRef`, `GeoFlagRef`, `useTranslateRef`)

Предоставляет реактивные обертки для инструментов интернационализации.

#### `GeoRef` & `GeoIntlRef`
```typescript
import { GeoRef, useGeoIntlRef } from '@dxtmisha/functional';

// Реактивное отслеживание гео-данных пользователя
const currentCountry = GeoRef.getCountry(); // ComputedRef<string>

// Реактивный хук локализации
const intl = useGeoIntlRef();
const formattedPrice = intl.currency(150, 'EUR'); // ComputedRef<string>
```

#### `useTranslateRef`
Реактивная загрузка и получение переводных токенов.
```typescript
import { useTranslateRef } from '@dxtmisha/functional';

const translations = useTranslateRef(['global.save', 'global.cancel']);
// Возвращает: ShallowRef<Record<string, string>> с загруженными переводами
```

---

### 3. SEO и мета-теги

#### `useMeta`
Управление мета-данными страницы. При вызове сеттеров теги в заголовке страницы обновляются реактивно.
```typescript
import { useMeta } from '@dxtmisha/functional';

const metaManager = useMeta();
metaManager.setTitle('Страница продукта');
metaManager.setDescription('Детальное описание и характеристики.');
```

#### `ScrollbarWidthRef`
Служит для реактивного отслеживания ширины скроллбара во избежание скачков верстки.
```typescript
import { ScrollbarWidthRef } from '@dxtmisha/functional';

const scrollbar = new ScrollbarWidthRef();
const width = scrollbar.width; // Ref<number>
const hasScroll = scrollbar.is; // ComputedRef<boolean>
```

---

### 4. Продвинутые помощники реактивности

#### `computedAsync`
Создает computed-свойство, вычисляемое асинхронно. Полезно для выполнения запросов или тяжелых асинхронных вычислений внутри геттера.
```typescript
import { computedAsync } from '@dxtmisha/functional';

// Выполняет асинхронную операцию и возвращает реактивный результат
const asyncData = computedAsync(async () => {
  return await fetchSomeData(activeId.value);
}, 'initial_loading_value');
```

#### `computedEternity`
Асинхронно вычисляет значение один раз при инициализации и кэширует его навсегда, если не инициировано принудительное обновление.
```typescript
import { computedEternity } from '@dxtmisha/functional';

const cachedData = computedEternity(async () => {
  return await fetchStaticData();
}, 'loading_state');
```

---

### 5. Поиск и управление списками

#### `ListDataRef`
Оркестратор состояния для списков, управляющий выделением элементов, группами, сопоставлением ключей и клавиатурной навигацией.
```typescript
import { ListDataRef } from '@dxtmisha/functional';

const items = ref([
  { value: 'id1', label: 'Опция 1' },
  { value: 'id2', label: 'Опция 2' },
]);
const selectedId = ref('id1');

const listData = new ListDataRef(items, selectedId);
const isSelected = listData.isSelected; // ComputedRef<boolean>
const nextItem = listData.getSelectedNext(); // возвращает следующий выбранный элемент
```

#### `useSearchRef`
Реактивно осуществляет текстовый поиск по массиву объектов с автоматической задержкой (debounce) и подсветкой совпадений.
```typescript
import { useSearchRef } from '@dxtmisha/functional';

const query = ref('опция');
const { listSearch, loading, length } = useSearchRef(items, ['label'], query);
```

---

### 6. DOM и ленивый рендеринг (Lazy Loading)

#### `EventRef`
Реактивный обработчик событий DOM. Инициализирует и удаляет слушатели событий строго в соответствии с жизненным циклом Vue-компонента (монтирование/деструктуризация).
```typescript
import { EventRef } from '@dxtmisha/functional';

// Событие автоматически привязывается при setup и удаляется при unmounted
const keyListener = new EventRef(window, window, 'keydown', (event) => {
  console.log('Нажата клавиша', event.key);
});
```

#### `useLazyRef`
Реактивный менеджер на базе IntersectionObserver для ленивого отображения элементов при прокрутке.
```typescript
import { useLazyRef } from '@dxtmisha/functional';

const lazyManager = useLazyRef();
const isVisible = lazyManager.addLazyItem(elementRef); // ShallowRef<boolean>
```
