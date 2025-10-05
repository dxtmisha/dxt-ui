import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-DB_maGql.js";import{M as r}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function a(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/functional/ru/Composables/useStorageRef"}),`
`,e.jsx(n.h1,{id:"композабл-usestorageref",children:"Композабл useStorageRef"}),`
`,e.jsx(n.p,{children:"Композабл для создания реактивной переменной, синхронизированной с localStorage. Автоматически управляет чтением и записью значений в локальное хранилище браузера с поддержкой кеширования, синхронизации между вкладками и singleton паттерна для эффективного переиспользования."}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Двусторонняя синхронизация"})," — автоматическая синхронизация между ref и localStorage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматическое сохранение"})," — изменения ref автоматически сохраняются в localStorage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Кеширование с TTL"})," — опциональное время жизни кеша в секундах"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Синхронизация между вкладками"})," — автоматическое обновление при изменениях в других вкладках"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Singleton паттерн"})," — переиспользование ref для одинаковых ключей"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Типобезопасность"})," — полная поддержка TypeScript с дженериками"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Значения по умолчанию"})," — поддержка начальных значений и функций-фабрик"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Интеграция с DataStorage"})," — использует класс DataStorage для управления хранилищем"]}),`
`]}),`
`,e.jsx(n.h2,{id:"функция",children:"Функция"}),`
`,e.jsx(n.h3,{id:"usestorageref",children:e.jsx(n.code,{children:"useStorageRef"})}),`
`,e.jsx(n.p,{children:"Создаёт реактивную переменную, синхронизированную с localStorage."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — имя ключа в localStorage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | (() => T)"})," — значение по умолчанию или функция для его генерации (опционально)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cache?: number"})," — время кеширования в секундах (опционально)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Ref<T | undefined>"})," — реактивная переменная Vue, связанная с localStorage"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useStorageRef } from '@dxtmisha/functional'

// Простое использование
const theme = useStorageRef('app-theme')

// С значением по умолчанию
const language = useStorageRef('app-language', 'ru')

// С функцией по умолчанию
const userId = useStorageRef('user-id', () => Math.random().toString(36))

// С кешированием (600 секунд = 10 минут)
const cachedData = useStorageRef('cached-data', null, 600)
`})}),`
`,e.jsx(n.h2,{id:"основное-использование",children:"Основное использование"}),`
`,e.jsx(n.h3,{id:"базовая-синхронизация",children:"Базовая синхронизация"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useStorageRef } from '@dxtmisha/functional'

// Создание ref, синхронизированного с localStorage
const userTheme = useStorageRef('theme', 'light')

// При изменении ref - localStorage автоматически обновляется
userTheme.value = 'dark'
// localStorage: { 'ui-storage__theme': '{"value":"dark","age":1234567890}' }

// При перезагрузке страницы значение восстанавливается
console.log(userTheme.value) // 'dark'
`})}),`
`,e.jsx(n.h3,{id:"singleton-паттерн",children:"Singleton паттерн"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// При повторном вызове с тем же именем возвращается существующий ref
const theme1 = useStorageRef('app-theme', 'light')
const theme2 = useStorageRef('app-theme', 'dark')

console.log(theme1 === theme2) // true - тот же ref

theme1.value = 'blue'
console.log(theme2.value) // 'blue' - оба указывают на один ref
`})}),`
`,e.jsx(n.h2,{id:"использование-в-компонентах",children:"Использование в компонентах"}),`
`,e.jsx(n.h3,{id:"настройки-пользователя",children:"Настройки пользователя"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useStorageRef } from '@dxtmisha/functional'

export default {
  setup() {
    const theme = useStorageRef('user-theme', 'light')
    const fontSize = useStorageRef('font-size', 16)
    const notifications = useStorageRef('notifications', true)

    return {
      theme,
      fontSize,
      notifications
    }
  }
}

// Template:
// <div>
//   <select v-model="theme">
//     <option value="light">Светлая</option>
//     <option value="dark">Тёмная</option>
//   </select>
//   <input v-model.number="fontSize" type="number" />
//   <input v-model="notifications" type="checkbox" />
// </div>
`})}),`
`,e.jsx(n.h3,{id:"кеширование-данных-api",children:"Кеширование данных API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useStorageRef } from '@dxtmisha/functional'

export default {
  setup() {
    // Кеш на 10 минут (600 секунд)
    const userData = useStorageRef('user-data', null, 600)

    const loadUserData = async () => {
      if (userData.value) {
        console.log('Данные из кеша')
        return userData.value
      }

      console.log('Загрузка с сервера')
      const response = await fetch('/api/user')
      userData.value = await response.json()
      return userData.value
    }

    return { userData, loadUserData }
  }
}
`})}),`
`,e.jsx(n.h2,{id:"синхронизация-между-вкладками",children:"Синхронизация между вкладками"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useStorageRef } from '@dxtmisha/functional'

// В первой вкладке
const counter = useStorageRef('counter', 0)
counter.value = 5

// Во второй вкладке автоматически обновится
// counter.value === 5 (благодаря storage event)

// В третьей вкладке
const sameCounter = useStorageRef('counter', 0)
console.log(sameCounter.value) // 5

// Изменение в любой вкладке обновит все остальные
sameCounter.value = 10
// Все открытые вкладки получат counter.value === 10
`})}),`
`,e.jsx(n.h2,{id:"работа-с-типами-данных",children:"Работа с типами данных"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Числа
const count = useStorageRef<number>('count', 0)
count.value = 42

// Булевы значения
const isActive = useStorageRef<boolean>('active', false)
isActive.value = true

// Объекты
const settings = useStorageRef('settings', {
  theme: 'dark',
  language: 'ru',
  notifications: true
})
settings.value.theme = 'light'

// Массивы
const items = useStorageRef<string[]>('items', [])
items.value.push('новый элемент')
`})}),`
`,e.jsx(n.h2,{id:"примеры-использования",children:"Примеры использования"}),`
`,e.jsx(n.h3,{id:"сохранение-состояния-формы",children:"Сохранение состояния формы"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const formData = useStorageRef('contact-form', {
  name: '',
  email: '',
  message: ''
})

// При заполнении формы данные автоматически сохраняются
formData.value.name = 'Иван'
formData.value.email = 'ivan@example.com'

// При перезагрузке страницы данные восстанавливаются
`})}),`
`,e.jsx(n.h3,{id:"избранное-пользователя",children:"Избранное пользователя"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const favorites = useStorageRef<number[]>('favorites', [])

const addToFavorites = (id: number) => {
  if (!favorites.value.includes(id)) {
    favorites.value = [...favorites.value, id]
  }
}

const removeFromFavorites = (id: number) => {
  favorites.value = favorites.value.filter(fav => fav !== id)
}
`})}),`
`,e.jsx(n.h3,{id:"кеш-с-автообновлением",children:"Кеш с автообновлением"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Кеш на 5 минут
const newsData = useStorageRef('news', null, 300)

const fetchNews = async () => {
  // Если кеш валиден - возвращаем сохранённые данные
  if (newsData.value) return newsData.value

  // Иначе загружаем свежие данные
  const response = await fetch('/api/news')
  newsData.value = await response.json()
  return newsData.value
}

// Первый вызов - загружает с сервера
await fetchNews()

// Последующие вызовы в течение 5 минут - используют кеш
await fetchNews() // Из кеша

// Через 5+ минут - снова загрузит с сервера
`})})]})}function h(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{h as default};
