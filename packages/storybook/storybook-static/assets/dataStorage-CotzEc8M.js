import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-DB_maGql.js";import{M as a}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"@dxtmisha/functional/ru/Classes/DataStorage"}),`
`,n.jsx(e.h1,{id:"класс-datastorage",children:"Класс DataStorage"}),`
`,n.jsx(e.p,{children:"Класс для работы с браузерным localStorage и sessionStorage с автоматической сериализацией, кешированием и singleton паттерном. Предоставляет типобезопасные операции хранения с валидацией времени кеширования и автоматическим управлением префиксами."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Типобезопасное хранение"})," — полная поддержка TypeScript с дженериками для хранимых данных"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поддержка двух типов хранилища"})," — работает как с localStorage, так и с sessionStorage"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическая сериализация"})," — JSON сериализация/десериализация обрабатывается автоматически"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Валидация времени кеша"})," — опциональное истечение кеша с автоматической очисткой"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Singleton паттерн"})," — переиспользует экземпляры для одинаковых ключей хранения"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление префиксами"})," — настраиваемый префикс для всех ключей хранения (по умолчанию 'ui-storage')"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поддержка функций как значений"})," — принимает функции как значения для динамической генерации данных"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Совместимость с браузерами"})," — безопасное использование с серверным рендерингом"]}),`
`]}),`
`,n.jsx(e.h2,{id:"конфигурация",children:"Конфигурация"}),`
`,n.jsx(e.h3,{id:"static-setprefix",children:n.jsx(e.code,{children:"static setPrefix"})}),`
`,n.jsx(e.p,{children:"Устанавливает глобальный префикс для всех ключей хранения. Должен вызываться при запуске приложения."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"newPrefix: string"})," — новый префикс для ключей хранения"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { DataStorage } from '@dxtmisha/functional'

// Установить префикс для всего приложения
DataStorage.setPrefix('myapp-storage')

// Все ключи хранения теперь будут использовать этот префикс:
// 'user-settings' → 'myapp-storage__user-settings'
// По умолчанию префикс: 'ui-storage'
`})}),`
`,n.jsx(e.h2,{id:"конструктор",children:"Конструктор"}),`
`,n.jsx(e.h3,{id:"constructor",children:n.jsx(e.code,{children:"constructor"})}),`
`,n.jsx(e.p,{children:"Создаёт экземпляр DataStorage для указанного ключа. Использует singleton паттерн."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — имя ключа хранения"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isSession?: boolean"})," — использовать sessionStorage вместо localStorage (по умолчанию: false)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"DataStorage<T>"})," — экземпляр класса (или существующий из кеша)"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Экземпляр localStorage
const userPrefs = new DataStorage('user-preferences')

// Экземпляр sessionStorage
const tempData = new DataStorage('temp-data', true)

// Поведение singleton
const sameInstance = new DataStorage('user-preferences')
console.log(userPrefs === sameInstance) // true
`})}),`
`,n.jsx(e.h2,{id:"операции-с-данными",children:"Операции с данными"}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Получает данные из хранилища с опциональным значением по умолчанию и валидацией кеша."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"defaultValue?: T | (() => T)"})," — значение по умолчанию или функция, если данные не найдены (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cache?: number"})," — время кеширования в ",n.jsx(e.strong,{children:"секундах"})," для валидации (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"T | undefined"})," — сохранённые данные, значение по умолчанию или undefined"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const settings = new DataStorage('app-settings')

// Получить данные без значения по умолчанию
const theme = settings.get()
console.log(theme) // undefined если данные не сохранены

// Получить со значением по умолчанию
const language = settings.get('ru')
console.log(language) // 'ru' если нет сохранённых данных, или сохранённое значение

// Получить с функцией по умолчанию
const config = settings.get(() => ({
  theme: 'dark',
  notifications: true,
  created: Date.now()
}))

// Получить с валидацией кеша (600 секунд = 10 минут)
const cachedData = settings.get(null, 600)
// Возвращает undefined если данные старше 10 минут
// Если кеш валиден - возвращает сохранённые данные
`})}),`
`,n.jsx(e.h3,{id:"set",children:n.jsx(e.code,{children:"set"})}),`
`,n.jsx(e.p,{children:"Сохраняет данные в хранилище с автоматической сериализацией."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: T | (() => T)"})," — значение для сохранения или функция, возвращающая значение (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"T | undefined"})," — сохранённое значение"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const userStorage = new DataStorage('user-data')

// Сохранить простое значение
const stored = userStorage.set({ name: 'Иван', age: 30 })
console.log(stored) // { name: 'Иван', age: 30 }

// Сохранить с функцией
userStorage.set(() => ({
  timestamp: Date.now(),
  sessionId: Math.random().toString(36)
}))

// Сохранить undefined для очистки
userStorage.set(undefined) // Удаляет из хранилища
`})}),`
`,n.jsx(e.h3,{id:"remove",children:n.jsx(e.code,{children:"remove"})}),`
`,n.jsx(e.p,{children:"Удаляет данные из хранилища."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — экземпляр DataStorage для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const userStorage = new DataStorage('user-data')

// Сначала установить данные
userStorage.set({ name: 'Иван', preferences: { theme: 'dark' } })
console.log(userStorage.get()) // { name: 'Иван', preferences: { theme: 'dark' } }

// Удаление
userStorage.remove()
console.log(userStorage.get()) // undefined

// Цепочка вызовов
userStorage
  .set({ temp: 'data' })
  .remove() // Удаляет только что сохранённые данные
`})}),`
`,n.jsx(e.h3,{id:"update",children:n.jsx(e.code,{children:"update"})}),`
`,n.jsx(e.p,{children:"Обновляет данные из хранилища, перечитывая их заново."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — экземпляр DataStorage для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const storage = new DataStorage('shared-data')

// Установить данные
storage.set({ value: 'initial' })
console.log(storage.get()) // { value: 'initial' }

// Данные изменились в другой вкладке/окне браузера
// или напрямую через localStorage.setItem()

// Обновить данные из хранилища
storage.update()
console.log(storage.get()) // Получит актуальные данные из хранилища

// Цепочка вызовов
storage.update().get() // Обновить и получить свежие данные
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"настройки-пользователя",children:"Настройки пользователя"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const settings = new DataStorage('user-settings')

// Получить с значением по умолчанию
const theme = settings.get(() => 'light')
console.log(theme) // 'light' или сохранённое значение

// Сохранить новое значение
settings.set('dark')

// Удалить настройки
settings.remove()
`})}),`
`,n.jsx(e.h3,{id:"кеш-данных-с-ttl",children:"Кеш данных с TTL"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`async function fetchWithCache(url, cacheDuration = 300) {
  const storage = new DataStorage(\`api_\${url}\`)

  // Попытка получить из кеша (cacheDuration в секундах)
  const cached = storage.get(undefined, cacheDuration)
  if (cached) return cached

  // Загрузка свежих данных
  const response = await fetch(url)
  const data = await response.json()

  // Сохранение в кеш
  storage.set(data)
  return data
}

// Использование
const users = await fetchWithCache('/api/users', 600) // Кеш на 10 минут
`})}),`
`,n.jsx(e.p,{children:"Класс DataStorage предоставляет единый интерфейс для работы с браузерными хранилищами, обеспечивая типобезопасность, автоматическую сериализацию и гибкое управление временем жизни данных с поддержкой singleton паттерна для эффективного использования памяти."})]})}function g(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{g as default};
