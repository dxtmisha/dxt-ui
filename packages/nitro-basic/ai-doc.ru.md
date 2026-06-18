ИНФРАСТРУКТУРНАЯ БИБЛИОТЕКА (SSR/NITRO):
Данный пакет является фундаментом для построения Server-Side Rendering (SSR) на базе Nitro и Vue 3. Он отвечает за низкоуровневую работу с заголовками (headers), хранилищами (storage), куками и маршрутизацией на стороне сервера.

1. ПРЕДНАЗНАЧЕНИЕ: Библиотека используется исключительно для инициализации и конфигурации серверной инфраструктуры приложения. Она включает в себя механизмы бутстрапа сервера (`uiBootstrapServer`), создания SSR-приложений (`uiCreateSsrApp`) и плагины для Nitro.
2. ОГРАНИЧЕНИЕ ИСПОЛЬЗОВАНИЯ: Функции и миксины из этого пакета НЕ ПРЕДНАЗНАЧЕНЫ для использования внутри обычных Vue-компонентов или прикладной логики. Все необходимые инструменты для ежедневной разработки должны импортироваться из соответствующих высокоуровневых пакетов (например, `@dxtmisha/functional` или `@dxtmisha/d1`).
3. НЕ ПОДКЛЮЧАТЬ: Избегай прямого подключения этого пакета в пользовательский интерфейс. Он отвечает за "скелет" сервера и его настройки, которые должны быть скрыты от прикладного разработчика.

Изучи этот пакет только если тебе нужно внести правки в логику жизненного цикла сервера, обработку серверных запросов или механизмы синхронизации состояния между сервером и клиентом (hydration).

=============================================================================
РУКОВОДСТВО ДЛЯ РАЗРАБОТЧИКА: ИСПОЛЬЗОВАНИЕ `@dxtmisha/nitro-basic` В КАЧЕСТВЕ БИБЛИОТЕКИ
=============================================================================

Этот раздел содержит инструкции и примеры кода для AI-моделей о том, как импортировать и использовать низкоуровневые API для серверного рендеринга (SSR), бутстрапа приложений и жизненного цикла запросов, предоставляемые этой библиотекой в серверных точках входа или плагинах.

---

### 1. Инициализация и бутстрап приложения (App Bootstrapping)

Эти функции настраивают экземпляры Vue 3 и управляют жизненным циклом выполнения на клиенте и сервере.

#### `uiCreateApp`
Создает базовый экземпляр Vue приложения, настраивает роутер и возвращает параметры конфигурации.
```typescript
import { uiCreateApp } from '@dxtmisha/nitro-basic';
import AppRoot from './App.vue';

const { app, router, options } = uiCreateApp(AppRoot, {
  appRouter: { routes: myRoutes },
});
```

#### `uiCreateClientApp`
Выполняет гидратацию (hydration) приложения на стороне клиента.
```typescript
import { uiCreateClientApp } from '@dxtmisha/nitro-basic';

// Вызывается в клиентской точке входа (например, main.ts / client.ts)
await uiCreateClientApp(app, '#app', router, options, async (appInstance) => {
  // Действия перед монтированием (например, регистрация клиентских плагинов)
});
```

#### `uiCreateServerApp`
Создает серверный контекст рендеринга, отрабатывает параметры маршрутизации, извлекает заголовки, генерирует мета-теги, hydration-данные и выполняет предварительные задачи рендеринга.
```typescript
import { uiCreateServerApp } from '@dxtmisha/nitro-basic';

// Вызывается в серверном обработчике / Nitro-запросе
const ssrResult = await uiCreateServerApp(
  app,
  nodeRequest, // Входящий запрос (Request)
  router,
  options,
  async (appInstance) => {
    // Действия перед рендерингом (например, наполнение хранилищ)
  },
  ssrContext,
  htmlTemplateBody
);

console.log(ssrResult.appHtml);        // Сгенерированная HTML-строка приложения
console.log(ssrResult.scriptsJson);    // Скрипты с данными для гидратации на клиенте
console.log(ssrResult.teleportsHtml);  // HTML-разметка для телепортов
```

---

### 2. Заголовки и мета-данные запроса (Request Headers & Metadata)

Позволяет считывать заголовки входящих сетевых запросов.

#### `useHeaders`
Компоузабл для получения заголовков входящего запроса на сервере.
```typescript
import { useHeaders } from '@dxtmisha/nitro-basic';

// Чтение конкретного заголовка
const userAgent = useHeaders('user-agent');

// Получение всего объекта Headers
const allHeaders = useHeaders();
```

#### Парсеры URL запроса
```typescript
import { getRequestHref, getRequestOrigin, getRequestUrl } from '@dxtmisha/nitro-basic';

// Возвращает полный href входящего запроса
const href = getRequestHref(request);

// Возвращает домен-источник (origin)
const origin = getRequestOrigin(request);
```

---

### 3. Инициализаторы хранилищ и состояния на сервере

Эти методы наполняют изоморфные синглтоны и контексты зависимостей данными из входящего HTTP-запроса на сервере.

```typescript
import { initApi, initCookieStorage, initServerStorage, initHeaders } from '@dxtmisha/nitro-basic';

// Вызов в серверном обработчике перед рендерингом приложения
initApi(request);            // Настраивает базовый URL для сетевых запросов
initCookieStorage(app, request); // Извлекает куки и наполняет CookieStorage
initServerStorage(app);       // Подключает изолированные синглтоны ServerStorage
initHeaders(app);            // Связывает заголовки запроса с контекстом
```

---

### 4. Вспомогательные утилиты идентификации

```typescript
import { uiBootstrapClient, uiBootstrapServer, uiId } from '@dxtmisha/nitro-basic';

// Инициализация генератора уникальных ID
uiId();

// Инициализация на сервере
uiBootstrapServer();

// Инициализация на клиенте
uiBootstrapClient();
```
