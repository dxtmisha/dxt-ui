# Справочник @dxtmisha/nitro-basic

Фундамент для Server-Side Rendering (SSR) на базе Nitro и Vue 3. Полные сигнатуры, типы и экспортируемые методы смотрите в [ai-types.md](file:///Volumes/T7/Code/dxt-ui/packages/nitro-basic/ai-types.md).

---

## Архитектурные правила

1. **Предназначение**: Используется *исключительно* для инициализации и конфигурации серверной инфраструктуры (бутстрап сервера, Nitro-плагины, SSR-рендеринг).
2. **Ограничение**: **Запрещено** импортировать или вызывать функции/миксины этого пакета внутри обычных Vue-компонентов (SFC) или прикладной логики. Для повседневной разработки используйте высокоуровневые инструменты из `@dxtmisha/functional`.
3. **Область применения**: Пакет отвечает за скрытый «скелет» сервера и не должен подключаться к UI напрямую.

---

## Основной цикл инициализации

### 1. Бутстрап приложения (Точки входа клиента и сервера)

```typescript
import { uiCreateApp, uiCreateClientApp, uiCreateServerApp } from '@dxtmisha/nitro-basic';
import AppRoot from './App.vue';

// 1. Создание базового приложения (общее)
const { app, router, options } = uiCreateApp(AppRoot, { appRouter: { routes } });

// 2. Клиентская точка входа (client.ts)
await uiCreateClientApp(app, '#app', router, options, async (appInstance) => { /* операции перед монтированием */ });

// 3. Серверный обработчик запросов (Nitro)
const ssr = await uiCreateServerApp(app, request, router, options, async (appInstance) => { /* операции перед рендером */ }, context, htmlTemplate);
// ssr.appHtml, ssr.scriptsJson, ssr.teleportsHtml
```

### 2. Контекст запроса и инициализация на сервере

```typescript
import { useHeaders, getRequestHref, getRequestOrigin, initApi, initCookieStorage, initServerStorage, initHeaders } from '@dxtmisha/nitro-basic';

// Вызывается в серверном обработчике перед рендерингом:
initApi(request);
initCookieStorage(app, request);
initServerStorage(app);
initHeaders(app);

// Получение метаданных запроса на сервере:
const userAgent = useHeaders('user-agent');
const allHeaders = useHeaders();
const href = getRequestHref(request);
const origin = getRequestOrigin(request);
```

### 3. Утилиты бутстрапа и идентификации

```typescript
import { uiBootstrapClient, uiBootstrapServer, uiId } from '@dxtmisha/nitro-basic';

uiId(); // Инициализация генератора ID элементов
uiBootstrapServer(); // Инициализация на стороне сервера
uiBootstrapClient(); // Инициализация на стороне клиента
```
