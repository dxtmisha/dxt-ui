import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-C8vOrmRQ.js";import{M as r}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function s(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/functional/ru/Composables/useCookieRef"}),`
`,e.jsx(n.h1,{id:"композабл-usecookieref",children:"Композабл useCookieRef"}),`
`,e.jsx(n.p,{children:"Композабл для создания реактивной переменной, синхронизированной с cookies браузера. Автоматически управляет чтением и записью значений в cookies с поддержкой синхронизации между вкладками через Broadcast Channel API, настройками срока действия и singleton паттерна для эффективного переиспользования."}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Двусторонняя синхронизация"})," — автоматическая синхронизация между ref и cookies"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Синхронизация между вкладками"})," — изменения в одной вкладке мгновенно отражаются во всех остальных через Broadcast Channel"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматическое сохранение"})," — изменения ref автоматически сохраняются в cookies"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Настройка срока действия"})," — поддержка expires, max-age и других опций cookies"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Singleton паттерн"})," — переиспользование ref для одинаковых имён cookies"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Типобезопасность"})," — полная поддержка TypeScript с дженериками"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Значения по умолчанию"})," — поддержка начальных значений и функций-фабрик"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Интеграция с Cookie"})," — использует класс Cookie для управления cookies"]}),`
`]}),`
`,e.jsx(n.h2,{id:"функция",children:"Функция"}),`
`,e.jsx(n.h3,{id:"usecookieref",children:e.jsx(n.code,{children:"useCookieRef"})}),`
`,e.jsx(n.p,{children:"Создаёт реактивную переменную, синхронизированную с cookies браузера."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — имя cookie"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | string | (() => (T | string))"})," — значение по умолчанию или функция для его генерации (опционально)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: CookieOptions"})," — дополнительные параметры cookie (опционально)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Ref<T | string | undefined>"})," — реактивная переменная Vue, связанная с cookie"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"CookieOptions:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"expires?: number | Date"})," — дата истечения срока действия"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: string"})," — путь для cookie (по умолчанию '/')"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"domain?: string"})," — домен для cookie"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"secure?: boolean"})," — использовать только HTTPS"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sameSite?: 'Strict' | 'Lax' | 'None'"})," — политика SameSite"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useCookieRef } from '@dxtmisha/functional'

// Простое использование
const userToken = useCookieRef('token')

// С значением по умолчанию
const theme = useCookieRef('theme', 'light')

