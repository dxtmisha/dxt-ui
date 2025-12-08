import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Zkkrlp1B.js";import{M as c}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function r(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/functional/ru/Classes/CacheStatic"}),`
`,n.jsx(e.h1,{id:"класс-cachestatic",children:"Класс CacheStatic"}),`
`,n.jsx(e.p,{children:"Статический класс-обёртка вокруг Cache для глобального кеширования во время выполнения кода. Предоставляет singleton экземпляр Cache, доступный из любого места приложения для обмена данными между компонентами и оптимизации производительности."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Глобальный singleton кеш"})," — единый общий экземпляр Cache для всего приложения"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Статический интерфейс"})," — доступ к кешу без создания экземпляров"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Обмен данными между компонентами"})," — обмен кешированными данными между разными частями приложения"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Оптимизация производительности"})," — сокращение избыточных вычислений между компонентами"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Простой API"})," — тот же интерфейс что у класса Cache, но доступный статически"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическое управление жизненным циклом"})," — экземпляр Cache создаётся автоматически"]}),`
`]}),`
`,n.jsx(e.h2,{id:"основное-использование",children:"Основное использование"}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Синхронно получает данные из глобального кеша или выполняет callback для генерации новых данных."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — уникальное имя/ключ кеша в глобальном кеше"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: () => T"})," — функция для выполнения при промахе кеша или инвалидации"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"comparison?: any[]"})," — массив значений для сравнения при инвалидации кеша (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"T"})," — кешированные данные или результат выполнения callback"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { CacheStatic } from '@dxtmisha/functional'

// Глобальное кеширование дорогих вычислений
const expensiveResult = CacheStatic.get('global-computation', () => {
  console.log('Выполнение дорогих вычислений...')
  // Имитация тяжёлых вычислений
  let sum = 0
  for (let i = 0; i < 1000000; i++) {
    sum += Math.random()
  }
  return { result: sum, timestamp: Date.now() }
})

// Доступно из любого места в приложении
const sameResult = CacheStatic.get('global-computation', () => {
  console.log('Это не выполнится')
  return { result: 0, timestamp: 0 }
})
// Возвращает кешированные данные без пересчёта

// Разные компоненты могут использовать кешированные данные
class ComponentA {
  getData() {
    return CacheStatic.get('shared-data', () => {
      console.log('ComponentA: Загрузка общих данных')
      return { source: 'ComponentA', data: [1, 2, 3] }
    })
  }
}

class ComponentB {
  getData() {
    return CacheStatic.get('shared-data', () => {
      console.log('ComponentB: Это не выполнится')
      return { source: 'ComponentB', data: [4, 5, 6] }
    })
  }
}

const compA = new ComponentA()
const compB = new ComponentB()

const dataA = compA.getData() // Выполняет callback
const dataB = compB.getData() // Возвращает кешированные данные из ComponentA
console.log(dataA === dataB) // true - тот же кешированный объект
`})}),`
`,n.jsx(e.h2,{id:"инвалидация-кеша",children:"Инвалидация кеша"}),`
`,n.jsx(e.p,{children:"Инвалидация глобального кеша работает так же, как у обычного класса Cache:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Глобальный кеш с зависимостями
let currentTheme = 'dark'
let currentLanguage = 'ru'

const getAppConfig = () => CacheStatic.get(
  'app-config',
  () => {
    console.log(\`Загрузка конфигурации: тема=\${currentTheme}, язык=\${currentLanguage}\`)
    return {
      theme: currentTheme,
      language: currentLanguage,
      features: getFeaturesByTheme(currentTheme),
      translations: getTranslationsByLanguage(currentLanguage)
    }
  },
  [currentTheme, currentLanguage] // Глобальный кеш инвалидируется при изменении этих значений
)

// Первый вызов
const config1 = getAppConfig() // Выполняет callback
console.log(config1.theme) // 'dark'

// Кешированный вызов
const config1Cached = getAppConfig() // Возвращает кешированные данные

// Изменение зависимости - глобальный кеш инвалидируется
currentTheme = 'light'
const config2 = getAppConfig() // Кеш инвалидирован, выполняет callback снова
console.log(config2.theme) // 'light'

function getFeaturesByTheme(theme) {
  return theme === 'dark' ? ['night-mode', 'blue-light-filter'] : ['day-mode']
}

function getTranslationsByLanguage(lang) {
  return lang === 'ru' ? { hello: 'Привет' } : { hello: 'Hello' }
}
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"глобальная-конфигурация",children:"Глобальная конфигурация"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class AppConfig {
  static getConfig() {
    return CacheStatic.get('app-config', () => ({
      apiUrl: process.env.API_URL || '/api',
      features: { darkMode: true, notifications: true },
      version: '1.0.0'
    }))
  }

  static isFeatureEnabled(feature) {
    return this.getConfig().features[feature] || false
  }
}

// Использование в разных модулях
console.log(AppConfig.getConfig().version) // Загружает конфигурацию
console.log(AppConfig.isFeatureEnabled('darkMode')) // Использует кешированную
`})}),`
`,n.jsx(e.h3,{id:"обмен-данными-между-компонентами",children:"Обмен данными между компонентами"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class UserSession {
  static getCurrentUser() {
    return CacheStatic.get('current-user', () => ({
      id: 1,
      name: 'Иван Иванов',
      role: 'admin',
      permissions: ['read', 'write']
    }))
  }

  static hasPermission(permission) {
    const user = this.getCurrentUser()
    return user?.permissions.includes(permission) || false
  }
}

// Использование
console.log(UserSession.getCurrentUser()) // Загружает пользователя
console.log(UserSession.hasPermission('write')) // Использует кешированного
`})}),`
`,n.jsx(e.h3,{id:"кеш-с-инвалидацией",children:"Кеш с инвалидацией"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`let currentTheme = 'dark'
let language = 'ru'

function getThemeConfig() {
  return CacheStatic.get(
    'theme-config',
    () => ({
      theme: currentTheme,
      colors: currentTheme === 'dark' ? ['#000', '#333'] : ['#fff', '#ccc'],
      language
    }),
    [currentTheme, language] // Инвалидация при изменении
  )
}

console.log(getThemeConfig()) // Первый вызов
currentTheme = 'light' // Изменение зависимости
console.log(getThemeConfig()) // Кеш инвалидирован, пересчет
`})}),`
`,n.jsx(e.p,{children:"Класс CacheStatic предоставляет простой способ глобального кеширования данных в приложении, позволяя компонентам эффективно обмениваться вычисленными значениями и конфигурациями."})]})}function d(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{d as default};
