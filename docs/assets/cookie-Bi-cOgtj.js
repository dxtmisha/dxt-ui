import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-DB_maGql.js";import{M as t}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/functional/ru/Classes/Cookie"}),`
`,e.jsx(n.h1,{id:"класс-cookie",children:"Класс Cookie"}),`
`,e.jsx(n.p,{children:"Класс для работы с браузерными cookie с автоматической сериализацией, singleton паттерном и интеграцией с CookieBlock для соблюдения приватности. Предоставляет типобезопасные операции с cookie с настраиваемыми опциями как max-age, SameSite и пользовательские атрибуты."}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Типобезопасное управление cookie"})," — полная поддержка TypeScript с дженериками для данных cookie"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматическая сериализация"})," — обрабатывает JSON сериализацию/десериализацию сложных данных"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Singleton паттерн"})," — переиспользует экземпляры для одинаковых имён cookie"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Соблюдение приватности"})," — интегрируется с CookieBlock для учёта пользовательских настроек cookie"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Настраиваемые опции"})," — поддерживает max-age, SameSite и пользовательские атрибуты cookie"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поддержка функций как значений"})," — принимает функции как значения для динамической генерации cookie"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Совместимость с браузерами"})," — безопасное использование с серверным рендерингом"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматическая инициализация"})," — читает существующие cookie при загрузке класса"]}),`
`]}),`
`,e.jsx(n.h2,{id:"конструктор",children:"Конструктор"}),`
`,e.jsx(n.h3,{id:"constructor",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Создаёт экземпляр Cookie для указанного имени cookie. Использует singleton паттерн."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — имя cookie"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Cookie } from '@dxtmisha/functional'

// Создать экземпляры cookie
const userTheme = new Cookie('user-theme')
const sessionToken = new Cookie('session-token')

// Поведение singleton
const sameInstance = new Cookie('user-theme')
console.log(userTheme === sameInstance) // true
`})}),`
`,e.jsx(n.h2,{id:"операции-с-данными",children:"Операции с данными"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsx(n.p,{children:"Получает значение cookie с опциональным значением по умолчанию и опциями cookie."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | string | (() => (T | string))"})," — значение по умолчанию или функция, если cookie не существует (опционально)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: CookieOptions"})," — опции cookie для установки значения по умолчанию (опционально)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"T | string | undefined"})," — значение cookie, значение по умолчанию или undefined"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const themeCookie = new Cookie('theme')

// Получить существующий cookie
const currentTheme = themeCookie.get()
console.log(currentTheme) // undefined если не установлен, или сохранённое значение

// Получить со значением по умолчанию
const theme = themeCookie.get('light')
console.log(theme) // 'light' если cookie не существует, устанавливает и возвращает значение по умолчанию

// Получить с функцией по умолчанию
const settings = new Cookie('settings')
const config = settings.get(() => ({
  theme: 'dark',
  language: 'ru',
  notifications: true
}))

// Получить с опциями для установки по умолчанию
const preferences = new Cookie('preferences')
const prefs = preferences.get(
  { sidebar: true, tooltips: false },
  { age: 30 * 24 * 60 * 60 } // 30 дней
)
`})}),`
`,e.jsx(n.h3,{id:"set",children:e.jsx(n.code,{children:"set"})}),`
`,e.jsx(n.p,{children:"Обновляет данные cookie с опциональной конфигурацией."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: T | string | (() => (T | string))"})," — значение для сохранения или функция, возвращающая значение (опционально)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: CookieOptions"})," — опции конфигурации cookie (опционально)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const userCookie = new Cookie('user-data')

// Установить простое значение
userCookie.set('ivan_petrov')

// Установить объект (автоматически сериализуется)
userCookie.set({
  id: 1,
  name: 'Иван Петров',
  preferences: { theme: 'dark' }
})

// Установить с функцией
userCookie.set(() => ({
  sessionId: Math.random().toString(36),
  timestamp: Date.now()
}))

// Установить с опциями
userCookie.set('important-data', {
  age: 365 * 24 * 60 * 60, // 1 год в секундах
  sameSite: 'strict',
  arguments: ['Secure', 'HttpOnly']
})
`})}),`
`,e.jsx(n.h3,{id:"remove",children:e.jsx(n.code,{children:"remove"})}),`
`,e.jsx(n.p,{children:"Удаляет cookie, устанавливая пустое значение."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`userCookie.remove()
// Эквивалентно: userCookie.set('')
`})}),`
`,e.jsx(n.h2,{id:"опции-cookie",children:"Опции Cookie"}),`
`,e.jsxs(n.h3,{id:"интерфейс-cookieoptions",children:["Интерфейс ",e.jsx(n.code,{children:"CookieOptions"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface CookieOptions {
  /** Cookie max-age в секундах (по умолчанию: 7 дней) */
  age?: number

  /** Атрибут SameSite: 'strict' | 'lax' (по умолчанию: 'strict') */
  sameSite?: 'strict' | 'lax'

  /** Дополнительные атрибуты cookie */
  arguments?: string[]
}
`})}),`
`,e.jsx(n.h3,{id:"примеры-опций",children:"Примеры опций"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const secureCookie = new Cookie('secure-data')

// Базовые опции
secureCookie.set('sensitive-data', {
  age: 60 * 60, // 1 час
  sameSite: 'strict'
})

// Продвинутые опции с пользовательскими атрибутами
secureCookie.set('auth-token', {
  age: 24 * 60 * 60, // 24 часа
  sameSite: 'lax',
  arguments: ['Secure', 'HttpOnly', 'Path=/api']
})

// Долгосрочное хранение
const rememberMeCookie = new Cookie('remember-me')
rememberMeCookie.set(true, {
  age: 365 * 24 * 60 * 60 // 1 год
})
`})}),`
`,e.jsx(n.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,e.jsx(n.h3,{id:"аутентификация-пользователя",children:"Аутентификация пользователя"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`class AuthManager {
  constructor() {
    this.tokenCookie = new Cookie('auth-token')
    this.userCookie = new Cookie('user-data')
  }

  login(credentials) {
    const authResponse = {
      token: 'jwt-token-here',
      user: { id: 1, name: 'Иван Петров', role: 'admin' },
      expiresIn: 24 * 60 * 60 // 24 часа
    }

    this.tokenCookie.set(authResponse.token, {
      age: authResponse.expiresIn,
      sameSite: 'strict'
    })

    this.userCookie.set(authResponse.user, {
      age: authResponse.expiresIn
    })

    return authResponse
  }

  getCurrentUser() {
    return this.userCookie.get()
  }

  isAuthenticated() {
    return !!(this.tokenCookie.get() && this.userCookie.get())
  }

  logout() {
    this.tokenCookie.remove()
    this.userCookie.remove()
  }
}

// Использование
const auth = new AuthManager()
auth.login({ username: 'ivan', password: 'secret' })
console.log('Аутентифицирован:', auth.isAuthenticated())
`})}),`
`,e.jsx(n.h3,{id:"корзина-покупок",children:"Корзина покупок"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`class ShoppingCart {
  constructor() {
    this.cartCookie = new Cookie('shopping-cart')
  }

  getItems() {
    return this.cartCookie.get([])
  }

  addItem(product, quantity = 1) {
    const items = this.getItems()
    const existingIndex = items.findIndex(item => item.id === product.id)

    if (existingIndex >= 0) {
      items[existingIndex].quantity += quantity
    } else {
      items.push({ ...product, quantity })
    }

    this.cartCookie.set(items, { age: 30 * 24 * 60 * 60 }) // 30 дней
    return items
  }

  getTotalPrice() {
    return this.getItems().reduce((total, item) =>
      total + (item.price * item.quantity), 0
    )
  }

  clear() {
    this.cartCookie.remove()
  }
}

// Использование
const cart = new ShoppingCart()
cart.addItem({ id: 1, name: 'Ноутбук', price: 79999.99 })
console.log('Общая цена:', cart.getTotalPrice())
`})}),`
`,e.jsx(n.h3,{id:"настройки-пользователя",children:"Настройки пользователя"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const userSettings = new Cookie('user-settings')

// Получение настроек с значениями по умолчанию
const settings = userSettings.get({
  theme: 'light',
  language: 'ru',
  notifications: true
})

// Обновление настроек
function updateTheme(newTheme) {
  const current = userSettings.get()
  userSettings.set({ ...current, theme: newTheme })
}

updateTheme('dark')
console.log('Тема:', userSettings.get().theme)
`})}),`
`,e.jsx(n.p,{children:"Класс Cookie предоставляет мощный, соответствующий приватности способ управления браузерными cookie с автоматической сериализацией и гибкими опциями конфигурации, делая его идеальным для современных веб-приложений."})]})}function u(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{u as default};
