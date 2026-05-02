import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/ApiCache - Кэширование ответов API`}),`
`,(0,c.jsx)(n.h1,{id:`класс-apicache`,children:`Класс ApiCache`}),`
`,(0,c.jsx)(n.p,{children:`Класс для кэширования ответов API. Он позволяет сохранять результаты запросов в памяти или во внешнем хранилище, предотвращая избыточные сетевые вызовы в течение заданного периода. В текущей реализации кэширование по умолчанию активно только на стороне сервера (SSR) для ускорения рендеринга и снижения нагрузки на API при одновременных запросах.`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiCache`}),` является `,(0,c.jsx)(n.strong,{children:`вспомогательным классом`}),`, предназначенным для низкоуровневого управления кэшем. В большинстве случаев рекомендуется взаимодействовать с кэшированием через параметр `,(0,c.jsx)(n.code,{children:`cache`}),` в `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` или глобальный объект `,(0,c.jsx)(n.code,{children:`Api`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`основные-возможности`,children:`Основные возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое управление ключами`}),` — генерирует уникальные ключи кэша на основе параметров запроса (путь, метод, тело запроса и т.д.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкий TTL (Time To Live)`}),` — позволяет устанавливать время хранения для каждого запроса индивидуально или использовать значение по умолчанию (24 часа).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Оптимизация SSR`}),` — предотвращает ненужные вызовы API в среде Node.js. По умолчанию отключено в браузере (работает только если явно включено через параметры конфигурации).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка слушателей`}),` — возможность подключения внешнего хранилища (например, Redis, Nitro Storage) через функции обратного вызова.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Фоновая очистка`}),` — автоматически удаляет устаревшие записи при обращении к кэшу.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsx)(n.p,{children:`Методы для управления записями кэша.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get<T>(key: string): Promise<T | undefined>`}),` — Извлекает значение из кэша.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByFetch<T>(fetch: ApiFetch): Promise<T | undefined>`}),` — Извлекает значение, используя опции запроса как источник ключа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set<T>(key: string, value: T, age?: number): Promise<void>`}),` — Сохраняет значение в кэше.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setByFetch<T>(fetch: ApiFetch, value: T): Promise<void>`}),` — Сохраняет значение на основе опций запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(key: string): Promise<void>`}),` — Удаляет запись вручную.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(getListener, setListener, removeListener, cacheStepAgeClearOld?): void`}),` — Настраивает кэш слушателями хранилища.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): void`}),` — Очищает элементы в памяти и отключает слушателей.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы-данных`,children:`Типы данных`}),`
`,(0,c.jsx)(n.h4,{id:`apicacheitemt`,children:(0,c.jsx)(n.code,{children:`ApiCacheItem<T>`})}),`
`,(0,c.jsx)(n.p,{children:`Структура кэшированной записи.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Значение данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`age: number`}),` — TTL в секундах.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cacheAge: number`}),` — Метка времени создания (мс).`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`apicachelist`,children:(0,c.jsx)(n.code,{children:`ApiCacheList`})}),`
`,(0,c.jsx)(n.p,{children:`Внутренний словарь для резервного хранения в оперативной памяти.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[key: string]: ApiCacheItem`}),` — Пары ключ-значение кэшированных элементов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация-и-внешнее-хранилище`,children:`Инициализация и внешнее хранилище`}),`
`,(0,c.jsxs)(n.p,{children:[`По умолчанию `,(0,c.jsx)(n.code,{children:`ApiCache`}),` сохраняет записи в оперативной памяти (RAM) процесса и работает только на стороне сервера. Хотя это очень быстро, в продуктовой среде такой подход имеет ограничения:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синхронизация в кластере`}),`: В многоэкземплярной конфигурации кэши не разделяются между процессами.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Перезагрузка процесса`}),`: Память очищается при каждом перезапуск сервера или «холодном старте» серверных функций.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Лимиты памяти`}),`: Хранение больших объемов данных в RAM может привести к чрезмерному потреблению ресурсов.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Для решения этих задач необходимо инициализировать `,(0,c.jsx)(n.code,{children:`ApiCache`}),` с помощью метода `,(0,c.jsx)(n.code,{children:`init`}),`, предоставив слушателей (listeners) для связи с внешним механизмом хранения.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Важно: Метод `,(0,c.jsx)(n.code,{children:`ApiCache.init()`}),` должен быть вызван на этапе запуска приложения (до первого API-запроса), чтобы гарантировать правильную конфигурацию кэша.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`nodejs-произвольное-хранилище`,children:`Node.js (Произвольное хранилище)`}),`
`,(0,c.jsx)(n.p,{children:`В стандартной среде Node.js вы можете использовать слушателей для взаимодействия с централизованной базой данных или персистентным кэшем, таким как Redis.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiCache } from '@dxtmisha/functional-basic'

// Конфигурация со слушателями хранилища
ApiCache.init(
  // 1. Получение данных из внешнего хранилища
  async (key) => await myExternalStorage.get(key),
  
  // 2. Сохранение данных во внешнее хранилище
  async (key, value) => {
    await myExternalStorage.put(key, value)
    return true // Возвращаем true для подтверждения внешнего сохранения
  },
  
  // 3. Удаление данных из внешнего хранилища
  async (key) => {
    await myExternalStorage.delete(key)
    return true
  },
  
  // 4. Опционально: порог срабатывания фоновой очистки
  16384
)
`})}),`
`,(0,c.jsx)(n.h3,{id:`nuxt--nitro`,children:`Nuxt / Nitro`}),`
`,(0,c.jsxs)(n.p,{children:[`В Nuxt/Nitro рекомендуемый подход — использование встроенного хелпера `,(0,c.jsx)(n.code,{children:`useStorage`}),` внутри серверного плагина. Это позволяет задействовать Redis, файловую систему или любой другой драйвер, поддерживаемый Nitro.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// server/plugins/api-cache.ts
import { ApiCache } from '@dxtmisha/functional-basic'

export default defineNitroPlugin(() => {
  const storage = useStorage('cache') // Регион кэша Nitro

  ApiCache.init(
    async (key) => await storage.getItem(key),
    async (key, value) => {
      await storage.setItem(key, value)
      return true
    },
    async (key) => {
      await storage.removeItem(key)
      return true
    }
  )
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};