import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/ApiCache - Кэширование ответов API`}),`
`,(0,c.jsx)(t.h1,{id:`класс-apicache`,children:`Класс ApiCache`}),`
`,(0,c.jsx)(t.p,{children:`Класс для кэширования ответов API. Он позволяет сохранять результаты запросов в памяти или во внешнем хранилище, предотвращая избыточные сетевые вызовы в течение заданного периода. В текущей реализации кэширование по умолчанию активно только на стороне сервера (SSR) для ускорения рендеринга и снижения нагрузки на API при одновременных запросах.`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ApiCache`}),` является `,(0,c.jsx)(t.strong,{children:`вспомогательным классом`}),`, предназначенным для низкоуровневого управления кэшем. В большинстве случаев рекомендуется взаимодействовать с кэшированием через параметр `,(0,c.jsx)(t.code,{children:`cache`}),` в `,(0,c.jsx)(t.code,{children:`ApiInstance`}),` или глобальный объект `,(0,c.jsx)(t.code,{children:`Api`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`основные-возможности`,children:`Основные возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое управление ключами`}),` — генерирует уникальные ключи кэша на основе параметров запроса (путь, метод, тело запроса и т.д.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Гибкий TTL (Time To Live)`}),` — позволяет устанавливать время хранения для каждого запроса индивидуально или использовать значение по умолчанию (24 часа).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Оптимизация SSR`}),` — предотвращает ненужные вызовы API в среде Node.js. По умолчанию отключено в браузере (работает только если явно включено через параметры конфигурации).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка слушателей`}),` — возможность подключения внешнего хранилища (например, Redis, Nitro Storage) через функции обратного вызова.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Фоновая очистка`}),` — автоматически удаляет устаревшие записи при обращении к кэшу.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsx)(t.p,{children:`Методы для управления записями кэша.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get<T>(key: string): Promise<T | undefined>`}),` — Извлекает значение из кэша.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByFetch<T>(fetch: ApiFetch): Promise<T | undefined>`}),` — Извлекает значение, используя опции запроса как источник ключа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set<T>(key: string, value: T, age?: number): Promise<void>`}),` — Сохраняет значение в кэше.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setByFetch<T>(fetch: ApiFetch, value: T): Promise<void>`}),` — Сохраняет значение на основе опций запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`remove(key: string): Promise<void>`}),` — Удаляет запись вручную.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(getListener, setListener, removeListener, cacheStepAgeClearOld?): void`}),` — Настраивает кэш слушателями хранилища.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset(): void`}),` — Очищает элементы в памяти и отключает слушателей.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы-данных`,children:`Типы данных`}),`
`,(0,c.jsx)(t.h4,{id:`apicacheitemt`,children:(0,c.jsx)(t.code,{children:`ApiCacheItem<T>`})}),`
`,(0,c.jsx)(t.p,{children:`Структура кэшированной записи.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Значение данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`age: number`}),` — TTL в секундах.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cacheAge: number`}),` — Метка времени создания (мс).`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`apicachelist`,children:(0,c.jsx)(t.code,{children:`ApiCacheList`})}),`
`,(0,c.jsx)(t.p,{children:`Внутренний словарь для резервного хранения в оперативной памяти.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[key: string]: ApiCacheItem`}),` — Пары ключ-значение кэшированных элементов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация-и-внешнее-хранилище`,children:`Инициализация и внешнее хранилище`}),`
`,(0,c.jsxs)(t.p,{children:[`По умолчанию `,(0,c.jsx)(t.code,{children:`ApiCache`}),` сохраняет записи в оперативной памяти (RAM) процесса и работает только на стороне сервера. Хотя это очень быстро, в продуктовой среде такой подход имеет ограничения:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синхронизация в кластере`}),`: В многоэкземплярной конфигурации кэши не разделяются между процессами.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Перезагрузка процесса`}),`: Память очищается при каждом перезапуск сервера или «холодном старте» серверных функций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Лимиты памяти`}),`: Хранение больших объемов данных в RAM может привести к чрезмерному потреблению ресурсов.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Для решения этих задач необходимо инициализировать `,(0,c.jsx)(t.code,{children:`ApiCache`}),` с помощью метода `,(0,c.jsx)(t.code,{children:`init`}),`, предоставив слушателей (listeners) для связи с внешним механизмом хранения.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Важно: Метод `,(0,c.jsx)(t.code,{children:`ApiCache.init()`}),` должен быть вызван на этапе запуска приложения (до первого API-запроса), чтобы гарантировать правильную конфигурацию кэша.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`nodejs-произвольное-хранилище`,children:`Node.js (Произвольное хранилище)`}),`
`,(0,c.jsx)(t.p,{children:`В стандартной среде Node.js вы можете использовать слушателей для взаимодействия с централизованной базой данных или персистентным кэшем, таким как Redis.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ApiCache } from '@dxtmisha/functional-basic'

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
`,(0,c.jsx)(t.h3,{id:`nuxt--nitro`,children:`Nuxt / Nitro`}),`
`,(0,c.jsxs)(t.p,{children:[`В Nuxt/Nitro рекомендуемый подход — использование встроенного хелпера `,(0,c.jsx)(t.code,{children:`useStorage`}),` внутри серверного плагина. Это позволяет задействовать Redis, файловую систему или любой другой драйвер, поддерживаемый Nitro.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// server/plugins/api-cache.ts
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};