// С опциями (срок действия 7 дней)
const rememberMe = useCookieRef('remember', true, {
  expires: 7,
  path: '/',
  sameSite: 'Lax'
})
`})}),`
`,e.jsx(n.h2,{id:"основное-использование",children:"Основное использование"}),`
`,e.jsx(n.h3,{id:"базовая-синхронизация",children:"Базовая синхронизация"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useCookieRef } from '@dxtmisha/functional'

// Создание ref, синхронизированного с cookie
const userTheme = useCookieRef('theme', 'light')

// При изменении ref - cookie автоматически обновляется
userTheme.value = 'dark'
// document.cookie содержит: 'theme=dark'

// При перезагрузке страницы значение восстанавливается
console.log(userTheme.value) // 'dark'
`})}),`
`,e.jsx(n.h3,{id:"singleton-паттерн",children:"Singleton паттерн"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// При повторном вызове с тем же именем возвращается существующий ref
const token1 = useCookieRef('auth-token', '')
const token2 = useCookieRef('auth-token', '')

console.log(token1 === token2) // true - тот же ref

token1.value = 'abc123'
console.log(token2.value) // 'abc123' - оба указывают на один ref
`})}),`
`,e.jsx(n.h3,{id:"синхронизация-между-вкладками",children:"Синхронизация между вкладками"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useCookieRef } from '@dxtmisha/functional'

// В первой вкладке
const userState = useCookieRef('user-online', 'active')
userState.value = 'away'

// Во второй вкладке автоматически обновляется мгновенно
// userState.value === 'away' (благодаря Broadcast Channel)

// В третьей вкладке
const sameState = useCookieRef('user-online', 'active')
console.log(sameState.value) // 'away'

// Изменение в любой вкладке синхронизируется со всеми остальными
`})}),`
`,e.jsx(n.h2,{id:"использование-в-компонентах",children:"Использование в компонентах"}),`
`,e.jsx(n.h3,{id:"настройки-пользователя",children:"Настройки пользователя"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useCookieRef } from '@dxtmisha/functional'

export default {
  setup() {
    const theme = useCookieRef('user-theme', 'light', {
      expires: 365 // 1 год
    })

    const language = useCookieRef('user-language', 'ru', {
      expires: 365
    })

    const fontSize = useCookieRef('font-size', 16, {
      expires: 30 // 30 дней
    })

    return {
      theme,
      language,
      fontSize
    }
  }
}

// Template:
// <div>
//   <select v-model="theme">
//     <option value="light">Светлая</option>
//     <option value="dark">Тёмная</option>
//   </select>
//   <select v-model="language">
//     <option value="ru">Русский</option>
//     <option value="en">English</option>
//   </select>
// </div>
`})}),`
`,e.jsx(n.h3,{id:"авторизация-с-запомнить-меня",children:'Авторизация с "Запомнить меня"'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useCookieRef } from '@dxtmisha/functional'

export default {
  setup() {
    const authToken = useCookieRef('auth-token', '', {
      expires: 7, // 7 дней
      secure: true,
      sameSite: 'Strict'
    })

    const rememberMe = useCookieRef('remember-me', false)

    const login = (token) => {
      const expires = rememberMe.value ? 30 : 1 // 30 дней или 1 день
      authToken.value = token

      // Обновить опции cookie
      useCookieRef('auth-token', token, {
        expires,
        secure: true,
        sameSite: 'Strict'
      })
    }

    const logout = () => {
      authToken.value = ''
      rememberMe.value = false
    }

    return {
      authToken,
      rememberMe,
      login,
      logout
    }
  }
}
`})}),`
`,e.jsx(n.h2,{id:"настройки-cookie",children:"Настройки cookie"}),`
`,e.jsx(n.h3,{id:"срок-действия",children:"Срок действия"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Expires в днях
const token = useCookieRef('token', '', {
  expires: 7 // удалится через 7 дней
})

// Expires как Date
const session = useCookieRef('session', '', {
  expires: new Date('2025-12-31')
})

// Без expires (сессионная cookie, удаляется при закрытии браузера)
const tempData = useCookieRef('temp', '')
`})}),`
`,e.jsx(n.h3,{id:"безопасность",children:"Безопасность"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// HTTPS only
const secureToken = useCookieRef('secure-token', '', {
  secure: true,
  sameSite: 'Strict'
})

// Cross-site запросы
const apiToken = useCookieRef('api-token', '', {
  secure: true,
  sameSite: 'None' // требуется secure: true
})
`})}),`
`,e.jsx(n.h3,{id:"путь-и-домен",children:"Путь и домен"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Для конкретного пути
const adminPrefs = useCookieRef('admin-prefs', {}, {
  path: '/admin'
})

// Для поддомена
const sharedData = useCookieRef('shared', '', {
  domain: '.example.com' // доступно для всех поддоменов
})
`})}),`
`,e.jsx(n.h2,{id:"работа-с-типами-данных",children:"Работа с типами данных"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Строки
const username = useCookieRef<string>('username', '')
username.value = 'Иван'

// Числа (автоматическая сериализация)
const count = useCookieRef<number>('count', 0)
count.value = 42

// Булевы значения
const accepted = useCookieRef<boolean>('accepted', false)
accepted.value = true

// Объекты (JSON сериализация)
const userPrefs = useCookieRef('prefs', {
  theme: 'dark',
  notifications: true
})
userPrefs.value = { theme: 'light', notifications: false }
`})}),`
`,e.jsx(n.h2,{id:"интеграция-с-классом-cookie",children:"Интеграция с классом Cookie"}),`
`,e.jsxs(n.p,{children:["Композабл использует класс ",e.jsx(n.code,{children:"Cookie"})," для управления cookies:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Cookie } from '@dxtmisha/functional'

// Прямое использование класса
const cookie = new Cookie('theme')
cookie.set('dark', { expires: 30 })
console.log(cookie.get()) // 'dark'

// useCookieRef автоматически синхронизируется
const themeRef = useCookieRef('theme')
console.log(themeRef.value) // 'dark'

// Изменения через Cookie отражаются в ref (через Broadcast Channel)
cookie.set('light')
// themeRef.value автоматически обновится во всех вкладках
`})}),`
`,e.jsx(n.h2,{id:"примеры-использования",children:"Примеры использования"}),`
`,e.jsx(n.h3,{id:"согласие-на-cookies-gdpr",children:"Согласие на cookies (GDPR)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const cookieConsent = useCookieRef('cookie-consent', false, {
  expires: 365,
  sameSite: 'Lax'
})

const acceptCookies = () => {
  cookieConsent.value = true
}

// В шаблоне:
// <div v-if="!cookieConsent" class="cookie-banner">
//   <p>Мы используем cookies...</p>
//   <button @click="acceptCookies">Принять</button>
// </div>
`})}),`
`,e.jsx(n.h3,{id:"корзина-покупок",children:"Корзина покупок"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const cart = useCookieRef<CartItem[]>('shopping-cart', [], {
  expires: 7
})

const addToCart = (item) => {
  cart.value = [...cart.value, item]
}

const removeFromCart = (itemId) => {
  cart.value = cart.value.filter(item => item.id !== itemId)
}

// Корзина синхронизируется между вкладками автоматически
`})}),`
`,e.jsx(n.h3,{id:"отслеживание-последних-просмотров",children:"Отслеживание последних просмотров"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const recentlyViewed = useCookieRef<number[]>('recently-viewed', [], {
  expires: 30
})

const addToRecent = (productId) => {
  const recent = [productId, ...recentlyViewed.value.filter(id => id !== productId)]
  recentlyViewed.value = recent.slice(0, 10) // Храним последние 10
}
`})}),`
`,e.jsx(n.h2,{id:"преимущества-синхронизации-через-broadcast-channel",children:"Преимущества синхронизации через Broadcast Channel"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"В отличие от обычного ref с cookie:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"✅ Мгновенная синхронизация между вкладками (не требуется перезагрузка)"}),`
`,e.jsx(n.li,{children:"✅ Реальное время обновления (без задержек)"}),`
`,e.jsx(n.li,{children:"✅ Эффективная передача данных (не через localStorage)"}),`
`,e.jsx(n.li,{children:"✅ Изоляция сессий браузера"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Механизм работы:"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Изменение в одной вкладке → сохраняется в cookie"}),`
`,e.jsxs(n.li,{children:["Через Broadcast Channel (",e.jsx(n.code,{children:"__cookie:${name}"}),") отправляется сообщение"]}),`
`,e.jsx(n.li,{children:"Все остальные вкладки получают обновление мгновенно"}),`
`,e.jsx(n.li,{children:"ref во всех вкладках обновляется автоматически"}),`
`]})]})}function u(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{u as default};
