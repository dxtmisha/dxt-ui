# @dxtmisha/nitro-basic

Базовый пакет для интеграции `@dxtmisha/functional-basic` с Nitro.

## Установка

```bash
npm install @dxtmisha/nitro-basic
```

## Функции

### `initBasic(nitroApp: NitroApp, config?: NitroAppBasicConfig)`

Инициализирует базовые настройки для работы с `functional-basic` в Nitro окружении.

**Параметры:**
- `nitroApp` — экземпляр NitroApp
- `config` — конфигурация

### `initServerStorage()`

Инициализирует `ServerStorage` для Nitro, используя контекст запроса для изоляции данных между запросами.

### `initApiCache(storageKey?: string, cacheStepAgeClearOld?: number)`

Инициализирует `ApiCache` для Nitro с поддержкой встроенного хранилища Nitro (Redis, файловая система и др.).

**Параметры:**
- `storageKey` — префикс ключа для хранилища кэша (по умолчанию: `'Ui_ApiCache'`)
- `cacheStepAgeClearOld` — порог срабатывания фоновой очистки старого кэша

### `initCookieStorage(config?: NitroAppBasicConfig['cookie'])`

Инициализирует `CookieStorage` для Nitro с поддержкой чтения/записи cookie через заголовки запроса/ответа.

**Параметры:**
- `config` — конфигурация cookie
  - `age` — время жизни cookie в секундах (по умолчанию: 7 дней)
  - `sameSite` — политика SameSite (по умолчанию: `'strict'`)

### `basicPlugin`

Готовый Nitro плагин для базовой инициализации.

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@dxtmisha/nitro-basic']
})
```

Или вручную:

```typescript
// server/plugins/basic.ts
import { basicPlugin } from '@dxtmisha/nitro-basic'

export default basicPlugin
```

## Использование

После инициализации все функции `@dxtmisha/functional-basic` будут работать корректно в Nitro окружении с поддержкой:
- Изоляции данных между запросами (SSR)
- Кэширования API ответов
- Управления cookie через заголовки
- Гидратации данных на клиенте

## Конфигурация

### NitroAppBasicConfig

```typescript
interface NitroAppBasicConfig {
  api?: {
    cacheStorageKey?: string
    cacheStepAgeClearOld?: number
  }
  cookie?: {
    age?: number
    sameSite?: 'strict' | 'lax'
  }
}
```

### Пример конфигурации

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@dxtmisha/nitro-basic']
})

// server/plugins/config.ts
import { initBasic } from '@dxtmisha/nitro-basic'

export default defineNitroPlugin((nitroApp) => {
  initBasic(nitroApp, {
    api: {
      cacheStorageKey: 'my-app-cache',
      cacheStepAgeClearOld: 10000
    },
    cookie: {
      age: 30 * 24 * 60 * 60, // 30 дней
      sameSite: 'lax'
    }
  })
})
```
