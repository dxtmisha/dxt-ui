import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-C8vOrmRQ.js";import{M as t}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function s(c){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/functional/ru/Classes/Cache"}),`
`,e.jsx(n.h1,{id:"класс-cache",children:"Класс Cache"}),`
`,e.jsx(n.p,{children:"Высокоуровневый класс для управления множественными кешированными значениями с использованием экземпляров CacheItem внутри. Предоставляет простой интерфейс для кеширования с автоматическим созданием и управлением CacheItem, интеллектуальной инвалидацией на основе сравнения и синхронными/асинхронными операциями."}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Управление множественными кешами"})," — управляет коллекцией именованных записей кеша с использованием экземпляров CacheItem"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматическое создание CacheItem"})," — создаёт и управляет экземплярами CacheItem внутренне для каждого имени кеша"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Инвалидация на основе сравнения"})," — автоматическая инвалидация кеша при изменении параметров сравнения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Синхронный и асинхронный режимы"})," — как синхронное, так и асинхронное получение данных"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Типобезопасность"})," — полная поддержка TypeScript с дженериками для каждой записи кеша"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Эффективное использование памяти"})," — переиспользует экземпляры CacheItem для одинаковых имён кеша"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Простой интерфейс"})," — абстрагирует сложность CacheItem за удобными методами"]}),`
`]}),`
`,e.jsx(n.h2,{id:"основное-использование",children:"Основное использование"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsx(n.p,{children:"Синхронно получает кешированные данные или выполняет callback для генерации и кеширования новых данных."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — уникальное имя/ключ кеша для этой записи кеша"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: () => T"})," — функция для выполнения при промахе кеша или инвалидации"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"comparison?: any[]"})," — массив значений для сравнения при инвалидации кеша (опционально)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"T"})," — кешированные данные или результат выполнения callback"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Cache } from '@dxtmisha/functional'

const cache = new Cache()

// Простое кеширование без сравнения
const userData = cache.get('user-profile', () => {
  console.log('Вычисление профиля пользователя...')
  return { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', computed: Date.now() }
})

// Последующие вызовы возвращают кешированные данные без выполнения callback
const cachedData = cache.get('user-profile', () => {
  console.log('Это не выполнится')
  return { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', computed: Date.now() }
})
// Возвращает точно тот же кешированный объект

// Другое имя кеша создаёт отдельный CacheItem
const settingsData = cache.get('user-settings', () => {
  console.log('Загрузка настроек пользователя...')
  return { theme: 'dark', language: 'ru' }
})
`})}),`
`,e.jsx(n.h3,{id:"getasync",children:e.jsx(n.code,{children:"getAsync"})}),`
`,e.jsx(n.p,{children:"Асинхронно получает кешированные данные или выполняет асинхронный callback для генерации новых данных."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — уникальное имя/ключ кеша для этой записи кеша"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: () => T | Promise<T>"})," — функция для выполнения при промахе кеша или инвалидации"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"comparison?: any[]"})," — массив значений для сравнения при инвалидации кеша (опционально)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Promise<T>"})," — промис, разрешающийся в кешированные данные или результат callback"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Асинхронное кеширование с API вызовами
const userData = await cache.getAsync('api-user-1', async () => {
  console.log('Запрос к API...')
  const response = await fetch('/api/user/1')
  return await response.json()
})

// Кешируется при последующих вызовах (переиспользуется тот же экземпляр CacheItem)
const cachedUser = await cache.getAsync('api-user-1', async () => {
  console.log('Это не выполнится')
  return await fetch('/api/user/1').then(r => r.json())
})
// Возвращает кешированные данные без API вызова

// Другое имя кеша создаёт новый CacheItem
const userPosts = await cache.getAsync('api-user-posts-1', async () => {
  console.log('Получение постов пользователя...')
  const response = await fetch('/api/user/1/posts')
  return await response.json()
})
`})}),`
`,e.jsx(n.h2,{id:"инвалидация-кеша-с-помощью-сравнения",children:"Инвалидация кеша с помощью сравнения"}),`
`,e.jsx(n.p,{children:"Каждая именованная запись кеша поддерживает свой собственный CacheItem с независимой инвалидацией:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const cache = new Cache()

// Кеш данных пользователя с отслеживанием зависимостей
let userId = 1
let includeProfile = true

const getUserData = (id, withProfile) => cache.get(
  'user-data', // Одно имя кеша переиспользует тот же CacheItem
  () => {
    console.log(\`Загрузка пользователя \${id}, профиль: \${withProfile}\`)
    return {
      id,
      name: \`Пользователь \${id}\`,
      profile: withProfile ? { bio: 'Биография пользователя', avatar: 'avatar.jpg' } : null
    }
  },
  [id, withProfile] // CacheItem инвалидируется при изменении любого значения
)

console.log(getUserData(1, true)) // Создаёт CacheItem, выполняет callback
console.log(getUserData(1, true)) // Переиспользует тот же CacheItem, возвращает кешированные данные

// Изменение зависимости - тот же CacheItem инвалидируется и перегенерируется
userId = 2
console.log(getUserData(2, true)) // Тот же CacheItem, инвалидирован, выполняет callback

// Другое имя кеша создаёт отдельный CacheItem
const getUserSettings = (id) => cache.get(
  'user-settings', // Другое имя = другой CacheItem
  () => {
    console.log(\`Загрузка настроек для пользователя \${id}\`)
    return { theme: 'dark', notifications: true }
  },
  [id]
)

console.log(getUserSettings(1)) // Создаёт новый экземпляр CacheItem
`})}),`
`,e.jsx(n.h2,{id:"внутреннее-управление-cacheitem",children:"Внутреннее управление CacheItem"}),`
`,e.jsx(n.p,{children:"Класс Cache автоматически управляет жизненным циклом CacheItem:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const cache = new Cache()

// Каждое уникальное имя кеша получает свой экземпляр CacheItem
cache.get('cache-1', () => 'data-1') // Создаёт CacheItem внутренне
cache.get('cache-2', () => 'data-2') // Создаёт другой CacheItem
cache.get('cache-1', () => 'data-1-updated') // Переиспользует существующий CacheItem

// Экземпляры Cache полностью изолированы
const cache2 = new Cache()
cache2.get('cache-1', () => 'different-data') // Независимый CacheItem в cache2

// Проверка изоляции
console.log(cache.get('cache-1', () => 'fallback')) // 'data-1'
console.log(cache2.get('cache-1', () => 'fallback')) // 'different-data'
`})})]})}function j(c={}){const{wrapper:n}={...a(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(s,{...c})}):s(c)}export{j as default};
